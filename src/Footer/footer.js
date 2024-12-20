import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'; // Assuming custom styling is in this file

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark text-light py-5">
        {/* Social Media Section */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Follow us on social media:</span>
          </div>
          <div>
            <a
              href="https://facebook.com"
              className="me-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="me-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://google.com"
              className="me-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://instagram.com"
              className="me-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="me-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              className="me-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* Footer Main Content */}
        <section className="footer-main-content">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              {/* Precision Academy Info */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-graduation-cap me-3"></i>Precision Academy
                </h6>
                <p>
                  Empowering students with top-notch resources to succeed in their exams.
                </p>
              </div>

              {/* SSC JE Links */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Our Courses</h6>
                <p>
                  <a href="#!" className="text-reset">GATE</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">IES</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">SSC CGL</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Xerox</a>
                </p>
              </div>

              {/* Useful Links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Support</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">FAQ</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help Center</a>
                </p>
              </div>

              {/* Contact Info */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i> info@precisionAcademy.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +1 234 567 890
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +1 234 567 891
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="text-center p-4 bg-dark text-light">
          © 2024 Precision Academy:
          <a className="text-reset fw-bold" href="https://precisionAcademy.com">
            precisioninfo@hotmail.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
