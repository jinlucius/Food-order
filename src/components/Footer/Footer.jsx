import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

// 👉 Footer component
// Purpose:
// Website ka bottom section (branding + links + contact info)

const Footer = () => {
  return (

    // 👉 Main footer container
    <div className='footer' id="footer">

      {/* ================= FOOTER CONTENT ================= */}
      <div className="footer-content">

        {/* ===== LEFT SECTION ===== */}
        <div className="footer-content-left">

          {/* 👉 Logo */}
          <img src={assets.logo} alt="logo" />

          {/* 👉 Description */}
          <p>
            A Food startup that delivers India's bestest food all over the Country.
          </p>

          {/* 👉 Social media icons */}
          <div className="footer-social-icons">

            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.linkedin_icon} alt="linkedin" />
            <img src={assets.twitter_icon} alt="twitter" />

          </div>
        </div>

        {/* ===== CENTER SECTION ===== */}
        <div className="footer-content-center">

          {/* 👉 Company links */}
          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li> {/* 👉 typo fix */}
          </ul>

        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div className="footer-content-right">

          {/* 👉 Contact info */}
          <h2>GET IN TOUCH</h2>

          <ul>
            <li>+1-222-456-789</li>
            <li>contact@tomato.com</li>
          </ul>

        </div>

      </div>

      {/* 👉 Divider line */}
      <hr />

      {/* 👉 Copyright text */}
      <p className='footer-copyright'>
        Copyright 2024 @ Tomato.com - All Rights Reserved.
      </p>

    </div>
  );
};

export default Footer;