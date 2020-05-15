import React from 'react';
import '../assets/styles/components/Footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer__termsConditions">
        <a href="/"> Terms Conditions</a>
        <a href="/"> Privacy Statement</a>
        <a href="/"> Help Center</a>
    </div>
    <div className="footer__creator">
        <p> Made by Juanka Code</p>
        <img src="https://i.imgur.com/icvE9Hd.jpg" alt="carlos" />
    </div>
  </footer>
);

export default Footer;