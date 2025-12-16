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

const home = () => {
  const phoneNumber = "2348033886334";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <div className="Home">
      <HeroSection />

      <div className="our-story">
        <div className="left-story">
          <span>Our Story</span>
          <p>
            Trusted by over 10,000 travelers, we’re proud to deliver top-rated
            stays with an average rating of 4.7{" "}
            <AiFillStar color="gold" size={20} /> — your comfort and
            satisfaction are always our top priority.
          </p>
        </div>
        <div className="right-story">
          <p>
            Always Hotel was built on a promise of comfort,{" "}
            <span style={{ color: "grey" }}>
              offering every guest a peaceful and welcoming place to call home.
            </span>
          </p>
          <a
            className="story-btn"
            href="/about"
            aria-label="learn more about our story"
          >
            <span>Learn More</span>
            <BsArrowUpRightCircle className="story-icon" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="room-section">
        <div className="room-section-heading">
          <pre>Choose the Perfect Room</pre>
          <p>
            Spacious, clean, and designed for comfort. Enjoy AC, premium bedding
            and privacy.
          </p>
        </div>
        <div className="room-section-cards">
          <RoomCard
            title="Standard Room"
            price="₦12,000 per night"
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
            price="₦20,000 per night"
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
            price="₦55,000 per night"
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
      </div>

      <div className="features-section">
        <span className="features-heading">Designed for Your Comfort</span>
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
            <b>Restaurant & Bar</b>
          </div>
          <div>
            <span>
              <MdOutlineSecurity />
            </span>
            <b>Security & CCTV</b>
          </div>
        </div>
      </div>

      <div className="food-section">
        <div className="food-top">
          <div className="food-section-heading">
            <span>Our Restaurant</span>
            <pre>Delicious meals, served with warmth.</pre>
            <p>
              Enjoy delicious meals and refreshing drinks in a warm, inviting
              atmosphere.
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
      </div>

      <div className="testimonial-section">
        <div className="testimonial-section-heading">
          <span>Testimonals</span>
          <pre>What Our Guests Say</pre>
        </div>
        <div className="testimonial-cards">
          <TestimonialCard
            name="Fatima Usman"
            review="Very clean and comfortable rooms. The environment is peaceful, and the staff were so welcoming. I really enjoyed my stay."
            rating={5}
          />
          <TestimonialCard
            name="Aisha Bello"
            review="Always Hotel is my go-to place anytime I’m in Minna. Affordable, neat, and consistently reliable"
            rating={4}
          />
          <TestimonialCard
            name="Samuel Okoro"
            review="Good value for money. The amenities were top-notch."
            rating={4}
          />
          <TestimonialCard
            name="Salma Mohammed"
            review="I loved how calm and secure the hotel felt. The room was spotless and the service was excellent"
            rating={4}
          />
          <TestimonialCard
            name="Zainab Abdullahi"
            review="Great value for money! The rooms are spacious, the AC works perfectly, and the entire place is well maintained"
            rating={5}
          />
          <TestimonialCard
            name="Elom Chimaobi"
            review="From check-in to check-out, everything was smooth. The staff treated me with kindness and professionalism.”"
            rating={4}
          />
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-section-heading">
          <pre>Take a Look Inside</pre>
          <span>A beautiful blend of comfort and modern simplicity.</span>
          <div className="gallery-section-pics">
            <img src="/e1.png" alt="gallery image 1" />
            <img src="/e2.jpg" alt="gallery image 2" />
            <img src="/e4.jpg" alt="gallery image 3" />
            <img src="/e10.png" alt="gallery image 4" />
          </div>
        </div>
      </div>

      <div className="last-section">
        <span>Ready for a Relaxing Stay?</span>
        <p>
          Clean rooms, friendly staff, and peaceful environment. Always Hotel is
          perfect for a relaxing stay.
        </p>
        <Button onClick={openWhatsApp} label="Book Your Stay Now" />
      </div>
    </div>
  );
};

export default home;
