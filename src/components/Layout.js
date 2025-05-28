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
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Layout = ({ children, hideNav = false, hideFooter = false }) => {
  // Get language and messages from our custom context
  const { messages } = useLanguage();
  const [useModernNav, setUseModernNav] = useState(false);
  
  // Initialize AOS animation library with mobile optimizations
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    AOS.init({
      duration: isMobile ? 400 : 800,
      once: true,
      mirror: false,
      offset: isMobile ? 50 : 120,
      easing: 'ease-out',
      disable: isMobile ? false : false, // Keep animations on mobile but make them faster
      throttleDelay: 99,
      debounceDelay: 50
    });
    
    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
