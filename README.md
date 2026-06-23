# HR Link — Website Redesign

A complete, production-ready, high-end redesign of the **HR Link** marketing site
([hrlink.com.sa](https://hrlink.com.sa/ar)) — a modern enterprise HR SaaS platform for the Saudi market.

> **Scope:** UX · UI · Layout · Information Architecture · Visual Hierarchy · Interactions · Responsive Design.
> **Content lock:** every Arabic string (headlines, descriptions, CTAs, statistics, product names,
> testimonials, FAQ, navigation, footer) is reproduced **verbatim** from the live site. No copy was
> added, rewritten, shortened, expanded, or "improved". Only structure, layout, and presentation changed.

---

## Highlights

- **Stack:** static HTML + CSS + vanilla JS. No build step, no dependencies. RTL Arabic, `lang="ar"`.
- **Brand-true:** real HR Link logo (inline SVG), real brand colors (Daisy-Bush purple `#4a2aaf` +
  Scooter teal `#38c2d7`), real product screenshots, real client logos, and the brand typeface
  **Baloo Bhaijaan 2**.
- **Quality bar:** Apple / Stripe / Salla-level enterprise SaaS presentation — white canvas, generous
  spacing, soft shadows, smooth gradients, glass header, micro-interactions.

## Section architecture (IA)

| # | Section | Pattern | Notes |
|---|---------|---------|-------|
| 1 | Sticky header | glass nav + mega menu + persistent demo CTA + mobile drawer | |
| 2 | Hero | dashboard showcase + floating cards + trust indicators | |
| 3 | Client logos | infinite horizontal marquee | real client logos |
| 4 | آلية عملنا | 3-step connected flow | |
| 5 | Product modules | **interactive tabs** (replaces the old carousel) | 4 featured modules |
| 6 | Capabilities | responsive card grid (replaces carousel) | 9 modules |
| 7 | Saudi compliance | trust layout + government-integration diagram | Mudad · GOSI · Muqeem |
| 8 | Why HR Link | **bento grid** | 3 differentiators |
| 9 | Mobile app | floating iPhone mockup + self-service screen + store badges | iOS / Android |
| 10 | HR workflow | timeline journey | lifecycle of existing modules |
| 11 | HR Path partner | gradient feature block | |
| 12 | Compliance assessment | **animated KPI counters** + deliverables | existing figures only |
| 13 | Testimonials | mixed-size testimonial wall (replaces slider) | |
| 14 | FAQ | modern accordion | |
| 15 | Final CTA | high-conversion gradient CTA | |
| 16 | Footer | enterprise footer | contact, links, legal |

## Run locally

```bash
# any static server works; a tiny one is bundled:
node server.js 8788
# → http://localhost:8788
```

## File map

```
hrlink-redesign/
├── index.html          # full page, semantic + accessible, inline SVG icon sprite
├── styles.css          # complete design system + all component styles
├── script.js           # header, mega menu, tabs, accordion, counters, reveal, mobile drawer
├── server.js           # minimal static server (local preview)
├── DESIGN-SYSTEM.md     # full design-system specification
└── assets/             # real HR Link brand assets (logo, screenshots, client logos, mockups)
```

## Accessibility & UX

- Semantic landmarks (`header`/`main`/`footer`), `tablist`/`tab`/`tabpanel`, `aria-expanded` on
  accordion and menu, visible focus rings, reduced-motion support.
- Removed every carousel; replaced with scannable tabs/grids to reduce cognitive load.
- Demo CTA is always visible (desktop + mobile). Conversion paths repeated at hero, assessment, and final CTA.

See **[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)** for the complete token set and component specs.
