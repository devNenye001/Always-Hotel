import { BsArrowUpRightCircle } from "react-icons/bs";
import "./hero-section.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero" role="region" aria-label="Always Hotel Minna Hero">
      <div className="hero-content">
        <h1>
          Experience Comfort, Luxury &amp; Warm Hospitality in Minna
        </h1>
        <p>
          Discover Always Hotel at 82 Eastern Bye-Pass, Tudun Wada South, Minna.
          Relax in clean, air-conditioned rooms with 24/7 power, bar &amp; restaurant.
        </p>

        <div className="hero-buttons">
          <Link
            to="/rooms"
            className="btn-outline"
            aria-label="Explore our rooms and suites in Minna"
          >
            Explore Our Rooms
          </Link>
          <Link
            to="/rooms"
            className="btn-filled"
            aria-label="Book a room at Always Hotel Minna"
          >
            <span>Book a Room</span>
            <BsArrowUpRightCircle className="btn-icon" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
