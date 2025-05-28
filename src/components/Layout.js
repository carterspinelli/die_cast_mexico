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
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
`;

const Layout = ({ children, hideNav = false, hideFooter = false }) => {
  // Get language and messages from our custom context
  const { messages } = useLanguage();
  const [useModernNav, setUseModernNav] = useState(false);
  
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,  // Set to true to make animations occur only once
      mirror: false,
      offset: 120,
      easing: 'ease-in-out'
    });
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
