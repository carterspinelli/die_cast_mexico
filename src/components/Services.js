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
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
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
  
  // Using images from the static folder
  const serviceItems = [
    {
      id: "casting",
      title: "Die Casting",
      summary: "Die Cast Mexico deploys automatic cold chamber die-casting machines ranging from 400 ton to 1900 ton dedicated to aluminum and magnesium alloy.",
      label: "Manufacturing",
      image: "/images/die_casting_service.jpeg",
    },
    {
      id: "mould",
      title: "Mould & Fixture Design",
      summary: "With professional design engineering and modernized machining technology, Die Cast Mexico can design and manufacture all kinds of complicated moulds for customers; including soft moulding solutions for rapid prototyping and develop high efficiency CNC machining fixtures.",
      label: "Design & Engineering",
      image: "/images/tool_design.jpg",
    },
    {
      id: "cnc",
      title: "CNC Precision Machining",
      summary: "Die Cast Mexico has an extremely competent CNC machining ability, with higher machining precision and advanced process quality control, which can meet customer's processing requirement from simple to most complicated and challenging. Our horizontal CNC centers maintain high levels of precision on high volumes.",
      label: "Precision Manufacturing",
      image: "/images/cnc_diecast.webp",
    },
    {
      id: "surface",
      title: "Surface Treatment",
      summary: "Die Cast Mexico is able to further treat the components with surface KLT, anodizing or other treatments according to client demands.",
      label: "Finishing",
      image: "/images/surface_treatment_diecast.jpg",
    },
    {
      id: "testing",
      title: "Testing & Assembly",
      summary: "Die Cast Mexico participates in customer support actions from the initial stage, considering customer needs, and establishes product solutions. We utilize various test equipment like admeasuring apparatus and power balancing equipment, with experienced test engineers and advanced systems.",
      label: "Quality Assurance",
      image: "/images/assembly_testing.webp",
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
