"""
neighborhood_chain.py

Generates a structured multi-section neighborhood guide from Places API data.
The LLM handles all curation — no blocklist.

Single Flash Lite call does four things:
  1. Selects places across four sections from up to 33 candidates
  2. Writes mls_insert — 1-2 sentences for weaving into MLS description
  3. Writes lifestyle_paragraph — ~400 char paragraph for the ZIP file
  4. Distributes selected places into everyday / outdoor / dining / wellness sections

Uses Gemini Flash Lite for cost efficiency (~$0.002/call).
Grounded strictly in Places API data — no invented details.
Fair Housing compliant — lifestyle and amenity focus only.
"""

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from pydantic import BaseModel, Field


class CategoryPlace(BaseModel):
    name: str = Field(
        description="Exact place name as it appeared in the candidate list. Never invent names."
    )
    description: str = Field(
        description=(
            "One short line (8-15 words) describing what makes this place worth mentioning. "
            "Lifestyle-forward, specific. No distances, no drive times, no superlatives."
        )
    )


class NeighborhoodOutput(BaseModel):
    selected_places: list[str] = Field(
        description=(
            "Names of every place chosen across all four sections. "
            "Used for debugging and future transparency features."
        )
    )
    mls_insert: str = Field(
        description=(
            "1-2 sentences describing nearby neighborhood highlights. "
            "Specific place names only. Lifestyle-forward, not a list. "
            "Suitable for weaving naturally into an MLS description. "
            "Empty string if no compelling places available."
        )
    )
    lifestyle_paragraph: str = Field(
        description=(
            "Prose paragraph capturing neighborhood character. "
            "Target ~400 characters / ~70 words — must fit MLS community field. "
            "Lifestyle-forward, conversational, specific to the actual places nearby. "
            "Not a bulleted list. Empty string if no compelling places available."
        )
    )
    everyday: list[CategoryPlace] = Field(
        default_factory=list,
        description=(
            "0-5 places for daily life: groceries, coffee, bakery, pharmacy, bank, farmers market. "
            "Leave empty if no quality options exist — do not fill with weak entries."
        ),
    )
    outdoor: list[CategoryPlace] = Field(
        default_factory=list,
        description=(
            "0-5 outdoor & recreation places: parks, trails, recreation areas. "
            "Leave empty if none nearby — do not fill with weak entries."
        ),
    )
    dining: list[CategoryPlace] = Field(
        default_factory=list,
        description=(
            "0-5 dining-out places: restaurants. Mix of casual, upscale, local favorites. "
            "Leave empty if no notable options — do not fill with weak entries."
        ),
    )
    wellness: list[CategoryPlace] = Field(
        default_factory=list,
        description=(
            "0-5 wellness & fitness places: yoga, pilates, notable gyms. "
            "Leave empty if no notable options — do not fill with generic chains."
        ),
    )


NEIGHBORHOOD_PROMPT = """You are a real estate copywriter who knows what makes a neighborhood feel premium and desirable.

PROPERTY ADDRESS:
{address}

NEARBY PLACES (from live Google Places data — name, category from Google's own classification, rating, review count, additional type tags):
{places_formatted}

The category in brackets is Google's classification of what the place actually is. Use this for accurate descriptions — e.g., "Italian Restaurant" is more specific than just "restaurant" and should inform the description language. Additional tags after "tags:" indicate sub-categories (e.g., "bakery, cafe" means it's both). Use the tags to write more precise descriptions.

Use the rating and review count to calibrate confidence:
  - 4.5+ rating with 500+ reviews → established local standard, can describe with confidence
  - 4.5+ rating with 50-500 reviews → solid local favorite
  - 4.0-4.5 rating with many reviews → reliable but unremarkable
  - Under 4.0 or very few reviews → mention sparingly, do not lead with
  - No rating data → describe by category only, no strength signals

YOUR TASK — produce a curated, multi-section neighborhood guide.

═══════════════════════════════════════════════════════════════
BRAND TIER — READ THIS BEFORE CURATING
═══════════════════════════════════════════════════════════════

Brand quality signals neighborhood quality to buyers. A Whole Foods on the corner sells houses. A Walmart does not.

PRIORITIZE (these brands signal premium neighborhoods):
- Grocery: Whole Foods, Trader Joe's, Fresh Market, Sprouts, Publix (in FL), Wegmans, Erewhon
- Coffee: local independents, Blue Bottle, Stumptown, Intelligentsia, La Colombe, Foxtail
- Fitness: Equinox, Lifetime, Orangetheory, F45, SoulCycle, Barry's, [solidcore], Pure Barre
- Restaurants: local independents with strong reputations, James Beard recognition, notable chef-driven concepts

DEPRIORITIZE (these signal value-tier neighborhoods and should be skipped unless nothing else exists):
- Grocery: Walmart, Aldi (in lower-tier contexts), Dollar General, Food Lion
- Coffee: Dunkin' (unless regionally beloved), generic chains
- Fitness: Planet Fitness, Crunch, generic 24-hour gyms
- Restaurants: fast food chains, generic chain casual dining

Rule of thumb: a beloved local institution with strong reviews always beats a chain. A premium chain beats a value chain. If only value-tier options exist for a category, leave that section empty rather than fill it with weak entries.

═══════════════════════════════════════════════════════════════
STEP 1 — DISTRIBUTE PLACES ACROSS FOUR SECTIONS
═══════════════════════════════════════════════════════════════

Bucket eligibility by category:

  EVERYDAY     → supermarket, coffee_shop, bakery, farmers_market, pharmacy, bank
  OUTDOOR      → park
  DINING       → restaurant
  WELLNESS     → yoga_studio, pilates_studio, gym

For each section, select 3-5 of the strongest places. Each place appears in only one section.
Quality over quantity — if a section has fewer than 3 worthwhile places, include only those. If it has none, leave it empty.

For each selected place, write a one-line description (8-15 words). Each description must reference something specific that distinguishes this place from a generic equivalent — its specialty, its signature item, its role in the community, its history, or its specific category identity. Use the rating and review count signals to calibrate language (highly-rated with many reviews = established local standard; newer with strong rating = emerging favorite).

Banned description patterns (these blur every place into the same template):
  - "[adjective] [place-type] offering [adjective] [noun] in a [adjective] setting"
  - "A neighborhood favorite known for..."
  - "High-quality [anything]"
  - "Expertly crafted [anything]"
  - "Dedicated studio offering..."

Good descriptions (specific, earn their words):
  - "Local roaster pulling some of the city's best espresso since 2014."
  - "Quiet 40-acre park with paved loop trail and shaded picnic pavilions."
  - "Chef-driven Italian, handmade pasta, the kind of place locals book early."
  - "Australian-style roaster known for technical brewing and seasonal single-origins."
  - "Hand-rolled bagels, a morning ritual that runs out by 11am on weekends."

Weak descriptions (interchangeable with any other place):
  - "Independent coffee shop serving high-quality roasts in a welcoming setting."
  - "Dedicated studio offering challenging classes for all levels."
  - "Premium fitness facility with modern equipment."

═══════════════════════════════════════════════════════════════
STEP 2 — WRITE mls_insert
═══════════════════════════════════════════════════════════════

1-2 sentences. Specific place names from your selection. Lifestyle-forward, not a list.
Suitable for weaving naturally into an MLS description.

Example: "Steps from Foxtail Coffee and a short walk to Lake Weston Park — the kind of neighborhood that sells itself once buyers arrive."

═══════════════════════════════════════════════════════════════
STEP 3 — WRITE lifestyle_paragraph
═══════════════════════════════════════════════════════════════

A prose paragraph capturing neighborhood character.

LENGTH TARGET: ~400 characters / ~70 words. Hard ceiling 500 characters.
This must fit the MLS community/neighborhood field on most MLS systems.

Reads like a local recommending the area to a friend. Specific, evocative, conversational.
Not a bulleted list. May reference places that also appear in the bulleted sections — that's expected.

The opening sentence is the highest-leverage moment. It must reference a specific place, a specific moment, or a specific factual detail — never an abstract characterization. Do NOT open with "Living here," "Life here," "Daily life," "This neighborhood," or any variant where the first noun is the neighborhood itself paired with an abstract verb ("centers on," "balances," "embraces," "is defined by"). Lead with a named place or a concrete sensory detail instead.

Good opening patterns:
  - "Foxtail Coffee opens at 6am, and most weekday mornings the line stretches past the door."
  - "Two blocks from Lake Weston Park and three from the Whole Foods on Edgewater."
  - "Sunday mornings start at the Hollywood Farmers Market — produce from regional growers, prepared food from rotating local vendors."

Bad opening patterns (banned):
  - "Living here means embracing the best of [neighborhood]'s [adjective] culture."
  - "[Neighborhood] balances [abstract noun] with [abstract noun]."
  - "Life in [neighborhood] centers on [abstract noun]."
  - "Daily routines are defined by..."

Example (398 chars): "Foxtail Coffee opens at 6am two blocks north — the kind of place regulars know by name. Lake Weston Park is a five-minute walk for morning runs or weekend afternoons, and Whole Foods anchors the daily routine. Westover Hills sits on Orlando's quiet west side, where tree-lined streets meet genuine neighborhood character."

═══════════════════════════════════════════════════════════════
STEP 4 — populate selected_places
═══════════════════════════════════════════════════════════════

List every place name you used across all four sections. Used for debugging.

═══════════════════════════════════════════════════════════════
HARD RULES
═══════════════════════════════════════════════════════════════

- Only mention places from the provided list. Never invent places or features.
- Do not describe demographics, schools, religious institutions, or who lives there.
- Do not use these words or phrases anywhere in output: "nestled", "charming", "vibrant", "trendy", "up-and-coming", "balanced", "balance of", "balanced pace", "centers on", "defined by", "embracing the best of", "embraces", "high-quality", "expertly", "expertly crafted", "refined", "welcoming", "dedicated", "variety of", "renowned", "expansive", "perfect for", "ideal", "iconic" (unless the place is genuinely iconic, e.g. "the iconic Pineapple Fountain"), "elevated" as filler, "curated" as filler.
- Do not open lifestyle_paragraph with "Living here", "Life here", "Daily life", or any variant of "[neighborhood] [verb-phrase] [abstract noun pair]". Open with a specific place, sensory moment, or factual detail about the neighborhood. The opening sentence must reference something specific to THIS neighborhood, not a template that could describe any neighborhood.
- Use proximity language ("nearby", "close by", "a short drive", "a few minutes away") — not specific drive times or distances in miles. Reserve "steps from" and "walking distance" for places that truly are within walking range; the candidate list spans up to 2.5 miles.
- If the list contains nothing worth highlighting, return empty strings for mls_insert and lifestyle_paragraph and empty lists for all four sections.
- LOW-DENSITY MARKETS: If fewer than 6 total places are available, do NOT pad with weak entries. Instead, write MORE depth per place (fully use the 8-15 word description budget for each), and write the lifestyle_paragraph around the named community itself (e.g., "Sun City West," "The Villages," "Briar Chapel") rather than implying commercial density that doesn't exist. Reference the planned/intentional character of the community when applicable. The strongest output from a thin candidate list is fewer-but-deeper, not more-but-thinner.
- Fair Housing: lifestyle and amenity focus only. No demographic implications."""


def build_neighborhood_chain(api_key: str):
    llm = ChatGoogleGenerativeAI(
        model="gemini-3.1-flash-lite",
        google_api_key=api_key,
        temperature=0.3,
    )

    structured_llm = llm.with_structured_output(NeighborhoodOutput)

    prompt = ChatPromptTemplate.from_messages([
        ("user", NEIGHBORHOOD_PROMPT),
    ])

    return prompt | structured_llm


async def generate_neighborhood_copy(
    address: str,
    places_formatted: str,
    api_key: str,
) -> NeighborhoodOutput | None:
    if not places_formatted.strip():
        return None

    try:
        chain = build_neighborhood_chain(api_key).with_config(run_name="Neighborhood Copy")
        result = await chain.ainvoke({
            "address": address,
            "places_formatted": places_formatted,
        })
        return result if isinstance(result, NeighborhoodOutput) else None
    except Exception as e:
        import logging
        logging.getLogger(__name__).info(f"Neighborhood chain failed: {e}")
        print(f"[NEIGHBORHOOD CHAIN ERROR] {e}")
        return None