import React, { useState } from 'react';
import "../pages/Home.css"; // Ensure this file includes premium styles
import { useTranslation } from 'react-i18next';


const Header = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  // Handle language change
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <header className="premium-navbar">
      <div className="logo">
        <h1 className="logo-text">{t('Stadium Tickets')}</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/" className="nav-item">{t('Home')}</a></li>
          <li><a href="/about" className="nav-item">{t('About')}</a></li>
          <li><a href="/register" className="nav-item">{t('Register')}</a></li>
          <li><a href="/login" className="nav-item">{t('Login')}</a></li>
        </ul>
      </nav>
      <div className="language-select">
        <select value={language} onChange={handleChange} className="language-dropdown">
          <option value="en">{t('English')}</option>
          <option value="fr">{t('French')}</option>
        </select>
      </div>
    </header>
  );
};

export default Header;