import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalContext } from '../context/GlobalState';

const Home = () => {
  return (
    <>
      <div className="container mt-4">
        <header className="text-center mb-5">
          <h1 className="display-3">Precision Academy - GATE Coaching</h1>
          <h2>Select Your Target Exam</h2>
        </header>
        
        {/* Buttons Section */}
        <div className="row mb-4">
          {['GATE', 'GATE (Smart Courses)', 'ESE', 'SSC-JE', 'All State AE/JE', 'RRB-JE'].map((exam, index) => (
            <div key={index} className="col-md-4 mb-3">
              <button className="btn btn-primary w-100">{exam}</button>
            </div>
          ))}
        </div>
        
        {/* About GATE Exam Section */}
        <div className="section mb-5">
          <h2>About GATE Exam</h2>
          <ul className="list-group">
            <li className="list-group-item"><strong>Exam Overview:</strong> The Graduate Aptitude Test in Engineering (GATE) tests comprehensive understanding across various subjects in engineering and science.</li>
            <li className="list-group-item"><strong>Eligibility:</strong> Open to final-year undergraduates or those who have completed their degrees.</li>
            <li className="list-group-item"><strong>Score Validity:</strong> GATE scores are valid for three years, allowing flexibility for future opportunities.</li>
            <li className="list-group-item"><strong>Benefits:</strong> Qualifying in GATE opens up post-graduate admissions and job placements in PSUs across India.</li>
            <li className="list-group-item"><strong>Exam Format:</strong> The exam includes Multiple Choice Questions (MCQs) and Numerical Answer Type (NAT) questions covering technical subjects, engineering mathematics, and general aptitude.</li>
          </ul>
        </div>

        {/* Success Stories Section */}
        <div className="section mb-5">
          <h2>Student Success Stories</h2>
          <p>See how Precision Academy has helped students achieve top scores in the GATE exam. Hear their experiences and learn how our resources made a difference.</p>
        </div>

        {/* Upcoming Batch Dates Section */}
        <div className="section mb-5">
          <h2>Upcoming Batch Dates</h2>
          <p>New batches start soon! Join now to secure your place in one of our comprehensive GATE preparation courses.</p>
          <p><strong>Next Batch Start Date:</strong> January 10, 2025</p>
          <a href="#join-now" className="btn btn-success btn-lg">Join Now</a>
        </div>

        {/* Exclusive Resources Section */}
        <div className="section mb-5">
          <h2>Exclusive Resources</h2>
          <p>We offer a variety of resources to aid in your GATE preparation, including video lectures, study materials, and practice tests tailored to the GATE syllabus.</p>
        </div>

        {/* Call to Action Section */}
        <div className="section" id="join-now">
          <h2>Ready to Succeed in GATE?</h2>
          <p>Get started with a free trial or enroll in a course that fits your needs. Our team is here to support you every step of the way.</p>
          <a href="#join-now" className="btn btn-primary btn-lg">Get Free Trial</a>
        </div>
      </div>
    </>
  );
};

export default Home;
