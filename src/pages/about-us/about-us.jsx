import FAQ from '../../components/FAQs/FAQs';
import './about-us.css';

const About = () => {
  return (
    <div className='about-page'>
    <h2>About Us</h2>
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
          Whether you're visiting for business, travel, or relaxation, we ensure
          a calm atmosphere, consistent service, and a stay you can trust —
          always.
        </p>
        <p>
          At Always Hotel, <strong>your comfort is our priority.</strong>
        </p>
      </div>

      <div className="about-image">
        <img
          src="about.svg"
          alt="Always Hotel Room"
        />
      </div>
    </section>
    <FAQ />
</div>
  );
};

export default About;
