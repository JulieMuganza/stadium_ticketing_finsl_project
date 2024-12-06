import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const About = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  const page1Content = (
    <div className="content">
      <h2>{t("About Us")}</h2>
      <p>
        {t(
          "Welcome to Stadium Ticket Booking! Your one-stop platform for securing tickets to the best live events, concerts, and matches."
        )}
      </p>
      <p>
        {t(
          "With a seamless booking experience, we connect you to your favorite events with just a few clicks. Whether it's sports, concerts, or festivals, we've got you covered."
        )}
      </p>
      <p>
        {t(
          "Our mission is to bring people closer to the events they love. Join millions of fans who trust us to deliver an unforgettable ticketing experience."
        )}
      </p>
    </div>
  );

  const page2Content = (
    <div className="content">
      <h2>{t("Our Mission")}</h2>
      <p>
        {t(
          "At Stadium Ticket Booking, we aim to make event access effortless and enjoyable for everyone. Our innovative platform ensures a stress-free booking experience."
        )}
      </p>
      <p>
        {t(
          "We believe in empowering fans with a simple, reliable, and secure ticketing solution. Our goal is to help you create memories that last a lifetime."
        )}
      </p>
    </div>
  );

  const page3Content = (
    <div className="content">
      <h2>{t("Features")}</h2>
      <ul>
        <li>{t("Instant ticket booking with real-time availability.")}</li>
        <li>{t("Secure payment options for peace of mind.")}</li>
        <li>{t("Digital tickets with QR codes for easy access.")}</li>
        <li>{t("Exclusive discounts and offers for members.")}</li>
        <li>{t("24/7 customer support to assist you anytime.")}</li>
      </ul>
      <p>
        {t(
          "We’re constantly innovating to provide the best ticketing features and ensure your experience is smooth and enjoyable."
        )}
      </p>
    </div>
  );

  return (
    <div className="about-us-container">
      {/* Header */}
      <Header />

      {/* Page Content */}
      {page === 1 && page1Content}
      {page === 2 && page2Content}
      {page === 3 && page3Content}

      {/* Pagination Controls */}
      <div className="pagination">
        {[1, 2, 3].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            disabled={page === pageNumber}
            className={`page-btn ${page === pageNumber ? "active" : ""}`}
          >
            {t(`Page ${pageNumber}`)}
          </button>
        ))}
      </div>

      {/* Footer */}
      <Footer />

      {/* CSS Styling */}
      <style>
        {`
          .about-us-container {
            font-family: Arial, sans-serif;
            margin: 0 auto;
            padding: 20px;
            max-width: 900px;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 200px; /* Add this line to move the box down */
            margin-bottom: 20px;
            padding: 30px;
            background: rgba(0, 0, 0, 0.6); /* Transparent box */
            border-radius: 10px;
            color: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
          }

          h2 {
            font-size: 2.5rem; /* Larger heading */
            color: #ffffff;
            margin-bottom: 20px;
          }

          p, ul li {
            font-size: 1.5rem; /* Larger text */
            line-height: 1.8;
            color: #f0f0f0;
            max-width: 700px;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 20px 0;
            text-align: left;
          }

          ul li {
            margin-bottom: 10px;
          }

          .pagination {
            text-align: center;
            margin-top: 20px;
          }

          .pagination .page-btn {
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            margin: 0 5px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
          }

          .pagination .page-btn.active,
          .pagination .page-btn:hover:not(:disabled) {
            background-color: #2980b9;
          }

          .pagination .page-btn:disabled {
            background-color: #95a5a6;
            cursor: not-allowed;
          }
        `}
      </style>
    </div>
  );
};

export default About;
