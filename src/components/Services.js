import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";

const ServicesSection = styled.section`
  padding: 8rem 1rem;
  background-color: var(--color-light-bg);
  
  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const HeaderContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (min-width: 992px) {
    font-size: 1.125rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  overflow: hidden;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
`;

const ReadMoreLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
`;

const Services = () => {
  const { messages } = useLanguage();
  
  const serviceItems = [
    {
      id: "design",
      title: messages.serviceDesignTitle,
      summary: messages.serviceDesignSummary,
      label: messages.serviceDesignLabel,
      image: "attached_assets/tool_design.jpg",
    },
    {
      id: "casting",
      title: messages.serviceCastingTitle,
      summary: messages.serviceCastingSummary,
      label: messages.serviceCastingLabel,
      image: "attached_assets/die_casting_service.jpeg",
    },
    {
      id: "finishing",
      title: messages.serviceFinishingTitle,
      summary: messages.serviceFinishingSummary,
      label: messages.serviceFinishingLabel,
      image: "attached_assets/surface_finish.webp",
    },
  ];
  
  return (
    <ServicesSection id="services">
      <Container>
        <HeaderContent>
          <Badge variant="secondary" style={{ marginBottom: "1.5rem" }}>
            {messages.servicesTagline}
          </Badge>
          <Title>{messages.servicesTitle}</Title>
          <Description>{messages.servicesSubtitle}</Description>
          <Button variant="default" as="a" href="/contact">
            {messages.servicesButtonText}
            <ArrowRight style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }} />
          </Button>
        </HeaderContent>
        
        <ServiceGrid>
          {serviceItems.map((service) => (
            <Card key={service.id} style={{ display: "grid", gridTemplateRows: "auto auto 1fr auto" }}>
              <ImageContainer>
                <ServiceImage 
                  src={service.image} 
                  alt={service.title}
                />
              </ImageContainer>
              <CardHeader>
                <Badge variant="secondary" style={{ marginBottom: "0.75rem" }}>
                  {service.label}
                </Badge>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "600", 
                  marginBottom: "0.5rem",
                  color: "var(--color-heading)"
                }}>
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p style={{ 
                  color: "var(--color-text-muted)", 
                  fontSize: "0.95rem",
                  lineHeight: "1.6"
                }}>
                  {service.summary}
                </p>
              </CardContent>
              {/* Footer removed as requested */}
            </Card>
          ))}
        </ServiceGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
