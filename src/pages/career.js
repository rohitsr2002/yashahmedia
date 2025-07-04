import React, { useRef, useState } from "react";

const Careers = () => {
  const [fileName, setFileName] = useState("");
  const [fileSelected, setFileSelected] = useState(false);
  const [position, setPosition] = useState("");
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFileSelected(true);
    } else {
      setFileName("");
      setFileSelected(false);
    }
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Application submitted!");
  };

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
                <span className="highlight-text">Join Our Creative</span> Team and Build
                <span className="highlight-text"> Your Future</span> With Us
              </h1>
              <div className="breadcrumb-caption">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
                  </svg>
                </span>
                <span className="text-white"><a href="index.html">Home</a> / Careers </span>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-stroke text-normal">CAREERS</div>
      </div>
      {/* End Breadcrumb */}

      {/* Start Career Form*/}
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
                    <h5 className="contact-title text-center">Apply for Position</h5>
                    <div className="ak-height-30 ak-height-lg-30"></div>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <input type="text" className="input-text style-2" placeholder="First name" aria-label="First name"
                            name="firstName" required />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="input-text style-2" placeholder="Last name" name="lastName"
                            aria-label="Last name" required />
                        </div>
                        <div className="col-md-6">
                          <input type="email" className="input-text style-2" placeholder="Email" aria-label="Email" name="email"
                            required />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="input-text style-2" placeholder="Phone" name="phone" aria-label="Phone"
                            required />
                        </div>
                        <div className="col-md-6">
                          <select 
                            className="input-text style-2" 
                            name="position" 
                            aria-label="Position" 
                            required
                            value={position}
                            onChange={handlePositionChange}
                          >
                            <option value="">Select Position</option>
                            <option value="frontend-developer">Frontend Developer</option>
                            <option value="backend-developer">Backend Developer</option>
                            <option value="ui-ux-designer">UI/UX Designer</option>
                            <option value="digital-marketer">Digital Marketer</option>
                            <option value="content-writer">Content Writer</option>
                            <option value="project-manager">Project Manager</option>
                            <option value="business-analyst">Business Analyst</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        {position === "other" && (
                          <div className="col-md-6">
                            <input 
                              type="text" 
                              className="input-text style-2" 
                              name="customPosition" 
                              placeholder="Enter Custom Position" 
                              required
                            />
                          </div>
                        )}
                        <div className="col-md-6">
                          <select className="input-text style-2" name="experience" aria-label="Experience" required>
                            <option value="">Years of Experience</option>
                            <option value="0-1">0-1 Years</option>
                            <option value="1-3">1-3 Years</option>
                            <option value="3-5">3-5 Years</option>
                            <option value="5-10">5-10 Years</option>
                            <option value="10+">10+ Years</option>
                          </select>
                        </div>
                        <div className="col-md-12">
                          <div className="file-upload-wrapper">
                            <input 
                              type="file" 
                              id="cv-upload" 
                              className="file-upload-input" 
                              name="cv" 
                              accept=".pdf,.doc,.docx" 
                              required 
                              ref={fileInputRef}
                              onChange={handleFileChange}
                            />
                            <label htmlFor="cv-upload" className={`file-upload-label${fileSelected ? " file-selected" : ""}`}>
                              <div className="file-upload-text">
                                <svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <polyline points="7,10 12,15 17,10"></polyline>
                                  <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span id="file-upload-text">
                                  {fileSelected ? `Selected: ${fileName}` : "Upload Your CV/Resume (PDF, DOC, DOCX)"}
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="input-text style-2" placeholder="Expected Salary (Optional)" name="salary"
                            aria-label="Expected Salary" />
                        </div>
                        <div className="col-md-12">
                          <textarea type="text" name="coverLetter" className="textarea-text style-2" rows="5"
                            placeholder="Cover Letter / Why do you want to join our team?"></textarea>
                        </div>
                      </div>
                      <div className="ak-height-40 ak-height-lg-30"></div>
                      <div className="d-inline">
                        <button type="submit" className="contact-us-btn">
                          <span className="ak-center">Submit Application</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="ak-height-75 ak-height-lg-40"></div>
          </div>
        </div>
      </section>
      {/* End Career Form*/}

      {/* Start Contact Cards */}
      <div className="ak-height-150 ak-height-lg-80"></div>
      <div className="">
        <div className="ak-center">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                  <g clipPath="url(#clip0_2385_90)">
                    <path
                      d="M12.7442 25.9029L12.735 25.8885L12.7253 25.8745C10.8478 23.1543 9.88672 20.2845 9.88672 17.0669C9.88672 8.59315 16.7565 1.95361 25 1.95361C33.3326 1.95361 40.1133 8.73432 40.1133 17.0669C40.1133 20.21 39.1534 23.2283 37.3328 25.802L37.3197 25.8205L37.3075 25.8396L25.3914 44.4162L25.3906 44.4174C25.2089 44.7016 24.791 44.7015 24.6093 44.4174L24.6088 44.4166L12.7442 25.9029ZM11.9022 26.4425L23.7669 44.9562L38.1492 26.3795C40.0891 23.6372 41.1133 20.4172 41.1133 17.0669C41.1133 8.18203 33.8849 0.953613 25 0.953613C16.2144 0.953613 8.88672 8.03076 8.88672 17.0669C8.88672 20.5046 9.91973 23.57 11.9022 26.4425ZM16.6758 17.0669C16.6758 21.6576 20.4093 25.3911 25 25.3911C29.5907 25.3911 33.3242 21.6576 33.3242 17.0669C33.3242 12.4762 29.5907 8.74268 25 8.74268C20.4093 8.74268 16.6758 12.4762 16.6758 17.0669Z"
                      stroke="#FF4A23" strokeWidth="2" />
                    <path
                      d="M29.9172 46.6871L29.9179 46.686L36.91 35.7544C39.7677 36.4741 42.0239 37.4351 43.5744 38.5343C45.2513 39.7232 45.9727 40.9699 45.9727 42.1646C45.9727 43.2238 45.4578 44.2345 44.3729 45.1991C43.2772 46.1732 41.6604 47.0396 39.6449 47.7581C35.6201 49.1929 30.247 49.9536 25 49.9536C19.753 49.9536 14.3799 49.1929 10.3551 47.7581C8.33959 47.0396 6.72284 46.1732 5.62714 45.1991C4.54224 44.2345 4.02734 43.2238 4.02734 42.1646C4.02734 40.9708 4.74773 39.7249 6.4222 38.5367C7.97035 37.4382 10.2234 36.4775 13.0773 35.7576L20.081 46.6895L20.0812 46.6897C22.3741 50.2666 27.6138 50.2783 29.9172 46.6871Z"
                      stroke="#FF4A23" strokeWidth="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2385_90">
                      <rect width="50" height="50" fill="white" transform="translate(0 0.953613)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="contact-title">Office Address</h3>
              <p className="contact-text" style={{ padding:20, alignContent:"center" }}>
                Unit No- 2012 DLF Corporate Green Tower A
                Sector 74a, SPR Road, Gurgaon
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                  <path
                    d="M33.4217 34.7399L33.421 34.7406C32.1822 35.969 30.9504 37.1904 29.7402 38.4316C29.5156 38.6631 29.1889 38.9329 28.7369 39.0233C28.2616 39.1184 27.8442 38.9786 27.5196 38.7968C27.2242 38.6359 26.9246 38.4886 26.6039 38.3309C26.5163 38.2878 26.4271 38.244 26.336 38.1988C25.9218 37.9937 25.4797 37.7679 25.0514 37.5017L25.0469 37.4989C21.3423 35.1687 18.2568 32.1838 15.5443 28.8567L15.5438 28.8561C14.1871 27.1896 12.9499 25.3695 12.0784 23.2955M33.4217 34.7399L13.0003 22.9081M33.4217 34.7399C34.0824 34.0834 34.7555 33.821 35.3609 33.821C35.9663 33.821 36.6423 34.0834 37.3086 34.7406M33.4217 34.7399L38.0128 34.0305M12.0784 23.2955L13.0003 22.9081M12.0784 23.2955C12.0785 23.2957 12.0786 23.2959 12.0786 23.2961L13.0003 22.9081M12.0784 23.2955C11.9613 23.0172 11.8506 22.6439 11.9258 22.2179C12.0022 21.7846 12.241 21.4624 12.4805 21.2229L12.4865 21.2169L12.4926 21.2109C13.5446 20.1944 14.5735 19.1553 15.6148 18.1039C15.7894 17.9276 15.9644 17.7509 16.1398 17.5739L16.1407 17.5731C16.8515 16.8579 17.1214 16.1729 17.1206 15.573C17.1198 14.9725 16.8475 14.2838 16.1303 13.5622L16.1287 13.5606C15.6471 13.0738 15.1651 12.5919 14.681 12.1078L14.6801 12.1068C14.1975 11.6242 13.7127 11.1395 13.2277 10.6492M13.0003 22.9081C12.8338 22.5127 12.865 22.2526 13.1876 21.93C14.2481 20.9052 15.2857 19.8574 16.3265 18.8064C16.5009 18.6303 16.6753 18.4542 16.85 18.278C18.5459 16.5717 18.5459 14.574 16.8396 12.8573C16.3557 12.3683 15.8719 11.8845 15.3881 11.4006C14.9043 10.9168 14.4205 10.433 13.9367 9.94401M13.2277 10.6492C13.2283 10.6498 13.2289 10.6505 13.2296 10.6511L13.9367 9.94401M13.2277 10.6492C13.227 10.6486 13.2264 10.648 13.2258 10.6473L13.9367 9.94401M13.2277 10.6492C12.89 10.3116 12.5562 9.97543 12.2239 9.64074C11.5637 8.97594 10.9091 8.31682 10.2414 7.6628M13.9367 9.94401C13.6037 9.61106 13.272 9.27696 12.9402 8.94286C12.2766 8.27466 11.613 7.60646 10.9402 6.9475M10.9402 6.9475L10.2423 7.66368C10.242 7.66339 10.2417 7.66309 10.2414 7.6628M10.9402 6.9475C9.30667 5.35561 7.26738 5.35561 5.64428 6.95791C5.14473 7.44913 4.65352 7.94534 4.16264 8.44122C3.42662 9.18473 2.69134 9.92748 1.92986 10.6515C0.754148 11.7648 0.161089 13.1278 0.0362351 14.7197M10.9402 6.9475L10.2405 7.66194C10.2408 7.66223 10.2411 7.66252 10.2414 7.6628M10.2414 7.6628C9.57592 7.01467 8.89876 6.75402 8.28975 6.75488C7.68107 6.75575 7.00684 7.01799 6.34681 7.66956L6.34542 7.67093C5.86795 8.14045 5.38374 8.62943 4.89436 9.12362C4.14609 9.87927 3.38573 10.6471 2.61892 11.3762L2.61743 11.3776C1.6381 12.305 1.14077 13.4288 1.03326 14.7968M0.0362351 14.7197L1.03334 14.7958C1.03331 14.7961 1.03328 14.7965 1.03326 14.7968M0.0362351 14.7197C-0.161451 17.3104 0.473225 19.7555 1.36801 22.1381C3.19921 27.0699 5.98763 31.4502 9.3691 35.4663C13.9367 40.8975 19.3887 45.1945 25.7666 48.2951M0.0362351 14.7197L1.03317 14.7979C1.0332 14.7975 1.03323 14.7972 1.03326 14.7968M1.03326 14.7968C0.851924 17.1761 1.43092 19.4613 2.30418 21.7865L2.30548 21.79C4.08794 26.5905 6.80869 30.8727 10.1341 34.8222L10.1344 34.8227C14.6141 40.1493 19.9551 44.3579 26.2034 47.3955M26.2034 47.3955L25.7666 48.2951M26.2034 47.3955C26.2035 47.3956 26.2037 47.3957 26.2038 47.3957L25.7666 48.2951M26.2034 47.3955C29.0174 48.7618 31.8561 49.7727 34.9044 49.9393L34.9058 49.9394C36.9051 50.0515 38.5145 49.556 39.8157 48.0976L39.8166 48.0965C40.5359 47.2927 41.3388 46.512 42.1103 45.7619C42.497 45.386 42.8758 45.0177 43.2322 44.658M25.7666 48.2951C28.6383 49.6893 31.614 50.761 34.8498 50.9378C37.0764 51.0627 39.0116 50.5009 40.5619 48.7633C41.2594 47.9837 42.0154 47.2491 42.7707 46.5151C43.1645 46.1323 43.5582 45.7497 43.9433 45.361M43.2322 44.658C43.2321 44.6581 43.232 44.6582 43.2319 44.6583L43.9433 45.361M43.2322 44.658C43.2324 44.6577 43.2327 44.6575 43.233 44.6572L43.9433 45.361M43.2322 44.658C43.9229 43.9585 44.1958 43.2664 44.1984 42.6542C44.201 42.044 43.9356 41.3616 43.2552 40.6767M43.9433 45.361C45.6081 43.6755 45.6185 41.6362 43.9642 39.9715M43.9642 39.9715L43.2552 40.6767M43.9642 39.9715C41.9873 37.9842 40 36.0073 38.0128 34.0305M43.9642 39.9715L43.2548 40.6764C43.255 40.6765 43.2551 40.6766 43.2552 40.6767M43.2552 40.6767C41.2809 38.692 39.2958 36.7174 37.3086 34.7406M38.0128 34.0305L37.3102 34.7421C37.3097 34.7416 37.3092 34.7411 37.3086 34.7406M38.0128 34.0305L37.3075 34.7395C37.3079 34.7398 37.3083 34.7402 37.3086 34.7406"
                    stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="contact-title">HR Contact</h3>
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
              <h3 className="contact-title">HR Email</h3>
              <p className="contact-text">
                hr@yashahmedia.com
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
          width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
      </div>
      {/* End Google Map */}
    </div>
  );
};

export default Careers;