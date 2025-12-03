import "./Contact.css";

export default function Contact() {
    return (
        <section className="tm-contact">
            <div className="tm-contact-inner">
                <h2 className="tm-contact-title">Contact Us</h2>
                <p className="tm-contact-subtitle">
                    We’re one tap away — call, message, or visit us anytime.
                </p>

                <div className="tm-contact-grid">
                    {/* ✅ WHATSAPP */}
                    <a
                        href="https://wa.me/14255028100"
                        target="_blank"
                        rel="noreferrer"
                        className="tm-contact-card whatsapp"
                    >
                        💬
                        <div>
                            <h4>WhatsApp</h4>
                            <p>(425) 502-8100</p>
                        </div>
                    </a>

                    {/* ✅ PHONE */}
                    <a href="tel:+14255028100" className="tm-contact-card phone">
                        📞
                        <div>
                            <h4>Call Us</h4>
                            <p>(425) 502-8100</p>
                        </div>
                    </a>

                    {/* ✅ ADDRESS */}
                    <a
                        href="https://maps.google.com/?q=1624+145th+Pl+SE,+Bellevue,+WA+98007"
                        target="_blank"
                        rel="noreferrer"
                        className="tm-contact-card location"
                    >
                        📍
                        <div>
                            <h4>Visit Us</h4>
                            <p>
                                1624 145th PL SE<br />
                                Bellevue, WA 98007
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
