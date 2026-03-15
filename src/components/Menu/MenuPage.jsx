import { useRef, useState, useEffect } from "react";
import { PHONE_NUMBER, DELIVERY_LINKS } from "../../constants";
import "./MenuPage.css";

const INSTAGRAM_DM_LINK = "https://www.instagram.com/direct/t/17844143036713567/";

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
  const categoryRefs = useRef({});
  const [openCategory, setOpenCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 980);
  const [modalImage, setModalImage] = useState(null);
  const [checkoutNotice, setCheckoutNotice] = useState("");
  const [instagramDraft, setInstagramDraft] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 980);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!checkoutNotice) return;
    const timeout = setTimeout(() => setCheckoutNotice(""), 3000);
    return () => clearTimeout(timeout);
  }, [checkoutNotice]);

  const handleWhatsAppCheckout = async () => {
    if (cart.length === 0) return;
    setInstagramDraft("");

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.name} x${item.qty} = $${(item.price * item.qty).toFixed(2)}`
      )
      .join("\n");

    const message = `
🛍️ *New Order - Tikka Masala*

${itemsText}

—————————————
💵 *Total:* $${total.toFixed(2)}

📍 Pickup: 1624 145th PL SE, Bellevue, WA 98007

✅ Please confirm this order. Thank you!
`;

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(message.trim());
        setCheckoutNotice("Order copied. Opening WhatsApp chat...");
      } catch {
        setCheckoutNotice("Opening WhatsApp chat...");
      }
    } else {
      setCheckoutNotice("Opening WhatsApp chat...");
    }

    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleInstagramCheckout = async () => {
    if (cart.length === 0) return;

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.name} x${item.qty} = $${(item.price * item.qty).toFixed(2)}`
      )
      .join("\n");

    const message = `
New Order - Tikka Masala

${itemsText}

---------------------
Total: $${total.toFixed(2)}

Pickup: 1624 145th PL SE, Bellevue, WA 98007

Please confirm this order. Thank you!
`;

    const trimmedMessage = message.trim();
    setInstagramDraft(trimmedMessage);

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(trimmedMessage);
        setCheckoutNotice("Order copied. Paste it in Instagram DM below.");
      } catch {
        setCheckoutNotice("Instagram cannot auto-fill text. Copy and paste the order below.");
      }
    } else {
      setCheckoutNotice("Instagram cannot auto-fill text. Copy and paste the order below.");
    }
  };

  const handleOpenInstagramDm = () => {
    window.open(INSTAGRAM_DM_LINK, "_blank");
  };

  const handleCopyInstagramDraft = async () => {
    if (!instagramDraft) return;
    if (!navigator.clipboard?.writeText) {
      setCheckoutNotice("Clipboard is unavailable. Please copy manually from the text box.");
      return;
    }

    try {
      await navigator.clipboard.writeText(instagramDraft);
      setCheckoutNotice("Order copied. Paste it into Instagram DM.");
    } catch {
      setCheckoutNotice("Could not copy automatically. Please copy manually from the text box.");
    }
  };

  const handleToggleCategory = (cat) => {
    const isOpen = openCategory === cat;
    setOpenCategory(isOpen ? null : cat);
    if (!isOpen) {
      setTimeout(() => {
        categoryRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // slight delay to allow expansion
    }
  };

  return (
    <section id="menu" className="tm-section">
      {modalImage && (
        <div
          className="modal-overlay"
          onClick={() => setModalImage(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <img
            src={modalImage}
            alt="Modal"
            style={{ maxHeight: '80vh', maxWidth: '80vw', borderRadius: '8px' }}
            onClick={e => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
      
      <div className="tm-menu-layout">
        {/* ================= MENU LIST ================= */}
        <div className="tm-menu-list">
          {categories.map((cat) => {
            const isOpen = openCategory === cat;

            return (
              <div
                key={cat}
                className="tm-menu-category"
                ref={el => categoryRefs.current[cat] = el}
              >

                {/* ✅ COLLAPSIBLE CATEGORY HEADER */}
                <button
                  className="tm-menu-category-toggle"
                  onClick={() => handleToggleCategory(cat)}
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
                          onClick={() => setModalImage(item.image)}
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
                    <img
                      src={item.image}
                      alt={item.name}
                      className="tm-cart-item-img" // Add a CSS class for styling
                      style={{ width: "48px", height: "48px", borderRadius: "8px", marginRight: "12px" }}
                    />
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
                  className="tm-btn tm-btn-primary tm-btn-full"
                  onClick={handleInstagramCheckout}
                >
                  Message via Instagram
                </button>

                {instagramDraft && (
                  <div className="tm-instagram-helper">
                    <p className="tm-instagram-helper-title">Instagram Order Message</p>
                    <textarea
                      className="tm-instagram-draft"
                      readOnly
                      value={instagramDraft}
                      rows={8}
                    />
                    <div className="tm-instagram-helper-actions">
                      <button
                        className="tm-btn tm-btn-sm"
                        onClick={handleCopyInstagramDraft}
                      >
                        Copy Order
                      </button>
                      <button
                        className="tm-btn tm-btn-sm"
                        onClick={handleOpenInstagramDm}
                      >
                        Open Instagram DM
                      </button>
                    </div>
                  </div>
                )}

                <button
                  className="tm-btn tm-btn-ghost tm-btn-full"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

                {checkoutNotice && (
                  <p className="tm-checkout-notice">
                    {checkoutNotice}
                  </p>
                )}

                {/* <div className="tm-cart-partners">
                  <div className="tm-delivery-buttons vertical">
                    <a
                      href={DELIVERY_LINKS.ubereats}
                      className="tm-delivery-btn uber"
                      target="_blank"
                      rel="noreferrer"
                    >
                      UberEats
                    </a>

                    <a
                      href={DELIVERY_LINKS.doordash}
                      className="tm-delivery-btn doordash"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DoorDash
                    </a>

                    <a
                      href={DELIVERY_LINKS.grubhub}
                      className="tm-delivery-btn grubhub"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Grubhub
                    </a>
                  </div>
                </div> */}
              </div>
            </>
          )}
        </aside>
      </div>

      {cart.length > 0 && isMobile && (
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
