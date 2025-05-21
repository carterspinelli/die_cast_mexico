import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";

// Main container
const FooterContainer = styled.footer`
  background-color: #0c1220;
  color: #fff;
  padding: 5rem 0 3rem;
  margin-bottom: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CompanySection = styled.div`
  flex: 1;
  max-width: 100%;
  
  @media (min-width: 1024px) {
    max-width: 30%;
  }
`;

const Logo = styled.div`
  margin-bottom: 1.5rem;
`;

const LogoImg = styled.img`
  height: 60px;
  display: block;
`;

const Description = styled.p`
  color: #a1a1aa;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 300px;
`;

const LinksSection = styled.div`
  flex: 2;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LinksColumn = styled.div``;

const ColumnTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.75rem;
`;

const NavLink = styled(Link)`
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
  
  &:hover {
    color: #60a5fa;
  }
`;

const ExternalLink = styled.a`
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
  
  &:hover {
    color: #60a5fa;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #374151;
  margin-bottom: 2rem;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p`
  color: #a1a1aa;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const LegalLink = styled.a`
  color: #a1a1aa;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: #60a5fa;
  }
`;

const CertificationImage = styled.img`
  height: 70px;
  margin-right: 1rem;
  opacity: 0.9;
  
  &:hover {
    opacity: 1;
  }
`;

const Footer = ({ messages }) => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  // Use services from the translation files
  const services = [
    { name: language === 'es' ? "Fundición a Presión" : "Die Casting", path: "/#services" },
    { name: language === 'es' ? "Diseño de Moldes y Accesorios" : "Mould & Fixture Design", path: "/#services" },
    { name: language === 'es' ? "Mecanizado CNC de Precisión" : "CNC Precision Machining", path: "/#services" },
    { name: language === 'es' ? "Tratamiento de Superficie" : "Surface Treatment", path: "/#services" },
    { name: language === 'es' ? "Pruebas y Ensamblaje" : "Testing & Assembly", path: "/#services" },
  ];
  
  // Use industries from the translation files
  const industries = [
    { name: language === 'es' ? "Telecomunicaciones" : "Telecommunications", path: "/#industries" },
    { name: language === 'es' ? "Mecatrónica y Automatización" : "Mechatronics & Automation", path: "/#industries" },
    { name: language === 'es' ? "Herramientas Eléctricas" : "Power Tools", path: "/#industries" },
    { name: language === 'es' ? "Automotriz" : "Automotive", path: "/#industries" },
    { name: language === 'es' ? "Iluminación" : "Lighting", path: "/#industries" },
    { name: language === 'es' ? "Instrumentación" : "Instrumentation", path: "/#industries" },
    { name: language === 'es' ? "Neumática e Hidráulica" : "Pneumatic & Hydraulic", path: "/#industries" },
    { name: language === 'es' ? "Productos Marinos" : "Marine Products", path: "/#industries" },
  ];

  // Removed terms and conditions and privacy policy links as requested
  const legalLinks = [];
  
  return (
    <FooterContainer>
      <Container>
        <TopSection>
          <CompanySection data-aos="fade-right" data-aos-delay="100">
            <Logo>
              <a href={localizedLink("/")}>
                <LogoImg src="/images/die_cast_mx_footer_logo.png" alt="Die Cast Mexico" />
              </a>
            </Logo>
            <Description>
              {messages.footerDescription || "High-quality die casting solutions for automotive, telecommunications, and industrial applications. Precision manufacturing in Guadalajara, Mexico."}
            </Description>
          </CompanySection>
          
          <LinksSection>
            <LinksColumn data-aos="fade-up" data-aos-delay="200">
              <ColumnTitle>{messages.services}</ColumnTitle>
              <LinksList>
                {services.map((service, idx) => (
                  <LinkItem key={idx} data-aos="fade-up" data-aos-delay={250 + (idx * 50)}>
                    <NavLink to={localizedLink(service.path)}>
                      {service.name}
                    </NavLink>
                  </LinkItem>
                ))}
              </LinksList>
            </LinksColumn>
            
            <LinksColumn data-aos="fade-up" data-aos-delay="300">
              <ColumnTitle>{messages.industries}</ColumnTitle>
              <LinksList>
                {industries.map((industry, idx) => (
                  <LinkItem key={idx} data-aos="fade-up" data-aos-delay={350 + (idx * 50)}>
                    <NavLink to={localizedLink(industry.path)}>
                      {industry.name}
                    </NavLink>
                  </LinkItem>
                ))}
              </LinksList>
            </LinksColumn>
            
            <LinksColumn data-aos="fade-up" data-aos-delay="400">
              <ColumnTitle>{messages.contact}</ColumnTitle>
              <LinksList>
                <LinkItem data-aos="fade-up" data-aos-delay="450">
                  <NavLink to={localizedLink("/contact")}>
                    {messages.contactTitle || "Contact Us"}
                  </NavLink>
                </LinkItem>
                <LinkItem data-aos="fade-up" data-aos-delay="500">
                  <ExternalLink 
                    href="https://maps.google.com/?q=Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal." 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.
                  </ExternalLink>
                </LinkItem>
                <LinkItem data-aos="fade-up" data-aos-delay="550">
                  <ExternalLink href="tel:+523339683660">
                    +52 33 3968 3660
                  </ExternalLink>
                </LinkItem>
                <LinkItem data-aos="fade-up" data-aos-delay="600">
                  <ExternalLink href={`mailto:${messages.footerEmailValue}`}>
                    {messages.footerEmailValue}
                  </ExternalLink>
                </LinkItem>
              </LinksList>
            </LinksColumn>
          </LinksSection>
        </TopSection>
        
        <Divider data-aos="fade-up" data-aos-delay="650" />
        
        <BottomSection>
          <Copyright>© {currentYear} Die Cast Mexico. {messages.footerRights || "All rights reserved"}.</Copyright>
          <LegalLinks>
            <CertificationImage src="/images/iso9001_diecast.webp" alt="ISO 9001:2015 Certified" />
            {legalLinks.map((link, idx) => (
              <LegalLink key={idx} href={link.href}>
                {link.name}
              </LegalLink>
            ))}
          </LegalLinks>
        </BottomSection>
      </Container>
    </FooterContainer>
  );
};

export default Footer;