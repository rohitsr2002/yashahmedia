// src/hooks/usePageScripts.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageScripts = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // List of script sources
    const scriptSources = [
      "/assets/js/plugins/jquery-3.7.1.min.js",
      "/assets/js/plugins/bootstrap.bundle.min.js",
      "/assets/js/plugins/swiper.min.js",
      "/assets/js/plugins/gsap.js",
      "/assets/js/plugins/splittext.js",
      "/assets/js/plugins/scrolltigger.js",
      "/assets/js/plugins/scrolltoplugins.js",
      "/assets/js/plugins/lenis.min.js",
      "/assets/js/main.js"
    ];

    // Remove existing loaded scripts if needed
    const existingScripts = document.querySelectorAll('[data-dynamic-script]');
    existingScripts.forEach(script => script.remove());

    // Dynamically append each script
    scriptSources.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.setAttribute("data-dynamic-script", "true");
      document.body.appendChild(script);
    });

  }, [location.pathname]); // Rerun on every page route change
};

export default usePageScripts;
