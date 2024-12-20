import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Context/Contact1.css'
const Contact = () => {
  return (
<div class="container">
        <h1>Contact Us</h1>
        
        <div class="contact-info">
            <h2>Get in Touch</h2>
            <p><strong>Email:</strong> <a href="mailto:contact@precisionacademy.com">contact@precisionacademy.com</a></p>
            <p><strong>Phone:</strong></p>
            <ul>
                <li>+91 78920 61703</li>
                <li>+91 23456 7890</li>
                <li>+91 87654 32109</li>
            </ul>
            <p><strong>Address:</strong> 123, Knowledge Park, Banglore City, India</p>
        </div>

        <div class="contact-form">
            <h2>Send Us a Message</h2>
           
        </div>

        <div class="map">
            <h2>Our Location</h2>
            <iframe src="https://www.google.com/maps/@12.9812939,77.6066014,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNH1F9dfJXHVKvea29DKTsTZc5R_PNh3v1w1Cx7!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNH1F9dfJXHVKvea29DKTsTZc5R_PNh3v1w1Cx7%3Dw365-h648-k-no!7i1080!8i1920?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
  );
};

export default Contact;
