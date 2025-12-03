import { Link, useLocation } from "react-router-dom";
import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // ✅ SHOW ONLY WHEN USER IS AT THE VERY TOP
            if (window.scrollY <= 20) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="nav"
            style={{
                transform: showNav ? "translateY(0)" : "translateY(-120%)",
                transition: "transform 0.35s ease, opacity 0.25s ease",
                opacity: showNav ? 1 : 0,
                pointerEvents: showNav ? "auto" : "none",
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
