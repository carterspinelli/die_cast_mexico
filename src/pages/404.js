import React from "react";
import { Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styled from "styled-components";
import translations from "../data/translations";

const NotFoundPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) var(--container-padding);
  text-align: center;
`;

const NotFoundContent = styled.div`
  max-width: 600px;
`;

const NotFoundCode = styled.h1`
  font-size: 8rem;
  color: var(--primary);
  margin-bottom: var(--spacing-md);
  line-height: 1;
`;

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  color: var(--primary-dark);
  margin-bottom: var(--spacing-lg);
`;

const NotFoundDescription = styled.p`
  font-size: 1.125rem;
  color: var(--gray);
  margin-bottom: var(--spacing-xl);
`;

const BackHomeButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

const NotFound = () => {
  const intl = useIntl();
  const locale = intl.locale;
  const messages = translations[locale];
  
  return (
    <Layout>
      <SEO title="404 - Page Not Found" />
      
      <NotFoundPage>
        <NotFoundContent className="fade-in">
          <NotFoundCode>404</NotFoundCode>
          <NotFoundTitle>{messages.notFoundTitle}</NotFoundTitle>
          <NotFoundDescription>{messages.notFoundDesc}</NotFoundDescription>
          <BackHomeButton to="/">{messages.backHome}</BackHomeButton>
        </NotFoundContent>
      </NotFoundPage>
    </Layout>
  );
};

export default NotFound;
