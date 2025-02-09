import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  MapPin,
  Brush,
  PartyPopper,
  CreditCard,
  PenTool,
  Menu
} from "lucide-react";
import "./Navbar2.css"; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleDropdown = (tab) => {
    setIsDropdownOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li className="navbar-item dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("classes")}
          >
            <Palette className="icon" />
            Art Classes
          </button>
          {isDropdownOpen.classes && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/regular-classes">Regular Classes</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/adult-classes">Adult Classes</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("locations")}
          >
            <MapPin className="icon" />
            Locations
          </button>
          {isDropdownOpen.locations && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/locations/la-mesa">La Mesa</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/locations/santee">Santee</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/locations/bonita">Bonita</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("camps")}
          >
            <Brush className="icon" />
            Summer Art Camps
          </button>
          {isDropdownOpen.camps && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/summercamp">Summer Art Camp Schedule</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("parties")}
          >
            <PartyPopper className="icon" />
            Art Parties & Events
          </button>
          {isDropdownOpen.parties && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/birthday-parties">Birthday Art Parties</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/paint-parties">Paint Parties</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/scoutclasses">Boy & Girl Scout Group Classes</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("tuition")}
          >
            <CreditCard className="icon" />
            Tuition
          </button>
          {isDropdownOpen.tuition && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/tuition-rates">Tuition Rates</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/studio-policies">Studio Policies</Link>
              </li>
              <li className="dropdown-item">Pay Tuition</li>
              <li className="dropdown-item">
                <Link to="/charter-schools">Charter School Billing</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("about")}
          >
            <PenTool className="icon" />
            About
          </button>
          {isDropdownOpen.about && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/mission">Mission Statement</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/instructors">Instructors</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
