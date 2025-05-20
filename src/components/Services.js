import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const ServicesSection = styled.section`
  padding: 4rem 1rem 6rem;
  background-color: var(--color-light-bg);
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  background-color: #f8f9fc;
  border: none;
  padding: 1.5rem;
  text-align: center;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  margin-top: 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-secondary);
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-text);
  line-height: 1.5;
  margin-top: 0.75rem;
`;

const IconGrid = styled.div`
  position: relative;
  width: 9rem;
  height: 9rem;
  margin: 0 auto;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), 
                      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.6;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border: 1px solid #e2e8f0;
  z-index: 1;
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
  }
`;

// SVG icons
const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="M11 10.27 7 3.34" />
    <path d="m20.66 17-1.73-1" />
    <path d="m3.34 7 1.73 1" />
    <path d="M14 12h8" />
    <path d="M2 12h2" />
    <path d="m20.66 7-1.73 1" />
    <path d="m3.34 17 1.73-1" />
    <path d="m17 3.34-1 1.73" />
    <path d="m11 13.73-4 6.93" />
  </svg>
);

const ComputerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const CubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 16-9 5-9-5V8l9-5 9 5v8z" />
    <path d="m12 21v-8" />
    <path d="M12 3v8" />
    <path d="m3 8 9 5 9-5" />
  </svg>
);

const Services = () => {
  const { messages } = useLanguage();
  
  const serviceItems = [
    {
      icon: <CogIcon />,
      title: messages.highPressureTitle,
      description: messages.highPressureDesc
    },
    {
      icon: <ComputerIcon />,
      title: messages.moldingTitle,
      description: messages.moldingDesc
    },
    {
      icon: <CubeIcon />,
      title: messages.finishingTitle,
      description: messages.finishingDesc
    }
  ];
  
  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{messages.servicesTitle}</Title>
          <Subtitle className="slide-in-right">{messages.servicesSubtitle}</Subtitle>
        </SectionHeader>
        
        <ServiceGrid>
          {serviceItems.map((service, index) => (
            <Card key={index} className="fade-in">
              <IconGrid>
                <IconBox>
                  {service.icon}
                </IconBox>
              </IconGrid>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </ServiceGrid>
        
        <CtaContainer>
          <CtaButton href="/contact" className="btn-primary">
            {messages.cta}
          </CtaButton>
        </CtaContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services;
