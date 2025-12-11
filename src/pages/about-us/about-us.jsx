import './about-us.css';

const About = () => {
  return (
    <div className="about-us">
        <div className="about-heading">
            <p>About Us</p>
        </div>
      <div className="about-section">
       <div className="about-text">
         <p>
          At Always Hotel, our mission is to provide a comfortable, peaceful,
          and reliable stay for every guest. Located at 82 Eastern Bye-Pass,
          Tudun Wada South, Minna, we offer a warm environment where hospitality
          comes first. <br /> <br />
          From our clean, well-maintained rooms to our friendly and attentive
          staff, everything we do is centered on making you feel at home.
          Whether you’re visiting for business, travel, or relaxation, we ensure
          a calm atmosphere, consistent service, and a stay you can trust —
          always. <br /> <br />
          At Always Hotel, your comfort is our priority.
        </p>
       </div>

        <img src="/about.svg" alt="" />
      </div>
    </div>
  );
};

export default About;
