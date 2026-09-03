import { useState } from "react";
import SEO from "../../components/seo/SEO";
import { FaPhoneAlt, FaWhatsapp, FaGoogle, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import "./contact.css";

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://always-hotel.vercel.app/contact#webpage",
      "name": "Contact Always Hotel Minna",
      "url": "https://always-hotel.vercel.app/contact"
    },
    {
      "@type": "Hotel",
      "@id": "https://always-hotel.vercel.app/#hotel",
      "name": "Always Hotel Minna",
      "telephone": "+2348033886334",
      "email": "alwayshotel001@gmail.com",
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
      "hasMap": "https://www.google.com/maps/place/Always+Hotel/@9.6025849,6.5760774,17z/data=!4m6!3m5!1s0x104c71c825f07327:0x39229e90ff71186a!8m2!3d9.6025849!4d6.5760774!16s%2Fg%2F11b8z97r9j"
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
          "name": "Contact Us",
          "item": "https://always-hotel.vercel.app/contact"
        }
      ]
    }
  ]
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const googleMapsUrl =
    "https://www.google.com/maps/place/Always+Hotel/@9.6025849,6.5760774,17z/data=!4m6!3m5!1s0x104c71c825f07327:0x39229e90ff71186a!8m2!3d9.6025849!4d6.5760774!16s%2Fg%2F11b8z97r9j";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Always Hotel Minna!%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Email:* ${encodeURIComponent(
      formData.email
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone || "N/A"
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    
    setSubmitted(true);
    window.open(`https://wa.me/2348033886334?text=${text}`, "_blank");
  };

  return (
    <div className="container">
      <SEO
        title="Contact Us &amp; Location Map - Always Hotel Minna"
        description="Get in touch with Always Hotel Minna at 82 Eastern Bye-Pass, Tudun Wada South. Call +234 803 388 6334, WhatsApp booking, or get instant Google Maps directions."
        keywords="contact always hotel minna, always hotel phone number, always hotel address minna, hotel near eastern bye pass minna map"
        canonicalPath="/contact"
        schema={contactSchema}
      />

      {/* Header Section */}
      <div className="contact-header">
        <h2>Contact Us &amp; Location</h2>
        <p>
          Have questions or want to make an instant room booking? We are here 24/7 to help.
          Reach out via phone, WhatsApp, email, or visit us in person at 82 Eastern Bye-Pass,
          Tudun Wada South, Minna, Niger State.
        </p>
      </div>

      {/* Main Grid */}
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="form-card">
          <h3 style={{ marginBottom: "1.5rem", fontSize: "1.25rem", color: "#111827" }}>
            Send Us a Direct Message
          </h3>

          {submitted && (
            <div
              style={{
                background: "#dcfce7",
                color: "#15803d",
                padding: "1rem",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                fontSize: "0.95rem",
              }}
            >
              ✓ Thank you! Redirecting to WhatsApp to send your message instantly.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">
                Full Name <span className="required">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ibrahim Adamu"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">
                Email Address <span className="required">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. ibrahim@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone Number (WhatsApp)</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +234 803 123 4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                Message / Booking Request <span className="required">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us your check-in date, room preference, or any inquiries..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message via WhatsApp
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            title="Always Hotel Minna Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.915029992215!2d6.5760774!3d9.6025849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c71c825f07327%3A0x39229e90ff71186a!2sAlways%20Hotel!5e0!3m2!1sen!2sng!4v1766136624430!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay Card */}
          <div className="overlay-card">
            <h3>Always Hotel Minna</h3>
            <p>
              📍 82 Eastern Bye-Pass, Tudun Wada South, Minna, Niger State
            </p>
            <div className="overlay-actions" style={{ flexDirection: "column", gap: "0.75rem", alignItems: "stretch" }}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
                style={{ textAlign: "center", textDecoration: "none", display: "inline-block" }}
              >
                <FaGoogle style={{ marginRight: "6px", color: "#4285f4" }} /> Open in Google Maps
              </a>
              <a href="tel:+2348033886334" className="phone-link" style={{ justifyContent: "center" }}>
                <FaPhoneAlt style={{ color: "#cfa477" }} />
                +234 803 388 6334
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
