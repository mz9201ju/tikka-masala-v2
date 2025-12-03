import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // ✅ scrolling DOWN → hide navbar
                setHidden(true);
            } else {
                // ✅ scrolling UP → show navbar
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className="nav"
            style={{
                transform: hidden ? "translateY(-100%)" : "translateY(0)",
                transition: "transform 0.35s ease",
            }}
        >
            <div className="nav-inner">

                {/* ✅ TOP NAV BUTTONS */}
                <div className="links">
                    <Link to="/">
                        <button
                            style={{
                                opacity: location.pathname === "/" ? 1 : 0.6,
                            }}
                        >
                            Home
                        </button>
                    </Link>

                    <Link to="/menu">
                        <button
                            style={{
                                opacity: location.pathname === "/menu" ? 1 : 0.6,
                                marginLeft: "12px",
                            }}
                        >
                            Menu
                        </button>
                    </Link>

                    <Link to="/catering">
                        <button
                            style={{
                                opacity: location.pathname === "/catering" ? 1 : 0.6,
                                marginLeft: "12px",
                            }}
                        >
                            Catering
                        </button>
                    </Link>
                </div>
            </div>

            {/* ✅ SOCIAL MEDIA ROW (BELOW BUTTONS) */}
            <div className="tm-social-row">
                <a
                    href="https://www.instagram.com/tikkamasalabellevue"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-social-icon ig"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.facebook.com/tikkamasalabellevue"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-social-icon fb"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://wa.me/14255028100"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-social-icon wa"
                >
                    <FaWhatsapp />
                </a>
                {/* ✅ PHONE ICON */}
                <a
                    href="tel:+14255028100"
                    className="tm-social-icon phone"
                >
                    <FaPhoneAlt />
                </a>

                {/* ✅ ADDRESS / MAP ICON */}
                <a
                    href="https://maps.google.com/?q=1624+145th+PL+SE+Bellevue+WA+98007"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-social-icon map"
                >
                    <FaMapMarkerAlt />
                </a>
            </div>
        </nav>
    );
}
