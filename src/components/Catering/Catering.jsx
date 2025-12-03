import { useState } from "react";
import "./Catering.css";

// ✅ IMPORT ITEM IMAGES
import biryaniImg from "../../assets/biryani.jpg";
import tikkaImg from "../../assets/tikka.jpg";
import kababImg from "../../assets/kabab.jpg";

// ✅ MENU WITH IMAGES
const CATERING_MENU = [
    { id: 1, name: "Chicken Biryani Tray", price: 65, image: biryaniImg },
    { id: 2, name: "Beef Karahi Tray", price: 85, image: tikkaImg },
    { id: 3, name: "Chicken Tikka Tray", price: 75, image: tikkaImg },
    { id: 4, name: "Seekh Kabab Tray", price: 70, image: kababImg },
    { id: 5, name: "Naan (20 pcs)", price: 25, image: tikkaImg },
    { id: 6, name: "Raita & Salad Combo", price: 15, image: tikkaImg },
];

export default function Catering() {
    const [cart, setCart] = useState([]);
    const [info, setInfo] = useState({
        eventDate: "",
        guests: 25,
        instructions: "",
    });

    const addItem = (item) => {
        setCart((prev) => {
            const exists = prev.find((i) => i.id === item.id);
            if (exists) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...prev, { ...item, qty: 1 }];
        });
    };

    const updateQty = (id, delta) => {
        setCart((prev) =>
            prev
                .map((i) =>
                    i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i
                )
                .filter((i) => i.qty > 0)
        );
    };

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

    // ✅ WHATSAPP FORMAT HANDLER
    const handleSubmit = () => {
        if (!info.eventDate) {
            alert("Please select an event date.");
            return;
        }

        if (cart.length === 0) {
            alert("Please add at least one catering item.");
            return;
        }

        const itemsText = cart
            .map((i) => `🍽️ ${i.name}  x${i.qty}  —  $${i.price * i.qty}`)
            .join("\n");

        const message = `
📢 *New Catering Request*

📅 *Event Date:* ${info.eventDate}
👥 *Guests:* ${info.guests}

🧾 *Order Details:*
${itemsText}

💰 *Total:* $${total}

📝 *Special Instructions:*
${info.instructions || "None"}

📍 Sent via Tikka Masala Website
    `.trim();

        const phone = "14255028100";
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const url = isMobile
            ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
            : `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="catering" className="catering-section">
            <div className="catering-container">

                <h2 className="form-title">Catering Orders</h2>
                <p className="form-subtitle">
                    Choose your trays, add special instructions & we’ll take it from there.
                </p>

                {/* ✅ EVENT INFO */}
                <div className="catering-info">
                    <label>
                        Event Date
                        <input
                            type="date"
                            value={info.eventDate}
                            min={new Date().toISOString().split("T")[0]}
                            required
                            onChange={(e) =>
                                setInfo({ ...info, eventDate: e.target.value })
                            }
                            onClick={(e) =>
                                e.target.showPicker && e.target.showPicker()
                            }
                        />
                    </label>

                    <div className="guest-center">
                        <label className="guest-label">
                            Number of Guests

                            <div className="guest-scroller">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setInfo({
                                            ...info,
                                            guests: Math.max(10, info.guests - 1),
                                        })
                                    }
                                >
                                    −
                                </button>

                                <span className="guest-value">{info.guests}</span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setInfo({
                                            ...info,
                                            guests: Math.min(500, info.guests + 1),
                                        })
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </label>
                    </div>
                </div>

                {/* ✅ MENU GRID WITH IMAGES + LIVE QTY BUTTON */}
                <div className="catering-menu">
                    {CATERING_MENU.map((item) => {
                        const cartItem = cart.find((i) => i.id === item.id);
                        const qty = cartItem?.qty || 0;

                        return (
                            <div key={item.id} className="catering-card">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="catering-item-img"
                                />

                                <h4>{item.name}</h4>
                                <p>${item.price}</p>

                                <button
                                    className={qty > 0 ? "qty-active-btn" : ""}
                                    onClick={() => addItem(item)}
                                >
                                    {qty > 0 ? qty : "Add"}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* ✅ CART */}
                <div className="catering-cart">
                    <h3>Your Catering Cart</h3>

                    {cart.length === 0 && <p>No items selected</p>}

                    {cart.map((item) => (
                        <div key={item.id} className="cart-row">
                            <span>{item.name}</span>
                            <div className="cart-counter">
                                <button onClick={() => updateQty(item.id, -1)}>-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => updateQty(item.id, 1)}>+</button>
                            </div>
                            <span>${item.price * item.qty}</span>
                        </div>
                    ))}

                    {cart.length > 0 && (
                        <div className="cart-total">
                            <strong>Total: ${total}</strong>
                        </div>
                    )}
                </div>

                {/* ✅ SPECIAL INSTRUCTIONS */}
                <textarea
                    className="catering-notes"
                    placeholder="Special instructions, allergies, spice level, delivery timing..."
                    value={info.instructions}
                    onChange={(e) =>
                        setInfo({ ...info, instructions: e.target.value })
                    }
                    rows="4"
                />

                {/* ✅ FINAL SUBMIT → WHATSAPP */}
                <button className="catering-submit" onClick={handleSubmit}>
                    ✅ Submit via WhatsApp
                </button>
            </div>
        </section>
    );
}
