import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import PrecisionStrikeLogo from '../Images/PrecisionStrike.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEdit, faGraduationCap, faTools, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar p-3 shadow">
      <div className="container-fluid">
        {/* Logo and Title */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={PrecisionStrikeLogo}
            alt="Precision Strike Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <h1 className="text-warning m-0">Precision Academy</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link text-light">
                <FontAwesomeIcon icon={faUser} /> Our Registered Learners
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link text-light">
                <FontAwesomeIcon icon={faEdit} /> Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/exams" className="nav-link text-light">
                <FontAwesomeIcon icon={faGraduationCap} /> Exams
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tech" className="nav-link text-light">
                <FontAwesomeIcon icon={faTools} /> Technical Support
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-light">
                <FontAwesomeIcon icon={faInfoCircle} /> About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link text-light">
                <FontAwesomeIcon icon={faEnvelope} /> Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
