import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Reinitialize Bootstrap Offcanvas after every route change
  useEffect(() => {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

    const elements = document.querySelectorAll('[data-bs-toggle="offcanvas"]');
    elements.forEach((el) => {
      try {
        bootstrap.Offcanvas.getOrCreateInstance(el);
      } catch (err) {
        console.error("Bootstrap Offcanvas init error:", err);
      }
    });
  }, [location.pathname]);

  return (
    <header className="ak-site_header ak-style1 ak-sticky_header">
      <div className="ak-main_header">
        <div className="container container-customize header-black">
          <div className="ak-main_header_in">
            {/* Logo */}
            <div className="ak-main-header-left">
              <Link className="ak-site_branding dark-logo" to="/">
                <img src="/assets/img/logo/dark-logo.png" alt="Dark Logo" />
              </Link>
              <Link className="ak-site_branding white-logo" to="/">
                <img src="/assets/img/logo/dark-logo.png" alt="White Logo" />
              </Link>
            </div>

            {/* Nav Links */}
            <div className="ak-main-header-center">
              <div className="ak-nav ak-medium">
                <ul className="ak-nav_list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li className="menu-item-has-children">
                    <Link to="/services">All Services</Link>
                    <ul>
                      <li><Link to="/WebDevelopment">Website Development</Link></li>
                      <li><Link to="/AppDevelopment">App Development</Link></li>
                      <li><Link to="/seo">SEO</Link></li>
                      <li><Link to="/smo">SMO</Link></li>
                      <li><Link to="/brandPromotions">Brand Promotions</Link></li>
                      <li><Link to="/ContentWriting">Content Writing</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/clients">Our Clients</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/career">Careers</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="ak-main-header-right">
              <div className="ak-space-between gap-3">
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Link to="/contact" className="custom-button ak-center">
                      <svg width="180px" height="50px" viewBox="0 0 180 50">
                        <rect x="0" y="0" width="180" height="50" rx="30" ry="30" className="bg-line" />
                        <rect x="0" y="0" width="180" height="50" rx="30" ry="30" className="hl-line" />
                      </svg>
                      <span className="text-white">Start Project</span>
                    </Link>
                  </div>
                </div>

                {/* Offcanvas Trigger */}
                <div
                  className="offcanvaopen-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i className="flaticon-dots-menu" style={{ color: 'black' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar-border"></div>
    </header>
  );
};

export default Header;
