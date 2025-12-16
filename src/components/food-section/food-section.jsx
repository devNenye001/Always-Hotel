import { useRef, useState, useEffect } from "react";

import "./food-section.css";
import Foodcard from "../food-card/food-card";

const FoodSection = ({ id, title, items }) => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const showButtons =
    (isMobile && items.length > 1) || (!isMobile && items.length > 4);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <section id={id} className="food-section">
      <div className="section-header">
        <h2>{title}</h2>

        {showButtons && (
          <div className="carousel-buttons">
            <button onClick={() => scroll("left")}>‹</button>
            <button onClick={() => scroll("right")}>›</button>
          </div>
        )}
      </div>

      <div className="food-slider" ref={sliderRef}>
        {items.map((item, i) => (
          <Foodcard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
