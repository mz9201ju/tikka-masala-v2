export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-item">
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=1624+145th+PL+SE,+Bellevue,+WA+98007"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link footer-link-address"
                    >
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>Address:</strong> 1624 145th PL SE, Bellevue, WA 98007
                    </a>
                </p>

                <p className="footer-item">
                    <a href="tel:+14255028100" className="footer-link footer-link-phone">
                        <i className="fa-solid fa-phone"></i>
                        <strong>Call Now:</strong> (425) 502-8100
                    </a>
                </p>

                <p className="footer-item">
                    <a
                        href="https://wa.me/14255028100"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link footer-link-whatsapp"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        <strong>WhatsApp:</strong> (425) 502-8100
                    </a>
                </p>
            </div>
        </footer>
    );
}
