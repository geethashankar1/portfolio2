# Handoff: Geetha Shankar — Portfolio Redesign

## Overview
A single-page personal portfolio for **Geetha Shankar**, a full-stack developer. It presents a hero intro, a skills matrix, professional experience, selected projects, certifications, and contact details. Dark navy theme with a cyan→blue accent, rounded "glass" cards, a sticky pill navigation bar, and scroll-spy that highlights the active section.

This redesign updates an older student-framed version into a **working-professional** portfolio (real job at Vayublue, a flagship marketplace project, a deeper stack, and a new Experience section).

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior, **not production code to copy directly**. The design was authored in a custom HTML component runtime, so the raw source is not drop-in React.

Your task is to **recreate this design in the existing React portfolio codebase**, using its established patterns (component structure, routing, and whichever styling approach the repo already uses — plain CSS, CSS Modules, styled-components, or Tailwind). The mapping is 1:1 and mechanical:
- Each `<section>` → one React component.
- Inline `style="…"` → a React `style={{…}}` object, **or** move the values into your CSS solution using the tokens listed below.
- The repeated data (`skillGroups`, `certs`, `navItems`) → JS/TS constants you `.map()` over.
- The scroll-spy `IntersectionObserver` → a `useEffect` hook with an `activeSection` state variable.

### Files in this bundle
- **`portfolio-design.html`** — the fully rendered, self-contained design. **Open this in any browser** to see the exact target (fonts, colors, spacing, hover states, scroll-spy all working). This is the source of truth for visuals.
- **`Portfolio.source.dc.html`** — the readable source markup (all sections, exact inline styles, and copy). Use it to copy exact style values and text. Note: tokens written as `{{ accentA }}` etc. are theme variables (see Design Tokens → Theming); it will **not** render on its own — use `portfolio-design.html` for rendering.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions. Recreate the UI pixel-for-pixel using your codebase's libraries and patterns. Exact hex values, fonts, and measurements are documented below.

---

## Global Layout & Chrome

- **Container:** `max-width: 1280px; margin: 0 auto; padding: 0 40px;` — used by the nav and every section.
- **Font:** `Nunito` (Google Fonts), weights 400–900. Import:
  `https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap`
  Body: `font-family: 'Nunito', system-ui, -apple-system, sans-serif;`
- **Page background** (on the outer wrapper):
  ```
  background:
    radial-gradient(1100px 620px at 12% -6%, rgba(46,86,150,0.28), transparent 60%),
    radial-gradient(900px 600px at 100% 6%, rgba(58,116,186,0.14), transparent 55%),
    #080b12;
  ```
- **Body base:** `background:#080b12; color:#eef2f6; -webkit-font-smoothing:antialiased;`
- **Smooth scroll:** `html { scroll-behavior:smooth; scroll-padding-top:90px; }` (offsets anchored sections beneath the fixed nav).
- **Link defaults:** `a { color: var(--accent); text-decoration:none; } a:hover { color:#8fd8f5; }`
- **Selection:** `::selection { background: rgba(86,198,239,0.30); }`

---

## Screens / Views

Everything lives on one page. Nav items are anchor links (`href="#home"`, `#skills`, `#experience`, `#projects`, `#certs`, `#contact`).

### 1. Navigation bar (fixed)
- **Layout:** `position:fixed; top:0; left:0; right:0; z-index:50;` bar with `background:rgba(9,12,20,0.62); backdrop-filter:blur(14px); border-bottom:1px solid rgba(255,255,255,0.05);`. Inside: the 1280px container with `padding:14px 40px; display:flex; align-items:center; justify-content:space-between;`.
- **Logo (left):** `GEETHA` in `#eef2f6` + `SHANKAR` in `var(--accent)`, all `font-weight:800; letter-spacing:0.09em; font-size:1.15rem;`. Links to `#home`.
- **Nav pill group (right):** a rounded container `background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); padding:5px; border-radius:999px;` holding six links: **Home, Skills, Experience, Projects, Certifications, Contact**.
  - Each link: `padding:9px 17px; border-radius:999px; font-weight:600; font-size:0.95rem; color:#c2ccd8;`
  - **Hover:** color → `#eef2f6`.
  - **Active (current section):** `background:rgba(233,240,247,0.95); color:#0b1220; font-weight:700; box-shadow:0 6px 18px rgba(0,0,0,0.35);` (a light "frosted" pill with dark text). Driven by scroll-spy — see Interactions.

### 2. Hero — `#home`
- **Section padding:** `150px 0 92px`.
- **Layout:** 2-column grid `grid-template-columns:1.05fr 0.9fr; gap:54px; align-items:center;`.
- **Left column:**
  - **Eyebrow pill:** `FULL-STACK DEVELOPER · HYDERABAD, IN` — `display:inline-flex; padding:8px 16px; border-radius:999px; border:1px solid color-mix(in srgb, var(--accent) 30%, transparent); background:color-mix(in srgb, var(--accent) 8%, transparent); color:color-mix(in srgb, var(--accent) 78%, white); font-weight:700; letter-spacing:0.14em; font-size:0.76rem; text-transform:uppercase;`
  - **H1:** "Building web products **end to end** — from Figma-to-code UI to payments, APIs & deployment." — `font-size:clamp(2.5rem,4.8vw,4.35rem); font-weight:800; line-height:1.07; letter-spacing:-0.02em; color:#f4f7fa;`. The phrase "end to end" is wrapped in a span `color:var(--accent);`.
  - **Paragraph:** `color:#93a0b2; font-size:1.06rem; line-height:1.62; max-width:545px;`
    Copy: *"I'm Geetha Shankar, a full-stack developer at Vayublue building customer-facing checkout, payment, and subscription features for the Persona Nutrition platform. I work across the stack — responsive Figma-to-code interfaces, REST APIs, and Docker-based deployment."*
  - **Buttons** (flex, gap 14, margin-top 30):
    - Primary — "Download résumé": `background:linear-gradient(135deg,var(--accent),var(--accent2)); color:#07111d; font-weight:700; padding:14px 26px; border-radius:999px; box-shadow:var(--glow);` hover `filter:brightness(1.06)`. **Links to the résumé file — replace with your hosted résumé URL.**
    - Secondary — "Explore projects" → `#projects`: `background:rgba(255,255,255,0.03); color:#e7edf3; border:1px solid rgba(255,255,255,0.14); padding:14px 26px; border-radius:999px; font-weight:600;` hover bg `rgba(255,255,255,0.07)`.
  - **Stat row:** 3-col grid, gap 14, max-width 560. Each card `background:var(--card-bg); border:1px solid var(--card-border); border-radius:16px; padding:15px 17px;` with a bold value (`#f2f5f8; font-weight:800; font-size:1.12rem;`) and a muted caption (`#8b97a8; font-size:0.85rem;`):
    - **Full-stack** / UI → API → deploy
    - **Payments** / Authorize.Net · Razorpay
    - **B.Tech CS** / VIT-AP · 2025
- **Right column — info card:** `background:var(--card-bg); border:1px solid var(--card-border); border-radius:26px; padding:20px; display:flex; flex-direction:column; gap:13px;` with three sub-cards (`background:var(--sub-bg); border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:19px 21px;`). Each has a bold `#f2f5f8; 1.02rem` title and `#93a0b2; 0.95rem; line-height:1.5` body:
  - **Now at Vayublue** (title prefixed with a live dot: `8px` circle `#4fd1a5` with `box-shadow:0 0 0 4px rgba(79,209,165,0.16)`) — *"Building customer-facing checkout, payment & subscription features on the Persona Nutrition platform and its VYV sub-brand."*
  - **Core stack** — *"JavaScript, ColdFusion (CFML), PHP, React & React Native, Node / Express, Docker."*
  - **Current focus** — *"End-to-end delivery — Figma-to-code UI, REST APIs, payment gateways, and CI/CD deployment."*

### 3. Skills — `#skills`
- **Section padding:** `98px 0`. **Header:** H2 "Skills & expertise" (`clamp(2rem,3.6vw,2.85rem); font-weight:800; letter-spacing:-0.015em; color:#f3f6f9`) + subtitle (`#8b97a8; 1.05rem; line-height:1.6; max-width:680px`): *"The stack I use to design, build, and ship production web apps — front end, back end, and everything between."*
- **Grid:** `grid-template-columns:repeat(auto-fit,minmax(330px,1fr)); gap:20px; margin-top:44px;`.
- **Card:** `background:var(--card-bg); border:1px solid var(--card-border); border-radius:22px; padding:26px 26px 28px; display:flex; flex-direction:column; gap:16px;`. Title in `var(--accent); font-weight:700; font-size:1.12rem`. Pills wrap (`display:flex; flex-wrap:wrap; gap:10px`), each pill: `background:var(--pill-bg); border:1px solid rgba(255,255,255,0.08); color:#d3dbe5; border-radius:999px; padding:8px 15px; font-size:0.88rem; font-weight:600;`.
- **Data (5 groups):**
  - **Languages:** JavaScript (ES6+), ColdFusion (CFML), PHP, Python, Java, HTML5, CSS3, SQL
  - **Frameworks & Libraries:** React.js, React Native (Expo), Node.js, Express.js, jQuery, Bootstrap 5
  - **APIs & Practices:** REST APIs, JWT Auth, Payment Gateways, Authorize.Net, Razorpay, AJAX, ES Modules, Responsive Design, Agile / Scrum
  - **Databases & Tools:** MySQL, MongoDB, Git, Docker, Nginx, Figma, Jenkins, GitHub Actions
  - **Cloud & Deployment:** DigitalOcean, Netlify, Nginx + SSL, CI/CD

### 4. Experience — `#experience`
- **Section padding:** `98px 0`. **Header:** H2 "Experience" + subtitle: *"Production work on live e-commerce and subscription platforms — owning features from Figma to release."*
- **Main card:** `var(--card-bg)` card, `border-radius:24px; padding:34px; margin-top:44px`.
  - **Header row** (flex, space-between, `border-bottom:1px solid var(--card-border); padding-bottom:22px`):
    - Left: a `52px` gradient badge (`linear-gradient(135deg,var(--accent),var(--accent2)); border-radius:14px; color:#07111d; font-weight:800; font-size:1.35rem`) with letter **V**; then **Vayublue Pvt. Ltd.** (`#f3f6f9; font-weight:800; font-size:1.35rem`) and role **Frontend / Full-Stack Developer** (`var(--accent); font-weight:600; 1rem`).
    - Right (text-align:right): **Jul 2025 — Present** (`#e7edf3; font-weight:700; 0.98rem`) and **Hyderabad, Telangana** (`#8b97a8; 0.9rem`).
  - **Summary** (`#9aa7b8; 1.02rem; line-height:1.6; max-width:920px; margin:22px 0 26px`): *"I build and maintain customer-facing features on a shared ColdFusion (CFML) / JavaScript codebase powering the Persona Nutrition platform and its VYV Nutrition sub-brand — owning checkout, payment, and pricing features end to end."*
  - **Two sub-cards** (2-col grid, gap 20; each `var(--sub-bg); border-radius:18px; padding:24px`). Header = name (`#f3f6f9; font-weight:700; 1.12rem`) + role tag (`#7f8b9c; 0.8rem; font-weight:600`), then a row of tech pills, then a bulleted list. **Bullet marker:** a `6px` circle `var(--accent)`, `margin-top:8px`, in a flex row (`gap:10px; align-items:flex-start`); text `#9aa7b8; 0.93rem; line-height:1.55`.
    - **Persona Nutrition** — *Client platform* — tags: ColdFusion, JavaScript, AJAX, Bootstrap 5
      - Shipped a brand-wide UI redesign across the landing, recommendations & checkout pages — Figma to production, fully mobile-responsive.
      - Built the customer login portal end-to-end (sign-in, sign-up, password reset) on CFML, Bootstrap 5 & jQuery AJAX — hardened with CSRF tokens and input encoding.
      - Created a custom server-side A/B testing framework in ColdFusion — deterministic MD5 50/50 split with cookie + database visitor persistence.
    - **VYV Nutrition** — *Feature owner* — tags: ES Modules, JavaScript, CFML, HTML / CSS
      - Rebuilt the product recommendations page from Figma — personalized packs, editable naming, a Shop-All modal, and a PDF nutrition report.
      - Re-architected legacy jQuery cart code into modular ES modules with a unified tax & duties engine (sales tax, international duties, VAT, delivery).
      - Owned debugging through production release — resolving discount / coupon miscalculations, sales-tax gaps, and duties-rendering defects.
- **Education strip** (separate card below, `margin-top:20px; border-radius:18px; padding:22px 26px; flex space-between`): a `46px` icon chip (`var(--sub-bg)`, graduation-cap SVG in `var(--accent)`) + **VIT-AP University** / **B.Tech, Computer Science**, right side **2021 — 2025** (`#c7d0db; font-weight:600`).

### 5. Projects — `#projects`
- **Section padding:** `98px 0`. **Header:** H2 "Selected projects" + subtitle: *"Recent builds focused on real architecture, payments, and end-to-end delivery."*
- **Featured card** (`var(--card-bg); border-radius:24px; padding:34px; margin-top:44px`), 2-col grid `1.3fr 1fr; gap:40px`:
  - **Left:** eyebrow pill "Flagship · Web + Mobile" (`background:color-mix(in srgb,var(--accent) 12%,transparent); color:color-mix(in srgb,var(--accent) 80%,white); font-size:0.72rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase`) + year "2025"; title **my_eshop — Multi-Tenant E-commerce Marketplace** (`#f3f6f9; font-weight:800; 1.6rem`); description; 7 tags (PHP 8.3, MySQL, Docker, Nginx, React Native, REST / JWT, Jenkins); a gradient "View project →" button.
    - Description: *"A Dockerized multi-tenant marketplace: a PHP 8.3 / MySQL storefront with role-based access, a seller dashboard with revenue analytics, and an admin panel — with dual payment gateways, a JWT REST API, and a companion React Native mobile app."*
  - **Right:** a `var(--sub-bg)` sub-card titled "HIGHLIGHTS" (`#c7d0db; 0.78rem; letter-spacing:0.1em; text-transform:uppercase`) with 5 bulleted items (cyan-dot markers):
    - Multi-tenant roles — super-admin, seller & customer
    - Dual gateways — Authorize.Net + Razorpay with server-side price checks
    - JWT REST API — 10+ endpoints
    - React Native (Expo) app for Android & iOS
    - Jenkins CI/CD · GitHub Actions · Nginx + Let's Encrypt
- **Two project cards** (2-col grid, gap 20, margin-top 20; each `var(--card-bg); border-radius:22px; padding:28px; display:flex; flex-direction:column`). Eyebrow pill ("Vayublue · Client" / "Vayublue · Feature") + year, title (`#f3f6f9; font-weight:800; 1.28rem`), description (`#9aa7b8; 0.96rem; line-height:1.6`), tags, and an **outline** "View project →" button (`background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.14); padding:11px 22px; border-radius:999px`) pinned to bottom.
  - **Persona Nutrition** (2025) — *"Brand-wide UI redesign across the landing, recommendations & checkout pages, a full customer login portal with CSRF hardening, and a custom server-side A/B testing framework."* — tags: ColdFusion, JavaScript, AJAX, Bootstrap 5
  - **VYV Nutrition** (2025) — *"A Figma-to-responsive product recommendations page — personalized packs, a Shop-All modal, and a PDF report — plus a re-architected modular checkout with a unified tax & duties engine."* — tags: ES Modules, JavaScript, CFML, HTML / CSS

### 6. Certifications — `#certs`
- **Section padding:** `98px 0`. **Header:** H2 "Certifications" + subtitle: *"Structured technical training I've completed alongside hands-on work."*
- **Grid:** `repeat(auto-fit,minmax(255px,1fr)); gap:20px; margin-top:44px`.
- **Card:** `var(--card-bg); border-radius:22px; padding:26px; display:flex; flex-direction:column; gap:16px; min-height:222px`. Top: a `44px` icon chip (`background:color-mix(in srgb,var(--accent) 12%,transparent)`, badge SVG in `var(--accent)`). Middle (`flex:1`): name (`#f3f6f9; font-weight:700; 1.1rem`) + "provider · year" (`#8b97a8; 0.9rem`). Bottom: gradient "View certificate" button (`padding:10px 20px; border-radius:999px; font-size:0.88rem`).
- **Data (4):**
  - OCI Foundations Associate — Oracle · 2025
  - Google Cloud Digital Leader — Google Cloud · 2025
  - JavaScript Essentials — Cisco Networking Academy · 2024
  - Angular — Infosys Springboard · 2025

### 7. Contact — `#contact`
- **Section padding:** `98px 0 64px`. **Header:** H2 "Let's build something meaningful" (`clamp(2.1rem,3.8vw,3rem)`) + subtitle: *"I'm open to full-stack roles, freelance work, and collaborations where thoughtful UI and dependable engineering matter."*
- **Grid:** `repeat(auto-fit,minmax(240px,1fr)); gap:18px; margin-top:44px`.
- **Card (each is an `<a>`):** `var(--card-bg); border-radius:22px; padding:28px; display:flex; flex-direction:column; min-height:190px; color:inherit`. A `48px` icon chip at top (`margin-bottom:auto`, `background:color-mix(in srgb,var(--accent) 12%,transparent)`, icon in `var(--accent)`), then label (`#f3f6f9; font-weight:700; 1.05rem`) + value (`#8b97a8; 0.94rem`). **Hover:** `border-color:color-mix(in srgb,var(--accent) 45%,var(--card-border)); background:rgba(255,255,255,0.045)`.
  - **Email** — geethashankar433@gmail.com — `href="mailto:geethashankar433@gmail.com"`
  - **Phone** — +91 88854 75210 — `href="tel:+918885475210"`
  - **LinkedIn** — Pindiboyina Geetha Shankar — **replace href with real profile URL**
  - **GitHub** — View my repositories — **replace href with real profile URL**

### 8. Footer
- `border-top:1px solid var(--card-border)`; container `padding:28px 40px; flex; space-between`. Left: "© 2026 Geetha Shankar · Full-Stack Developer" (`#7f8b9c; 0.9rem`). Right: LinkedIn / GitHub / Email links (`#93a0b2; 0.9rem; font-weight:600`).

---

## Interactions & Behavior
- **Scroll-spy nav:** An `IntersectionObserver` watches each `<section>` with `rootMargin:'-45% 0px -50% 0px'` and `threshold:0`. When a section becomes "current," its matching nav link gets the active-pill styles (light bg, dark text); all others reset. Initialize with **Home** active.
  - React version: keep `const [active, setActive] = useState('home')`, set up the observer in `useEffect` (observe refs to each section, `setActive(id)` on intersect), and style each nav link from `active === id`.
- **Smooth scroll:** anchor links + `html { scroll-behavior:smooth; scroll-padding-top:90px }`. (Do not use `scrollIntoView` if this ever runs inside an embedded frame; plain anchor navigation is enough.)
- **Hover states:** documented per component above (nav color, button brightness/bg, contact card border+bg).
- **Responsive:** the reference is desktop-first (designed ~1280px+). For mobile, collapse the hero and all 2-column grids to a single column, and convert the nav pill group to a hamburger/stacked menu. Grids using `auto-fit minmax(...)` already reflow; the fixed `1.05fr/0.9fr`, `1.3fr/1fr`, and `1fr/1fr` grids need a `@media (max-width: ~820px)` override to `1fr`.

## State Management
- Only one piece of UI state: **`activeSection`** for the nav highlight (derived from scroll position via IntersectionObserver).
- No data fetching. All content is static (see data lists above) — good candidates for local constants or a small `content.ts`.

## Design Tokens

### Theming (CSS custom properties)
The design is driven by a few CSS variables set on the root wrapper, with `:root` fallbacks. Recreate these as CSS variables (or theme constants):
```
--accent:      #56c6ef   /* cyan — links, titles, icons, accents */
--accent2:     #4a86e8   /* blue — second stop of gradients */
--card-bg:     rgba(255,255,255,0.025)   /* "glass" card surface */
--card-border: rgba(255,255,255,0.075)
--sub-bg:      rgba(255,255,255,0.03)    /* nested sub-card surface */
--pill-bg:     rgba(255,255,255,0.045)   /* skill / tech pills */
--glow:        0 14px 36px color-mix(in srgb, var(--accent) 30%, transparent)  /* primary-button glow */
```
Gradient (buttons, badges): `linear-gradient(135deg, var(--accent), var(--accent2))`.
The original had 3 optional theme variants (not required to reproduce): accent palettes (cyan/violet/emerald/amber), a "Solid" surface mode (`--card-bg:rgba(17,23,35,0.9)`), and a glow on/off toggle.

### Colors
| Purpose | Value |
|---|---|
| Page base | `#080b12` |
| Text — headings | `#f3f6f9` / `#f4f7fa` |
| Text — body/secondary | `#93a0b2` / `#9aa7b8` |
| Text — muted | `#8b97a8` |
| Text — dim/labels | `#7f8b9c` |
| Pill text | `#d3dbe5` / `#cdd6e1` |
| Nav bar bg | `rgba(9,12,20,0.62)` + `blur(14px)` |
| Nav active pill | bg `rgba(233,240,247,0.95)`, text `#0b1220` |
| Nav item (idle) | `#c2ccd8` |
| Button text (on gradient) | `#07111d` |
| Live "present" dot | `#4fd1a5` |

### Typography (Nunito)
| Element | Size | Weight | Other |
|---|---|---|---|
| Logo | 1.15rem | 800 | letter-spacing .09em |
| Hero H1 | clamp(2.5rem,4.8vw,4.35rem) | 800 | lh 1.07, ls -.02em |
| Section H2 | clamp(2rem,3.6vw,2.85rem) | 800 | ls -.015em |
| Contact H2 | clamp(2.1rem,3.8vw,3rem) | 800 | |
| Card / project title | 1.28–1.6rem | 800 | |
| Skill-card title | 1.12rem | 700 | color var(--accent) |
| Body / subtitle | 1.05–1.06rem | 400 | lh 1.6–1.62 |
| Pills | 0.80–0.88rem | 600 | |

### Radius / Spacing / Shadow
- Radius: pills & buttons `999px`; large cards `22–26px`; sub-cards `16–18px`; icon chips `12–14px`; stat cards `16px`.
- Container: `max-width 1280px; padding 0 40px`. Section vertical padding `98px` (hero `150px 0 92px`, contact `98px 0 64px`). Grid gaps `14–20px`.
- Shadows: primary-button glow `var(--glow)`; active nav pill `0 6px 18px rgba(0,0,0,0.35)`.

## Assets
- **Fonts:** Nunito via Google Fonts (link above). No self-hosted fonts.
- **Icons:** all inline SVG — no image files needed. Used: envelope (email), phone, LinkedIn glyph, GitHub glyph, graduation cap (education), award/badge (certifications). Copy the exact SVG paths from `Portfolio.source.dc.html`, or substitute your icon library (e.g. lucide-react: `Mail`, `Phone`, `Linkedin`, `Github`, `GraduationCap`, `Award`).
- **Images:** none. There are no photos/logos in the design.

## Placeholders to wire up (currently non-functional)
- **Download résumé** button → point to the hosted résumé (PDF/DOCX).
- **View project** buttons (my_eshop, Persona, VYV) → repo or live URLs (or remove if none).
- **View certificate** buttons (×4) → credential URLs (or remove).
- **LinkedIn** and **GitHub** links (contact cards + footer) → real profile URLs.

## Files
- `portfolio-design.html` — rendered, self-contained reference (open in a browser).
- `Portfolio.source.dc.html` — readable source markup (exact styles + copy).
- `README.md` — this document.
