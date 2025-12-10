import './footer.css'

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footerdivmain">
        <img src="/logo1.png" alt="Always Hotel logo" height="70"/>
      </div>
   <div className='footergroup'>
       <div className='footerdiv'>
        <h3>Quick Links</h3>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Rooms</a>
        <a href="">Gallery</a>
        <a href="">Restaurant</a>
        <a href="#">Contact</a>
      </div>
      <div className="footerdiv">
        <h3>Restaurant</h3>
        <a href="">Rice Dishes</a>
        <a href="">Soups and Swallows</a>
        <a href="">Proteins</a>
        <a href="">Drinks</a>
      </div>
      <div className="footerdiv">
        <h3>Contact</h3>
       
        <p> 📍 Address: 82 Eastern Bye-Pass, Tudun Wada South, Minna, Niger, Nigeria</p>
        <p> 📞 Phone Number: +234 803 388 6334</p>
        <p> 📧  Email Address: info@alwayshotel.com</p>
      </div>
      </div>
   </div>

      <div className="footer-bottom">
        <p>© 2025 Always Hotel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer