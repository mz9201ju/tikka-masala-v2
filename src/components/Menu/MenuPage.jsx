import { useRef, useState } from "react";
import "./MenuPage.css";

export default function MenuPage({
  MENU,
  categories,
  cart,
  addToCart,
  updateQty,
  clearCart,
  total,
  getItemQty,
}) {
  const cartRef = useRef(null);
  const [openCategory, setOpenCategory] = useState(null);

  // ✅ WHATSAPP CHECKOUT HANDLER (NO BACKEND NEEDED)
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const phone = "14255028100"; // ✅ Your WhatsApp number (keep without +)

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.name} x${item.qty} = $${(
            item.price * item.qty
          ).toFixed(2)}`
      )
      .join("%0A");

    const message = `
🛍️ *New Order - Tikka Masala*

${itemsText}

—————————————
💵 *Total:* $${total.toFixed(2)}

📍 Pickup: 1624 145th PL SE, Bellevue, WA 98007

✅ Please confirm this order. Thank you!
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="menu" className="tm-section">
      <div className="tm-menu-layout">
        {/* ================= MENU LIST ================= */}
        <div className="tm-menu-list">
          {categories.map((cat) => {
            const isOpen = openCategory === cat;

            return (
              <div key={cat} className="tm-menu-category">

                {/* ✅ COLLAPSIBLE CATEGORY HEADER */}
                <button
                  className="tm-menu-category-toggle"
                  onClick={() => setOpenCategory(isOpen ? null : cat)}
                >
                  <span>{cat}</span>
                  <span className={`chevron ${isOpen ? "open" : ""}`}>▾</span>
                </button>

                {/* ✅ COLLAPSIBLE MENU BODY */}
                {isOpen && (
                  <div className="tm-menu-items">
                    {MENU.filter((m) => m.category === cat).map((item) => (
                      <article key={item.id} className="tm-menu-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="tm-menu-image"
                        />

                        <div className="tm-menu-item-main">
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>

                            {item.tag && (
                              <span className="tm-chip tm-chip-popular">
                                {item.tag}
                              </span>
                            )}
                          </div>

                          <div className="tm-menu-item-side">
                            <span className="tm-price">
                              ${item.price.toFixed(2)}
                            </span>

                            <button
                              className="tm-btn tm-btn-sm"
                              onClick={() => addToCart(item)}
                            >
                              {getItemQty(item.id) > 0
                                ? `Add (${getItemQty(item.id)})`
                                : "Add to Cart"}
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= CART ================= */}
        <aside ref={cartRef} className="tm-cart">
          <h3>Your Cart</h3>

          {cart.length === 0 ? (
            <p className="tm-cart-empty">
              No items yet. Start by adding a biryani, karahi, or BBQ plate.
            </p>
          ) : (
            <>
              <ul className="tm-cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="tm-cart-item">
                    <div className="tm-cart-item-main">
                      <strong>{item.name}</strong>
                      <span className="tm-cart-price">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="tm-cart-controls">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="tm-qty-btn"
                      >
                        −
                      </button>

                      <span className="tm-qty">{item.qty}</span>

                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="tm-qty-btn"
                      >
                        +
                      </button>

                      <span className="tm-cart-subtotal">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="tm-cart-footer">
                <div className="tm-cart-total-row">
                  <span>Total</span>
                  <span className="tm-cart-total">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  className="tm-btn tm-btn-primary tm-btn-full"
                  onClick={handleWhatsAppCheckout}
                >
                  Checkout via WhatsApp
                </button>

                <button
                  className="tm-btn tm-btn-ghost tm-btn-full"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

                <div className="tm-cart-partners">
                  <div className="tm-delivery-buttons vertical">
                    <a
                      href="https://www.ubereats.com/store/tikka-masala/HL0YuQONTPaJQqFc9Ueiyw"
                      className="tm-delivery-btn uber"
                      target="_blank"
                      rel="noreferrer"
                    >
                      UberEats
                    </a>

                    <a
                      href="https://www.doordash.com/store/tikkamasala-bellevue-2474911/2494193/"
                      className="tm-delivery-btn doordash"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DoorDash
                    </a>

                    <a
                      href="https://www.grubhub.com/restaurant/tikka-masala-1624-145th-place-southeast-bellevue/7492112"
                      className="tm-delivery-btn grubhub"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Grubhub
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>

      {/* ✅ FLOATING CART BUTTON — MOBILE ONLY */}
      {cart.length > 0 && window.innerWidth < 980 && (
        <button
          onClick={() =>
            cartRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            position: "fixed",
            left: "16px",
            bottom: "20px",
            zIndex: 9999,
            background: "#000",
            color: "#d4af37",
            padding: "14px 18px",
            borderRadius: "999px",
            fontWeight: "800",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            border: "2px solid #d4af37",
            cursor: "pointer",
          }}
        >
          🛒{cart.reduce((s, i) => s + i.qty, 0)}
        </button>
      )}
    </section>
  );
}
