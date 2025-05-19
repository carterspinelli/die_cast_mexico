import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePageTracking } from "../utils/hooks";
import { useLanguage } from "../context/LanguageContext";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const Layout = ({ children, hideNav = false, hideFooter = false }) => {
  // Get language and messages from our custom context
  const { messages } = useLanguage();
  
  // Track page views
  usePageTracking();
  
  return (
    <Main>
      {!hideNav && <Navbar messages={messages} />}
      <Content>{children}</Content>
      {!hideFooter && <Footer messages={messages} />}
    </Main>
  );
};

export default Layout;
