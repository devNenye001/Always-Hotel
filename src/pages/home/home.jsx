import "./home.css";
import TestimonialCard from "../../components/testimonials/testimonials";
import HeroSection from "../../components/hero-section/hero-section";
import { BsArrowUpRightCircle, BsLightning } from "react-icons/bs";
import RoomCard from "../../components/room-card/room-card";
import { MdAcUnit, MdOutlineSecurity } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import Foodcard from "../../components/food-card/food-card";
import { AiFillStar } from "react-icons/ai";
import Button from "../../components/button/button";
import SEO from "../../components/seo/SEO";
import { Link } from "react-router-dom";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": "https://always-hotel.vercel.app/#hotel",
      "name": "Always Hotel Minna",
      "alternateName": "Always Hotel",
      "description":
        "Always Hotel is the best luxury and affordable hotel in Minna, Niger State located at 82 Eastern Bye-Pass, Tudun Wada South. Featuring 24/7 uninterrupted power, air-conditioned rooms, restaurant and bar, secure parking and 24/7 security.",
      "url": "https://always-hotel.vercel.app/",
      "telephone": "+2348033886334",
      "priceRange": "₦18,500 - ₦60,900",
      "currenciesAccepted": "NGN",
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
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "186",
        "reviewCount": "186"
      }
    }
  ]
};

const Home = () => {
  const phoneNumber = "2348033886334";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="Home">
      <SEO
        title="Always Hotel Minna | Best Hotel in Minna, Niger State"
        description="Experience unparalleled comfort, 24/7 power, air-conditioned rooms, exquisite dining and bar at Always Hotel Minna. Located at 82 Eastern Bye-Pass, Tudun Wada South, Minna."
        keywords="best hotel in minna, always hotel minna, hotels in minna, hotel in niger state, luxury rooms minna, affordable hotel minna, tudun wada hotel, eastern bye pass lodging minna"
        canonicalPath="/"
        schema={homeSchema}
      />

      <HeroSection />

      {/* Our Story Section */}
      <section className="our-story" aria-label="Always Hotel Story">
        <div className="left-story">
          <span>Our Story &amp; Hospitality</span>
          <p>
            Trusted by over 10,000 travelers, we are proud to be rated as the premier
            hospitality destination in Minna with an average Google rating of 4.7{" "}
            <AiFillStar color="gold" size={20} /> — your comfort, privacy, and
            satisfaction are always our top priority.
          </p>
        </div>
        <div className="right-story">
          <p>
            Always Hotel was built on a promise of dependable comfort,{" "}
            <span style={{ color: "grey" }}>
              offering every guest a peaceful, safe, and welcoming place to call home in Minna.
            </span>
          </p>
          <Link
            className="story-btn"
            to="/about"
            aria-label="Learn more about Always Hotel story and facilities"
          >
            <span>Learn More</span>
            <BsArrowUpRightCircle className="story-icon" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Room Showcase Section */}
      <section className="room-section" aria-label="Always Hotel Rooms and Suites">
        <div className="room-section-heading">
          <h2>Choose the Perfect Room in Minna</h2>
          <p>
            Spacious, impeccably clean, and designed for relaxation. Enjoy 24/7 power, 
            whisper-quiet AC, premium bedding, and absolute privacy.
          </p>
        </div>
        <div className="room-section-cards">
          <RoomCard
            title="Standard Room"
            price="₦18,500 per night"
            image="/room1.jpg"
            amenities={{
              ac: false,
              fan: true,
              tv: true,
              heater: false,
              light247: true,
            }}
          />
          <RoomCard
            title="Semi-Standard Room"
            price="₦20,600 per night"
            image="/room2.jpg"
            amenities={{
              ac: true,
              fan: false,
              tv: true,
              heater: true,
              light247: true,
            }}
          />
          <RoomCard
            title="VIP Room"
            price="₦28,700 per night"
            image="/room4.png"
            amenities={{
              ac: true,
              fan: false,
              tv: true,
              heater: true,
              light247: true,
            }}
          />
        </div>
      </section>

      {/* Features & Amenities Section */}
      <section className="features-section" aria-label="Hotel Amenities">
        <h2 className="features-heading">Designed for Your Ultimate Comfort</h2>
        <div className="features-cards">
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
            <b>24/7 Security &amp; CCTV</b>
          </div>
        </div>
      </section>

      {/* Food & Dining Section */}
      <section className="food-section" aria-label="Always Hotel Restaurant and Bar">
        <div className="food-top">
          <div className="food-section-heading">
            <span>Our In-House Restaurant</span>
            <h2>Delicious Meals, Served with Warmth</h2>
            <p>
              Savor fresh local Nigerian dishes, continental breakfasts, and chilled
              beverages in our welcoming dining lounge.
            </p>
          </div>
        </div>

        <div className="food-bottom">
          <Foodcard
            imgSrc="/jollof.jpg"
            title="Jollof Rice"
            category="Rice Dishes"
            price="N1200"
          />
          <Foodcard
            imgSrc="/egusi.jpg"
            title="Egusi Soup"
            category="Soup Dishes"
            price="N2500"
          />
          <Foodcard
            imgSrc="/oha.jpg"
            title="Oha Soup"
            category="Soup Dishes"
            price="N2000"
          />
          <Foodcard
            imgSrc="/vege.jpg"
            title="Vegetable Soup"
            category="Soup Dishes"
            price="N3000"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section" aria-label="Guest Reviews">
        <div className="testimonial-section-heading">
          <span>Guest Reviews</span>
          <h2>What Our Guests Say About Always Hotel</h2>
        </div>
        <div className="testimonial-cards">
          <TestimonialCard
            name="Fatima Usman"
            review="Very clean and comfortable rooms. The environment is peaceful, and the staff were so welcoming. I really enjoyed my stay in Minna."
            rating={5}
          />
          <TestimonialCard
            name="Aisha Bello"
            review="Always Hotel is my go-to place anytime I’m in Minna. Affordable, neat, and consistently reliable 24/7 power."
            rating={4}
          />
          <TestimonialCard
            name="Samuel Okoro"
            review="Good value for money. The amenities were top-notch and the location on Eastern Bye-Pass made moving around easy."
            rating={4}
          />
          <TestimonialCard
            name="Salma Mohammed"
            review="I loved how calm and secure the hotel felt. The room was spotless and the restaurant service was excellent."
            rating={4}
          />
          <TestimonialCard
            name="Zainab Abdullahi"
            review="Great value for money! The rooms are spacious, the AC works perfectly, and the entire place is well maintained."
            rating={5}
          />
          <TestimonialCard
            name="Elom Chimaobi"
            review="From check-in to check-out, everything was smooth. The staff treated me with kindness and professionalism."
            rating={4}
          />
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-section" aria-label="Photo Gallery Preview">
        <div className="gallery-section-heading">
          <h2>Take a Look Inside Always Hotel</h2>
          <p>A beautiful blend of comfort, modern simplicity, and warm ambiance in Minna.</p>
          <div className="gallery-section-pics">
            <img src="/e1.png" alt="Always Hotel Minna Reception and Front Desk" />
            <img src="/e2.jpg" alt="Always Hotel Minna Cozy Guest Bedroom" />
            <img src="/e4.jpg" alt="Always Hotel Minna Executive Suite Living Area" />
            <img src="/e10.png" alt="Always Hotel Minna Exterior and Grounds" />
          </div>
        </div>
      </section>

      {/* Final Booking Call to Action */}
      <section className="last-section" aria-label="Book Your Stay">
        <h2>Ready for a Relaxing Stay in Minna?</h2>
        <p>
          Clean rooms, 24/7 power, friendly staff, and peaceful environment at 
          82 Eastern Bye-Pass, Tudun Wada South. Book with us today.
        </p>
        <Button onClick={openWhatsApp} label="Book Your Stay Now" />
      </section>
    </div>
  );
};

export default Home;
