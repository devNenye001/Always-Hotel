import FAQ from "../../components/FAQs/FAQs";
import SEO from "../../components/seo/SEO";
import { BsLightning, BsArrowUpRightCircle } from "react-icons/bs";
import { MdAcUnit, MdOutlineSecurity, MdLocalParking } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaBed, FaGoogle, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../components/button/button";
import "./about-us.css";

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": "https://always-hotel.vercel.app/#hotel",
      "name": "Always Hotel Minna",
      "description":
        "Always Hotel is the top-rated luxury and affordable hotel located at 82 Eastern Bye-Pass, Tudun Wada South, Minna, Niger State. Featuring 24/7 electricity, AC rooms, restaurant and bar, secure parking and CCTV security.",
      "url": "https://always-hotel.vercel.app/about",
      "telephone": "+2348033886334",
      "priceRange": "₦18,500 - ₦60,900",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "82 Eastern Bye-Pass, Tudun Wada South",
        "addressLocality": "Minna",
        "addressRegion": "Niger State",
        "postalCode": "920001",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.6025849,
        "longitude": 6.5760774
      },
      "hasMap": "https://www.google.com/maps/place/Always+Hotel/@9.6025849,6.5760774,17z/data=!4m6!3m5!1s0x104c71c825f07327:0x39229e90ff71186a!8m2!3d9.6025849!4d6.5760774!16s%2Fg%2F11b8z97r9j",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "186"
      }
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
          "name": "About Us",
          "item": "https://always-hotel.vercel.app/about"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Always Hotel located in Minna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always Hotel is located at 82 Eastern Bye-Pass, Tudun Wada South, Minna, Niger State, Nigeria."
          }
        },
        {
          "@type": "Question",
          "name": "Does Always Hotel have 24/7 power and air conditioning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Always Hotel provides guaranteed 24/7 electricity with heavy-duty backup generators and quiet split ACs in our rooms."
          }
        },
        {
          "@type": "Question",
          "name": "How do I make a reservation at Always Hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book directly by contacting us on WhatsApp at +234 803 388 6334 or calling front desk at +234 803 588 8634."
          }
        },
        {
          "@type": "Question",
          "name": "Is there secure parking and security at Always Hotel Minna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we feature 24/7 uniformed security personnel, CCTV surveillance, and spacious free on-site parking for all guests."
          }
        }
      ]
    }
  ]
};

const About = () => {
  const phoneNumber = "2348033886334";
  const googleMapsUrl =
    "https://www.google.com/maps/place/Always+Hotel/@9.6025849,6.5760774,17z/data=!4m6!3m5!1s0x104c71c825f07327:0x39229e90ff71186a!8m2!3d9.6025849!4d6.5760774!16s%2Fg%2F11b8z97r9j";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="about-page">
      <SEO
        title="About Us - Always Hotel Minna | Best Hotel in Minna, Niger State"
        description="Learn about Always Hotel Minna at 82 Eastern Bye-Pass, Tudun Wada South. Top-rated hospitality with 24/7 electricity, AC rooms, restaurant, bar, CCTV security, and easy access to Minna landmarks."
        keywords="about always hotel minna, best hotel in minna, hotels in minna niger state, lodging in tudun wada minna, eastern bye pass hotel minna, affordable luxury hotel minna"
        canonicalPath="/about"
        ogImage="/about.svg"
        schema={aboutSchema}
      />

      {/* Page Heading */}
      <div className="about-page-heading">
        <h2>About Us</h2>
        <p>
          Experience comfort, peace of mind, and genuine hospitality in Minna, Niger State.
        </p>
      </div>

      {/* Main Story Container (Clean 2-Column Style) */}
      <section className="about-container">
        <div className="about-text">
          <p>
            At <strong>Always Hotel</strong>, our mission is to provide a
            comfortable, peaceful, and reliable stay for every guest. Located at
            <em> 82 Eastern Bye-Pass, Tudun Wada South, Minna</em>, we offer a
            warm environment where hospitality comes first.
          </p>
          <p>
            From our clean, well-maintained rooms to our friendly and attentive
            staff, everything we do is centered on making you feel at home.
            Whether you are visiting for business, travel, university activities, 
            or relaxation, we ensure a calm atmosphere, consistent service, and a stay 
            you can trust — always.
          </p>
          <p>
            With guaranteed <strong>24/7 power supply</strong>, chilled air-conditioning, 
            delicious in-house meals, and round-the-clock security, 
            <strong> your comfort is our priority.</strong>
          </p>
        </div>

        <div className="about-image">
          <img
            src="/about.svg"
            alt="Always Hotel Minna - Room Interior"
          />
        </div>
      </section>

      {/* Features / Amenities Grid (Matches Home Page Style) */}
      <section className="about-features-section">
        <span className="about-features-heading">Why Guests Choose Always Hotel</span>
        <div className="about-features-cards">
          <div>
            <span>
              <BsLightning />
            </span>
            <b>24/7 Power Supply</b>
          </div>
          <div>
            <span>
              <MdAcUnit />
            </span>
            <b>Air-Conditioned Rooms</b>
          </div>
          <div>
            <span>
              <IoFastFoodOutline />
            </span>
            <b>Restaurant &amp; Bar</b>
          </div>
          <div>
            <span>
              <MdOutlineSecurity />
            </span>
            <b>Security &amp; CCTV</b>
          </div>
          <div>
            <span>
              <FaBed />
            </span>
            <b>Cozy &amp; Clean Bedding</b>
          </div>
          <div>
            <span>
              <MdLocalParking />
            </span>
            <b>Free On-Site Parking</b>
          </div>
        </div>
      </section>

      {/* Location & Google Map Section */}
      <section className="about-location-section">
        <div className="about-location-heading">
          <h2>Find Us in Minna</h2>
          <p>
            <FaMapMarkerAlt style={{ color: "#cfa477", marginRight: "6px" }} />
            82 Eastern Bye-Pass, Tudun Wada South, Minna, Niger State
          </p>
        </div>

        <div className="about-map-box">
          <iframe
            title="Always Hotel Minna Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.915029992215!2d6.5760774!3d9.6025849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c71c825f07327%3A0x39229e90ff71186a!2sAlways%20Hotel!5e0!3m2!1sen!2sng!4v1766136624430!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="about-location-buttons">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about-map-btn"
          >
            <FaGoogle style={{ color: "#4285f4", marginRight: "6px" }} />
            <span>Open in Google Maps</span>
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Always+Hotel+Minna+Niger+State"
            target="_blank"
            rel="noopener noreferrer"
            className="about-dir-btn"
          >
            <span>Get Driving Directions</span>
            <BsArrowUpRightCircle style={{ color: "#cfa477" }} />
          </a>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQ />

      {/* Last CTA Section */}
      <div className="last-section">
        <span>Ready for a Relaxing Stay?</span>
        <p>
          Clean rooms, friendly staff, 24/7 power and a peaceful environment.
          Always Hotel is perfect for your stay in Minna.
        </p>
        <Button onClick={openWhatsApp} label="Book Your Stay Now" />
      </div>
    </div>
  );
};

export default About;
