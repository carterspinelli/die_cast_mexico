import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TubelightNavbar from "./ui/tubelight-navbar";
import Footer from "./Footer";
import { usePageTracking } from "../utils/hooks";
import { useLanguage } from "../context/LanguageContext";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    overflow-y: visible;
    height: auto;
  }
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    overflow-y: visible;
    height: auto;
  }
`;

const Layout = ({ children, hideNav = false, hideFooter = false }) => {
  // Get language and messages from our custom context
  const { messages } = useLanguage();
  const [useModernNav, setUseModernNav] = useState(false);
  
  // Initialize AOS animation library with mobile optimizations
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    AOS.init({
      duration: isMobile ? 300 : 800,
      once: true,
      mirror: false,
      offset: isMobile ? 30 : 120,
      easing: 'ease-out',
      disable: false,
      throttleDelay: 16,
      debounceDelay: 16,
      // Ensure AOS doesn't interfere with scroll
      disableMutationObserver: isMobile,
      startEvent: 'DOMContentLoaded'
    });
    
    // Refresh AOS on window resize with throttling
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);
  
  // Track page views
  usePageTracking();
  
  return (
    <Main>
      {!hideNav && (
        useModernNav ? <TubelightNavbar /> : <Navbar messages={messages} />
      )}
      <Content>{children}</Content>
      {!hideFooter && <Footer messages={messages} />}
    </Main>
  );
};

export default Layout;
