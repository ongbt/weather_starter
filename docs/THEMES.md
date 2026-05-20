# Weather Starter — Theme Catalogue

This document records all proposed and implemented themes for the Weather Starter app, including design rationale and implementation notes.

---

## Implementation status

| #   | Name             | Key              | Status         |
| --- | ---------------- | ---------------- | -------------- |
| 1   | Apple            | `apple`          | ✅ Implemented |
| 2   | Midnight Ink     | `midnight-ink`   | ✅ Implemented |
| 3   | Sunbleached      | `sunbleached`    | ✅ Implemented |
| 4   | Tropical Night   | `tropical-night` | ✅ Implemented |
| 5   | Monsoon          | `monsoon`        | ✅ Implemented |
| 6   | Botanical Garden | —                | Proposed       |
| 7   | Marina Bay       | —                | Proposed       |
| 8   | Hawker Centre    | —                | Proposed       |
| 9   | Terminal         | —                | Proposed       |
| 10  | Pastel Forecast  | —                | Proposed       |
| 11  | Brutalist        | —                | Proposed       |
| 12  | Sunset Gradient  | —                | Proposed       |
| 13  | Cloudy Day       | —                | Proposed       |
| 14  | Neon City        | —                | Proposed       |
| 15  | Parchment        | —                | Proposed       |
| 16  | High Altitude    | —                | Proposed       |
| 17  | Void Deck        | —                | Proposed       |

---

## Implemented themes

### 1. Apple

> The default theme. Frosted-glass aesthetic inspired by Apple's Weather app.

- **Colors:** Blue-grey radial gradient background (`#6f8aa8` → `#3c5066`), white text at varying opacities
- **Typography:** System sans-serif, normal weight
- **Cards:** White semi-transparent glass (`rgba(255,255,255,0.08–0.20)`), soft drop shadows
- **Density:** Spacious, large hero numbers
- **Accents:** White-on-dark button (`rgba(255,255,255,0.90)` bg, `#0f172a` text)

---

### 2. Midnight Ink

> Deep near-black with violet accents for a focused, editorial dark mode.

- **Colors:** Near-black base (`#0a0a0f`), cool off-white text (`#f0f0f5`), violet accent (`#7c3aed`)
- **Typography:** System sans-serif, slightly cooler tone
- **Cards:** Stepped dark surfaces (`#17171c` → `#3a3a48`), no transparency
- **Density:** Compact, data-dense
- **Accents:** Violet primary button and selected/focus states

---

### 3. Sunbleached

> Warm parchment tones evoking sun-faded paper and tropical heat.

- **Colors:** Warm cream gradient (`#fef7ed` → `#fce0ad`), deep brown text (`#3a1e08`), amber accent (`#b45309`)
- **Typography:** System sans-serif, warm tone
- **Cards:** Warm-tinted surfaces (`#fef7ed` → `#f0cfa0`), amber borders
- **Density:** Spacious, editorial feel
- **Accents:** Amber-brown primary button, rust-toned borders

---

### 4. Tropical Night

> Deep navy and electric teal inspired by Singapore's skyline after dark.

- **Colors:** Near-black navy base (`#050d1a`) with teal radial glow, aqua-tinted white text (`#e8fffe`), electric teal accent (`#00d2c8`)
- **Typography:** System sans-serif, cool tone
- **Cards:** Dark navy surfaces (`#0a1628` → `#1e3d6e`), teal-tinted borders
- **Density:** Compact, information-dense
- **Accents:** Bright teal primary button with near-black text for contrast

---

## Proposed themes

### 5. Monsoon

> Moody blue-grey palette capturing the drama of heavy tropical rain.

- **Colors:** `slate-800` background, steel-blue accents, muted white text
- **Typography:** Slightly condensed sans (IBM Plex Sans), normal weight
- **Cards:** Flat with a subtle left-border accent stripe
- **Density:** Medium, clear section separation

---

### 6. Botanical Garden

> Lush greens and earthy tones inspired by Singapore's Gardens by the Bay.

- **Colors:** `emerald-900` base, `lime-400` accents, cream text
- **Typography:** Humanist sans (Source Sans), relaxed line height
- **Cards:** Rounded corners, leaf-vein texture overlay (CSS)
- **Density:** Airy, generous padding

---

### 7. Marina Bay

> Clean whites and blues reflecting the bay's modern waterfront architecture.

- **Colors:** `sky-50` background, `cobalt-600` accents, dark charcoal text
- **Typography:** Clean geometric (Geist or Inter), normal weight
- **Cards:** White with thin blue border, minimal shadow
- **Density:** Spacious, editorial feel

---

### 8. Hawker Centre

> Warm reds and yellows drawing from the vibrant colors of local food stalls.

- **Colors:** `red-700` primary, golden-yellow accents, off-white background
- **Typography:** Bold display font for headers, regular sans for body
- **Cards:** Solid color blocks, no transparency
- **Density:** High density, grid-heavy layout

---

### 9. Terminal

> Monochrome green-on-black terminal aesthetic for developer appeal.

- **Colors:** Black background, phosphor green (`#00FF41`) text and accents
- **Typography:** Monospace (JetBrains Mono or Fira Code) throughout
- **Cards:** Bordered boxes, no rounded corners, no shadows
- **Density:** Very compact, raw data feel

---

### 10. Pastel Forecast

> Soft pastels and rounded shapes for a friendly, approachable look.

- **Colors:** `lavender-100` background, `pink-300` and `sky-300` accents, dark text
- **Typography:** Rounded sans (Nunito or Quicksand), large font sizes
- **Cards:** Pill-shaped, pastel-tinted fills, no hard borders
- **Density:** Low density, lots of whitespace

---

### 11. Brutalist

> Bold, raw, high-contrast design with no decorative softening.

- **Colors:** Pure white background, pure black text, `yellow-400` highlights
- **Typography:** Heavy black-weight sans (Barlow Condensed Black), oversized
- **Cards:** Thick black borders, zero border-radius, hard box shadows
- **Density:** Medium, intentionally unpolished

---

### 12. Sunset Gradient

> Warm gradient washes from coral to violet mimicking tropical sunsets.

- **Colors:** `coral-500` → `violet-700` gradient background, white text
- **Typography:** Light-weight elegant sans (Outfit), generous spacing
- **Cards:** Semi-transparent white overlay on gradient
- **Density:** Spacious, hero-focused

---

### 13. Cloudy Day

> Neutral greys and whites for a calm, minimal overcast aesthetic.

- **Colors:** `zinc-100` background, `zinc-500` accents, `zinc-900` text
- **Typography:** System-ui stack, regular weight
- **Cards:** White with very subtle shadow, hairline borders
- **Density:** Medium, clean and uncluttered

---

### 14. Neon City

> Cyberpunk-inspired dark theme with vivid neon pink and cyan.

- **Colors:** `gray-950` base, neon-pink and cyan accents, white text
- **Typography:** Futuristic condensed sans (Rajdhani), uppercase labels
- **Cards:** Dark with neon glow borders, slight blur backdrop
- **Density:** Compact, information-dense

---

### 15. Parchment

> Warm sepia tones evoking old maps and colonial-era Singapore.

- **Colors:** Parchment (`#F5E6C8`) background, `brown-800` text, rust accents
- **Typography:** Serif body (Lora), sans headers (Libre Franklin)
- **Cards:** Aged paper texture, dashed borders
- **Density:** Relaxed, editorial layout

---

### 16. High Altitude

> Crisp whites and icy blues inspired by looking down from above the clouds.

- **Colors:** White base, `ice-blue-200` accents, deep `blue-900` text
- **Typography:** Thin-weight geometric sans (Raleway Light), wide tracking
- **Cards:** Frosted glass with cool-tinted blur
- **Density:** Airy, minimal chrome

---

### 17. Void Deck

> Muted concrete tones referencing Singapore's iconic HDB void decks.

- **Colors:** `stone-200` background, `stone-600` accents, near-black text
- **Typography:** Utilitarian sans (DM Sans), medium weight
- **Cards:** Flat, no shadow, subtle stone-tinted fill
- **Density:** High density, functional over decorative

---

## Design system notes

All themes share the same CSS custom property contract defined in `frontend/src/theme.tsx`. Each theme must supply values for:

- **Surfaces** — `--surface-04` through `--surface-20` (background layers, cards)
- **Sidebar/overlay** — `--sidebar-bg`, `--overlay-bg`, `--overlay-heavy`
- **Text scale** — `--text-placeholder` through `--text-primary` (9 opacity steps)
- **Borders** — `--border-subtle` through `--border-selected` (5 levels)
- **Interactive** — `--focus-ring`, `--btn-primary-bg`, `--btn-primary-text`
- **Feedback** — `--error-text`, `--error-bg`, `--error-border`
- **Scrollbar** — `--scrollbar-thumb`, `--scrollbar-track`

When implementing a new theme, add a `ThemeConfig` object in `frontend/src/theme.tsx` and append it to the `themes` array. The `ThemeSelector` component picks it up automatically.
