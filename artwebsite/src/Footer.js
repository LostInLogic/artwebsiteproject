import React from "react";
import { Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import './Footer.css'
import FAQ from "./FAQ"
import paintbrush from "./img/paintbrush.png";

const Footer = () => {
  
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="socials-icons">
          <p className="gallery-text">SOCIAL MEDIA GALLERY: </p>
          <a
            href="https://www.instagram.com/artwithlarisse/"
            target="_blank"
            rel="noopener noreferrer"
            className="socials"
          >
            <BsInstagram />
          </a>
          <a
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
        </div>
        <div className="paintbrush-img"></div>
      </div>
    </div>
  );
}

export default Footer