import React from "react";

const AppDevelopment = () => (
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
    <div className="offcanvas offcanvas-end style-1" tabIndex="-1" id="offcanvasRight">
      <div className="offcanvas-header">
        <button type="button" className="btn-close btn-close-black ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="offcanvas-body-coustom-style">
          <div className="offcanvas-logo-content">
            <a className="ak-site_branding dark-logo" href="index-2.html">
              <img src="/img/logo/dark-logo.svg" alt="..." />
            </a>
            <a className="ak-site_branding white-logo" href="index-2.html">
              <img src="/img/logo/white-logo.svg" alt="..." />
            </a>
          </div>
          <p className="desp">
            We thrive on creativity and innovation. Our team is constantly exploring new.
          </p>
          <div className="row row-cols-3 g-3">
            {[1,2,3,4,5,6].map(i => (
              <div className="col" key={i}>
                <img src={`/img/gallery/mini-gallery-${i}.png`} className="img-fluid" alt="..." />
              </div>
            ))}
          </div>
          <div className="offcanvas-footer-contant">
            <p className="short-title">Say hello!</p>
            <a className="email" href="emailto:info@email.com"> info@email.com </a>
            <a className="email" href="telto:(406)555-0120">(406) 555-0120</a>
            <a href="#">
              901 N Pitt Str., Suite 170 <br />
              Alexandria, USA
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
              Our <span className="highlight-text">Exceptional</span> Android App
              Development
              <span className="highlight-text">Services</span>
            </h1>
            <div className="breadcrumb-caption">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                  <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
                </svg>
              </span>
              <span><a href="index.html">Home</a> / Services </span>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-stroke">SERVICE</div>
    </div>

    <div className="ak-height-150 ak-height-lg-80"></div>
    <div className="container">
      <div className="services-main-img">
        <img src="./assets/img/services/appd.jpg" className="img-fluid" alt="" />
      </div>
    </div>

    <section>
      <div className="container">
        <div className="services-details-title text-white">
          <br /><br />
          <h3 className="services-details-title-text text-animation ">
            Android & IOS App Development
          </h3>
          <p className="services-details-title-description">
            We specialize in building high-performance Android and iOS mobile applications tailored to your business needs. Our expert team uses the latest technologies to create intuitive and scalable apps that deliver a seamless user experience across all devices.
          </p>
          <div className="ak-height-50 ak-height-lg-50"></div>
          <p className="services-details-title-description">
            Whether you're launching a new product or enhancing an existing service, our mobile development solutions help you reach your audience more effectively. From native apps to cross-platform development, we offer comprehensive solutions to fit your goals.
          </p>
          <div className="ak-height-50 ak-height-lg-50"></div>
          <p className="services-details-title-description">
            Our process includes strategy, design, development, testing, and post-launch support. We ensure your app is secure, fast, and optimized for both the Google Play Store and Apple App Store, giving your users the best possible experience.
          </p>
        </div>
        <div className="ak-height-50 ak-height-lg-50"></div>

        <div className="row align-items-center">
          <div className="col-xl-6 col-12 d-none d-xl-block">
            <div className="image-hov-one">
              <img src="./assets/img/services/appd2.jpg" className="img-fluid" alt="Mobile App Development" style={{ height: 700, width: 600 }} />
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="ak-accordion text-white">
              <div className="ak-accordion-item">
                <div className="ak-accordion-title-content active">
                  <h6 className="ak-accordion-title">
                    1. What platforms do you develop mobile apps for?
                  </h6>
                  <span className="accordion-icon">...</span>
                </div>
                <div className="ak-accordion-tab">
                  We develop apps for both Android and iOS platforms. Whether you need a native app for one platform or a cross-platform solution, our team delivers high-quality mobile applications using technologies like Kotlin, Swift, React Native, and Flutter.
                </div>
              </div>
              <div className="ak-accordion-item">
                <div className="ak-accordion-title-content">
                  <h6 className="ak-accordion-title">
                    2. What is the process for developing a mobile app?
                  </h6>
                  <span className="accordion-icon">...</span>
                </div>
                <div className="ak-accordion-tab">
                  Our mobile app development process includes discovery and planning, UI/UX design, development, testing, deployment, and ongoing support. We work closely with you throughout to ensure your vision is realized efficiently and effectively.
                </div>
              </div>
              <div className="ak-accordion-item">
                <div className="ak-accordion-title-content">
                  <h6 className="ak-accordion-title">
                    3. How long does it take to build a mobile app?
                  </h6>
                  <span className="accordion-icon">...</span>
                </div>
                <div className="ak-accordion-tab">
                  Depending on complexity and features, a typical mobile app takes 6 to 16 weeks from planning to deployment. Larger or more complex projects may take longer due to integrations and testing requirements.
                </div>
              </div>
              <div className="ak-accordion-item">
                <div className="ak-accordion-title-content">
                  <h6 className="ak-accordion-title">
                    4. Will my app work on both phones and tablets?
                  </h6>
                  <span className="accordion-icon">...</span>
                </div>
                <div className="ak-accordion-tab">
                  Yes, we ensure your mobile app is fully responsive and optimized for multiple screen sizes including smartphones and tablets, providing a consistent user experience across all devices.
                </div>
              </div>
              <div className="ak-accordion-item">
                <div className="ak-accordion-title-content">
                  <h6 className="ak-accordion-title">
                    5. Can you integrate features like payments, chat, or location tracking?
                  </h6>
                  <span className="accordion-icon">...</span>
                </div>
                <div className="ak-accordion-tab">
                  Absolutely. We can integrate a wide range of features including in-app payments, real-time chat, GPS location tracking, push notifications, social media login, and third-party APIs.
                </div>
              </div>
              <div className="ak-accordion-item">
                <div className="ak-accordion-title-content">
                  <h6 className="ak-accordion-title">
                    6. Do you offer maintenance after the app is launched?
                  </h6>
                  <span className="accordion-icon">...</span>
                </div>
                <div className="ak-accordion-tab">
                  Yes, we provide ongoing support and maintenance services to ensure your app runs smoothly, remains updated with platform changes, and continues to perform well as your user base grows.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ak-height-50 ak-height-lg-50"></div>
        <p className="services-details-title-description text-white">
          At our company, we specialize in crafting high-performance mobile applications tailored for both Android and iOS platforms. Whether you're a startup or an enterprise, our team ensures your app meets user expectations with sleek design, smooth performance, and scalability.
        </p>
        <div className="ak-height-50 ak-height-lg-50"></div>
        <p className="services-details-title-description text-white">
          Our mobile app development process includes research, wireframing, UI/UX design, agile development, rigorous QA testing, and post-launch support. We work with technologies like React Native, Flutter, and native languages (Swift, Kotlin) to ensure optimal performance and native-like user experience. Let us help you turn your ideas into functional, user-friendly apps that drive real results.
        </p>
      </div>
    </section>

    <div className="ak-height-150 ak-height-lg-80"></div>
    <section>
      <div className="container">
        <div className="ak-section-heading ak-style-1">
          <div className="ak-section-left">
            <h2 className="ak-section-title text-animation">
              Our <span className="highlight">Exceptional</span> Digital Industrial
              <span className="highlight">Working Process</span>
            </h2>
          </div>
          <div className="ak-section-right">
            <p className="ak-section-desp text-white">
              Our app development process is designed to turn your ideas into powerful, user-friendly mobile applications. From initial planning and design to development, testing, and deployment, we ensure every step is focused on delivering high-quality apps for Android and iOS platforms that help your business grow.
            </p>
            <div className="ak-section-caption">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                  <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                </svg>
              </span>
              <span> Process </span>
            </div>
          </div>
        </div>
        <div className="ak-height-75 ak-height-lg-50 "></div>
        <div className="funfact-content text-white">
          <div className="funfact style1">
            <div className="funfact-card style-1 ">
              <div className="funfact-number">
                <span>0</span>
                <span id="count1" className="amin_auto_count">1</span>
              </div>
              <p className="funfact-text text-center">
                Planning and Idea <br />
                Validation
              </p>
            </div>
          </div>
          <div className="funfact style1">
            <div className="funfact-card style-1">
              <div className="funfact-number">
                <span>0</span>
                <span id="count2" className="amin_auto_count">02</span>
              </div>
              <p className="funfact-text text-center">
                Wireframing and <br />
                Design
              </p>
            </div>
          </div>
          <div className="funfact style1">
            <div className="funfact-card style-1">
              <div className="funfact-number">
                <span>0</span>
                <span id="count3" className="amin_auto_count">03</span>
              </div>
              <p className="funfact-text text-center">
                Technical Planning & <br />
                Development
              </p>
            </div>
          </div>
          <div className="funfact style1">
            <div className="funfact-card style-1">
              <div className="funfact-number">
                <span>0</span>
                <span id="count4" className="amin_auto_count">04</span>
              </div>
              <p className="funfact-text text-center">
                Testing, Deployment <br />
                Regular Update
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="ak-height-150 ak-height-lg-80"></div>
    <div className="container">
      <div className="services-details-cta">
        <div className="dot-top-left"></div>
        <div className="dot-top-right"></div>
        <div className="dot-bottom-left"></div>
        <div className="dot-bottom-right"></div>
        <div className="services-bg-start">
          <img src="/img/shape/cta-start-left.png" className="ak-parallax" alt="..." />
          <img src="/img/shape/cta-start-right.png" className="ak-parallax" alt="..." />
        </div>
        <div className="services-details-cta-wapper">
          <div className="services-details-cta-content">
            <h2 className="services-details-cta-title text-animation">
              Get in Touch to Bring Your
              <span className="highlight text-underlines underline-anim">Project</span>
              to Life!
            </h2>
          </div>
        </div>
        <div className="services-details-cta-btn">
          <a href="contact.html" className="circle-btn style-1 circle-btn-anim">
            <span className="text text-uppercase">
              Start
              <i className="flaticon-up-right-arrow"></i>
              <br />
              Project
            </span>
          </a>
        </div>
      </div>
    </div>

    <div className="ak-height-150 ak-height-lg-80"></div>
    <div className="slideing-text-content style2">
      <p className="slideing-text text-color-three">
        Design / Product Development / Brand Design
      </p>
      <p className="slideing-text text-color-two">
        Digital Design / Product Design / Brand Design
      </p>
    </div>
    <div className="ak-height-150 ak-height-lg-80"></div>
  </div>
);

export default AppDevelopment;