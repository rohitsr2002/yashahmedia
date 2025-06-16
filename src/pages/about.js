
import React from 'react';

const AboutPage = () => {


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
      <div className="breadcrumb-area">
        <div className="container container-customize">
          <div className="breadcrumb-wapper">
            <div className="breadcrumb-title-box">
              <h1 className="breadcrumb-title">
                We thrive on <span className="highlight-text">creativity</span> &{" "}
                <span className="highlight-text">innovation</span> in digital presence
              </h1>
              <div className="breadcrumb-caption">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
                  </svg>
                </span>
                <span style={{ color: "white" }}>
                  <a href="/">Home</a> / About Us
                </span>
              </div>
            </div>
            <div className="breadcrumb-img-box">
              <video autoPlay muted loop>
                <source src="./assets/videos/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="breadcrumb-cricle">
                <div className="cricle-animated-text">
                  <div className="rounded-text rotating">
                    <svg viewBox="0 0 200 200">
                      <path
                        id="textPath"
                        d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                        transform="translate(100,100)"
                        fill="none"
                        strokeWidth="0"
                      ></path>
                      <g fontSize="22.1px">
                        <text textAnchor="start">
                          <textPath className="coloring" xlinkHref="#textPath" startOffset="0%">
                            DIGITAL PRESENCE CREATIVITY & INNOVATION I N &nbsp;
                          </textPath>
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div className="cricle-ceneter-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="ak-height-150 ak-height-lg-80"></div>
      <div className="slideing-text-content style2">
        <p className="slideing-text text-color-three">
          Website & App Development/ Social Media Marketing
        </p>
        <p className="slideing-text text-color-two">
          Product Photography / Brand Promotion/ Ad Films / Brand Promotion
        </p>
      </div>


      <div className="ak-height-95 ak-height-lg-80"></div>
      <section className="about-content container">
        <div className="star-content">
          <img src="./assets/img/shape/star-2.png" alt="star" className="star-1" />
          <img src="./assets/img/shape/star-2.png" alt="star" className="star-2" />
        </div>
        <div className="about-info">
          <h3 className="about-title text-color-shiption">
            We thrive on
            <span className="highlight ak-black-color">creativity</span> and
            <span className="highlight">innovation</span>. Our team is constantly
            exploring new ideas and approaches to ensure your
            <span className="highlight">digital presence</span> is fresh, engaging,
            and ahead of the competition.
          </h3>
          <a href="#" className="more-btn">
            <span className="morebtn-text">View Latest Project </span>
            <span className="primary-icon-anim">
              <i className="flaticon-up-right-arrow"></i>
              <i className="flaticon-up-right-arrow"></i>
            </span>
          </a>
          <img src="./assets/img/shape/line-2.png" alt="swirl design" className="swirl" />
        </div>
      </section>

      {/* Awards */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <div className="container">
        <div className="ak-section-heading ak-style-1 type-2">
          <div className="ak-section-left">
            <h2 className="ak-section-title text-animation" data-ease="power2.out" data-split-text="chars" data-duration="0.7"
              data-direction="textTop" data-offset="100%">
              <span className="highlight">Awards</span> <br />
              Achievement
            </h2>
          </div>
          <div className="ak-section-right">
            <div className="ak-section-caption fade-animation" data-direction="right" data-delay="0.3">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                  <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                </svg>
              </span>
              <span> Awards </span>
            </div>
          </div>
        </div>
        <div className="ak-height-75 ak-height-lg-50"></div>
        <div className="awards-box">
          <div className="awards-hover-image">
            <img id="awardsHover" src="./assets/img/404.html" alt="Hover Image" />
          </div>
          <div className="awards-list">
            <div className="awards-card fade-animation" data-direction="bottom">
              <div className="awards-hover">
                <img src="./assets/img/award/hover-img-1.jpeg" alt="..." />
              </div>
              <h6 className="awards-title">01. Business Excellence Awards 2023</h6>
              <p className="awards-type">Audience Choice</p>
              <p className="awards-category"></p>
              <div className="awards-img">
                <img src="./assets/img/award/awards-1.svg" alt="..." />
              </div>
            </div>
            <div className="awards-card fade-animation" data-direction="bottom">
              <div className="awards-hover">
                <img src="./assets/img/award/hover-img-2.jpeg" alt="..." />
              </div>
              <h6 className="awards-title">02. Shopping Ads Certification 2022</h6>
              <p className="awards-type">Audience Choice</p>
              <p className="awards-category"></p>
              <div className="awards-img">
                <img src="./assets/img/award/awards-2.svg" alt="..." />
              </div>
            </div>
            <div className="awards-card fade-animation" data-direction="bottom">
              <div className="awards-hover">
                <img src="./assets/img/award/hover-img-3.jpeg" alt="..." />
              </div>
              <h6 className="awards-title">03.Google Ads Display Certification 2022</h6>
              <p className="awards-type">Audience Choice</p>
              <p className="awards-category"></p>
              <div className="awards-img">
                <img src="./assets/img/award/awards-3.svg" alt="..." />
              </div>
            </div>
            <div className="awards-card fade-animation" data-direction="bottom">
              <div className="awards-hover">
                <img src="./assets/img/award/hover-img-4.jpeg" alt="..." />
              </div>
              <h6 className="awards-title">04. Google Ads Search Certification 2022</h6>
              <p className="awards-type">Audience Choice</p>
              <p className="awards-category"></p>
              <div className="awards-img">
                <img src="./assets/img/award/awards-4.svg" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goal */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <section className="ak-solidblack-bg">
        <div className="ak-height-150 ak-height-lg-80"></div>
        <div className="container">
          <div className="ak-section-heading ak-style-1 bg-black">
            <div className="ak-section-left">
              <h2 className="ak-section-title text-animation">
                <span className="highlight underline-anim text-white text-underline-white">Our Goal
                </span>
                Maximizing Client
                <span className="highlight underline-anim text-underline"> ROI </span>
                Through Data-Driven
                <span className="highlight underline-anim text-white text-underline-white">Campaigns</span>
              </h2>
            </div>
            <div className="ak-section-right">
              <div className="ak-section-caption">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                  </svg>
                </span>
                <span> Straight Goal </span>
              </div>
              <p className="ak-section-desp">
                In today's competitive digital landscape, businesses need more than just marketing—they need measurable
                results. At Yashah Media Pvt Ltd, our goal is to maximize client ROI through strategic, data-driven
                campaigns that deliver real impact.
              </p>
            </div>
          </div>
          <div className="ak-height-75 ak-height-lg-50"></div>
          <div className="progress-goal">
            <div className="progress-container">
              <div className="ak-skill-box type-2">
                <div className="ak-skill-text">
                  <p className="ak-skill-title">Web Development</p>
                  <p className="ak-skill-per">100%</p>
                </div>
                <div className="ak-skill-bar">
                  <div className="ak-skill-fill" data-percentage="100"></div>
                </div>
              </div>
              <div className="ak-skill-box type-2">
                <div className="ak-skill-text">
                  <p className="ak-skill-title">App Development</p>
                  <p className="ak-skill-per">100%</p>
                </div>
                <div className="ak-skill-bar">
                  <div className="ak-skill-fill" data-percentage="100"></div>
                </div>
              </div>
              <div className="ak-skill-box type-2">
                <div className="ak-skill-text">
                  <p className="ak-skill-title">Ad Films</p>
                  <p className="ak-skill-per">100%</p>
                </div>
                <div className="ak-skill-bar">
                  <div className="ak-skill-fill" data-percentage="100"></div>
                </div>
              </div>
              <div className="ak-skill-box type-2">
                <div className="ak-skill-text">
                  <p className="ak-skill-title">Brand Promotions</p>
                  <p className="ak-skill-per">100%</p>
                </div>
                <div className="ak-skill-bar">
                  <div className="ak-skill-fill" data-percentage="100"></div>
                </div>
              </div>
              <div className="ak-skill-box type-2">
                <div className="ak-skill-text">
                  <p className="ak-skill-title">Social Media Marketing</p>
                  <p className="ak-skill-per">100%</p>
                </div>
                <div className="ak-skill-bar">
                  <div className="ak-skill-fill" data-percentage="100"></div>
                </div>
              </div>
            </div>
            <div className="goal-circle-container">
              <div className="goal-circle">
                <div className="goal-circle-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" width="238" height="237" viewBox="0 0 238 237" fill="none">
                    <path opacity="0.5"
                      d="M202.545 35.0658C180.23 12.7513 150.543 0.446655 119 0.446655C87.457 0.446655 57.7695 12.7513 35.4551 35.0658C13.1406 57.3802 0.835938 87.0677 0.835938 118.611C0.835938 150.154 13.1406 179.841 35.4551 202.156C57.7695 224.47 87.457 236.775 119 236.775C150.543 236.775 180.23 224.47 202.545 202.156C224.859 179.841 237.164 150.154 237.164 118.611C237.164 87.0677 224.859 57.3802 202.545 35.0658ZM36.8223 200.788C14.8984 178.816 2.78906 149.665 2.78906 118.611C2.78906 87.556 14.8984 58.4056 36.8223 36.433C53.082 20.1732 73.2969 9.33337 95.2695 4.79236C80.9629 10.2123 67.8281 20.515 57.0371 35.1635C40.582 57.4779 31.5 87.1166 31.5 118.611C31.5 150.105 40.582 179.744 57.0371 202.058C67.8281 216.658 80.9629 227.009 95.2695 232.429C73.2969 227.888 53.082 217.048 36.8223 200.788ZM33.4531 118.611C33.4531 58.8939 66.8027 9.52869 109.527 3.1322C101.178 7.86853 93.5605 18.9525 87.5059 35.4076C79.3027 57.6244 74.7617 87.2142 74.7617 118.611C74.7617 150.007 79.3027 179.597 87.5059 201.814C93.5605 218.269 101.178 229.353 109.527 234.089C66.8027 227.693 33.4531 178.328 33.4531 118.611ZM118.023 234.822C107.281 234.138 97.125 222.273 89.3125 201.179C81.1582 179.158 76.7148 149.861 76.7148 118.66C76.7148 87.4584 81.207 58.1615 89.3125 36.14C97.125 14.9974 107.281 3.1322 118.023 2.44861V234.822Z"
                      fill="url(#paint0_radial_2575_3352)" />
                    <defs>
                      <radialGradient id="paint0_radial_2575_3352" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(119 118.611) rotate(180) scale(95.8638 806.41)">
                        <stop stopColor="#FF4A23" offset="0%" />
                        <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <img src="./assets/img/bg/goal-circle-overlay.png" alt="Team Working" />
              </div>
              <div className="goal-shape">
                {/* SVGs as in your HTML */}
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-80"></div>
      </section>

      {/* Testimonial */}
      <section>
        <div className="container">
          <div className="testmonial-slider ak-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testmonial-content style-1">
                  <div className="testmonial-card">
                    <div className="ak-height-100 ak-height-lg-50"></div>
                    <p className="testmonial-desp">
                      "Yashah Media transformed our online presence with their innovative strategies. Their team is highly
                      professional, creative, and result-driven. Highly recommended for digital growth!"
                    </p>
                    <div className="ak-height-50 ak-height-lg-30"></div>
                    <div className="testmonial-info">
                      <img className="testmonial-img" src="./assets/img/testmonial/tes2.png" alt=".." />
                      <h6 className="testmonial-title">Amit Sharma</h6>
                      <p className="testmonial-shot-desp text-white">New Delhi</p>
                    </div>
                    <div className="ak-height-100 ak-height-lg-50"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testmonial-content style-1">
                  <div className="testmonial-card">
                    <div className="ak-height-100 ak-height-lg-50"></div>
                    <p className="testmonial-desp">
                      "Exceptional service! Their social media marketing and branding expertise helped us reach a wider
                      audience and boost engagement. Truly a game-changer for our business."
                    </p>
                    <div className="ak-height-50 ak-height-lg-30"></div>
                    <div className="testmonial-info">
                      <img className="testmonial-img" src="./assets/img/testmonial/tes1.jpg" alt=".." />
                      <h6 className="testmonial-title">Neha Verma</h6>
                      <p className="testmonial-shot-desp text-white">Gurugram</p>
                    </div>
                    <div className="ak-height-100 ak-height-lg-50"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testmonial-content style-1">
                  <div className="testmonial-card">
                    <div className="ak-height-100 ak-height-lg-50"></div>
                    <p className="testmonial-desp">
                      "Their website and app development services exceeded our expectations. The designs were modern,
                      user-friendly, and perfectly aligned with our brand vision. Great job!"
                    </p>
                    <div className="ak-height-50 ak-height-lg-30"></div>
                    <div className="testmonial-info">
                      <img className="testmonial-img" src="./assets/img/testmonial/tes2.png" alt=".." />
                      <h6 className="testmonial-title">Rahul Khanna</h6>
                      <p className="testmonial-shot-desp text-white">New Delhi</p>
                    </div>
                    <div className="ak-height-100 ak-height-lg-50"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testmonial-content style-1">
                  <div className="testmonial-card">
                    <div className="ak-height-100 ak-height-lg-50"></div>
                    <p className="testmonial-desp">
                      "From content writing to ad films, every service was top-notch. Their creativity and attention to
                      detail truly set them apart. Extremely satisfied with their work!"
                    </p>
                    <div className="ak-height-50 ak-height-lg-30"></div>
                    <div className="testmonial-info">
                      <img className="testmonial-img" src="./assets/img/testmonial/tes2.png" alt=".." />
                      <h6 className="testmonial-title">Vikas Mehta </h6>
                      <p className="testmonial-shot-desp text-white">Noida</p>
                    </div>
                    <div className="ak-height-100 ak-height-lg-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testmonial-swiper-controller">
          <div className="testmonial-button-prev">
            <div>
              <span className="svg-icon">
                <i className="flaticon-left-up"></i>
              </span>
              <span> Previous </span>
            </div>
          </div>
          <div className="testmonial-button-next">
            <div>
              <span> Next </span>
              <span className="svg-icon">
                <i className="flaticon-up-right-arrow"></i>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Funfact */}
      <div className="ak-height-150 ak-height-lg-80" ></div>
      <div className="container  text-white">
        <div className="funfact-content">
          <div className="funfact style1">
            <div className="funfact-card style-1">
              <div className="funfact-number">
                <span id="count1" className="amin_auto_count">1200</span>
                <span>+</span>
              </div>
              <p className="funfact-text ">Project Completed</p>
            </div>
          </div>
          <div className="funfact style1">
            <div className="funfact-card style-1">
              <div className="funfact-number">
                <span id="count2" className="amin_auto_count">1424</span>
                <span>+</span>
              </div>
              <p className="funfact-text">Happy Customers</p>
            </div>
          </div>
          <div className="funfact style1">
            <div className="funfact-card style-1">
              <div className="funfact-number">
                <span id="count3" className="amin_auto_count">9</span>
                <span>+</span>
              </div>
              <p className="funfact-text">Years of Experience</p>
            </div>
          </div>
          <div className="funfact style1">
            <div className="funfact-card style-1">
              <div className="funfact-number">
                <span id="count4" className="amin_auto_count">50</span>
                <span>+</span>
              </div>
              <p className="funfact-text">Team Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Feature */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <section className="core-features-area">
        <div className="container  text-white">
          <div className="core-features">
            <div className="core-feature-card fade-animation" data-delay="0.15" data-direction="left">
              <div className="icon">
                <i className="flaticon-circle "></i>
              </div>
              <h6 className="core-feature-title">Strategic Marketing</h6>
             <p className="core-feature-desp" style={{ color: 'white' }}>

                We develop data-driven strategic marketing plans to enhance brand visibility, drive engagement, and maximize
                ROI. Our tailored approach ensures targeted audience reach, stronger market positioning, and sustainable
                business growth across digital and traditional platforms.
              </p>
              <p className="core-feature-number">01</p>
            </div>
            <div className="core-feature-card fade-animation" data-delay="0.35" data-direction="left">
              <div className="icon">
                <i className="flaticon-folded"></i>
              </div>
              <h6 className="core-feature-title">Our Mission</h6>
              <p className="core-feature-desp" style={{ color: 'white' }}>
                Our mission is to empower brands with innovative digital solutions, enhancing visibility, engagement, and
                growth. We
                strive to deliver result-driven strategies that create lasting impact and help businesses thrive in a
                competitive
                landscape.
              </p>
              <p className="core-feature-number">02</p>
            </div>
            <div className="core-feature-card fade-animation" data-delay="0.55" data-direction="left">
              <div className="icon">
                <i className="flaticon-twirl" ></i>
              </div>
              <h6 className="core-feature-title">Our Vision</h6>
             <p className="core-feature-desp" style={{ color: 'white' }}>

                Our vision is to be a leading digital solutions provider, driving innovation and excellence. We aim to
                transform brands with creative strategies, cutting-edge technology, and impactful storytelling for long-term
                success.
              </p>
              <p className="core-feature-number">03</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <section className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="w-25">Technologies We Specialize In</h6>
          <div className="ak-border-width w-75"></div>
        </div>
        <div className="ak-slider client-logo-slider">
          <div className="swiper-wrapper row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 flex-nowrap">
            <div className="swiper-slide">
              <div className="client-logo border-0">
                <img src="./assets/img/client/client-1.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client-logo border-0">
                <img src="./assets/img/client/client-2.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client-logo border-0">
                <img src="./assets/img/client/client-3.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client-logo border-0">
                <img src="./assets/img/client/client-1.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client-logo border-0">
                <img src="./assets/img/client/client-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="ak-border-width w-75"></div>
          <div className="d-flex gap-3">
            <div className="arrow-circle-btn prev client-logo-prev">
              {/* SVG as in your HTML */}
            </div>
            <div className="arrow-circle-btn next client-logo-next">
              {/* SVG as in your HTML */}
            </div>
          </div>
        </div>
      </section>

     
      <div className="ak-height-150 ak-height-lg-80"></div>
      <section className="container">
        <div className="newsletter-content style-2">
          <div className="newsletter-title-content text-animation">
            <h2 className="newsletter-title">
              Join Our
              <span className="highlight text-underlines underline-anim">
                Newsletter</span>
              for the Latest
              <span className="highlight">Exclusive</span> Content
            </h2>
          </div>
          <form className="newsletter-form">
            <input type="email" className="newsletter-input style-2" placeholder="Enter your email..." required />
            <button type="submit" className="newsletter-btn">
              <span className="newbtn-text"> Newsletter </span>
              <span className="primary-icon-anim">
                <i className="flaticon-up-right-arrow"></i>
                <i className="flaticon-up-right-arrow"></i>
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;