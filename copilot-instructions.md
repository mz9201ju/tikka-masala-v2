# Tikka Masala – Copilot Instructions

## Project Overview
This is a React 19 + Vite web application for **Tikka Masala**, an Indian restaurant in Bellevue, WA. It is deployed as a GitHub Pages site at `https://mz9201ju.github.io/tikka-masala-v2/`.

The app has three pages:
- **Home** – delivery partner links (UberEats, DoorDash, Grubhub)
- **Menu** – collapsible menu categories with a cart and WhatsApp checkout
- **Catering** – event catering order form with WhatsApp submission

---

## Tech Stack
| Layer | Technology |
|---|---|
| UI | React 19 + JSX |
| Routing | React Router DOM v7 |
| Build | Vite 7 |
| Icons | react-icons (FaXxx from `react-icons/fa`) |
| Styling | Plain CSS (no CSS-in-JS, no Tailwind) |
| Deployment | GitHub Pages (base: `/tikka-masala-v2/`) |

---

## Project Structure
```
src/
├── App.jsx                    # Root: routes + Navbar + Footer
├── main.jsx                   # Entry point
├── index.css                  # Global styles (body bg, navbar, footer, buttons)
├── constants.js               # ✅ Shared constants: phone, address, URLs
├── hooks/
│   └── useCart.js             # ✅ Cart state: addToCart, updateQty, clearCart
└── components/
    ├── Navbar.jsx             # Fixed top nav + social icon row
    ├── Footer.jsx             # Address / phone / WhatsApp links
    ├── ScrollToTop.jsx        # Scrolls to top on route change
    ├── Home/
    │   ├── Home.jsx           # Delivery platform pill links
    │   └── Home.css
    ├── Menu/
    │   ├── MENU.js            # Menu data array
    │   ├── MenuPage.jsx       # Menu list (collapsible) + cart sidebar
    │   └── MenuPage.css
    └── Catering/
        ├── Catering.jsx       # Catering order form + cart + WhatsApp submit
        └── Catering.css
```

---

## Key Conventions

### Constants (`src/constants.js`)
All shared values (phone number, address, external URLs) live here. **Never hardcode these in components.**

```js
import { PHONE_NUMBER, DELIVERY_LINKS, WHATSAPP_URL } from "../../constants";
```

### Custom Hooks (`src/hooks/`)
Business logic is extracted into hooks:
- `useCart` – all cart state management (add, update qty, clear, total, getItemQty)

### CSS Organisation
- Global styles (reset, nav, footer, button variants) → `src/index.css`
- Page-specific styles → co-located `.css` file beside the component
- **Do not redefine `body` background in component CSS** – it is defined once in `index.css`

### Responsiveness
- Mobile breakpoint: `max-width: 768px` (nav/footer) and `max-width: 980px` (menu layout)
- Use `flex-wrap: wrap` and CSS Grid `auto-fit` for responsive layouts
- Avoid `position: absolute` for layout – use flexbox/grid instead
- Mobile-only UI state (e.g. floating cart button) must use a `useState` + `resize` event listener, never `window.innerWidth` directly in JSX

### WhatsApp Checkout
Both Menu and Catering send orders via WhatsApp using `https://wa.me/{PHONE_NUMBER}?text=...`. Catering also detects mobile to open `web.whatsapp.com` on desktop.

---

## Linting & Building
```bash
npm run lint     # ESLint (no-unused-vars enforced)
npm run build    # Vite production build
npm run dev      # Dev server at http://localhost:5173/tikka-masala-v2/
```

---

## Adding a New Page
1. Create `src/components/YourPage/YourPage.jsx` and `YourPage.css`
2. Add a `<Route path="/your-page" element={<YourPage />} />` in `App.jsx`
3. Add a `<Link>` button in `Navbar.jsx`
4. Import shared constants from `src/constants.js` as needed

---

## Design Tokens (CSS)
| Token | Value |
|---|---|
| Brand gold | `#d4af37` |
| Brand dark | `#0b1f2a` |
| Glass bg | `rgba(0,0,0,0.70)` |
| Glass border | `rgba(212,175,55,0.35)` |
| Border radius (card) | `16px–24px` |
| Border radius (pill) | `999px` |
