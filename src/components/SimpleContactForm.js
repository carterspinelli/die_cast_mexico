import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ContactHeader = styled.h1`
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const ContactSubheader = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactDetail = styled.div`
  margin-bottom: 0.5rem;
`;

const ContactLabel = styled.span`
  font-weight: bold;
`;

const ContactForm = styled.form`
  margin-bottom: 2rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.25rem;
  font-size: 0.9rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  min-height: 120px;
`;

const SubmitButton = styled.button`
  background-color: #0c1220;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #172b49;
  }
`;

const MapWrapper = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  height: 450px;
`;

const SimpleContactForm = () => {
  const { messages } = useLanguage();
  
  return (
    <ContactContainer>
      <ContactHeader>{messages?.contactTitle || "Contact Us"}</ContactHeader>
      <ContactSubheader>{messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}</ContactSubheader>
      
      <ContactInfo>
        <ContactDetail>
          <ContactLabel>Phone: </ContactLabel>
          +52 33 3968 3660
        </ContactDetail>
        <ContactDetail>
          <ContactLabel>Email: </ContactLabel>
          <a href="mailto:info@diecastmexico.com">info@diecastmexico.com</a>
        </ContactDetail>
        <ContactDetail>
          <ContactLabel>Address: </ContactLabel>
          Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.
        </ContactDetail>
      </ContactInfo>
      
      <ContactForm>
        <FormRow>
          <FormGroup>
            <FormLabel>{messages?.formFirstNameLabel || "First Name"}</FormLabel>
            <FormInput 
              type="text" 
              placeholder={messages?.formFirstNamePlaceholder || "Enter your first name"} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>{messages?.formLastNameLabel || "Last Name"}</FormLabel>
            <FormInput 
              type="text" 
              placeholder={messages?.formLastNamePlaceholder || "Enter your last name"} 
            />
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <FormLabel>{messages?.formEmailLabel || "Email Address"}</FormLabel>
          <FormInput 
            type="email" 
            placeholder={messages?.formEmailPlaceholder || "Enter your email address"} 
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel>{messages?.formSubjectLabel || "Subject"}</FormLabel>
          <FormInput 
            type="text" 
            placeholder={messages?.formSubjectPlaceholder || "Enter the subject"} 
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel>{messages?.formProjectLabel || "Project Details"}</FormLabel>
          <FormTextarea 
            placeholder={messages?.formProjectPlaceholder || "Tell us about your project requirements"} 
          />
        </FormGroup>
        
        <SubmitButton type="submit">
          {messages?.formSubmit || "Submit Inquiry"}
        </SubmitButton>
      </ContactForm>
      
      <MapWrapper>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8748761218494!2d-103.42603092398329!3d20.67114170094902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428add9aeaaacf5%3A0x51ad90d1bb656c6d!2sAv.%20Aviaci%C3%B3n%204376%2C%20Jard%C3%ADn%20Real%2C%2045136%20Zapopan%2C%20Jal.!5e0!3m2!1sen!2smx!4v1684156749223!5m2!1sen!2smx" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Die Cast Mexico Location"
        />
      </MapWrapper>
    </ContactContainer>
  );
};

export default SimpleContactForm;