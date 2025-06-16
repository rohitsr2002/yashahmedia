import React, { useEffect } from 'react';

const DynamicWebsitePortfolio = () => {
  useEffect(() => {
    // Prevent text selection
    document.addEventListener("selectstart", function(event) {
      event.preventDefault();
    });

    // Prevents context menu
    document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
    });

    // Handle visit website button clicks
    const handlePortfolioClick = (e) => {
      if (e.target.classList.contains('portfolio-btn')) {
        e.preventDefault();
        const websiteUrl = e.target.getAttribute('href') && e.target.getAttribute('href') !== "#" 
            ? e.target.getAttribute('href') 
            : e.target.getAttribute('data-website');
        if (websiteUrl && websiteUrl !== "#" && websiteUrl !== "DYNAMIC_WEBSITE_URL_1") {
          window.open(websiteUrl, '_blank');
        }
      }
    };

    document.addEventListener('click', handlePortfolioClick);

    // Cleanup
    return () => {
      document.removeEventListener("selectstart", function(event) {
        event.preventDefault();
      });
      document.removeEventListener("contextmenu", function(event) {
        event.preventDefault();
      });
      document.removeEventListener('click', handlePortfolioClick);
    };
  }, []);

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
      {/* Start Breadcrumb */}
      <div className="ak-height-150 ak-height-lg-120"></div>
      <div className="breadcrumb-area style-2">
        <div className="container">
          <div className="breadcrumb-wapper style-2">
            <div className="breadcrumb-title-box">
              <h1 className="breadcrumb-title ak-w-70">
                Our <span className="highlight-text">Dynamic Website</span> Success Stories & 
                <span className="highlight-text">Digital Experiences</span>
              </h1>
              <div className="breadcrumb-caption">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
                  </svg>
                </span>
                <span><a href="index.html">Home</a> / <a href="portfolio.html">Portfolio</a> / Dynamic</span>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-stroke text-normal">PORTFOLIO</div>
      </div>
      {/* End Breadcrumb */}

      {/* Start Portfolio Section*/}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <section>
        <div className="ak-center">
          <div className="theme-border-wrap contact-form-border hover-animation">
            <div className="b-top-left">
              <div className="horizontal"></div>
              <div className="verticle"></div>
            </div>
            <div className="b-top-right d-flex">
              <div className="horizontal"></div>
              <div className="verticle"></div>
            </div>
            <div className="b-bottom-right d-flex flex-end">
              <div className="horizontal flex-end align-self-end"></div>
              <div className="verticle"></div>
            </div>
            <div className="b-bottom-left">
              <div className="verticle"></div>
              <div className="horizontal"></div>
            </div>
            <div className="container">
              <div className="ak-center">
                <div className="contact-form-box">
                  <div className="contact-form-wapper style-2">
                    <h5 className="contact-title text-center">1000+ Dynamic Website Projects Delivered Successfully</h5>
                    <div className="ak-height-30 ak-height-lg-30"></div>
                    <div className="portfolio-grid-wrapper">
                      <div className="portfolio-grid">
                        {/* 15 Dynamic Cards */}
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/trust.png" 
                              alt="Dynamic Project 1" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 1</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 1</h3>
                          <p className="portfolio-category">Trust My Solutions</p>
                          <a href="https://trustmysolution.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_1">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/cafe.png" 
                              alt="Dynamic Project 2" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 2</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 2</h3>
                          <p className="portfolio-category">Susha's Café </p>
                          <a href="https://sushascafe.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_2">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/wsci.png" 
                              alt="Dynamic Project 3" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 3</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 3</h3>
                          <p className="portfolio-category">WSCI</p>
                          <a href="https://www.wsci.in/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_3">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/vn.png" 
                              alt="Dynamic Project 4" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 4</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 4</h3>
                          <p className="portfolio-category">VN Production</p>
                          <a href="https://vnproduction.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_4">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/vas.png" 
                              alt="Dynamic Project 5" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 5</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 5</h3>
                          <p className="portfolio-category">Vasantha Utsavam</p>
                          <a href="https://vasanthautsavam.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_5">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/D&s.png" 
                              alt="Dynamic Project 6" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 6</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 6</h3>
                          <p className="portfolio-category">D&S</p>
                          <a href="https://dsrealtyconsulting.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_6">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/Hotel.png" 
                              alt="Dynamic Project 7" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 7</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 7</h3>
                          <p className="portfolio-category">Hotel White Rock</p>
                          <a href="https://hotelwhiterock.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_7">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/SRI Krishna.png" 
                              alt="Dynamic Project 8" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 8</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 8</h3>
                          <p className="portfolio-category">Sri Krishna INN</p>
                          <a href="#" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_8">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/Toon Media.png" 
                              alt="Dynamic Project 9" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 9</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 9</h3>
                          <p className="portfolio-category">ToonMedia</p>
                          <a href="https://toonmediaglobal.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_9">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/Tkn.png" 
                              alt="Dynamic Project 10" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 10</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 10</h3>
                          <p className="portfolio-category">Tekno Electro </p>
                          <a href="https://teknoelectro.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_10">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/rknk.png" 
                              alt="Dynamic Project 11" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 11</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 11</h3>
                          <p className="portfolio-category">RKNK Impex Solutions </p>
                          <a href="#" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_11">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/Srin.png" 
                              alt="Dynamic Project 12" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 12</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 12</h3>
                          <p className="portfolio-category">Srinidhi Catering</p>
                          <a href="https://srinidhicatering.in/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_12">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/film.png" 
                              alt="Dynamic Project 13" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 13</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 13</h3>
                          <p className="portfolio-category">Takashi Films</p>
                          <a href="https://takashi-films.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_13">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/real.png" 
                              alt="Dynamic Project 14" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 14</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 14</h3>
                          <p className="portfolio-category">Desi Estate </p>
                          <a href="https://www.desiestates.in/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_14">
                            Visit Website
                          </a>
                        </div>
                        <div className="portfolio-card">
                          <div className="portfolio-image-container">
                            <img 
                              src="./assets/imges/nn.png" 
                              alt="Dynamic Project 15" 
                              className="portfolio-image" 
                              onError={(e) => {
                                e.target.style.display='none'; 
                                e.target.nextElementSibling.style.display='block';
                              }} 
                            />
                            <span className="placeholder-text" style={{display:'none'}}>Dynamic 15</span>
                          </div>
                          <h3 className="portfolio-title">Dynamic Project 15</h3>
                          <p className="portfolio-category">RNR Buildtech </p>
                          <a href="https://rnrbuildtech.com/" className="portfolio-btn" data-website="DYNAMIC_WEBSITE_URL_15">
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End portfolio-grid-wrapper */}
                  </div>
                </div>
              </div>
            </div>
            <div className="ak-height-75 ak-height-lg-40"></div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section*/}

      {/* Start Contact Cards */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <div className="">
        <div className="ak-center">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                  <g clipPath="url(#clip0_2385_90)">
                    <path d="M12.7442 25.9029L12.735 25.8885L12.7253 25.8745C10.8478 23.1543 9.88672 20.2845 9.88672 17.0669C9.88672 8.59315 16.7565 1.95361 25 1.95361C33.3326 1.95361 40.1133 8.73432 40.1133 17.0669C40.1133 20.21 39.1534 23.2283 37.3328 25.802L37.3197 25.8205L37.3075 25.8396L25.3914 44.4162L25.3906 44.4174C25.2089 44.7016 24.791 44.7015 24.6093 44.4174L24.6088 44.4166L12.7442 25.9029ZM11.9022 26.4425L23.7669 44.9562L38.1492 26.3795C40.0891 23.6372 41.1133 20.4172 41.1133 17.0669C41.1133 8.18203 33.8849 0.953613 25 0.953613C16.2144 0.953613 8.88672 8.03076 8.88672 17.0669C8.88672 20.5046 9.91973 23.57 11.9022 26.4425ZM16.6758 17.0669C16.6758 21.6576 20.4093 25.3911 25 25.3911C29.5907 25.3911 33.3242 21.6576 33.3242 17.0669C33.3242 12.4762 29.5907 8.74268 25 8.74268C20.4093 8.74268 16.6758 12.4762 16.6758 17.0669Z" stroke="#FF4A23" strokeWidth="2" />
                    <path d="M29.9172 46.6871L29.9179 46.686L36.91 35.7544C39.7677 36.4741 42.0239 37.4351 43.5744 38.5343C45.2513 39.7232 45.9727 40.9699 45.9727 42.1646C45.9727 43.2238 45.4578 44.2345 44.3729 45.1991C43.2772 46.1732 41.6604 47.0396 39.6449 47.7581C35.6201 49.1929 30.247 49.9536 25 49.9536C19.753 49.9536 14.3799 49.1929 10.3551 47.7581C8.33959 47.0396 6.72284 46.1732 5.62714 45.1991C4.54224 44.2345 4.02734 43.2238 4.02734 42.1646C4.02734 40.9708 4.74773 39.7249 6.4222 38.5367C7.97035 37.4382 10.2234 36.4775 13.0773 35.7576L20.081 46.6895L20.0812 46.6897C22.3741 50.2666 27.6138 50.2783 29.9172 46.6871Z" stroke="#FF4A23" strokeWidth="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2385_90">
                      <rect width="50" height="50" fill="white" transform="translate(0 0.953613)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-text">
                Unit No- 2012 DLF Corporate Green Tower A <br />
                Sector 74a, SPR Road, Gurgaon
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                  <path
                    d="M25.8704 13.9853L26.1345 12.1009C29.2526 12.7308 32.0771 14.2463 34.3595 16.5285C36.507 18.685 37.9906 21.3383 38.6793 24.2699L36.8072 24.5895C36.1879 22.0463 34.8936 19.7381 33.0277 17.8722C31.0413 15.8858 28.5791 14.5574 25.8704 13.9853Z"
                    stroke="white" strokeWidth="2" />
                  <path
                    d="M39.9902 11.0989L39.9893 11.098C36.2449 7.36381 31.5577 4.90883 26.3843 3.98147L26.648 2.10009C32.2304 3.08164 37.2802 5.71349 41.3223 9.75544C45.1438 13.5865 47.7247 18.3488 48.8263 23.6022L46.9586 23.9211C45.9313 19.0566 43.53 14.6386 39.9902 11.0989Z"
                    stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-text">01245181301</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon email">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="41" viewBox="0 0 70 41" fill="none">
                  <path
                    d="M63.4598 0.953552H15.7674C12.3828 0.953552 9.61358 3.72278 9.61358 7.1074V9.41509C9.61358 10.2612 10.3059 10.9536 11.152 10.9536C11.9982 10.9536 12.6905 10.2612 12.6905 9.41509V7.1074C12.6905 6.79971 12.7674 6.49201 12.8444 6.18432L30.0751 20.9535L12.8444 35.7228C12.7674 35.4151 12.6905 35.1074 12.6905 34.7997V32.492C12.6905 31.6459 11.9982 30.9535 11.152 30.9535C10.3059 30.9535 9.61358 31.6459 9.61358 32.492V34.7997C9.61358 38.1843 12.3828 40.9535 15.7674 40.9535H63.4598C66.8444 40.9535 69.6136 38.1843 69.6136 34.7997V7.1074C69.6136 3.72278 66.8444 0.953552 63.4598 0.953552ZM15.152 4.1074C15.3059 4.03047 15.5367 4.03047 15.7674 4.03047H63.4598C63.6905 4.03047 63.9213 4.03047 64.0751 4.1074L40.6136 24.1843C39.9982 24.6459 39.229 24.6459 38.6136 24.1843L15.152 4.1074ZM63.4598 37.8766H15.7674C15.5367 37.8766 15.3059 37.8766 15.152 37.7997L32.4597 22.9535L36.6136 26.5689C37.4597 27.3382 38.5367 27.7228 39.6136 27.7228C40.6905 27.7228 41.7674 27.3382 42.6136 26.5689L46.7674 22.9535L64.0751 37.7997C63.9213 37.8766 63.6905 37.8766 63.4598 37.8766ZM66.5367 34.7997C66.5367 35.1074 66.4598 35.4151 66.3828 35.7228L49.1521 20.9535L66.3828 6.18432C66.4598 6.49201 66.5367 6.79971 66.5367 7.1074V34.7997ZM4.9982 17.1074C4.9982 16.2612 5.69051 15.5689 6.53666 15.5689H15.7674C16.6136 15.5689 17.3059 16.2612 17.3059 17.1074C17.3059 17.9535 16.6136 18.6459 15.7674 18.6459H6.53666C5.69051 18.6459 4.9982 17.9535 4.9982 17.1074ZM15.7674 26.3382H1.92127C1.07512 26.3382 0.382812 25.6459 0.382812 24.7997C0.382812 23.9535 1.07512 23.2612 1.92127 23.2612H15.7674C16.6136 23.2612 17.3059 23.9535 17.3059 24.7997C17.3059 25.6459 16.6136 26.3382 15.7674 26.3382Z"
                    fill="#FF4A23" />
                </svg>
              </div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-text">
                info@yashahmedia.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Cards */}

      {/* Start Google Map */}
      <div className="ak-height-150 ak-height-lg-100"></div>
      <div className="ak-google-map ak-bg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7018.848524777007!2d76.99254273661256!3d28.406452440226253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d452f9ad691%3A0xb6d4520f6f2013e2!2sDLF%20CORPORATE%20GREENS%2C%20Southern%20Peripheral%20Rd%2C%20Sector%2074A%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1741343697547!5m2!1sen!2sin"
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      {/* End Google Map */}

      <div className="mode-toggle">
        <div className="setting-mode">
          <button id="open">
            <i className="flaticon-sun"></i>
          </button>
          <button id="clecel">
            <i className="flaticon-close-button-1"></i>
          </button>
        </div>
        <div className="mode-btn js-mode-type">
          <button data-mode="light" className="mode-light">
            <i className="flaticon-sun"></i>
          </button>
          <button data-mode="dark" className="active mode-dark">
            <i className="flaticon-night-mode"></i>
          </button>
        </div>
      </div>

      <span className="ak-scrollup">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor" />
        </svg>
      </span>

      {/* Start Video Popup */}
      <div className="ak-video-popup">
        <div className="ak-video-popup-overlay"></div>
        <div className="ak-video-popup-content">
          <div className="ak-video-popup-layer"></div>
          <div className="ak-video-popup-container">
            <div className="ak-video-popup-align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="./assets/about:blank"></iframe>
              </div>
            </div>
            <div className="ak-video-popup-close"></div>
          </div>
        </div>
      </div>
      {/* End Video Popup */}
    </div>
  );
};

export default DynamicWebsitePortfolio;
