import React, { useState, useRef, useEffect } from "react";
import { useForm } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const FormTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a202c;
  text-align: center;
`;

const FormSubtitle = styled.p`
  color: #64748b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : '#e2e8f0'};
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#ef4444' : '#3b82f6'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : '#e2e8f0'};
  border-radius: 6px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#ef4444' : '#3b82f6'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  background-color: #10b981;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const RecaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const FormspreeContactForm = () => {
  const { messages } = useLanguage();
  const [state, handleSubmit] = useForm("movwqzpr"); // Your Formspree endpoint ID
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [recaptchaError, setRecaptchaError] = useState(false);
  const recaptchaRef = useRef();

  // Handle reCAPTCHA errors
  const handleRecaptchaError = () => {
    console.error('reCAPTCHA error - check site key configuration');
    setRecaptchaError(true);
  };

  const handleRecaptchaExpired = () => {
    console.warn('reCAPTCHA expired - please verify again');
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = messages?.nameRequired || "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = messages?.emailRequired || "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = messages?.emailInvalid || "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = messages?.messageRequired || "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = messages?.messageMinLength || "Message must be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
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
    
    // Get reCAPTCHA token if reCAPTCHA is enabled and not in error state
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (process.env.GATSBY_RECAPTCHA_SITE_KEY && !recaptchaError && !recaptchaToken) {
      alert(messages?.recaptchaRequired || "Please complete the reCAPTCHA verification");
      return;
    }
    
    // Prepare form data for Formspree
    const formSubmissionData = new FormData();
    formSubmissionData.append("name", formData.name);
    formSubmissionData.append("email", formData.email);
    formSubmissionData.append("phone", formData.phone);
    formSubmissionData.append("company", formData.company);
    formSubmissionData.append("message", formData.message);
    
    // Only add reCAPTCHA token if it exists
    if (recaptchaToken) {
      formSubmissionData.append("g-recaptcha-response", recaptchaToken);
    }
    
    // Submit to Formspree
    await handleSubmit(formSubmissionData);
    
    // Reset form on successful submission
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      recaptchaRef.current?.reset();
    }
  };

  if (state.succeeded) {
    return (
      <FormContainer>
        <SuccessMessage>
          {messages?.thankYouMessage || "Thank you for your message! We'll get back to you soon."}
        </SuccessMessage>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <FormTitle>
        {messages?.contactTitle || "Contact Us"}
      </FormTitle>
      <FormSubtitle>
        {messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
      </FormSubtitle>
      
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">
            {messages?.nameLabel || "Full Name"} *
          </FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            hasError={!!errors.name}
            placeholder={messages?.namePlaceholder || "Enter your full name"}
            required
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">
            {messages?.emailLabel || "Email Address"} *
          </FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
            placeholder={messages?.emailPlaceholder || "Enter your email address"}
            required
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="phone">
            {messages?.phoneLabel || "Phone Number"}
          </FormLabel>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={messages?.phonePlaceholder || "Enter your phone number"}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="company">
            {messages?.companyLabel || "Company"}
          </FormLabel>
          <FormInput
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={messages?.companyPlaceholder || "Enter your company name"}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="message">
            {messages?.messageLabel || "Message"} *
          </FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            hasError={!!errors.message}
            placeholder={messages?.messagePlaceholder || "Tell us about your project requirements"}
            required
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>

        {process.env.GATSBY_RECAPTCHA_SITE_KEY && !recaptchaError && (
          <RecaptchaContainer>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
              theme="light"
              size="normal"
              onError={handleRecaptchaError}
              onExpired={handleRecaptchaExpired}
            />
          </RecaptchaContainer>
        )}
        
        {recaptchaError && (
          <div style={{
            padding: '1rem',
            background: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '6px',
            color: '#856404',
            textAlign: 'center',
            fontSize: '0.875rem'
          }}>
            reCAPTCHA configuration issue detected. Form will work without verification.
          </div>
        )}

        <SubmitButton 
          type="submit" 
          disabled={state.submitting}
        >
          {state.submitting 
            ? (messages?.submitting || "Sending...") 
            : (messages?.submitButton || "Send Message")
          }
        </SubmitButton>

        {state.errors && state.errors.length > 0 && (
          <ErrorMessage>
            {messages?.submitError || "There was an error sending your message. Please try again."}
          </ErrorMessage>
        )}
      </Form>
    </FormContainer>
  );
};

export default FormspreeContactForm;