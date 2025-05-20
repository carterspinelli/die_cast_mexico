import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./Logo";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";
import images from "../data/images";

const FooterContainer = styled.footer`
  background-color: var(--gray-dark);
  color: var(--white);
  padding: var(--spacing-xl) 0;
`;

const FooterContent = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
`;

const FooterTitle = styled.h4`
  color: var(--white);
  margin-bottom: var(--spacing-md);
  font-size: 1.125rem;
`;

const FooterNavLink = styled(Link)`
  display: block;
  color: var(--gray-light);
  margin-bottom: var(--spacing-sm);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-light);
  }
`;

const FooterText = styled.p`
  color: var(--gray-light);
  margin-bottom: var(--spacing-sm);
`;

const FooterContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
`;

const ContactIcon = styled.div`
  margin-right: var(--spacing-sm);
  color: var(--primary-light);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContactText = styled.div`
  color: var(--gray-light);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--gray);
  color: var(--white);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    transform: translateY(-3px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const FooterBottom = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-lg) var(--container-padding) 0;
  border-top: 1px solid var(--secondary);
  margin-top: var(--spacing-lg);
  text-align: center;
  color: var(--gray-light);
`;

const Footer = ({ messages }) => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo />
          <FooterText>
            Die Cast Mexico - {messages.footerRights} © {currentYear}
          </FooterText>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{messages.services}</FooterTitle>
          <FooterNavLink to={localizedLink("/#services")}>
            Die Casting
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#services")}>
            Mould & Fixture Design
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#services")}>
            CNC Precision Machining
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#services")}>
            Surface Treatment
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#services")}>
            Testing & Assembly
          </FooterNavLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{messages.industries}</FooterTitle>
          <FooterNavLink to={localizedLink("/#industries")}>
            Telecommunications
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            Mechatronics & Automation
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            Power Tools
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            Automotive
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            Lighting
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            Instrumentation
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            Pneumatic & Hydraulic
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            Marine Products
          </FooterNavLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{messages.contact}</FooterTitle>
          <FooterContactItem>
            <ContactIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </ContactIcon>
            <ContactText>
              <strong>{messages.footerAddress}:</strong><br />
              Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.
            </ContactText>
          </FooterContactItem>
          
          <FooterContactItem>
            <ContactIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </ContactIcon>
            <ContactText>
              <strong>{messages.footerPhone}:</strong><br />
              +52 33 3968 3660
            </ContactText>
          </FooterContactItem>
          
          <FooterContactItem>
            <ContactIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </ContactIcon>
            <ContactText>
              <strong>{messages.footerEmail}:</strong><br />
              {messages.footerEmailValue}
            </ContactText>
          </FooterContactItem>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
          <img src="/images/footer_logo_dcmx.png" alt="Die Cast Mexico" style={{ height: '70px', marginRight: '1rem' }} />
          <img src={images.certification} alt="ISO 9001:2015 Certified" style={{ height: '70px', marginRight: '1rem' }} />
          <p>© {currentYear} Die Cast Mexico. {messages.footerRights}.</p>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
