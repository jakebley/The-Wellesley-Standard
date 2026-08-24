# 1881 — Master Build Plan

This is the single source of truth for how 1881 ("The Wellesley Standard") gets built out from its current state to the full vision described in the original handoff document. It replaces informal planning from earlier sessions. `content.config.ts` and `README.md` already reference "Checkpoint 2" for the Sanity CMS migration — that numbering is preserved here.

## 1. Current State

1881 is currently a statically-built Astro site with six live page types — Home, House of the Week (index + detail), Streets of Wellesley (index + detail), Living Here (index + detail), Events (index, with `.ics` add-to-calendar generation), and About — reading content from local Astro content collections defined in `src/content.config.ts` and stored as markdown files under `src/content/`. There is no CMS: every entry is a markdown file edited by hand and committed to git. There is no Shop, despite it being a named content pillar in the original handoff document, and it is deliberately absent from the nav rather than shown as a "coming soon" placeholder. There is no automation — the "ops idea" of agents for events sourcing, home imagery sourcing, and SEO named in the handoff document has not been built. Hero and gallery images across House of the Week, Streets of Wellesley, and Living Here are remote Unsplash stock photography standing in for real, licensed photography (the schema stores them as plain URL strings specifically so they can be swapped later without a schema change). The site is built and pushed to GitHub but has not yet been deployed to a live public domain.

## 2. Stages of Development

### Checkpoint 0 — Current MVP
**Goal:** Prove the brand system, template structure, and content schemas end-to-end, and get the site publicly live.
**Ships:** The six page types described above, one or two real content entries per pillar, the base design system (palette, type scale, seal mark) implemented in code, and technical SEO basics already in place (per-page meta tags, sitemap, `robots.txt`).
**Exit criteria:** Site deployed to Vercel and reachable at the real domain over HTTPS (domain cutover from GoDaddy/Squarespace DNS, requiring Jake's explicit go-ahead given the downtime/email-routing risk), Google Search Console verified, Google Business Profile created. This checkpoint is functionally complete in code; deployment and domain cutover are the remaining items.

### Checkpoint 1 — Complete the Launch Build
**Goal:** Turn the proven MVP template into full coverage across every named content pillar, including the one pillar not yet built at all.
**Ships:** Additional House of the Week and Streets of Wellesley entries at real depth (House of the Week galleries filled out to the approved 5–8 image range, currently only 2), real licensed photography replacing Unsplash stock wherever it's been sourced, and the Shop pillar built for the first time — merch checkout live and added to the nav.
**Exit criteria:** Every nav item leads to a real, non-placeholder page; Shop fulfillment model is decided and a test purchase completes end-to-end; no stock photography remains on any page that has real photography available.

### Checkpoint 2 — Sanity CMS Migration
**Goal:** Move content ownership off hand-edited markdown files and git commits onto a CMS Jake (and eventually other editors) can use without a developer.
**Ships:** A Sanity project with schemas matching `content.config.ts` field-for-field, the Astro-Sanity integration replacing the local `glob` loader, and a one-time migration of existing markdown entries into Sanity documents.
**Exit criteria:** A content edit made in Sanity Studio appears on the live site after rebuild/redeploy, with no schema drift between Sanity and what the Astro templates expect.

### Checkpoint 3 — Automation
**Goal:** Replace fully manual content sourcing with the three agents named in the original handoff document, now that there's a CMS for them to write into.
**Ships:** The events sourcing agent, the home imagery sourcing agent, and the SEO/search-visibility agent (specified in detail in Section 5), plus the review workflow that sits between agent output and anything actually publishing.
**Exit criteria:** At least one full cycle of each agent has run, produced a human-reviewed draft, and been approved and published without a developer manually writing the content by hand.

### Checkpoint 4 — Monetization Expansion
**Goal:** Turn the monetization lines named in the handoff document from schema fields and design conventions into actual revenue.
**Ships:** Real estate and food & beverage advertising sold and placed, the "Presented by [sponsor]" tag on House of the Week formalized into a repeatable sales process, sponsored home content running as its own distinct placement (separate from the House of the Week sponsor tag), paid profile spots launched once the pricing/process question is resolved, and structured SEO (JSON-LD for LocalBusiness/Event/Article types) added in code.
**Exit criteria:** At least one paying advertiser or sponsor live in each of the named verticals; paid profile spots have a defined price and submission flow and at least one completed transaction.

### Checkpoint 5 — Ongoing Operations
**Goal:** Run 1881 as a standing local media operation rather than a one-time build.
**Ships:** Content production sustained by the Checkpoint 3 agents at a real cadence, merch assortment expanded (potentially tied to editorial content, per the handoff document's monetization notes), and the site's roadmap steered by the usage data described in Section 6 rather than by assumption.
**Exit criteria:** Not a fixed deliverable — this checkpoint is ongoing, governed by the review cadence in Section 6.

## 3. Target Features and Why

1. **Shop (merchandise)** — Checkpoint 1. Named in the handoff document as "a significant component, not an afterthought," and one of the six original content pillars alongside Living Here, House of the Week, Streets of Wellesley, Events, and About. It's currently the only named pillar with zero implementation. Open question, unresolved in every source document: the fulfillment model (print-on-demand vs. self-fulfilled inventory), which determines what checkout integration makes sense.

2. **Real photography pipeline** — Checkpoint 1 (initial manual sourcing) and Checkpoint 3 (agent-assisted, ongoing). DESIGN.md states plainly that "a missing hero image is a bug, not restraint" and that the site should "ship real, specific photography for every image-led surface." The current Unsplash placeholders satisfy the schema but not the brand standard.

3. **Sanity CMS migration** — Checkpoint 2. Already referenced directly in `content.config.ts` and `README.md`, so it isn't optional or speculative — it's a commitment the codebase has already made. It exists to let Jake publish House of the Week, Streets of Wellesley, Living Here, and Events entries without going through git and a developer, which is the whole point of separating content from code.

4. **Real estate and food & beverage advertising** — Checkpoint 4. Named explicitly in the handoff document's monetization section as the two advertising verticals (deliberately not general categories like local dentists). Distinct from the House of the Week sponsor tag below — this is broader ad placement inventory, not tied to a specific editorial feature.

5. **House of the Week sponsor tag ("Presented by...")** — partially built now (schema field and visual-separation styling already exist), sales process formalized at Checkpoint 4. This is where, per the handoff document, "real-estate ad revenue lives," and DESIGN.md is explicit that it must stay visually distinct from editorial content via a hairline rule and muted type — never blended in.

6. **Sponsored home content** — Checkpoint 4. The handoff document names this separately from the House of the Week sponsor tag: "separate, clearly-marked sponsor placements alongside (not inside) editorial home features." No page or schema for this exists yet; it needs its own placement, not a reuse of the sponsor-tag field.

7. **Paid profile spots** — Checkpoint 4. Described in the handoff document as "in-depth storytelling features on local people/businesses, paid for by the subject," with the note that "exact model still unresolved." That's still true today — pricing, submission process, and payment handling are all open questions with no answer in any source document.

8. **Structured SEO (JSON-LD schema)** — Checkpoint 4. PRODUCT.md defines success as "ranking #1 for the target local searches" ("what's going on in Wellesley this weekend," "what is good about Wellesley Massachusetts"). Sitemap and per-page meta tags are already live from Checkpoint 0; JSON-LD structured data for LocalBusiness/Event/Article types is the next concrete technical-SEO step named in this plan, not yet built.

**Open question not resolved by any source document:** whether any additional content pillars beyond the six named in the handoff document (Living Here, House of the Week, Streets of Wellesley, Events, Shop, About) are wanted. Nothing in PRODUCT.md, DESIGN.md, or the handoff document suggests one, so none is proposed here.

## 4. Automation Strategy

1881 is positioned in PRODUCT.md as an edited magazine, not a feed, and the anti-reference (The Swellesley Report) is explicitly called out as "ad-hoc" and "blog-like" — the opposite of what this site should read as. That framing has a direct consequence for automation: nothing should ever auto-publish. Every piece of agent-sourced content, whether it's a new event, a candidate photo, or an SEO-driven draft topic, needs a human editorial decision before it reaches a reader, the same way a magazine's wire-service copy still passes through an editor before it runs.

Triggers split by content type. Events sourcing and SEO/search-visibility checks are schedule-driven, because their underlying sources (town calendar, rec department, Search Console data) change on their own timeline regardless of what Jake is doing that day. Home imagery sourcing is more naturally on-demand, triggered when a new House of the Week or Streets of Wellesley entry is being drafted and needs a gallery, rather than running speculatively on a schedule.

How automation output lands in the codebase depends on which side of Checkpoint 2 it's running on. Before the Sanity migration, content lives in git, so agent output should land as a pull request against the relevant content collection — a new markdown file or a diff to an existing one — that Jake (or an editor) reviews and merges like any other code change. After the migration, Sanity's own draft/publish distinction becomes the approval gate: agents write draft documents directly into Sanity, and nothing goes live until a human opens the draft in Sanity Studio and hits publish. Either mechanism satisfies the same rule — an agent can produce a draft, but only a person can make it real.

## 5. Agents We Need to Build

This plan keeps the three agents from the handoff document's "ops idea" separate rather than merging them into one combined agent. Each has a different input source, a different output shape, a different cadence, and — most importantly — a different kind of judgment call at its human-approval step (an editor checking event accuracy is doing different work than an editor checking photo licensing, which is different again from someone reading a ranking report). Combining them into a single agent would couple those unrelated failure modes together: a town calendar being unreachable shouldn't block photo sourcing, and a slow SEO data pull shouldn't block a time-sensitive event from being reviewed. Keeping them independent lets each run on its own schedule and fail without affecting the others, while still sharing the same underlying rule from Section 4: everything lands as a draft, nothing self-publishes.

1. **Events Sourcing Agent**
   - **What it does:** Checks Wellesley's local event sources on a recurring basis and extracts new or updated events into structured entries.
   - **Inputs:** The town calendar, Recreation Department, Wellesley Free Library, and Chamber of Commerce — the same source types already represented in the current MVP's placeholder events (`sourceName` values already used: "Wellesley Recreation Department," "Wellesley Free Library," "Town of Wellesley").
   - **Output format:** Maps directly to the `events` schema in `content.config.ts` — `title`, `startDate`, `endDate` (optional), `location`, `description`, `sourceUrl` (optional), `sourceName` (optional).
   - **Cadence:** Scheduled, frequent enough to catch newly posted events before they're stale — a several-times-a-week check is more appropriate than monthly, given events pages need to stay current for the "what's going on this weekend" search intent named in PRODUCT.md.
   - **Human checkpoint:** An editor confirms date, time, and location accuracy and checks for duplicates against existing entries before anything is merged or published — event data sourced automatically is exactly the kind of thing that's easy to get subtly wrong (time zone, cancellations, recurring vs. one-off).

2. **Home Imagery Sourcing Agent**
   - **What it does:** Because real photography ultimately requires a photographer, a homeowner, or a sponsor to supply it, this agent's job is coordination and gap-tracking rather than generation: it flags which House of the Week and Streets of Wellesley entries are still running on stock placeholders, tracks submitted photo sets awaiting processing, and assembles approved images into the gallery format each schema expects.
   - **Inputs:** Existing content entries (to detect which still reference Unsplash URLs vs. real assets), and photography submitted by photographers, homeowners, or sponsors tied to a specific feature.
   - **Output format:** Gallery arrays matching the schemas already in `content.config.ts` — `{ image, alt }` objects for House of the Week's `gallery` field (0–8 images) and Streets of Wellesley's `photos` field (minimum 1). Note this is an open gap: the current schema has no field for photo credit or licensing terms, which real (non-stock) photography will need — that's a schema extension to make at Checkpoint 1, not something this plan invents a field for here.
   - **Cadence:** On-demand, triggered per new feature entry being drafted, plus a periodic sweep (monthly is reasonable) to surface which live entries still need real photography.
   - **Human checkpoint:** A person signs off on which specific images get used and confirms usage rights/licensing before publish — this is a judgment call the agent shouldn't make unsupervised, since a licensing mistake is a real legal exposure in a way a wrong event time isn't.

3. **SEO / Search Visibility Agent**
   - **What it does:** Tracks 1881's own ranking position on the target search terms named in PRODUCT.md, checks technical SEO health (sitemap validity, broken links, missing meta descriptions), and surfaces content gaps — topics people are searching for that 1881 doesn't yet have a page answering.
   - **Inputs:** Google Search Console data (once set up at Checkpoint 0), the site's own sitemap and rendered pages. This agent should not scrape or monitor other sites' content — PRODUCT.md's anti-reference to The Swellesley Report is about production quality and positioning, not a license to crawl a competitor.
   - **Output format:** Doesn't map to a single content schema the way the other two agents do. Its output is a periodic report (ranking movement, technical issues found) plus, where it identifies a genuine content gap, a suggested draft routed into the relevant pillar's schema (most likely `living-here`, since that's the general-coverage pillar) for an editor to actually write or approve.
   - **Cadence:** Weekly technical checks, monthly ranking report — matching the review cadence proposed in Section 7.
   - **Human checkpoint:** Jake reviews the ranking report and any suggested content topics before an editor writes toward them; any code-level suggestion (like a structured-data fix) goes through a normal PR review like any other code change, not an automatic commit.

## 6. Promotion Plan

Everything in Section 5 grows the site's own search ranking over time, but ranking is a lagging signal — it takes sustained publishing and backlinks before Search Console shows movement. Promotion is the more direct lever: getting the target audience named in PRODUCT.md (people considering a move to Wellesley, current residents, and the local advertisers/sponsor subjects) to the site now, rather than waiting on search algorithms alone. This is spend and effort to acquire readers, which is a distinct line from Checkpoint 4's monetization work (revenue collected from advertisers) — the two interact (a bigger audience makes the ad inventory worth more) but shouldn't be confused with each other.

No marketing budget, channel preference, or promotion owner is specified anywhere in PRODUCT.md, DESIGN.md, or the handoff document, so the channels below are proposed against the stated audience and brand positioning, not pulled from an existing decision — treat platform choice, spend levels, and who runs this as open questions for Jake to decide, not settled facts. Promotion activity, paid in particular, should wait until Checkpoint 1 is done: PRODUCT.md's whole premise is reading as "a clear step up in production quality" from The Swellesley Report, and paying to send visitors to pages still running on stock placeholder photography undercuts that positioning before it's earned.

### Organic

1. **Local search foundation** — already scoped elsewhere in this plan, listed here because it's the base of organic promotion: Google Business Profile and Search Console (Checkpoint 0), sitemap and per-page meta tags (Checkpoint 0, already live), JSON-LD structured data (Checkpoint 4). These make the site findable; they don't by themselves make it found.
2. **Publishing cadence as the core organic engine** — DESIGN.md names House of the Week and Streets of Wellesley as "the SEO and identity engine" specifically because of their recurring consistency, not any single feature's novelty. The most reliable organic promotion available to 1881 is simply keeping that cadence real once Checkpoint 3's agents make it sustainable — a stalled publishing schedule undermines every other channel below.
3. **Local citations and backlinks** — outreach to the Chamber of Commerce, town directories, and local press for listings/links back to the site. This is standard local-SEO practice that supports the same Search Console ranking goal named in PRODUCT.md, distinct from paid local ads below.
4. **Social distribution of existing content** — House of the Week and Streets of Wellesley are both built around photography, which is a natural fit for image-led social platforms (Instagram is the obvious candidate given the subject matter, though this plan doesn't commit to a specific platform). This would repurpose content already being produced for the site rather than requiring separate content creation, but needs a decision from Jake on ownership, platform, and posting cadence before it's real.
5. **Email capture and newsletter** — not named in any source document, proposed here as a standard retention channel for local media: capturing readers who land on the site once and giving them a reason to come back for the next House of the Week or Events update, rather than relying on them to remember to check back. Flagged as a future addition, not committed to a checkpoint yet.
6. **Cross-promotion with sponsors and advertisers** — once Checkpoint 4's advertisers and House of the Week sponsors are live, they have their own audiences with a direct incentive to share a feature they paid to be part of. This is promotion that follows naturally from the monetization work rather than requiring separate spend.

### Paid

1. **Search ads on the target queries** — the most directly grounded paid channel, since PRODUCT.md already names the exact search intent to win ("what's going on in Wellesley this weekend," "what is good about Wellesley Massachusetts"). Paid search on these terms is a way to appear in that result immediately, rather than waiting for organic ranking to catch up.
2. **Geo-targeted social ads** — paid promotion on the same platform(s) chosen for organic distribution above, targeted to Wellesley and immediately surrounding towns, given the audience PRODUCT.md defines is local and move-consideration-stage rather than a national audience.
3. **Local publication or newsletter placements** — a paid placement in an existing local newsletter or publication read by the same target audience. Not named in any source document; flagged as an option worth considering alongside the organic Chamber-of-Commerce outreach above rather than a committed line item.

Budget, specific platform selection, and who owns execution (Jake directly, a hired freelancer, or eventually folded into the Checkpoint 3 automation scope) are all open questions this plan doesn't resolve — they need Jake's input once Checkpoint 1 is closed and there's a finished site worth promoting.

## 7. Refinements Over Time

Several real decisions in this plan are deliberately left open because they can't be answered honestly until the site has real traffic and real usage to look at: which content pillars actually drive search traffic and engagement (House of the Week and Streets of Wellesley are treated as the "SEO and identity engine" per DESIGN.md, but that's a design intent, not yet a measured outcome), whether the paid-profile monetization model resolves into something people actually pay for, and how ranking on the target searches actually moves once Search Console has meaningful data. None of this should be guessed at now — it should be watched and acted on as it comes in.

A monthly content performance check (traffic and engagement by pillar, ranking movement on the target search terms, which agent-sourced drafts got approved vs. rejected, and which Section 6 promotion channels are actually driving visits) keeps the roadmap grounded in what's actually happening rather than what was assumed at planning time. A quarterly roadmap review is the right cadence for the bigger questions — whether to open the next checkpoint, whether a monetization line is worth the operational cost of running it, whether paid promotion spend is worth continuing at its current level, and whether anything in this plan needs to change because reality didn't match the assumption.
