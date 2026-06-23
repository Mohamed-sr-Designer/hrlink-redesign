# HR Link — Design System

Production specification for the HR Link redesign. All tokens are implemented as CSS custom
properties in `styles.css` (`:root`). Values are derived from the live HR Link brand system.

---

## 1. Color

### Brand — Daisy Bush (primary, purple)
| Token | Value | Use |
|-------|-------|-----|
| `--brand-50` | `#f4f3fe` | tint wash / hovers |
| `--brand-100` | `#ebeafd` | eyebrow & icon tiles |
| `--brand-200` | `#dad8fc` | borders on hover |
| `--brand-600` | `#5832cf` | primary hover |
| `--brand / --brand-700` | `#4a2aaf` | **primary** (buttons, links, headings accent) |
| `--brand-950` | `#241560` | deep gradient stop |

### Accent — Scooter (teal)
| Token | Value | Use |
|-------|-------|-----|
| `--accent-300` | `#64c0d7` | gradient / glow |
| `--accent-400` | `#38c2d7` | brand-mark dot, highlights |
| `--accent-600` | `#277593` | gradient text pairing |

### Neutrals & surfaces
`--ink-950 #1a1822` · `--ink-900 #28272a` (body text) · `--text-2 #56525f` · `--text-3 #837f8d` ·
`--bg #ffffff` · `--bg-subtle #faf9fc` · `--bg-neutral #f4f3f7` · `--border #ece9f2`.

### Status
`--success #1f9d63` / `--success-bg #e7f7ee` · `--warning #c9821a` / `--warning-bg #fdf2e0`.

### Gradients
- Brand: `linear-gradient(150deg, var(--brand-700), var(--brand-950))`
- Headline text: `linear-gradient(90deg, var(--brand-700), var(--accent-600))`
- Hero ambient: radial purple + teal washes on white.

---

## 2. Typography

- **Family:** `Baloo Bhaijaan 2` (Arabic + Latin), weights 400/500/600/700/800.
- **Fluid scale** (`clamp()`, responsive):

| Token | Min → Max |
|-------|-----------|
| `--text-h1` | 2.4 → 3.9 rem |
| `--text-h2` | 1.95 → 2.85 rem |
| `--text-h3` | 1.5 → 1.95 rem |
| `--text-h4` | 1.2 → 1.42 rem |
| `--text-lg` | 1.1 → 1.28 rem |
| `--text-md` | 1 → 1.07 rem (body) |
| `--text-sm` | 0.925 rem |
| `--text-xs` | 0.8 rem |

- Headings: weight 700, `line-height 1.18`, `letter-spacing -0.01em`, `text-wrap: balance`.
- Body: `line-height 1.7`. Direction: **RTL**.

---

## 3. Grid & Layout

- Container: `max-width 1200px`, fluid side padding `clamp(1.1rem, 4vw, 2.5rem)`, centered.
- Section vertical rhythm: `clamp(3.5rem, 7vw, 7rem)` (`.section`); tight variant `clamp(2.5rem,5vw,4.5rem)`.
- Primary content grids: 2-col (copy/media) at `≥1024px`, collapsing to 1-col below.
- Card grids: 3-col → 2-col (`≤1024px`) → 1-col (`≤620px`).
- Breakpoints: **1024px** (layout stack), **860px** (nav → burger, steps stack, timeline → vertical), **620px** (single column).

---

## 4. Spacing

4px base scale exposed as tokens: `--s-1 .25rem … --s-32 8rem`
(`1,2,3,4,5,6,8,10,12,16,20,24,32`). Component padding uses the scale; sections use fluid clamps.

---

## 5. Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--r-sm` | 10px | inputs, small chips |
| `--r-md` | 14px | icon tiles, nav links |
| `--r-lg` | 18px | list cards |
| `--r-xl` | 22px | capability cards |
| `--r-2xl` | 28px | feature cards / panels |
| `--r-3xl` | 34px | hero/partner/CTA shells |
| `--r-pill` | 999px | buttons, tabs, badges |

---

## 6. Shadows

Soft, purple-tinted (`rgba(36,21,96, …)`):
- `--shadow-xs` hairline · `--shadow-sm` resting cards · `--shadow-md` hover lift ·
  `--shadow-lg` floating showcase · `--shadow-brand` purple glow for primary buttons.
- Focus ring: `--ring = 0 0 0 4px rgba(74,42,175,.14)`.

---

## 7. Components

### Buttons (`.btn`)
- Variants: `--primary` (brand fill + glow), `--ghost`, `--outline`, `--light` (on dark).
- Sizes: default, `--sm`, `--lg`. Shape: pill. Hover: `translateY(-2px)` + shadow; arrow icon slides.
- Active: `translateY(1px) scale(.99)`. Always paired with a visible label.

### Inputs (`[data-slot=input]`)
- Height 44px, `--r-sm`, 1.5px `--border`; focus → brand border + `--ring`.
- Field group: label above, `--text-sm` helper below, error uses `--warning`/destructive border.
- (Spec'd for demo/lead/assessment forms; tokens shared with buttons.)

### Cards
- Base: white, 1px `--border`, `--r-xl`/`--r-2xl`, `--shadow-sm`.
- Hover: `translateY(-5px)`, `--shadow-md`, border → `--brand-200`; icon tile inverts to brand fill.
- Bento: mixed emphasis; feature cell uses brand gradient + teal glow.

### Navigation
- Sticky `header`; transparent at top, **glass** on scroll (`backdrop-filter: blur(16px)` + hairline).
- **Mega menu:** hover/focus-within dropdown, 2-col card grid, soft shadow.
- **Mobile drawer:** right-anchored (RTL) slide-in panel, scrim, burger ↔ X morph, persistent demo CTA.

### Modals / overlays
- Scrim `rgba(26,24,34,.4)` + `blur(4px)`; panel `--r-2xl`, `--shadow-lg`; `Esc` to close;
  enter/exit via opacity + transform. (Mobile drawer and mega menu follow this overlay system.)

### Accordion (`.acc`)
- One-open-at-a-time; animated `max-height`; `aria-expanded` synced.
- Chevron in a pill that rotates 180° and inverts to brand fill when open; open card gains brand border.

### Tabs (`.mtab` / `.mpanel`)
- Pill tab bar; active tab = brand fill + glow; `role="tablist/tab/tabpanel"`, `aria-selected`.
- Panel swap with `fadeUp` entrance. Used for product modules and the app audience switch.

---

## 8. Motion

- Easing: `--ease cubic-bezier(.22,.61,.36,1)`; durations `--t-fast .18s`, `--t .32s`.
- Scroll reveal: `IntersectionObserver` adds `.is-in` (opacity + translateY), staggered via `data-d`.
- KPI counters: count-up on enter (cubic ease-out).
- Decorative: hero float cards (`floaty`), client marquee (34s linear, pause on hover).
- Respects `prefers-reduced-motion: reduce` (animations/transitions neutralized).

---

## 9. Iconography

Single inline SVG `<symbol>` sprite (stroke 1.9–2.2, `currentColor`), reused via `<use>` —
consistent 24×24 grid, inherits brand color in tiles. Brand/government marks use the original assets.

---

## 10. Accessibility

- Landmarks, heading order, RTL-correct logical properties (`inline-start/end`, `pe/ps`).
- Visible `:focus-visible` ring on all interactive elements; `aria-expanded`/`aria-selected` states.
- Color contrast meets AA for text on white and on brand surfaces; motion-reduced fallback.
