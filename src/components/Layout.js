import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePreferredLanguage, usePageTracking } from "../utils/hooks";
import translations from "../data/translations";
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
  const intl = useIntl();
  const locale = intl.locale;
  const messages = translations[locale];
  
  // Track page views
  usePageTracking();
  
  // Check user's preferred language
  usePreferredLanguage();
  
  return (
    <Main>
      {!hideNav && <Navbar messages={messages} />}
      <Content>{children}</Content>
      {!hideFooter && <Footer messages={messages} />}
    </Main>
  );
};

export default Layout;
