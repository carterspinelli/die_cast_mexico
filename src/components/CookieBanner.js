import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #0c1220 0%, #1e3a8a 100%);
  color: #ffffff;
  padding: 1rem 1.5rem;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transform: translateY(${props => props.isVisible ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: #e5e7eb;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`;

const AcceptButton = styled(Button)`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: #ffffff;
  
  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const DeclineButton = styled(Button)`
  background: transparent;
  color: #e5e7eb;
  border: 1px solid rgba(229, 231, 235, 0.3);
  
  &:hover {
    background: rgba(229, 231, 235, 0.1);
    border-color: rgba(229, 231, 235, 0.5);
    color: #ffffff;
  }
`;

const SettingsButton = styled(Button)`
  background: transparent;
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  
  &:hover {
    background: rgba(96, 165, 250, 0.1);
    border-color: rgba(96, 165, 250, 0.5);
    color: #93c5fd;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
`;

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  
  const currentLanguage = language || 'en';
  
  // Cookie banner text content
  const content = {
    en: {
      title: "We Use Cookies",
      description: "We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By continuing to use our site, you consent to our use of cookies.",
      acceptAll: "Accept All",
      decline: "Decline",
      settings: "Settings"
    },
    es: {
      title: "Usamos Cookies",
      description: "Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y proporcionar contenido personalizado. Al continuar usando nuestro sitio, acepta nuestro uso de cookies.",
      acceptAll: "Aceptar Todo",
      decline: "Rechazar",
      settings: "Configuración"
    }
  };
  
  const text = content[currentLanguage] || content.en;
  
  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    
    // Enable all cookies/tracking here if needed
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };
  
  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    
    // Disable non-essential cookies/tracking here if needed
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };
  
  const handleSettings = () => {
    // For now, we'll just accept all - in a full implementation,
    // this would open a detailed settings modal
    handleAcceptAll();
  };
  
  if (!isVisible) return null;
  
  return (
    <BannerContainer isVisible={isVisible}>
      <BannerContent>
        <TextContent>
          <Title>{text.title}</Title>
          <Description>{text.description}</Description>
        </TextContent>
        <ButtonGroup>
          <SettingsButton onClick={handleSettings}>
            {text.settings}
          </SettingsButton>
          <DeclineButton onClick={handleDecline}>
            {text.decline}
          </DeclineButton>
          <AcceptButton onClick={handleAcceptAll}>
            {text.acceptAll}
          </AcceptButton>
        </ButtonGroup>
      </BannerContent>
    </BannerContainer>
  );
};

export default CookieBanner;