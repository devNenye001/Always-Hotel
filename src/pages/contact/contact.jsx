
import './contact.css'; 

const ContactUs = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to make a booking? We're here to help. Reach out to
          us via phone, email, or visit us in person — we'll make sure your
          experience is seamless and welcoming.
        </p>
      </div>

      {/* Main Grid */}
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="form-card">
          <form>
            <div className="form-group">
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>
                Email Address <span className="required">*</span>
              </label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>
                Message <span className="required">*</span>
              </label>
              <textarea required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.396!2d6.532!3d9.583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzUn!5e0!3m2!1sen!2sng!4v1730000000000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>

          {/* Overlay Card */}
          <div className="overlay-card">
            <h3>Minna, Niger State</h3>
            <p>
              82 Eastern Bye-Pass, Tudun<br />
              Wada South
            </p>
            <div className="overlay-actions">
              <button className="contact-btn">Contact</button>
              <a href="tel:+2348035888634" className="phone-link">
                <svg className="phone-icon" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.58-.58a1.36 1.36 0 00-1.38.26l-2.14 2.14a15.48 15.48 0 01-6.78-6.78l2.14-2.14a1.36 1.36 0 00.26-1.38c-.38-1.16-.58-2.35-.58-3.58 0-.47-.38-.85-.85-.85H5.5c-.47 0-.85.38-.85.85 0 8.94 7.26 16.2 16.2 16.2.47 0 .85-.38.85-.85v-1.57c0-.47-.38-.85-.85-.85z" />
                </svg>
                +2348035888634
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;