import React, { useState } from "react";
import { useForm } from "@formspree/react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: #1a365d;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormDescription = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.6;
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

const Label = styled.label`
  color: #2d3748;
  font-weight: 600;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 2px solid ${props => props.hasError ? '#e53e3e' : '#e2e8f0'};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 2px solid ${props => props.hasError ? '#e53e3e' : '#e2e8f0'};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
  background: #ffffff;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const ErrorMessage = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3182ce 0%, #2c5aa0 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2c5aa0 0%, #2a4a84 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
  }

  &:disabled {
    background: #a0aec0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled.div`
  background: #f0fff4;
  border: 2px solid #68d391;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: #22543d;
`;

const SuccessTitle = styled.h3`
  color: #22543d;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SuccessText = styled.p`
  color: #2f855a;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const FormspreeContactForm = () => {
  const { translations } = useLanguage();
  const messages = translations?.contact || {};
  
  // Use your new Formspree endpoint with reCAPTCHA v2
  const [state, handleSubmit] = useForm("mwpbkdyr");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = messages?.nameRequired || "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = messages?.emailRequired || "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = messages?.emailInvalid || "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = messages?.messageRequired || "Message is required";
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
    
    // Submit to Formspree
    await handleSubmit(e);
    
    // Reset form on successful submission
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }
  };

  if (state.succeeded) {
    return (
      <FormContainer>
        <SuccessMessage>
          <SuccessTitle>
            {messages?.successTitle || "Thank you for your message!"}
          </SuccessTitle>
          <SuccessText>
            {messages?.successMessage || "We have received your inquiry and will get back to you as soon as possible."}
          </SuccessText>
        </SuccessMessage>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <FormTitle>
        {messages?.title || "Contact Us"}
      </FormTitle>
      <FormDescription>
        {messages?.description || "Get in touch with our team for more information about our die casting services."}
      </FormDescription>
      
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor="name">
            {messages?.nameLabel || "Full Name"} *
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={messages?.namePlaceholder || "Enter your full name"}
            hasError={!!errors.name}
            required
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            {messages?.emailLabel || "Email Address"} *
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={messages?.emailPlaceholder || "Enter your email address"}
            hasError={!!errors.email}
            required
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">
            {messages?.phoneLabel || "Phone Number"}
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={messages?.phonePlaceholder || "Enter your phone number"}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="company">
            {messages?.companyLabel || "Company"}
          </Label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder={messages?.companyPlaceholder || "Enter your company name"}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">
            {messages?.messageLabel || "Message"} *
          </Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={messages?.messagePlaceholder || "Tell us about your project or inquiry"}
            hasError={!!errors.message}
            required
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>

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