import heroImg from "../../assets/tikka-logo.jpg";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      {/* ✅ TOP CENTER LOGO */}
      <img src={heroImg} alt="Logo" className="catering-logo" />

      {/* ✅ CENTER DELIVERY BUTTONS */}
      <div className="home-delivery-center">
        <a
          href="https://www.ubereats.com/store/tikka-masala/HL0YuQONTPaJQqFc9Ueiyw"
          target="_blank"
          rel="noreferrer"
          className="delivery-pill uber"
        >
          UberEats
        </a>

        <a
          href="https://www.doordash.com/store/tikkamasala-bellevue-2474911/2494193/"
          target="_blank"
          rel="noreferrer"
          className="delivery-pill doordash"
        >
          DoorDash
        </a>

        <a
          href="https://www.grubhub.com/restaurant/tikka-masala-1624-145th-place-southeast-bellevue/7492112"
          target="_blank"
          rel="noreferrer"
          className="delivery-pill grubhub"
        >
          Grubhub
        </a>
      </div>
    </section>
  );
}
