import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { useLanguage, getLocalizedPath } from "../../context/LanguageContext";

// Styled components for the footer
const FooterSection = styled.section`
  padding: 5rem 0;
  background-color: #0d2b4b;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const LogoImage = styled.img`
  height: 4rem;
`;

const Description = styled.p`
  max-width: 70%;
  font-size: 0.875rem;
  color: #a1a1aa;
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #a1a1aa;
  list-style: none;
  padding: 0;
`;

const SocialLinkItem = styled.li`
  font-weight: 500;
  
  &:hover {
    color: #60a5fa;
  }
`;

const SocialLinkAnchor = styled.a`
  display: flex;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1024px) {
    gap: 5rem;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  font-weight: 700;
  color: white;
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #a1a1aa;
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  font-weight: 500;
  
  &:hover {
    color: #60a5fa;
  }
`;

const BottomContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid #374151;
  padding-top: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #a1a1aa;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
`;

const Copyright = styled.p`
  order: 2;
  
  @media (min-width: 1024px) {
    order: 1;
  }
`;

const LegalLinks = styled.ul`
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  
  @media (min-width: 768px) {
    order: 2;
    flex-direction: row;
  }
`;

const LegalLinkItem = styled.li`
  &:hover {
    color: #60a5fa;
  }
`;

const CertificationImage = styled.img`
  height: 3.5rem;
  margin-right: 1rem;
`;

const ModernFooter = () => {
  const { language, messages } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  // Define our sections based on current footer content
  const sections = [
    {
      title: messages.services || "Services",
      links: [
        { name: "Die Casting", href: localizedLink("/#services") },
        { name: "Mould & Fixture Design", href: localizedLink("/#services") },
        { name: "CNC Precision Machining", href: localizedLink("/#services") },
        { name: "Surface Treatment", href: localizedLink("/#services") },
        { name: "Testing & Assembly", href: localizedLink("/#services") },
      ],
    },
    {
      title: messages.industries || "Industries",
      links: [
        { name: "Telecommunications", href: localizedLink("/#industries") },
        { name: "Mechatronics & Automation", href: localizedLink("/#industries") },
        { name: "Power Tools", href: localizedLink("/#industries") },
        { name: "Automotive", href: localizedLink("/#industries") },
        { name: "Lighting", href: localizedLink("/#industries") },
        { name: "Instrumentation", href: localizedLink("/#industries") },
        { name: "Pneumatic & Hydraulic", href: localizedLink("/#industries") },
        { name: "Marine Products", href: localizedLink("/#industries") },
      ],
    },
    {
      title: messages.contact || "Contact",
      links: [
        { 
          name: "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.", 
          href: null
        },
        { name: "+52 33 3968 3660", href: "tel:+523339683660" },
        { name: messages.footerEmailValue || "info@diecastmexico.com", href: `mailto:${messages.footerEmailValue || "info@diecastmexico.com"}` },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram size={20} />, href: "https://instagram.com/diecastmx", label: "Instagram" },
    { icon: <FaFacebook size={20} />, href: "https://facebook.com/diecastmx", label: "Facebook" },
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/company/diecastmx", label: "LinkedIn" },
  ];

  const legalLinks = [
    { name: messages.termsConditions || "Terms and Conditions", href: "#" },
    { name: messages.privacyPolicy || "Privacy Policy", href: "#" },
  ];

  return (
    <FooterSection>
      <Container>
        <FlexContainer>
          <LogoContainer>
            {/* Logo */}
            <Logo>
              <a href={localizedLink("/")}>
                <LogoImage
                  src="/images/updated_footer_logo.png"
                  alt="Die Cast Mexico"
                />
              </a>
            </Logo>
            <Description>
              {messages.footerDescription || "High-quality die casting solutions for automotive, telecommunications, and industrial applications. Precision manufacturing in Guadalajara, Mexico."}
            </Description>
            <SocialLinks>
              {socialLinks.map((social, idx) => (
                <SocialLinkItem key={idx}>
                  <SocialLinkAnchor href={social.href} aria-label={social.label}>
                    {social.icon}
                  </SocialLinkAnchor>
                </SocialLinkItem>
              ))}
            </SocialLinks>
          </LogoContainer>
          <GridContainer>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <SectionTitle>{section.title}</SectionTitle>
                <LinksList>
                  {section.links.map((link, linkIdx) => (
                    <LinkItem key={linkIdx}>
                      <a href={link.href}>{link.name}</a>
                    </LinkItem>
                  ))}
                </LinksList>
              </div>
            ))}
          </GridContainer>
        </FlexContainer>
        <BottomContainer>
          <Copyright>© {currentYear} Die Cast Mexico. {messages.footerRights || "All rights reserved."}</Copyright>
          <LegalLinks>
            <CertificationImage src="/images/iso9001_diecast.webp" alt="ISO 9001:2015 Certified" />
            {legalLinks.map((link, idx) => (
              <LegalLinkItem key={idx}>
                <a href={link.href}>{link.name}</a>
              </LegalLinkItem>
            ))}
          </LegalLinks>
        </BottomContainer>
      </Container>
    </FooterSection>
  );
};

export default ModernFooter;