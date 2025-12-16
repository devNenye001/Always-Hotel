import React from "react";
import "./gallery.css";

const images = [
  { src: "h1.jpg", alt: "Hotel Bar" },
  { src: "h2.jpg", alt: "Cozy Bedroom" },
  { src: "h3.jpg", alt: "Hotel Exterior" },
  { src: "h4.jpg", alt: "Lounge Area" },
  { src: "h12.jpg", alt: "Reception Desk" },
  { src: "h13.jpg", alt: "Bar and Seating" },
  { src: "h7.jpg", alt: "Bedroom Setup" },
  { src: "h8.jpg", alt: "Staircase and Hallway" },
  { src: "h9.jpg", alt: "Hotel Grounds" },
  { src: "h10.jpg", alt: "Water Tanks and Branding" },
  { src: "h14.jpg", alt: "Water Tanks and Branding" },
  { src: "h15.jpg", alt: "Water Tanks and Branding" },
  { src: "h16.jpg", alt: "Water Tanks and Branding" },
  { src: "h17.jpg", alt: "Water Tanks and Branding" },
  { src: "h18.jpg", alt: "Water Tanks and Branding" },
  { src: "h19.jpg", alt: "Water Tanks and Branding" },
  { src: "h20.jpg", alt: "Water Tanks and Branding" },
  { src: "h21.jpg", alt: "Water Tanks and Branding" },
  { src: "h22.jpg", alt: "Water Tanks and Branding" },
  { src: "h23.jpg", alt: "Water Tanks and Branding" },
  { src: "h24.jpg", alt: "Water Tanks and Branding" },
  { src: "h25.jpg", alt: "Water Tanks and Branding" },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-heading">
        <h2>Our Gallery</h2>
        <p>
          Take a virtual tour of Always Hotel. From cozy rooms to our modern
          reception, relaxing lounge, restaurant, and bar, our gallery showcases
          the warm, welcoming, and stylish environment we offer to all our
          guests.
        </p>
      </div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
