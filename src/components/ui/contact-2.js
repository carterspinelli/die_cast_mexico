import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";

// Styled components for the contact form
const Section = styled.section`
  padding: 4rem 2rem;
  
  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  max-width: 24rem;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const TextCenter = styled.div`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (min-width: 1024px) {
    font-size: 3.75rem;
    margin-bottom: 0.25rem;
  }
`;

const Description = styled.p`
  color: #64748b;
`;

const ContactDetails = styled.div`
  margin: 0 auto;
  width: fit-content;
  
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const ContactHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const ContactList = styled.ul`
  list-style-type: disc;
  margin-left: 1rem;
`;

const ContactItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactLabel = styled.span`
  font-weight: 700;
`;

const Link = styled.a`
  text-decoration: underline;
  
  &:hover {
    text-decoration: none;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 768px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    margin: 0;
    width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FormGroup = styled.div`
  display: grid;
  width: 100%;
  gap: 0.375rem;
`;

export const Contact2 = ({
  title,
  description,
  phone,
  email,
  web,
}) => {
  const { messages } = useLanguage();
  
  return (
    <Section>
      <Container>
        <FlexContainer>
          <InfoContainer>
            <TextCenter>
              <Title>{title || messages?.contactTitle || "Contact Us"}</Title>
              <Description>
                {description || messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
              </Description>
            </TextCenter>
            <ContactDetails>
              <ContactHeading>
                {messages?.contactDetailTitle || "Contact Details"}
              </ContactHeading>
              <ContactList>
                <ContactItem>
                  <ContactLabel>Phone: </ContactLabel>
                  {phone || "+52 33 3968 3660"}
                </ContactItem>
                <ContactItem>
                  <ContactLabel>Email: </ContactLabel>
                  <Link href={`mailto:${email || "info@diecastmexico.com"}`}>
                    {email || "info@diecastmexico.com"}
                  </Link>
                </ContactItem>
                <ContactItem>
                  <ContactLabel>Web: </ContactLabel>
                  <Link 
                    href={web?.url || "https://maps.google.com/?q=Av. Aviación 4376, Jardín Real, 45136 Zapopan, Jal."} 
                    target="_blank"
                  >
                    {web?.label || "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal."}
                  </Link>
                </ContactItem>
              </ContactList>
            </ContactDetails>
          </InfoContainer>
          
          <FormContainer>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstname">{messages?.formFirstNameLabel || "First Name"}</Label>
                <Input 
                  type="text" 
                  id="firstname" 
                  placeholder={messages?.formFirstNamePlaceholder || "Enter your first name"} 
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastname">{messages?.formLastNameLabel || "Last Name"}</Label>
                <Input 
                  type="text" 
                  id="lastname" 
                  placeholder={messages?.formLastNamePlaceholder || "Enter your last name"} 
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="email">{messages?.formEmailLabel || "Email"}</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder={messages?.formEmailPlaceholder || "Enter your email address"} 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">{messages?.formSubjectLabel || "Subject"}</Label>
              <Input 
                type="text" 
                id="subject" 
                placeholder={messages?.formSubjectPlaceholder || "Enter the subject"} 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">{messages?.formProjectLabel || "Message"}</Label>
              <Textarea 
                id="message" 
                placeholder={messages?.formProjectPlaceholder || "Tell us about your project requirements"} 
              />
            </FormGroup>
            
            <Button>{messages?.formSubmit || "Send Message"}</Button>
          </FormContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};