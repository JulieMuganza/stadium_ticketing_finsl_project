import React from 'react'
import "./Home.css"
import facebook from "../assets/facebook1.png"
import instagram from "../assets/instagram1.png"
import twitter from "../assets/x1.png"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next';



function Homepage() {

  const {t,i18n} = useTranslation();
  
  return (
    <div>


      {/* <!-- Header --> */}
    <Header/>
      {/* <!-- Hero Section --> */}
      <section id="home" className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>{t('Welcome to Stadium Ticket Booking')}</h2>
          <h3>{t('Book Your Favorite Events')}</h3>
          <p>{t('Experience the thrill of live matches with just a few clicks!')}</p>
          <a href="/register" className="btn">{t('Get Started')}</a>
        </div>
      </section>

      {/* <!-- Footer --> */}
   <Footer/>


    </div>
  )
}

export default Homepage;
