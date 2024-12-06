import React from 'react'
import "../pages/Register.css"
import facebook from "../assets/facebook1.png"
import instagram from "../assets/instagram1.png"
import twitter from "../assets/X1.png"

const Footer = () => {
  return (
    <div>
   <footer>
    <div className="footer-content">
        <p>&copy; 2024 Stadium Ticket Booking. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://x.com/?lang=en">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
