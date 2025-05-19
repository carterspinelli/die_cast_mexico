import React from "react";
import styled from "styled-components";
import images from "../data/images";

const ServicesSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background-color: var(--white);
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h2`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-sm);
`;

const Subtitle = styled.p`
  color: var(--gray);
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.div`
  background-color: var(--background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  color: var(--white);
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const ServiceTitle = styled.h3`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-sm);
`;

const ServiceDescription = styled.p`
  color: var(--gray);
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: var(--spacing-xl);
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

const ServiceImageContainer = styled.div`
  margin-top: var(--spacing-xl);
  display: flex;
  justify-content: center;
`;

const ServiceImage = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-md);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Services = ({ messages }) => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{messages.servicesTitle}</Title>
          <Subtitle className="slide-in-right">{messages.servicesSubtitle}</Subtitle>
        </SectionHeader>
        
        <ServiceGrid>
          <ServiceItem className="fade-in">
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </ServiceIcon>
            <ServiceTitle>{messages.highPressureTitle}</ServiceTitle>
            <ServiceDescription>{messages.highPressureDesc}</ServiceDescription>
          </ServiceItem>
          
          <ServiceItem className="fade-in">
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </ServiceIcon>
            <ServiceTitle>{messages.moldingTitle}</ServiceTitle>
            <ServiceDescription>{messages.moldingDesc}</ServiceDescription>
          </ServiceItem>
          
          <ServiceItem className="fade-in">
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </ServiceIcon>
            <ServiceTitle>{messages.finishingTitle}</ServiceTitle>
            <ServiceDescription>{messages.finishingDesc}</ServiceDescription>
          </ServiceItem>
          
          <ServiceItem className="fade-in">
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </ServiceIcon>
            <ServiceTitle>{messages.qualityTitle}</ServiceTitle>
            <ServiceDescription>{messages.qualityDesc}</ServiceDescription>
          </ServiceItem>
        </ServiceGrid>
        
        <ServiceImageContainer>
          <ServiceImage imageUrl={images.dieCastingMachinery[0]} />
        </ServiceImageContainer>
        
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
