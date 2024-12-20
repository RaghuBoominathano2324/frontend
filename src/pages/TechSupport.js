import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tech.css'; // Assuming you have a TechnicalSupport.css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faCog, faTools } from '@fortawesome/free-solid-svg-icons';

const TechnicalSupport = () => {
  return (
    <div className="technical-support">
      <h2 className="text-center" style={{ textDecoration: 'underline', textDecorationColor: 'red' }}>
        Meet Our Technical Support Team
      </h2>
      
      <div className="support-intro">
        <p>
          At Precision Academy, we are dedicated to ensuring that you have a seamless experience with our platform. Our technical support team is here to assist you with any technical issues or queries you might encounter while using our services.
        </p>
        <p>
          Our team, led by RaghunathSurya, brings extensive experience and expertise to ensure that all technical challenges are swiftly addressed. Whether it's troubleshooting an issue, providing setup assistance, or offering solutions for better utilization of our platform, we are here to help!
        </p>
      </div>
      
      <div className="team-details">
        <h4>Why Choose Our Technical Support Team?</h4>
        <ul>
          <li><FontAwesomeIcon icon={faHeadset} /> Round-the-clock assistance</li>
          <li><FontAwesomeIcon icon={faCog} /> Expert troubleshooting and technical support</li>
          <li><FontAwesomeIcon icon={faTools} /> Assistance with setup, configuration, and customizations</li>
        </ul>
      </div>
      
      <div className="contact-section">
        <h4>Get in Touch</h4>
        <p>If you need assistance, feel free to reach out to our support team.</p>
        <p>Email: support@precisionacademy.com</p>
        <p>Phone: +1-800-123-4567</p>
        <button className="btn btn-primary">Contact Support</button>
      </div>
      
      <div className="team-image">
        <img src="your-image-url.jpg" alt="RaghunathSurya" style={{ width: '200px', borderRadius: '50%' }} />
        <p className="text-center">RaghunathSurya - Lead Technical Support</p>
      </div>
    </div>
  );
}

export default TechnicalSupport;
