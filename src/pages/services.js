import React from 'react';
import { Link } from 'react-router-dom';


const ServicesPage = () => {
  return (
    <div className="dark">
      {/* Breadcrumb */}

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
        <div className="container">
          <div className="breadcrumb-wapper style-2">
            <div className="breadcrumb-title-box">
              <h1
                className="breadcrumb-title text-animation"
                data-direction="textRotate"
                data-split-text="lines"
                data-duration="1.5"
              >
                Our <span className="highlight-text">Exceptional</span> Digital
                Transformation
                <span className="highlight-text">Services</span>
              </h1>
              <div className="breadcrumb-caption">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="223"
                    height="12"
                    viewBox="0 0 223 12"
                    fill="none"
                  >
                    <path
                      d="M1.33789 1.18359H221.034L209.173 10.9822"
                      stroke="#FF4A23"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
                <span className='text-white'>
                  <a href="/">Home</a> / Services
                </span>
              </div>
            </div>
            <div>
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
                          <textPath
                            className="coloring"
                            xlinkHref="#textPath"
                            startOffset="0%"
                          >
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

      {/* Scroll text */}
      <div className="ak-height-150 ak-height-lg-50"></div>
      <div className="background-gradient">
        <div className="text-container">
          <span className="text-gradient">
            Digital Design / Product Design / Brand Design / Digital Design /
            Product
          </span>
          <span className="text-gradient">
            Digital Design / Product Design / Brand Design / Digital Desig /
            Product
          </span>
        </div>
      </div>

      {/* Services */}
      <div className="ak-height-100 ak-height-lg-30"></div>
      <section className="service-bg">
        <div className="container">
          <div className="ak-height-150 ak-height-lg-80"></div>
          <div className="service-content">
            <div className="ak-section-heading ak-style-1">
              <div className="ak-section-left">
                <h2
                  className="ak-section-title text-animation"
                  data-ease="power2.out"
                  data-split-text="chars"
                  data-duration="0.7"
                  data-direction="textTop"
                  data-offset="100%"
                >
                  Empowering Your <span className="highlight">Business</span> with Next-Gen <span className="highlight">Digital Solutions</span>
                </h2>


              </div>
              <div className="ak-section-right">
                <p
                  className="ak-section-desp text-animation text-white"
                  data-direction="rotationX"
                  data-split-text="lines"
                  data-delay="0.3"

                >
                  we provide innovative and result-driven digital solutions tailored to your business needs. Our expertise
                  ensures enhanced brand visibility, engagement, and growth in the competitive digital space.
                </p>
                <div className="ak-section-caption fade-animation" data-direction="right" data-delay="0.3">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                      <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span> Services </span>
                </div>
              </div>
            </div>
            {/* Service Cards */}
            <div>
              <div className="service-card fade-animation" data-direction="bottom">
                <div className="service-card-item style-1 text-white">
                  <div className="service-left-info">
                    <h4 className="service-title">Website & App Development</h4>
                    <ul className="service-lists">
                      <li className="service-list ">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Custom Website Design & Development</span>
                      </li>
                      <li className="service-liste">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span> Mobile App Development </span>
                      </li>
                      <li className="service-list e">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Ecommerce & CMS Solutions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="service-left-right">
                    <p className="service-desp ">
                      We create user-friendly websites and high-performance apps with seamless functionality, engaging
                      experiences, and optimized performance to drive growth.
                    </p>
                    <div className="service-btn-content">
                      <a href="#" className="more-btn">
                        <Link to="/WebDevelopment" className="morebtn-text">
                          Learn More
                        </Link>
                        <span className="primary-icon-anim">
                          <i className="flaticon-up-right-arrow"></i>
                          <i className="flaticon-up-right-arrow"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service-stroke-number ak-stroke-number">01</div>
              </div>
              <div className="service-card fade-animation" data-direction="bottom">
                <div className="service-card-item style-1 text-white">
                  <div className="service-left-info">
                    <h4 className="service-title">Social Media Marketing</h4>
                    <ul className="service-lists">
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Strategy & Campaign Management</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span> Content Creation & Branding</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Ads & Performance MarketingS</span>
                      </li>
                    </ul>
                  </div>
                  <div className="service-left-right">
                    <p className="service-desp">
                      We help brands grow by creating engaging, data-driven social media strategies. Our approach boosts
                      visibility, drives engagement, and builds strong connections with your audience for measurable business
                      success.
                    </p>
                    <div className="service-btn-content">
                      <a href="#" className="more-btn">
                        <Link to="/smo" className="morebtn-text">
                          Learn More
                        </Link>
                        <span className="primary-icon-anim">
                          <i className="flaticon-up-right-arrow"></i>
                          <i className="flaticon-up-right-arrow"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service-stroke-number ak-stroke-number">02</div>
              </div>
              <div className="service-card fade-animation" data-direction="bottom">
                <div className="service-card-item style-1 text-white">
                  <div className="service-left-info">
                    <h4 className="service-title">Product Photography</h4>
                    <ul className="service-lists">
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Ecommerce Product Photography</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Creative & Lifestyle Shoots </span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span> Ad & Promotional Photography</span>
                      </li>
                    </ul>
                  </div>
                  <div className="service-left-right">
                    <p className="service-desp">
                      We capture high-quality, visually compelling product images that enhance brand appeal and drive sales.
                      Our professional photography ensures stunning visuals that showcase product details, quality, and
                      uniqueness.
                    </p>
                    <div className="service-btn-content">
                      <a href="#" className="more-btn">
                        <Link to="/services" className="morebtn-text">
                          Learn More
                        </Link>
                        <span className="primary-icon-anim">
                          <i className="flaticon-up-right-arrow"></i>
                          <i className="flaticon-up-right-arrow"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service-stroke-number ak-stroke-number">03</div>
              </div>
              <div className="service-card fade-animation" data-direction="bottom">
                <div className="service-card-item style-1 text-white">
                  <div className="service-left-info">
                    <h4 className="service-title">SEO</h4>
                    <ul className="service-lists">
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span> On-Page & Technical SEO</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Off-Page SEO & Link Building</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Keyword Research & Content Optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="service-left-right">
                    <p className="service-desp">
                      We optimize your online presence to improve search rankings, increase organic traffic, and enhance brand
                      visibility. Our
                      SEO strategies ensure long-term growth and higher conversions.
                    </p>
                    <div className="service-btn-content">
                      <a href="" className="more-btn">
                        <Link to="/seo" className="morebtn-text">
                          Learn More
                        </Link>
                        <span className="primary-icon-anim">
                          <i className="flaticon-up-right-arrow"></i>
                          <i className="flaticon-up-right-arrow"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service-stroke-number ak-stroke-number">04</div>
              </div>
              <div className="service-card fade-animation" data-direction="bottom">
                <div className="service-card-item style-1 text-white">
                  <div className="service-left-info">
                    <h4 className="service-title">Ad Films</h4>
                    <ul className="service-lists">
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Brand Commercials</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Product & Service Promotions </span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Social Media & Digital Ads </span>
                      </li>
                    </ul>
                  </div>
                  <div className="service-left-right">
                    <p className="service-desp">
                      We create compelling ad films that captivate audiences, enhance brand storytelling, and drive
                      engagement. Our creative approach ensures visually stunning and impactful video content tailored to your
                      brand’s vision.
                    </p>
                    <div className="service-btn-content">
                      <a href="#" className="more-btn">
                        <Link to="/services" className="morebtn-text">
                          Learn More
                        </Link>
                        <span className="primary-icon-anim">
                          <i className="flaticon-up-right-arrow"></i>
                          <i className="flaticon-up-right-arrow"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service-stroke-number ak-stroke-number">05</div>
              </div>
              <div className="service-card fade-animation" data-direction="bottom">
                <div className="service-card-item style-1 text-white">
                  <div className="service-left-info">
                    <h4 className="service-title">Brand Promotions</h4>
                    <ul className="service-lists">
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span> Influencer & Social Media Campaigns</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Digital & Offline Marketing </span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Event & Product Launch Promotions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="service-left-right">
                    <p className="service-desp">
                      We elevate your brand’s presence through strategic promotions that enhance visibility, engagement, and
                      customer loyalty. Our innovative approach ensures maximum impact across digital and traditional
                      platforms.
                    </p>
                    <div className="service-btn-content">
                      <a href="#" className="more-btn">
                        <Link to="/BrandPromotions" className="morebtn-text">
                          Learn More
                        </Link>
                        <span className="primary-icon-anim">
                          <i className="flaticon-up-right-arrow"></i>
                          <i className="flaticon-up-right-arrow"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service-stroke-number ak-stroke-number">06</div>
              </div>
              <div className="service-card fade-animation" data-direction="bottom">
                <div className="service-card-item style-1 text-white">
                  <div className="service-left-info">
                    <h4 className="service-title">Content Writing</h4>
                    <ul className="service-lists">
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span>Website & Blog Content</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span> Social Media & Ad Copy</span>
                      </li>
                      <li className="service-list">
                        <span>
                          <i className="flaticon-star-2"></i>
                        </span>
                        <span> Product Descriptions & Brand Storytelling</span>
                      </li>
                    </ul>
                  </div>
                  <div className="service-left-right">
                    <p className="service-desp">
                      We create compelling, high-quality content that engages audiences, enhances brand credibility, and
                      drives conversions. Our strategic approach ensures impactful storytelling across digital platforms.
                    </p>
                    <div className="service-btn-content">
                      <a href="#" className="more-btn">
                        <Link to="/ContentWriting" className="morebtn-text">
                          Learn More
                        </Link>                      <span className="primary-icon-anim">
                          <i className="flaticon-up-right-arrow"></i>
                          <i className="flaticon-up-right-arrow"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service-stroke-number ak-stroke-number">07</div>
              </div>
            </div>
            <div className="ak-height-150 ak-height-lg-80"></div>
          </div>
        </div>
      </section>

      {/* Core Feature */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <section className="core-features-area">
        <div className="container">
          <div className="core-features">
            <div className="core-feature-card fade-animation" data-delay="0.15" data-direction="left">
              <div className="icon">
                <i className="flaticon-circle text-white"></i>
              </div>
              <h6 className="core-feature-title">Strategic Marketing</h6>
              <p className="core-feature-desp text-white">
                We develop data-driven strategic marketing plans to enhance brand visibility, drive engagement, and maximize
                ROI. Our tailored approach ensures targeted audience reach, stronger market positioning, and sustainable
                business growth across digital and traditional platforms.
              </p>
              <p className="core-feature-number text-white">01</p>
            </div>
            <div className="core-feature-card fade-animation" data-delay="0.35" data-direction="left">
              <div className="icon">
                <i className="flaticon-folded text-white"></i>
              </div>
              <h6 className="core-feature-title">Our Mission</h6>
              <p className="core-feature-desp text-white">
                Our mission is to empower brands with innovative digital solutions, enhancing visibility, engagement, and
                growth. We
                strive to deliver result-driven strategies that create lasting impact and help businesses thrive in a
                competitive
                landscape.
              </p>
              <p className="core-feature-number text-white">02</p>
            </div>
            <div className="core-feature-card fade-animation" data-delay="0.55" data-direction="left">
              <div className="icon">
                <i className="flaticon-twirl text-white"></i>
              </div>
              <h6 className="core-feature-title">Our Vision</h6>
              <p className="core-feature-desp text-white">
                Our vision is to be a leading digital solutions provider, driving innovation and excellence. We aim to
                transform brands with creative strategies, cutting-edge technology, and impactful storytelling for long-term
                success.
              </p>
              <p className="core-feature-number text-white">03</p>
            </div>
          </div>
        </div>
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
                    <div className="testmonial-info ">
                      <img className="testmonial-img" src="../assets/img/testmonial/tes2.png" alt=".." />
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
                      <img className="testmonial-img" src="assets/img/testmonial/tes1.jpg" alt=".." />
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
                      <img className="testmonial-img" src="assets/img/testmonial/tes2.png" alt=".." />
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
                      <img className="testmonial-img" src="assets/img/testmonial/tes2.png" alt=".." />
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

      {/* Newsletter */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <section className="container">
        <div className="newsletter-content style-2">
          <div className="newsletter-title-content">
            <h2 className="newsletter-title text-animation">
              Join Our
              <span className="highlight text-underlines underline-anim">
                Newsletter
              </span>
              for the Latest <span className="highlight">Exclusive</span> Content
            </h2>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input style-2"
              placeholder="Enter your email..."
              required
            />
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

export default ServicesPage;