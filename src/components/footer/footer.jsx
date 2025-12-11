import './footer.css'
import { Link } from 'react-router-dom'

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
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/restaurant">Restaurant</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footerdiv">
        <h3>Restaurant</h3>
        <Link to="/restaurant/rice">Rice Dishes</Link>
        <Link to="/restaurant/soups">Soups and Swallows</Link>
        <Link to="/restaurant/proteins">Proteins</Link>
        <Link to="/restaurant/drinks">Drinks</Link>
      </div>
      <div className="footerdiv">
        <h3>Contact</h3>
       
        <p> 📍 Address: 82 Eastern Bye-Pass, Tudun Wada South, Minna, Niger, Nigeria</p>
        <p> 📞 Phone Number: +234 803 388 6334</p>
        <p> 📧  Email Address: info@alwayshotel@gmail.com</p>
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