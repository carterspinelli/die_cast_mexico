import React from "react";
import styled from "styled-components";
import { Zap, Settings2, BarChart, ShieldCheck } from "lucide-react";
import images from "../data/images";
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
  background-color: var(--color-light-bg);
  border: none;
  padding: 1.5rem;
  text-align: center;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.75rem;
`;

const CardContent = styled.div`
  padding: 0 1rem;
`;

const CardTitle = styled.h3`
  margin-top: 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-secondary);
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.5;
`;

const CardDecoratorContainer = styled.div`
  position: relative;
  width: 9rem;
  height: 9rem;
  margin: 0 auto;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, var(--color-border) 1px, transparent 1px), 
                      linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.1;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-primary);
  }
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

const CardDecorator = ({ children }) => (
  <CardDecoratorContainer>
    <IconContainer>{children}</IconContainer>
  </CardDecoratorContainer>
);

const Services = () => {
  const { messages } = useLanguage();
  
  const serviceItems = [
    {
      icon: <Zap />,
      title: messages.highPressureTitle,
      description: messages.highPressureDesc
    },
    {
      icon: <Settings2 />,
      title: messages.moldingTitle,
      description: messages.moldingDesc
    },
    {
      icon: <BarChart />,
      title: messages.finishingTitle,
      description: messages.finishingDesc
    },
    {
      icon: <ShieldCheck />,
      title: messages.qualityTitle,
      description: messages.qualityDesc
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
              <CardHeader>
                <CardDecorator>
                  {service.icon}
                </CardDecorator>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
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
