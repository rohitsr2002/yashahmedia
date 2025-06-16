import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/style.css';

import Header from './components/Header';
import Footer from './components/footer';
import Career from './pages/career';
import Clients from './pages/clients';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import ContentWriting from './pages/contentWriting';
import BrandPromotions from './pages/brandPromotions';
import SEOServices from './pages/seo';
import SMOServices from './pages/smo';
import Ecommerce from './pages/ecommerce';
import Dynamic from './pages/dynamic';
import Software from './pages/software';
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';

import usePageScripts from './hooks/usePageScripts'; // ✅ import hook here

function App() {
  return (
    <Router>
      {/* ✅ Hook MUST be inside Router */}
      <PageScriptsHandler />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contentWriting" element={<ContentWriting />} />
        <Route path='/brandPromotions' element={<BrandPromotions />} />
        <Route path='/seo' element={<SEOServices />} />
        <Route path='/smo' element={<SMOServices />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/software" element={<Software />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/AppDevelopment" element={<AppDevelopment />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// ✅ Separate component to safely use hook inside Router
function PageScriptsHandler() {
  usePageScripts();
  return null;
}

export default App;
