import React, { useState } from "react";
import styled from "styled-components";
import { trackEvent } from "../utils/analytics";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  background-color: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-md);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--gray-dark);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.hasError ? "var(--danger)" : "var(--gray-light)"};
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.hasError ? "var(--danger)" : "var(--gray-light)"};
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const ErrorMessage = styled.div`
  color: var(--danger);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }
`;

const FormSuccess = styled.div`
  background-color: var(--success);
  color: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  text-align: center;
  margin-bottom: var(--spacing-md);
`;

const FormError = styled.div`
  background-color: var(--danger);
  color: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  text-align: center;
  margin-bottom: var(--spacing-md);
`;

const ContactForm = ({ messages }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = messages.requiredField;
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = messages.requiredField;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = messages.invalidEmail;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = messages.requiredField;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real scenario, we would submit the form data to a server here
      // For now, we'll simulate a successful form submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Track form submission event
      trackEvent("contact_form_submit", "engagement", "contact_page");
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <FormContainer>
      {submitStatus === "success" && (
        <FormSuccess className="fade-in">{messages.thankYouMessage}</FormSuccess>
      )}
      
      {submitStatus === "error" && (
        <FormError className="fade-in">{messages.errorMessage}</FormError>
      )}
      
      <Form onSubmit={handleSubmit} className="fade-in">
        <FormGroup>
          <FormLabel htmlFor="name">{messages.nameLabel} *</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            hasError={!!errors.name}
            placeholder={messages.namePlaceholder}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="email">{messages.emailLabel} *</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
            placeholder={messages.emailPlaceholder}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="phone">{messages.phoneLabel}</FormLabel>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={messages.phonePlaceholder}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="company">{messages.companyLabel}</FormLabel>
          <FormInput
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={messages.companyPlaceholder}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="message">{messages.messageLabel} *</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            hasError={!!errors.message}
            placeholder={messages.messagePlaceholder}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>
        
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "..." : messages.submitButton}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
