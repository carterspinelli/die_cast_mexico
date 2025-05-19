import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const ContactHeader = styled.section`
  background-color: var(--primary-dark);
  color: var(--white);
  padding: var(--spacing-2xl) 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const Title = styled.h1`
  color: var(--white);
  margin-bottom: var(--spacing-sm);
`;

const Subtitle = styled.p`
  color: var(--gray-light);
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background-color: var(--background);
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background-color: var(--white);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  color: var(--white);
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const ContactTitle = styled.h3`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-sm);
`;

const ContactValue = styled.p`
  color: var(--gray);
`;

const ContactLink = styled.a`
  color: var(--primary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const Contact = () => {
  const { messages } = useLanguage();
  
  return (
    <Layout>
      <SEO 
        title={messages.contactTitle} 
        description={messages.contactSubtitle}
      />
      
      <ContactPage>
        <ContactHeader>
          <Container>
            <Title className="slide-in-left">{messages.contactTitle}</Title>
            <Subtitle className="slide-in-right">{messages.contactSubtitle}</Subtitle>
          </Container>
        </ContactHeader>
        
        <ContactSection>
          <Container>
            <ContactInfo>
              <ContactCard className="fade-in">
                <ContactIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </ContactIcon>
                <ContactTitle>{messages.footerAddress}</ContactTitle>
                <ContactValue>{messages.footerAddressValue}</ContactValue>
              </ContactCard>
              
              <ContactCard className="fade-in">
                <ContactIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </ContactIcon>
                <ContactTitle>{messages.footerPhone}</ContactTitle>
                <ContactValue>
                  <ContactLink href="tel:+5281812345678">+52 (81) 8123-4567</ContactLink>
                </ContactValue>
              </ContactCard>
              
              <ContactCard className="fade-in">
                <ContactIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </ContactIcon>
                <ContactTitle>{messages.footerEmail}</ContactTitle>
                <ContactValue>
                  <ContactLink href="mailto:info@diecastmexico.com">
                    {messages.footerEmailValue}
                  </ContactLink>
                </ContactValue>
              </ContactCard>
            </ContactInfo>
            
            <ContactForm messages={messages} />
          </Container>
        </ContactSection>
      </ContactPage>
    </Layout>
  );
};

export default Contact;
