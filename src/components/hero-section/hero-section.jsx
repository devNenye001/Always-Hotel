import { BsArrowUpRightCircle } from "react-icons/bs";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero" role="region" aria-label="Hero">
      <div className="hero-content">
        <h1>Experience Comfort & Warm <br /> Hospitality</h1>
        <p>
          Relax in beautifully furnished rooms designed for comfort, safety, and <br />
          convenience — all at friendly prices.
        </p>

        <div className="hero-buttons">
          <a className="btn-outline" href="/rooms" aria-label="Explore our rooms">
            Explore Our Rooms
          </a>

          <a className="btn-filled" href="/rooms" aria-label="Book a room">
            <span>Book a Room</span>
            <BsArrowUpRightCircle className="btn-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
