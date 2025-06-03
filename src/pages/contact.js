import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import FormspreeContactForm from "../components/FormspreeContactForm";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const ContactSection = styled.section`
  padding: 8rem 2rem 4rem 2rem;
  
  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactDetail = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #f8fafc;
`;

const ContactLabel = styled.span`
  font-weight: 600;
  color: var(--primary);
`;

const ContactPage = () => {
  const { messages } = useLanguage();
  
  return (
    <Layout>
      <SEO 
        title={`${messages?.contactTitle || "Contact Us"} | Die Cast Mexico`}
        description="Contact Die Cast Mexico for professional die casting solutions"
      />
      <ContactSection>
        <Container>
          <ContactHeader>
            <Title>{messages?.contactTitle || "Contact Us"}</Title>
            <Subtitle>
              {messages?.contactFormSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
            </Subtitle>
          </ContactHeader>
          
          <ContactInfo>
            <ContactDetail>
              <ContactLabel>Phone: </ContactLabel>
              <br />
              +52 33 3968 3660
            </ContactDetail>
            <ContactDetail>
              <ContactLabel>Email: </ContactLabel>
              <br />
              <a href="mailto:info@diecastmexico.com">info@diecastmexico.com</a>
            </ContactDetail>
            <ContactDetail>
              <ContactLabel>Address: </ContactLabel>
              <br />
              Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.
            </ContactDetail>
          </ContactInfo>
          
          <FormspreeContactForm />
        </Container>
      </ContactSection>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  return (
    <SEO 
      title="Contact Us | Die Cast Mexico" 
      description="Contact Die Cast Mexico for professional die casting solutions"
    />
  );
};