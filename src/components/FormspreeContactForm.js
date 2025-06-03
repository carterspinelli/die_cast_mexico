import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "../context/LanguageContext";
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
  
  &:hover:not(:disabled) {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
    opacity: 0.6;
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

const RecaptchaContainer = styled.div`
  margin: var(--spacing-md) 0;
  display: flex;
  justify-content: center;
  
  .recaptcha-container {
    transform-origin: 0 0;
    transform: scale(0.85);
  }
  
  @media (max-width: 768px) {
    .recaptcha-container {
      transform: scale(0.75);
    }
  }
`;

const FormspreeContactForm = () => {
  const { messages } = useLanguage();
  const [state, handleSubmit] = useForm("movwqzpr");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = messages.nameRequired || "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = messages.emailRequired || "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = messages.emailInvalid || "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = messages.messageRequired || "Message is required";
    }

    // Only require reCAPTCHA if it's available
    if (process.env.GATSBY_RECAPTCHA_SITE_KEY && !recaptchaToken) {
      newErrors.recaptcha = messages.recaptchaRequired || "Please complete the reCAPTCHA verification";
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

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    if (errors.recaptcha) {
      setErrors(prev => ({
        ...prev,
        recaptcha: ""
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data with reCAPTCHA token
      const submitData = {
        ...formData,
        'g-recaptcha-response': recaptchaToken
      };

      // Track form submission attempt
      trackEvent("contact_form_submit_attempt", "engagement", "contact_page");

      // Submit to Formspree
      await handleSubmit({
        target: {
          elements: Object.entries(submitData).map(([name, value]) => ({
            name,
            value,
            type: name === 'email' ? 'email' : name === 'message' ? 'textarea' : 'text'
          }))
        }
      });

      // Track successful submission
      trackEvent("contact_form_submit_success", "engagement", "contact_page");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });

      // Reset reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);

    } catch (error) {
      console.error("Form submission error:", error);
      trackEvent("contact_form_submit_error", "engagement", "contact_page");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message if form was submitted successfully
  if (state.succeeded) {
    return (
      <FormContainer>
        <FormSuccess className="fade-in">
          {messages.thankYouMessage || "Thank you for your message! We'll get back to you soon."}
        </FormSuccess>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      {state.errors && state.errors.length > 0 && (
        <FormError className="fade-in">
          {messages.errorMessage || "There was an error sending your message. Please try again."}
        </FormError>
      )}

      <Form onSubmit={onSubmit} className="fade-in">
        <FormGroup>
          <FormLabel htmlFor="name">{messages.nameLabel || "Name"} *</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            hasError={!!errors.name}
            placeholder={messages.namePlaceholder || "Enter your full name"}
            disabled={isSubmitting}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">{messages.emailLabel || "Email"} *</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
            placeholder={messages.emailPlaceholder || "Enter your email address"}
            disabled={isSubmitting}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="phone">{messages.phoneLabel || "Phone"}</FormLabel>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={messages.phonePlaceholder || "Enter your phone number"}
            disabled={isSubmitting}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="company">{messages.companyLabel || "Company"}</FormLabel>
          <FormInput
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={messages.companyPlaceholder || "Enter your company name"}
            disabled={isSubmitting}
          />
          <ValidationError prefix="Company" field="company" errors={state.errors} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="message">{messages.messageLabel || "Message"} *</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            hasError={!!errors.message}
            placeholder={messages.messagePlaceholder || "Tell us about your project requirements"}
            disabled={isSubmitting}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </FormGroup>

        {typeof window !== 'undefined' && process.env.GATSBY_RECAPTCHA_SITE_KEY && (
          <RecaptchaContainer>
            <div className="recaptcha-container">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                onExpired={() => setRecaptchaToken(null)}
                onError={() => setRecaptchaToken(null)}
              />
            </div>
          </RecaptchaContainer>
        )}
        {errors.recaptcha && <ErrorMessage>{errors.recaptcha}</ErrorMessage>}

        <SubmitButton 
          type="submit" 
          disabled={isSubmitting || state.submitting}
        >
          {isSubmitting || state.submitting 
            ? (messages.submittingText || "Sending...") 
            : (messages.submitText || "Send Message")
          }
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormspreeContactForm;