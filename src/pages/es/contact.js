import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import FormspreeContactForm from "../../components/FormspreeContactForm";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";

const ContactContainer = styled.div`
  padding: 8rem 2rem 4rem 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  
  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }
`;

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto 3rem auto;
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
`;

const ContactSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactDetail = styled.div`
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const ContactLabel = styled.div`
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  color: #1a202c;
  font-size: 1rem;
  
  a {
    color: #3b82f6;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactPage = () => {
  const { messages } = useLanguage();
  
  return (
    <Layout>
      <SEO 
        title={`${messages?.contactTitle || "Contáctanos"} | Die Cast Mexico`}
        description="Contacta Die Cast Mexico para soluciones profesionales de fundición e inyección a presión"
      />
      <ContactContainer>
        <ContactInfo>
          <ContactTitle>
            {messages?.contactTitle || "Contáctanos"}
          </ContactTitle>
          <ContactSubtitle>
            {messages?.contactSubtitle || "Ponte en contacto con nuestro equipo para consultas, cotizaciones o soporte"}
          </ContactSubtitle>
          
          <ContactDetails>
            <ContactDetail>
              <ContactLabel>Teléfono</ContactLabel>
              <ContactValue>
                <a href="tel:+523339683660">+52 33 3968 3660</a>
              </ContactValue>
            </ContactDetail>
            
            <ContactDetail>
              <ContactLabel>Correo Electrónico</ContactLabel>
              <ContactValue>
                <a href="mailto:info@diecastmexico.com">info@diecastmexico.com</a>
              </ContactValue>
            </ContactDetail>
            
            <ContactDetail>
              <ContactLabel>Dirección</ContactLabel>
              <ContactValue>
                Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.
              </ContactValue>
            </ContactDetail>
          </ContactDetails>
        </ContactInfo>
        
        <FormspreeContactForm />
      </ContactContainer>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  // Note: We can't use hooks in the Head export function directly
  return (
    <SEO 
      title="Contáctanos | Die Cast Mexico" 
      description="Contacta Die Cast Mexico"
    />
  );
};