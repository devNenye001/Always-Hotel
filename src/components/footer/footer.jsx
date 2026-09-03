import "./footer.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const googleMapsUrl =
    "https://www.google.com/maps/place/Always+Hotel/@9.6025849,6.5760774,17z/data=!4m6!3m5!1s0x104c71c825f07327:0x39229e90ff71186a!8m2!3d9.6025849!4d6.5760774!16s%2Fg%2F11b8z97r9j";

  return (
    <footer className="footer" itemScope itemType="https://schema.org/Hotel">
      <div className="footer-top">
        <div className="footerdivmain">
          <Link to="/" aria-label="Always Hotel Minna Home">
            <img
              src="/logo1.png"
              alt="Always Hotel Minna - Best Luxury & Affordable Lodging"
              height="70"
              itemProp="logo"
            />
          </Link>
          <p style={{ color: "#9ca3af", marginTop: "1rem", fontSize: "0.9rem", lineHeight: "1.6", maxWidth: "280px" }}>
            Always Hotel is the premier hospitality destination in Minna, Niger State. Providing 
            unmatched comfort, 24/7 power, and genuine Nigerian warmth.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#cfa477",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              <FaGoogle /> Find Us on Google Maps
            </a>
          </div>
        </div>

        <div className="footergroup">
          <div className="footerdiv">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/rooms">Rooms &amp; Suites</Link>
            <Link to="/gallery">Photo Gallery</Link>
            <Link to="/restaurant">Restaurant &amp; Bar</Link>
            <Link to="/contact">Contact &amp; Map</Link>
          </div>

          <div className="footerdiv">
            <h3>Restaurant &amp; Bar</h3>
            <Link to="/restaurant#rice">Rice Dishes</Link>
            <Link to="/restaurant#soups">Soups &amp; Swallows</Link>
            <Link to="/restaurant#breakfast">Breakfast Menu</Link>
            <Link to="/restaurant#drinks">Chilled Drinks &amp; Bar</Link>
          </div>

          <div className="footerdiv">
            <h3>Contact &amp; Location</h3>
            <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <FaMapMarkerAlt style={{ color: "#cfa477", marginRight: "6px" }} />
              <span itemProp="streetAddress">82 Eastern Bye-Pass, Tudun Wada South</span>,{" "}
              <span itemProp="addressLocality">Minna</span>,{" "}
              <span itemProp="addressRegion">Niger State</span>, Nigeria
            </p>
            <p>
              <FaPhoneAlt style={{ color: "#cfa477", marginRight: "6px" }} />
              <a href="tel:+2348033886334" style={{ color: "inherit", textDecoration: "none" }} itemProp="telephone">
                +234 803 388 6334
              </a>
            </p>
            <p>
              <FaWhatsapp style={{ color: "#25d366", marginRight: "6px" }} />
              <a
                href="https://wa.me/2348033886334"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                WhatsApp Chat &amp; Booking
              </a>
            </p>
            <p>
              <FaEnvelope style={{ color: "#cfa477", marginRight: "6px" }} />
              <a href="mailto:alwayshotel001@gmail.com" style={{ color: "inherit", textDecoration: "none" }} itemProp="email">
                alwayshotel001@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Always Hotel Minna. All rights reserved. • Best Luxury &amp; Affordable Hotel in Minna, Niger State</p>
      </div>
    </footer>
  );
};

export default Footer;
