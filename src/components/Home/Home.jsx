import { DELIVERY_LINKS } from "../../constants";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-delivery-center">
        <a
          href={DELIVERY_LINKS.ubereats}
          target="_blank"
          rel="noreferrer"
          className="delivery-pill uber"
        >
          UberEats
        </a>

        <a
          href={DELIVERY_LINKS.doordash}
          target="_blank"
          rel="noreferrer"
          className="delivery-pill doordash"
        >
          DoorDash
        </a>

        <a
          href={DELIVERY_LINKS.grubhub}
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
