import React from "react";
import { Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import './Footer.css'
import paintbrush from "../img/FooterImg/footerimg.webp";

const Footer = () => {
  
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="socials-icons">
          <p className="gallery-text">SOCIAL MEDIA GALLERY: </p>
          <a
            aria-label="Go to our Instagram"
            href="https://www.instagram.com/artwithlarisse/"
            target="_blank"
            rel="noopener noreferrer"
            className="socials"
          >
            <BsInstagram />
          </a>
          <a
            aria-label="Go to our Facebook"
            href="https://www.facebook.com/artwithlarisse/"
            target="_blank"
            rel="noopener noreferrer"
            className="socials"
          >
            <FaFacebookSquare />
          </a>
        </div>
        <div className="links">
          <Link to="/faq" className="footer-q">
            FREQUENTLY ASKED QUESTIONS
          </Link>
          <Link to="/faq" className="footer-q2">
            FAQ
          </Link>
        </div>
      </div>
      <div className="footer-img">
        <img src={paintbrush} className="paintbrush-img" alt="Paintbrush"/>
      </div>
    </div>
  );
}

export default Footer