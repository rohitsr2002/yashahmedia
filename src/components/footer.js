import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="ak-height-150 ak-height-lg-80"></div>
      <footer
        className="ak-footer style-1 ak-bg"
        data-src="assets/img/bg/footer-bg.png"
      >
        <div className="ak-height-120 ak-height-lg-50"></div>
        <img
          src="/assets/img/bg/footer-bgshape.png"
          className="ak-bg footer-bgshape"
          alt="bgshape"
        />
        <div className="container">
          <div className="ak-footer-container">
            {/* CTA Section */}
            <div className="footer-cta">
              <div className="footer-cta-info">
                <h1 className="footer-cta-title">Let’s</h1>
                <h2 className="footer-cta-title-two">
                  <span>work</span> Together
                </h2>
              </div>
              <div className="footer-btn-email">
                <div className="footer-btn-content">
                  <Link to="/contact" className="footer-btn circle-btn-anim">
                    <span className="text">
                      Start <i className="flaticon-up-right-arrow"></i>{' '}
                      <span>Project</span>
                    </span>
                  </Link>
                </div>
                <div className="footer-email">
                  <p className="email-short-title">Say hello!</p>
                  <a href="mailto:info@yashahmedia.com">info@yashahmedia.com</a>
                </div>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-content">
              <div className="about-company">
                <img
                  className="footer-logo"
                  src="/assets/img/logo/dark-logo.png"
                  alt="Yashah Media Logo"
                />
                <p className="about-company-desp">
                  We thrive on creativity and <span>innovation</span>. Our team is
                  constantly exploring new ideas and approaches to ensure your{' '}
                  <span>digital presence</span> is fresh.
                </p>
              </div>

              <div className="footer-list-content">
                <ul className="footer-list-menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="address-phn">
                <a href="tel:01245181301" className="phn">
                  <span><i className="flaticon-telephone"></i></span>
                  01245181301
                </a>
                <p className="address">
                  Unit No- 2012 DLF Corporate Green Tower A Sector 74a, SPR Road, Gurgaon
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ak-height-95 ak-height-lg-50"></div>

        {/* Footer Bottom */}
        <div className="copy-right-content">
          <div className="container">
            <div className="ak-space-between">
              <div className="social-icon">
                <a href="#" className="icon">
                  <i className="flaticon-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="flaticon-video"></i>
                </a>
                <a href="#" className="icon">
                  <i className="flaticon-linkedin"></i>
                </a>
              </div>
              <a href="#" className="copy-right-text">
                © 2025 <span>Yashah Media Pvt. Ltd.</span> All rights reserved.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
