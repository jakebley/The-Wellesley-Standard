---
name: 1881 — The Wellesley Standard
description: A magazine-style media and events site for Wellesley, Massachusetts.
colors:
  ink: "#0a0a0a"
  paper: "#fafaf8"
  accent: "#b01f24"
  accent-ink: "#7d1519"
  ink-muted: "#0a0a0a99"
  hairline: "#0a0a0a1f"
typography:
  display:
    fontFamily: "Fraunces, 'Iowan Old Style', serif"
    fontWeight: 600
    letterSpacing: "-0.02em"
    lineHeight: 1.1
  body:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "clamp(1rem, 0.97rem + 0.2vw, 1.125rem)"
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8rem)"
    letterSpacing: "0.08em"
spacing:
  1: "0.5rem"
  2: "1rem"
  3: "1.5rem"
  4: "2.5rem"
  5: "4rem"
  6: "6.5rem"
components:
  ics-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.4rem 0.9rem"
  ics-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-link-active:
    textColor: "{colors.ink}"
---

# Design System: 1881 — The Wellesley Standard

## 1. Overview

**Creative North Star: "The Est. 1881 Seal"**

1881 is a small city magazine for one town, not a real estate blog and not a civic newsletter. The system is built around a single formal device — the circular "Est. 1881" seal — and everything else stays quiet around it: a near-black ink, an off-white paper ground, and one red used the way a magazine masthead uses red — for kickers, dates, and the seal's inner ring, never as decoration for its own sake.

This system explicitly rejects the look of **The Swellesley Report** (the town's existing blog): reverse-chronological feeds, ad-hoc layout, no visual hierarchy between a real story and a quick note. It also rejects real-estate-listing aesthetics — no price tags, no square-footage callouts, no agent-contact chrome anywhere near editorial content.

**Key Characteristics:**
- Editorial, magazine-page layout over feed/card-grid defaults
- One accent color, used sparingly and consistently (kickers, dates, CTA borders, the seal's inner ring)
- Self-hosted serif display (Fraunces) paired with a serif body (Source Serif 4) — a same-family display/body pairing distinguished by weight and italics rather than a serif/sans split, deliberately less "SaaS landing page" than a sans-label system alone would read
- Sponsor content is visually separated from editorial by a hairline rule and muted type, never blended in

## 2. Colors

A near-monochrome ground (ink on paper) with a single committed accent — Restrained strategy, not Full Palette. The accent's rarity is what makes it read as masthead red instead of decoration.

### Primary
- **Wellesley Red** (`#b01f24`): kickers/eyebrows, event dates, the seal's inner ring, link/CTA borders on hover. Used on well under 10% of any given screen — this is the one non-negotiable proportion in the system.

### Neutral
- **Ink** (`#0a0a0a`): primary text, headlines, borders, the seal's outer ring.
- **Paper** (`#fafaf8`): page background. A true near-white, not a warm cream — the brand's "warmth" comes from the serif body type and photography, not a tinted background.
- **Ink Muted** (`#0a0a0a` at 60% alpha): secondary text — captions, sponsor bylines, metadata. Never used for primary body copy.
- **Hairline** (`#0a0a0a` at 12% alpha): all dividers and card borders. There is exactly one border weight in the system (1px); nothing heavier.

### Named Rules
**The One Red Rule.** Wellesley Red never appears as a body-text color and never as a background fill larger than a button. It marks small, specific things: a date, a kicker, an active nav underline, a sponsor CTA border. The moment it starts filling space, it stops reading as masthead red and starts reading as decoration — don't let that happen.

## 3. Typography

**Display Font:** Fraunces (with Iowan Old Style, serif fallback)
**Body Font:** Source Serif 4 (with Georgia, serif fallback)
**Label/Utility Font:** Inter (with -apple-system, sans-serif fallback)

**Character:** A single editorial-serif voice for headlines and body, broken up by one workhorse sans (Inter) that never appears in a headline — it exists only for nav, kickers, captions, and metadata, so the reader always knows "this is structure" vs. "this is the story."

### Hierarchy
- **Display** (600–900 weight, `clamp(3rem, 2.4rem + 2.5vw, 5.5rem)`, 1.1 line-height): Home hero only.
- **Headline** (600 weight, `clamp(2.25rem, 1.9rem + 1.5vw, 3.25rem)`, 1.1 line-height): page H1s (article titles, section titles).
- **Title** (600 weight, `clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)`): card/list titles, H2s within a page.
- **Body** (400 weight, `clamp(1rem, 0.97rem + 0.2vw, 1.125rem)`, 1.6 line-height, max 75ch): article prose. Italic 600-weight Fraunces is reserved for House of the Week's one-line hook — a pull-quote register between title and body.
- **Label** (500–600 weight, `clamp(0.75rem, 0.72rem + 0.15vw, 0.8rem)`, 0.06–0.08em tracking, uppercase): kickers, nav, timestamps, sidebar labels.

### Named Rules
**The Two-Voice Rule.** Only two typefaces ever appear in body content: Fraunces (headlines, the italic hook) and Source Serif 4 (prose). Inter is structural only — nav, labels, metadata — and never carries a headline or a sentence of editorial copy.

## 4. Elevation

Flat by default — no shadows anywhere in the system. Depth and separation come from the hairline border (`#0a0a0a1f`) and from photography itself (full-bleed images with a dark gradient scrim for overlaid captions), not from elevation layers. The one exception is the sticky header, which sits above content via z-index, not shadow.

### Named Rules
**The No-Shadow Rule.** If a component needs visual separation, reach for a 1px hairline border or a gradient-scrim caption first. A box-shadow anywhere in this system is a bug, not a style choice.

## 5. Components

### Buttons (Add to Calendar)
- **Shape:** square corners, no radius (0). The seal is the only circular element in the system; everything else is rectilinear.
- **Primary:** transparent background, 1px ink border, ink text, `0.4rem 0.9rem` padding, Inter 600 weight.
- **Hover:** background fills to ink, text inverts to paper. `0.2s` ease-out-expo transition on `background-color`/`color` only (no transform).

### Navigation
- Inter 500 weight, small size, no background pill or box around links. Active/hover state is a 2px ink-to-red underline (`border-bottom`), never a background highlight.
- **Mobile (<42rem):** collapses to a hamburger toggle; the open panel is a full-width opaque paper dropdown below the header, single-column link stack. No slide-in drawer, no backdrop blur.

### Cards (pillar teasers, article list items)
- **Corner style:** square (0 radius), matching the buttons.
- **Background:** paper, with either a 1px hairline border (text-only cards) or a full-bleed image with a bottom gradient scrim (image-led cards). Never both a border and a shadow.
- **Internal padding:** `var(--space-3)` (1.5rem) for text cards; image cards are edge-to-edge with caption padding only.

### Seal (signature component)
The circular "Est. 1881" mark: a 2.5px ink outer ring and a 1.75px red inner ring, with circular-path Inter micro-type ("WELLESLEY · MASSACHUSETTS" / "· THE WELLESLEY STANDARD ·") tracing the rings and "EST." + "1881" set in Fraunces at the center. This is the only circular, only-decorative element permitted in the system — its rarity is what makes it feel like a mark rather than a UI affordance.

## 6. Do's and Don'ts

### Do:
- **Do** keep Wellesley Red to kickers, dates, active-nav underlines, the seal's inner ring, and button hover fills — nowhere else.
- **Do** use the hairline border (`#0a0a0a1f`, 1px) as the only separator/border weight in the system.
- **Do** keep sponsor content behind a hairline rule with muted (`ink-muted`) type, distinct from editorial body copy, per the approved House of the Week structure.
- **Do** ship real, specific photography for every image-led surface — a missing hero image is a bug, not restraint.

### Don't:
- **Don't** let the site read like a blog feed — no reverse-chronological "latest posts" list as a primary layout; pages are magazine sections with real hierarchy. This is the direct rejection of The Swellesley Report.
- **Don't** put price, square footage, or agent-contact information anywhere near House of the Week — that's what keeps it editorial instead of a listing.
- **Don't** add box-shadows, rounded corners, or gradient fills anywhere — the system is flat and rectilinear except for the seal itself.
- **Don't** introduce a second accent color. If something needs emphasis beyond ink/paper, reach for Fraunces italic or a size/weight change before reaching for color.
- **Don't** use a tiny uppercase tracked kicker above every single section as reflexive scaffolding — it's already a deliberate, named element here (Label type), so keep it purposeful rather than automatic.
