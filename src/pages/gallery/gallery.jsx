import { useState } from "react";
import SEO from "../../components/seo/SEO";
import "./gallery.css";

const galleryImages = [
  { src: "h1.jpg", alt: "Always Hotel Minna - Fully Stocked Chilled Bar and Counter", category: "bar" },
  { src: "h2.jpg", alt: "Always Hotel Minna - Cozy Air-Conditioned Master Bedroom", category: "rooms" },
  { src: "h3.jpg", alt: "Always Hotel Minna - Hotel Entrance and Secure Compound", category: "exterior" },
  { src: "h4.jpg", alt: "Always Hotel Minna - Relaxing Reception Lounge and Guest Waiting Area", category: "exterior" },
  { src: "h12.jpg", alt: "Always Hotel Minna - Warm Welcome Front Desk & Reception", category: "exterior" },
  { src: "h13.jpg", alt: "Always Hotel Minna - Bar Lounge Seating Area for Guests", category: "bar" },
  { src: "h7.jpg", alt: "Always Hotel Minna - Super Standard Bedroom Setup with Clean Linens", category: "rooms" },
  { src: "h8.jpg", alt: "Always Hotel Minna - Well-Lit Staircase and Hallway", category: "exterior" },
  { src: "h9.jpg", alt: "Always Hotel Minna - Hotel Grounds and Secured Parking Area", category: "exterior" },
  { src: "room1.jpg", alt: "Always Hotel Minna - Standard Room with Queen Bed", category: "rooms" },
  { src: "room2.jpg", alt: "Always Hotel Minna - Super Standard Room with AC & Flat TV", category: "rooms" },
  { src: "room4.png", alt: "Always Hotel Minna - VIP Luxury Suite with Modern Interior", category: "rooms" },
  { src: "room5.jpg", alt: "Always Hotel Minna - Bridal Suite Setup", category: "rooms" },
  { src: "room8.jpg", alt: "Always Hotel Minna - Executive Suite Bedroom", category: "rooms" },
  { src: "room9.jpg", alt: "Always Hotel Minna - Executive Royal Suite", category: "rooms" },
  { src: "jollof.jpg", alt: "Always Hotel Minna Restaurant - Fresh Nigerian Jollof Rice", category: "restaurant" },
  { src: "egusi.jpg", alt: "Always Hotel Minna Restaurant - Traditional Egusi Soup and Swallow", category: "restaurant" },
  { src: "oha.jpg", alt: "Always Hotel Minna Restaurant - Delicious Oha Soup", category: "restaurant" },
  { src: "h10.jpg", alt: "Always Hotel Minna - Dedicated Water Storage & 24/7 Supply", category: "exterior" },
  { src: "h14.jpg", alt: "Always Hotel Minna - Spotless Corridor & Guest Wing", category: "exterior" },
  { src: "h15.jpg", alt: "Always Hotel Minna - Secure Gated Compound View", category: "exterior" },
  { src: "h16.jpg", alt: "Always Hotel Minna - Cozy Room Angle with Ambient Lighting", category: "rooms" },
  { src: "h17.jpg", alt: "Always Hotel Minna - Premium Guest Bathroom Facilities", category: "rooms" },
  { src: "h18.jpg", alt: "Always Hotel Minna - Comfortable Bedside Setup", category: "rooms" },
  { src: "h19.jpg", alt: "Always Hotel Minna - Executive Suite Sitting Lounge", category: "rooms" },
  { src: "h20.jpg", alt: "Always Hotel Minna - Exterior Night Ambiance & Lighting", category: "exterior" },
  { src: "h21.jpg", alt: "Always Hotel Minna - Guest Wing Architecture", category: "exterior" },
  { src: "h22.jpg", alt: "Always Hotel Minna - Calm and Serene Courtyard", category: "exterior" },
  { src: "h23.jpg", alt: "Always Hotel Minna - Secure Perimeter & Parking", category: "exterior" },
  { src: "h24.jpg", alt: "Always Hotel Minna - Modern Room Layout", category: "rooms" },
  { src: "h25.jpg", alt: "Always Hotel Minna - Reception Hallway", category: "exterior" }
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      "@id": "https://always-hotel.vercel.app/gallery#gallery",
      "name": "Always Hotel Minna Photo Gallery",
      "description":
        "High-resolution photos of Always Hotel in Minna, Niger State. View our luxury rooms, VIP suites, restaurant, bar, and secure hotel grounds.",
      "url": "https://always-hotel.vercel.app/gallery"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://always-hotel.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gallery",
          "item": "https://always-hotel.vercel.app/gallery"
        }
      ]
    }
  ]
};

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="gallery-container">
      <SEO
        title="Photo Gallery - Always Hotel Minna | Tour Our Rooms & Facilities"
        description="Take a visual tour of Always Hotel Minna at 82 Eastern Bye-Pass, Tudun Wada South. View photos of our guest rooms, VIP suites, bar, restaurant, and facilities."
        keywords="always hotel minna photos, hotel pictures minna, minna hotel rooms gallery, tudun wada hotel pictures"
        canonicalPath="/gallery"
        ogImage="/h1.jpg"
        schema={gallerySchema}
      />

      <div className="gallery-heading">
        <h2>Our Photo Gallery</h2>
        <p>
          Take a visual tour of Always Hotel. From our cozy, air-conditioned rooms to our modern
          reception, relaxing lounge, savory restaurant, and chilled bar, explore the serene 
          and stylish hospitality we offer every guest in Minna, Niger State.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="gallery-tabs">
        <button
          className={`tab-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Photos ({galleryImages.length})
        </button>
        <button
          className={`tab-btn ${filter === "rooms" ? "active" : ""}`}
          onClick={() => setFilter("rooms")}
        >
          Rooms &amp; Suites
        </button>
        <button
          className={`tab-btn ${filter === "restaurant" ? "active" : ""}`}
          onClick={() => setFilter("restaurant")}
        >
          Restaurant
        </button>
        <button
          className={`tab-btn ${filter === "bar" ? "active" : ""}`}
          onClick={() => setFilter("bar")}
        >
          Bar &amp; Lounge
        </button>
        <button
          className={`tab-btn ${filter === "exterior" ? "active" : ""}`}
          onClick={() => setFilter("exterior")}
        >
          Exterior &amp; Grounds
        </button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-caption">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
