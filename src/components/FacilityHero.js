import React from "react";
import styled from "styled-components";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Factory, 
  Award, 
  Scale 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const SectionWrapper = styled.section`
  padding: 8rem 1rem;
  background-color: #f8fafc;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const Header = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #1e293b;
  
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 70rem;
  margin: 0 auto;
`;

const MainImage = styled.img`
  aspect-ratio: 16/9;
  max-height: 500px;
  width: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.3), transparent);
  border-radius: 0.75rem;
`;

const DotPattern = styled.div`
  position: absolute;
  z-index: -10;
  aspect-ratio: 1;
  height: 18rem;
  width: 24rem;
  opacity: 0.4;
  background-size: 12px 12px;
  
  &:first-of-type {
    right: -7rem;
    top: -7rem;
  }
  
  &:last-of-type {
    left: -7rem;
    top: -7rem;
  }
  
  @media (min-width: 640px) {
    background: radial-gradient(#94a3b8 1px, transparent 1px);
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 100%);
  }
`;

const FeaturesContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FeatureItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  background-color: white;
  padding: 1rem;
  
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  svg {
    width: 1.25rem;
    height: auto;
    color: #1e40af;
  }
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
`;

const VerticalSeparator = styled(Separator)`
  margin: 0 1.5rem;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const FacilityHero = () => {
  const { messages } = useLanguage();
  
  const features = [
    {
      icon: <Factory />,
      title: messages.facilityFeature1Title || "Modern Facility",
      description: messages.facilityFeature1Desc || "Our state-of-the-art die casting facility in Mexico features high-pressure machines ranging from 250 to 1,600 tons."
    },
    {
      icon: <Award />,
      title: messages.facilityFeature2Title || "Quality Certified",
      description: messages.facilityFeature2Desc || "We maintain ISO 9001 certification and NADCA/AIAG standards for all our die casting manufacturing operations."
    },
    {
      icon: <Scale />,
      title: messages.facilityFeature3Title || "Production Capacity",
      description: messages.facilityFeature3Desc || "With over 100,000 sq ft of manufacturing space, we can handle high-volume production while ensuring precision and quality."
    }
  ];

  return (
    <SectionWrapper id="facility">
      <Container>
        <Header>
          <Badge variant="outline">{messages.facilityBadge || "Die Cast Mexico"}</Badge>
          <Heading>{messages.facilityTitle || "State-of-the-Art Die Casting Facility"}</Heading>
        </Header>
        
        <ImageContainer>
          <MainImage 
            src="/images/industries/die_cast_cnc.png" 
            alt={messages.facilityImageAlt || "Die Cast Mexico Facility"} 
          />
          <Overlay />
          <DotPattern />
          <DotPattern />
        </ImageContainer>
        
        <FeaturesContainer>
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              {index > 0 && <VerticalSeparator orientation="vertical" className="h-auto bg-gradient-to-b from-gray-200 via-transparent to-gray-200" />}
              <FeatureItem>
                <IconContainer>{feature.icon}</IconContainer>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureItem>
            </React.Fragment>
          ))}
        </FeaturesContainer>
      </Container>
    </SectionWrapper>
  );
};

export default FacilityHero;