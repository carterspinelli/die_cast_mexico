import React, { useState, useRef } from "react";
import { useForm } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import ActionButton from "./action-button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

const ContactSection = styled.section`
  padding: 8rem 1rem 6rem 1rem;
  background-color: var(--color-light-bg);
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

const ContactInfo = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 400px;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const ContactTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-primary);
  
  @media (min-width: 1024px) {
    margin-bottom: 0.25rem;
    font-size: 3.75rem;
  }
`;



const ContactDetails = styled.div`
  margin: 0 auto;
  width: fit-content;
  
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const ContactDetailsTitle = styled.h3`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const ContactDetailsList = styled.ul`
  margin-left: 1rem;
  list-style-type: disc;
  
  li {
    margin-bottom: 0.5rem;
    color: var(--color-text);
    
    .label {
      font-weight: 600;
      color: var(--color-primary);
    }
    
    a {
      color: var(--color-primary);
      text-decoration: underline;
      
      &:hover {
        color: var(--color-accent);
      }
    }
  }
`;

const FormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 600px;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  background: white;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const ErrorMessage = styled.span`
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  background: #f0fff4;
  border: 2px solid #68d391;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  color: #22543d;
  
  h3 {
    color: #22543d;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  p {
    color: #2f855a;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const RecaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const ContactForm = () => {
  const { translations, language } = useLanguage();
  const messages = translations?.contact || {};
  
  // Fallback translations for when context is not available
  const fallbackTranslations = {
    en: {
      title: "Contact Us",
      description: "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
      contactInfo: "Contact Details",
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      emailLabel: "Email Address",
      companyLabel: "Company",
      messageLabel: "Message",
      firstNamePlaceholder: "First Name",
      lastNamePlaceholder: "Last Name",
      emailPlaceholder: "Email",
      companyPlaceholder: "Company Name",
      messagePlaceholder: "Type your message here.",
      submitButton: "Send Message",
      submitting: "Sending...",
      phoneLabel: "Phone",
      addressLabel: "Address",
      successTitle: "Thank you for your message!",
      successMessage: "We have received your inquiry and will get back to you as soon as possible.",
      firstNameRequired: "First name is required",
      lastNameRequired: "Last name is required",
      emailRequired: "Email is required",
      companyRequired: "Company is required",
      messageRequired: "Message is required",
      emailInvalid: "Please enter a valid email address",
      recaptchaRequired: "Please complete the reCAPTCHA verification"
    },
    es: {
      title: "Contáctanos",
      description: "Estamos disponibles para preguntas, comentarios u oportunidades de colaboración. ¡Déjanos saber cómo podemos ayudarte!",
      contactInfo: "Detalles de Contacto",
      firstNameLabel: "Nombre",
      lastNameLabel: "Apellido",
      emailLabel: "Correo Electrónico",
      companyLabel: "Empresa",
      messageLabel: "Mensaje",
      firstNamePlaceholder: "Nombre",
      lastNamePlaceholder: "Apellido",
      emailPlaceholder: "Correo electrónico",
      companyPlaceholder: "Nombre de la Empresa",
      messagePlaceholder: "Escribe tu mensaje aquí.",
      submitButton: "Enviar Mensaje",
      submitting: "Enviando...",
      phoneLabel: "Teléfono",
      addressLabel: "Dirección",
      successTitle: "¡Gracias por tu mensaje!",
      successMessage: "Hemos recibido tu consulta y te responderemos lo antes posible.",
      firstNameRequired: "El nombre es requerido",
      lastNameRequired: "El apellido es requerido",
      emailRequired: "El correo electrónico es requerido",
      companyRequired: "La empresa es requerida",
      messageRequired: "El mensaje es requerido",
      emailInvalid: "Por favor ingresa un correo electrónico válido",
      recaptchaRequired: "Por favor completa la verificación reCAPTCHA"
    }
  };
  
  // Determine current language from URL if context is not available
  const getCurrentLanguage = () => {
    if (language) return language;
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      return path.startsWith('/es') ? 'es' : 'en';
    }
    return 'en';
  };
  
  const currentLang = getCurrentLanguage();
  const t = messages && Object.keys(messages).length > 0 
    ? messages 
    : fallbackTranslations[currentLang];
  
  // Use your Formspree endpoint with reCAPTCHA v2
  const [state, handleSubmit] = useForm("mwpbkdyr");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const recaptchaRef = useRef();

  const RECAPTCHA_SITE_KEY = "6Leb41QrAAAAAPscoTeqxm6ci9xdLJovmyAzKoGs";

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = t.firstNameRequired;
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = t.lastNameRequired;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.emailInvalid;
    }
    
    if (!formData.company.trim()) {
      newErrors.company = t.companyRequired;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.messageRequired;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Get reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      alert(t.recaptchaRequired);
      return;
    }
    
    // Prepare form data with reCAPTCHA token
    const formSubmissionData = new FormData();
    formSubmissionData.append("name", `${formData.firstName} ${formData.lastName}`);
    formSubmissionData.append("email", formData.email);
    formSubmissionData.append("company", formData.company);
    formSubmissionData.append("message", formData.message);
    formSubmissionData.append("g-recaptcha-response", recaptchaToken);
    
    // Submit to Formspree
    await handleSubmit(formSubmissionData);
    
    // Reset form on successful submission
    if (state.succeeded) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
      recaptchaRef.current?.reset();
    }
  };

  if (state.succeeded) {
    return (
      <ContactSection>
        <Container>
          <SuccessMessage>
            <h3>
              {t.successTitle}
            </h3>
            <p>
              {t.successMessage}
            </p>
          </SuccessMessage>
        </Container>
      </ContactSection>
    );
  }

  return (
    <ContactSection>
      <Container>
        <ContactInfo>
          <ContactHeader>
            <ContactTitle>
              {t.title}
            </ContactTitle>
          </ContactHeader>
          
          <ContactDetails>
            <ContactDetailsTitle>
              {t.contactInfo}
            </ContactDetailsTitle>
            <ContactDetailsList>
              <li>
                <span className="label">{t.phoneLabel}: </span>
                +52 33 3968 3660
              </li>
              <li>
                <span className="label">{t.emailLabel}: </span>
                <a href="mailto:info@diecastmexico.com">
                  info@diecastmexico.com
                </a>
              </li>
              <li>
                <span className="label">{t.addressLabel}: </span>
                Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.
              </li>
            </ContactDetailsList>
          </ContactDetails>
        </ContactInfo>
        
        <FormContainer>
          <form onSubmit={onSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">
                  {t.firstNameLabel}
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder={t.firstNamePlaceholder}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">
                  {t.lastNameLabel}
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={t.lastNamePlaceholder}
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="email">
                {t.emailLabel}
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.emailPlaceholder}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="company">
                {t.companyLabel}
              </Label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={t.companyPlaceholder}
              />
              {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">
                {t.messageLabel}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.messagePlaceholder}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>
            
            <RecaptchaContainer>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                theme="light"
              />
            </RecaptchaContainer>
            
            <ActionButton 
              isPending={state.submitting}
              style={{ width: '100%' }}
            >
              {t.submitButton}
            </ActionButton>
            
            {state.errors && state.errors.length > 0 && (
              <ErrorMessage>
                {t.submitError}
              </ErrorMessage>
            )}
          </form>
        </FormContainer>
      </Container>
    </ContactSection>
  );
};

export default ContactForm;