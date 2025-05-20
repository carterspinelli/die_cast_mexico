import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

const Section = styled.section`
  padding: 6rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1e293b;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const FormSection = styled.div`
  flex: 1;
`;

const InfoSection = styled.div`
  flex: 1;
`;

const InfoCard = styled.div`
  background-color: #f8fafc;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #0c1220;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  margin-right: 1rem;
  color: #0c1220;
  font-size: 1.5rem;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #0c1220;
`;

const InfoText = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const ContactPage = () => {
  const { messages } = useLanguage();
  
  const contactInfo = [
    {
      icon: "📍",
      label: messages?.footerAddress || "Address",
      text: "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal."
    },
    {
      icon: "📞",
      label: messages?.footerPhone || "Phone",
      text: "+52 33 3968 3660"
    },
    {
      icon: "✉️",
      label: messages?.footerEmail || "Email",
      text: messages?.footerEmailValue || "info@diecastmexico.com"
    }
  ];
  
  const formMessages = {
    nameLabel: messages?.formNameLabel || "Your Name",
    namePlaceholder: messages?.formNamePlaceholder || "Enter your full name",
    emailLabel: messages?.formEmailLabel || "Email Address",
    emailPlaceholder: messages?.formEmailPlaceholder || "Enter your email address",
    phoneLabel: messages?.formPhoneLabel || "Phone Number",
    phonePlaceholder: messages?.formPhonePlaceholder || "Enter your phone number (optional)",
    companyLabel: messages?.formCompanyLabel || "Company",
    companyPlaceholder: messages?.formCompanyPlaceholder || "Enter your company name",
    messageLabel: messages?.formProjectLabel || "Project Details",
    messagePlaceholder: messages?.formProjectPlaceholder || "Tell us about your project requirements",
    submitButton: messages?.formSubmit || "Submit Inquiry",
    thankYouMessage: messages?.formSuccess || "Thank you! Your message has been sent successfully.",
    errorMessage: messages?.formError || "There was an error sending your message. Please try again.",
    requiredField: messages?.requiredField || "This field is required",
    invalidEmail: messages?.invalidEmail || "Please enter a valid email address"
  };
  
  return (
    <Layout>
      <SEO 
        title={messages?.contactTitle || "Contact Us"} 
        description={messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
      />
      <Section>
        <Container>
          <HeaderContent>
            <Title>{messages?.contactTitle || "Contact Us"}</Title>
            <Subtitle>{messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}</Subtitle>
          </HeaderContent>
          
          <Content>
            <FormSection>
              <h2>{messages?.contactFormTitle || "Send Us a Message"}</h2>
              <p style={{ marginBottom: "2rem", color: "#64748b" }}>
                {messages?.contactFormSubtitle || "Fill out the form below and we'll get back to you within 24 hours"}
              </p>
              <ContactForm messages={formMessages} />
            </FormSection>
            
            <InfoSection>
              <InfoCard>
                <InfoTitle>{messages?.contactTitle || "Contact Us"}</InfoTitle>
                <InfoList>
                  {contactInfo.map((info, index) => (
                    <InfoItem key={index}>
                      <InfoIcon>{info.icon}</InfoIcon>
                      <InfoContent>
                        <InfoLabel>{info.label}</InfoLabel>
                        <InfoText>{info.text}</InfoText>
                      </InfoContent>
                    </InfoItem>
                  ))}
                </InfoList>
              </InfoCard>
              
              <div style={{ marginTop: "2rem", borderRadius: "0.5rem", overflow: "hidden" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8748761218494!2d-103.42603092398329!3d20.67114170094902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428add9aeaaacf5%3A0x51ad90d1bb656c6d!2sAv.%20Aviaci%C3%B3n%204376%2C%20Jard%C3%ADn%20Real%2C%2045136%20Zapopan%2C%20Jal.!5e0!3m2!1sen!2smx!4v1684156749223!5m2!1sen!2smx" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Die Cast Mexico Location"
                />
              </div>
            </InfoSection>
          </Content>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => (
  <SEO 
    title="Contact Us | Die Cast Mexico" 
    description="Get in touch with our team for inquiries, quotes, or support"
  />
);