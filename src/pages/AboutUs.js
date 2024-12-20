import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import ramImage from '../Images/ram.jpg';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <h2 
        className="text-center" 
        style={{
          textDecoration: "underline", 
          textDecorationColor: "red", 
          fontWeight: "bold", 
          fontSize: "1.8rem", 
          marginBottom: "30px"
        }}
      >
        Our mission is to empower students and educators with high-quality resources, covering everything from mastering complex concepts to perfecting exam strategies.
      </h2>

      <div className="container">
        <p className="lead text-center mb-4">
          Welcome to Precision Academy, your trusted resource for accurate, comprehensive, and up-to-date information to help you succeed in your exams. Our mission is to empower students and educators with high-quality resources, covering everything from mastering complex concepts to perfecting exam strategies. Whether you need clear explanations, study guides, or expert tips, we’re here to support your journey to success.
        </p>

        <p className="lead mb-4">
          For over 20 years, we’ve refined our extensive library of reliable resources. Our team of experienced educators and academic writers regularly update and expand our collection of 22,000+ articles and exam prep materials, ensuring that you’re always equipped with the most relevant information.
        </p>

        <p className="lead mb-4">
          The Precision Academy Expert Board, composed of certified educators and subject matter experts, thoroughly reviews our resources so that you can approach exams with confidence and clarity.
        </p>

        <h4 className="text-center mb-4" style={{textDecoration: "underline", textDecorationColor: "red"}}>Meet Our Founder</h4>
        
        <div className="founder-section text-center">
          <img 
            src={ramImage} 
            alt="Founder" 
            className="rounded-circle mb-3" 
            style={{width: "200px", height: "200px", objectFit: "cover"}}
          />
          <p className="lead">
            A technology veteran with 20+ years of experience at Cisco and Wipro, <strong>Raghu</strong> is the Founder and CTO of Precision Academy. Based in Bangalore, he specializes in the development of C#, Advanced C programming, and Data Structures & Algorithms. Stay connected with him to explore cutting-edge advancements in technology and education.
          </p>
        </div>

        <hr />
        <h4 className="donatetxt text-center mb-4">
          If you liked our work, kindly contribute to us by clicking the donate button below.
        </h4>

        <div className="text-center">
          <button id='donate' className="btn btn-primary btn-lg">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
