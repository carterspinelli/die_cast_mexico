import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";
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
  const { messages, language } = useLanguage();
  
  // Using images from the static folder
  const serviceItems = [
    {
      id: "casting",
      title: messages.serviceCastingTitle || "Die Casting",
      summary: messages.serviceCastingSummary || "Die Cast Mexico deploys automatic cold chamber die-casting machines ranging from 400 ton to 1900 ton dedicated to aluminum and magnesium alloy.",
      label: messages.serviceCastingLabel || "Manufacturing",
      image: "/images/hpfe_card.jpg",
    },
    {
      id: "mould",
      title: messages.serviceDesignTitle || "Mould & fixture design and fabrication",
      summary: messages.serviceDesignSummary || "Die Cast Mexico designs and manufactures complex molds using professional engineering and modern technology, offering both rapid prototyping solutions and high-efficiency CNC machining fixtures.",
      label: messages.serviceDesignLabel || "Design & Engineering",
      image: "/images/tool_design.jpg",
    },
    {
      id: "cnc",
      title: messages.serviceCncTitle || "CNC Precision Machining",
      summary: messages.serviceCncSummary || "Die Cast Mexico offers precise CNC machining from simple to complex projects with advanced quality control. Our horizontal CNC centers deliver high precision at volume.",
      label: messages.serviceCncLabel || "Precision Manufacturing",
      image: "/images/cnc_diecast.webp",
    },
    {
      id: "surface",
      title: messages.serviceFinishingTitle || "Surface Treatment",
      summary: messages.serviceFinishingSummary || "Die Cast Mexico is able to further treat the components with surface KLT, anodizing or other treatments according to client demands.",
      label: messages.serviceFinishingLabel || "Finishing",
      image: "/images/surface_treatment_diecast_mx.jpg",
    },
    {
      id: "testing",
      title: messages.serviceTestingTitle || "Testing & Assembly",
      summary: messages.serviceTestingSummary || "Die Cast Mexico provides early-stage support, creating solutions based on customer needs. We employ experienced engineers and advanced testing equipment for quality assurance.",
      label: messages.serviceTestingLabel || "Quality Assurance",
      image: "/images/assembly_testing.webp",
    },
  ];
  
  return (
    <ServicesSection id="services">
      <Container>
        <HeaderContent data-aos="fade-up">
          <Badge variant="secondary" style={{ marginBottom: "1.5rem" }}>
            {messages.servicesTagline}
          </Badge>
          <Title data-aos="fade-up" data-aos-delay="100">{messages.servicesTitle}</Title>
          <Description data-aos="fade-up" data-aos-delay="200">{messages.servicesSubtitle}</Description>
          <Button 
            variant="expandIcon" 
            Icon={() => <ArrowRight size={16} />} 
            iconPlacement="right"
            asChild
            data-aos="fade-up" 
            data-aos-delay="300"
            style={{
              height: '2.5rem',
              fontSize: '0.875rem',
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }}
          >
            <a href={`/${language === 'es' ? 'es/' : ''}contact`}>
              {messages.servicesButtonText}
            </a>
          </Button>
        </HeaderContent>
        
        <ServiceGrid>
          {serviceItems.map((service, index) => (
            <Card 
              key={service.id} 
              style={{ display: "grid", gridTemplateRows: "auto auto 1fr auto" }}
              data-aos="fade-up" 
              data-aos-delay={200 + (index * 100)}
            >
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
            </Card>
          ))}
        </ServiceGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
