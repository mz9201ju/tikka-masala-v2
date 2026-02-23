# Tikka Masala – Agent Guide

## Purpose
This document describes the architecture, coding patterns, and decision rationale for the **tikka-masala-v2** restaurant web app. It is intended for AI coding agents and human contributors who need to understand the codebase quickly before making changes.

---

## Architecture Summary

```
Presentation Layer  →  src/components/**  (pure UI + local CSS)
Application Layer   →  src/hooks/useCart.js  (state logic)
Data Layer          →  src/components/Menu/MENU.js  (static menu data)
Shared Config       →  src/constants.js  (URLs, phone, address)
```

### Principles
- **Single source of truth for constants** – `src/constants.js` holds all phone numbers, addresses, and external URLs. Changes to contact details require editing only one file.
- **Cart logic is isolated** – `useCart.js` provides cart state to `App.jsx` via a hook. `MenuPage` receives cart props; it does not own cart state.
- **No backend** – All checkout flows use WhatsApp deep links (`wa.me`). No API calls are made.
- **CSS co-location** – Each component folder contains its own `.css` file. Global styles (reset, fonts, navbar, buttons) are in `src/index.css` only.

---

## Data Flow

```
App.jsx
  └─ useCart() → { cart, addToCart, updateQty, clearCart, total, getItemQty }
       └─ passed as props to MenuPage
            └─ MenuPage renders menu items + cart sidebar
                 └─ handleWhatsAppCheckout() builds WA message from cart
```

```
Catering.jsx
  └─ local useState for cart + event info
       └─ handleSubmit() → builds WA message → opens wa.me or web.whatsapp.com
```

---

## Key Files

| File | Responsibility |
|---|---|
| `src/App.jsx` | BrowserRouter, route definitions, passes cart props to MenuPage |
| `src/constants.js` | PHONE_NUMBER, ADDRESS, DELIVERY_LINKS, WHATSAPP_URL |
| `src/hooks/useCart.js` | Cart state: add, updateQty, clear, total, getItemQty |
| `src/index.css` | Global reset, background, navbar, footer, button variants |
| `src/components/Navbar.jsx` | Fixed nav: page links + social icons row, hides on scroll |
| `src/components/Footer.jsx` | Address, phone, WhatsApp links |
| `src/components/ScrollToTop.jsx` | Scrolls to top on route change (no render output) |
| `src/components/Home/Home.jsx` | Delivery platform pill buttons |
| `src/components/Menu/MenuPage.jsx` | Collapsible menu + sticky cart, floating mobile cart button |
| `src/components/Menu/MENU.js` | Static array of all menu items |
| `src/components/Catering/Catering.jsx` | Catering item selector + event form + WhatsApp submit |

---

## Responsiveness Strategy

| Breakpoint | Behaviour |
|---|---|
| `≥ 980px` | Menu: two-column grid (menu list + cart sidebar). Cart is sticky. |
| `< 980px` | Menu: single column. Cart moves below menu list. Floating cart button appears. |
| `< 768px` | Catering info grid collapses to single column. Nav/footer spacing adjusted. |
| All sizes | Delivery pills wrap (`flex-wrap: wrap`). Catering menu uses `auto-fit` grid. |

Mobile-only UI conditions (e.g. the floating cart button) use a `useState` boolean updated by a `resize` event listener — **never** `window.innerWidth` directly in JSX render, which would be stale.

---

## Known Patterns & Gotchas

### CSS Background
The `body` background image is set once in `src/index.css`. Component-level CSS files must **not** override it with another `body { background: ... }` block — that creates specificity conflicts.

### WhatsApp URL Construction
```js
// Simple: always opens WA (mobile or desktop app)
`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`

// Advanced (Catering): mobile → WA app, desktop → WA Web
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const url = isMobile ? `https://wa.me/...` : `https://web.whatsapp.com/send?phone=...`;
```

### Cart Floating Button
The floating cart button (`MenuPage.jsx`) appears only on mobile and scrolls to the cart aside. It uses:
```js
const [isMobile, setIsMobile] = useState(() => window.innerWidth < 980);
useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 980);
  window.addEventListener("resize", handleResize, { passive: true });
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

---

## Audit Summary (Changes Made)

### Dead Code Removed
- `heroImg` import in `Home.jsx` – imported but never rendered
- `handleCheckout` function in `App.jsx` – replaced by `handleWhatsAppCheckout` inside `MenuPage`
- `src/components/Contact/` – fully built component never imported or routed

### Code Consolidated
- **`src/constants.js`** – phone number, address, delivery URLs extracted from 5+ files
- **`src/hooks/useCart.js`** – cart logic extracted from `App.jsx` (60+ lines)

### Bugs Fixed
- `window.innerWidth` used directly in JSX (stale on resize) → replaced with `useState` + `resize` listener
- `<div><br/></div>` spacer elements → removed; spacing handled by CSS
- `position: absolute; top: 75%` on delivery pills (fragile layout) → replaced with `display: flex`
- Duplicate `body { background }` in `MenuPage.css` and `Catering.css` → removed (defined once in `index.css`)

### Simplifications
- `getTodayISO()` helper in `Catering.jsx` → `new Date().toISOString().split("T")[0]`

---

## Running Locally
```bash
npm install
npm run dev       # http://localhost:5173/tikka-masala-v2/
npm run build     # Production build → dist/
npm run lint      # ESLint check
npm run preview   # Preview production build
```
