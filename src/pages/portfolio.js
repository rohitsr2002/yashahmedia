'use client';
import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="dark">

            <div className="offcanvas offcanvas-end style-1" tabIndex="-1" id="offcanvasRight">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close btn-close-black ms-auto" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="offcanvas-body-coustom-style">

                        <p className="desp">
                            We thrive on creativity and innovation. Our team is constantly
                            exploring new.
                        </p>
                        <div className="row row-cols-3 g-3">
                            <div className="col">
                                <img src="assets/img/gallery/mini-gallery-1.png" className="img-fluid" alt="..." />
                            </div>
                            <div className="col">
                                <img src="assets/img/gallery/mini-gallery-2.png" className="img-fluid" alt="..." />
                            </div>
                            <div className="col">
                                <img src="assets/img/gallery/mini-gallery-3.png" className="img-fluid" alt="..." />
                            </div>
                            <div className="col">
                                <img src="assets/img/gallery/mini-gallery-4.png" className="img-fluid" alt="..." />
                            </div>
                            <div className="col">
                                <img src="assets/img/gallery/mini-gallery-5.png" className="img-fluid" alt="..." />
                            </div>
                            <div className="col">
                                <img src="assets/img/gallery/mini-gallery-6.png" className="img-fluid" alt="..." />
                            </div>
                        </div>

                        <div className="offcanvas-footer-contant">
                            <p className="short-title">Yashah Media</p>
                            <a className="email" href="emailto:info@yashahmedia.com">info@yashahmedia.com</a>
                            <a className="email" href="telto:+91 8285435377">01245181301</a>
                            <a href="#">
                                Unit No- 2012 DLF Corporate Green Tower A <br />
                                Sector 74a, SPR Road, Gurgaon
                            </a>
                            <div className="ak-height-25 ak-height-lg-25"></div>
                            <p className="short-title">Social:</p>
                            <div className="social-icon">
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-facebook"></i>
                                </a>
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-video"></i>
                                </a>
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-linkedin"></i>
                                </a>
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-twitter"></i>
                                </a>
                            </div>
                            <div className="ak-height-40 ak-height-lg-40"></div>
                        </div>
                    </div>
                </div>
            </div>
      <div className="ak-height-150 ak-height-lg-120"></div>
      <div className="breadcrumb-area style-2">
        <div className="container">
          <div className="breadcrumb-wapper style-2">
            <div className="breadcrumb-title-box">
              <h1 className="breadcrumb-title">
                Our <span className="highlight-text">Portfolio</span>
              </h1>
              <div className="breadcrumb-caption">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-stroke" style={{ padding: 100 }}>PORTFOLIO</div>
      </div>

      <div className="ak-height-150 ak-height-lg-80"></div>
      <div className="container">
        <div className="custom-portfolio-row">
          <Link to="/ecommerce" className="custom-portfolio-card">
            <div
              className="custom-portfolio-img"
              style={{ backgroundImage: "url('./assets/img/portfolio/ecommerce.jpg')" }}
            ></div>
            <div className="custom-portfolio-overlay">
              <span className="custom-portfolio-title">E-commerce</span>
            </div>
          </Link>

          <Link to="/dynamic" className="custom-portfolio-card">
            <div
              className="custom-portfolio-img"
              style={{ backgroundImage: "url('./assets/img/portfolio/dynamic.jpg')" }}
            ></div>
            <div className="custom-portfolio-overlay">
              <span className="custom-portfolio-title" style={{ textAlign: 'center', lineHeight: 'normal' }}>Dynamic Website</span>
            </div>
          </Link>

          <Link to="/software" className="custom-portfolio-card">
            <div
              className="custom-portfolio-img"
              style={{ backgroundImage: "url('./assets/img/portfolio/softwares.jpg')" }}
            ></div>
            <div className="custom-portfolio-overlay">
              <span className="custom-portfolio-title">Softwares</span>
            </div>
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 80px', marginTop: '-20px' }}>
        <h4 style={{ textAlign: 'left', width: 'max-content' }}>E-commerce</h4>
        <h4 style={{ textAlign: 'center' }}>Dynamic Website</h4>
        <h4 style={{ textAlign: 'right' }}>Softwares</h4>
      </div>
    </div>
  );
};

export default Portfolio;
