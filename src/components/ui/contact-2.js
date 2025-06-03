import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/analytics";

// Styled components for the contact form
const Section = styled.section`
  padding: 8rem 2rem 4rem 2rem; /* Added top padding to account for fixed navbar */
  
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
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (min-width: 1024px) {
    font-size: 2.5rem;
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

const FormSuccess = styled.div`
  background-color: #10b981;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const FormError = styled.div`
  background-color: #ef4444;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Contact2 = ({
  title,
  description,
  phone,
  email,
  web,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  let messages = {};
  let language = 'en';
  try {
    // Try to use the language context, but provide a fallback if it's not available
    const langContext = useLanguage();
    messages = langContext?.messages || {};
    language = langContext?.language || 'en';
  } catch (error) {
    // Fallback if the context is not available (e.g., during SSR)
    console.warn("Language context not available, using default text");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/movwqzpr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          language: language,
          _subject: `New contact inquiry from ${formData.firstName} ${formData.lastName}`
        })
      });
      
      if (response.ok) {
        trackEvent("contact2_form_submit", "engagement", "contact_page");
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        const errorText = await response.text();
        console.error('Formspree response error:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Section>
      <Container>
        <FlexContainer>
          <InfoContainer data-aos="fade-right" data-aos-delay="100">
            <TextCenter>
              <Title data-aos="fade-up" data-aos-delay="200">{title || messages?.contactTitle || "Contact Us"}</Title>
              {description && (
                <Description data-aos="fade-up" data-aos-delay="300">
                  {description}
                </Description>
              )}
            </TextCenter>
            <ContactDetails data-aos="fade-up" data-aos-delay="400">
              <ContactHeading>
                {messages?.contactDetailTitle || "Contact Details"}
              </ContactHeading>
              <ContactList>
                <ContactItem data-aos="fade-up" data-aos-delay="500">
                  <ContactLabel>Phone: </ContactLabel>
                  {phone || "+52 33 3968 3660"}
                </ContactItem>
                <ContactItem data-aos="fade-up" data-aos-delay="550">
                  <ContactLabel>Email: </ContactLabel>
                  <Link href={`mailto:${email || "info@diecastmexico.com"}`}>
                    {email || "info@diecastmexico.com"}
                  </Link>
                </ContactItem>
                <ContactItem data-aos="fade-up" data-aos-delay="600">
                  <ContactLabel>Address: </ContactLabel>
                  <span>
                    {web?.label || "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal."}
                  </span>
                </ContactItem>
              </ContactList>
            </ContactDetails>
          </InfoContainer>
          
          <FormContainer data-aos="fade-left" data-aos-delay="100">
            {submitStatus === "success" && (
              <FormSuccess>
                {messages?.formSuccessMessage || "Message sent successfully! We'll get back to you soon."}
              </FormSuccess>
            )}
            
            {submitStatus === "error" && (
              <FormError>
                {messages?.formErrorMessage || "Failed to send message. Please try again or contact us directly."}
              </FormError>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormRow data-aos="fade-up" data-aos-delay="200">
                <FormGroup>
                  <Label htmlFor="firstName">{messages?.formFirstNameLabel || "First Name"}</Label>
                  <Input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={messages?.formFirstNamePlaceholder || "Enter your first name"} 
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">{messages?.formLastNameLabel || "Last Name"}</Label>
                  <Input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={messages?.formLastNamePlaceholder || "Enter your last name"} 
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup data-aos="fade-up" data-aos-delay="300">
                <Label htmlFor="email">{messages?.formEmailLabel || "Email"}</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={messages?.formEmailPlaceholder || "Enter your email address"} 
                  required
                />
              </FormGroup>
              
              <FormGroup data-aos="fade-up" data-aos-delay="400">
                <Label htmlFor="subject">{messages?.formSubjectLabel || "Subject"}</Label>
                <Input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={messages?.formSubjectPlaceholder || "Enter the subject"} 
                />
              </FormGroup>
              
              <FormGroup data-aos="fade-up" data-aos-delay="500">
                <Label htmlFor="message">{messages?.formProjectLabel || "Message"}</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={messages?.formProjectPlaceholder || "Tell us about your project requirements"} 
                  required
                />
              </FormGroup>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                data-aos="fade-up" 
                data-aos-delay="600"
              >
                {isSubmitting ? (messages?.formSubmitting || "Sending...") : (messages?.formSubmit || "Send Message")}
              </Button>
            </form>
          </FormContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};