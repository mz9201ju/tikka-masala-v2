import { PHONE_DISPLAY, ADDRESS, WHATSAPP_URL, ADDRESS_MAPS_URL } from "../constants";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-item">
                    <a
                        href={ADDRESS_MAPS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link footer-link-address"
                    >
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>Address:</strong> {ADDRESS}
                    </a>
                </p>

                <p className="footer-item">
                    <a href="tel:+14255028100" className="footer-link footer-link-phone">
                        <i
                            className="fa-solid fa-phone"
                            style={{ marginRight: "8px", color: "#060f09ff", fontSize: "18px" }}></i>
                        <strong>Call Now:</strong> {PHONE_DISPLAY}
                    </a>
                </p>

                <p className="footer-item">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        <i
                            className="fa-brands fa-whatsapp"
                            style={{ marginRight: "8px", color: "#25D366", fontSize: "18px" }}
                        ></i>
                        <strong>WhatsApp:</strong> {PHONE_DISPLAY}
                    </a>
                </p>
            </div>
        </footer>
    );
}
