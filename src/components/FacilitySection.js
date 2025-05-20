import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { 
  FileText, 
  Award, 
  Scale 
} from "lucide-react";

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const HeaderBadge = styled.div`
  display: inline-block;
  font-size: 0.875rem;
  color: #4338ca;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  color: #1e293b;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  height: 100%;
`;

const ImageCard = styled(Card)`
  grid-column: span 1;
  
  @media (min-width: 768px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`;

const FacilityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EmptyCard = styled(Card)`
  min-height: 150px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const IconContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #eef2ff;
  margin-bottom: 1rem;
  
  svg {
    color: #4338ca;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
`;

const FacilitySection = () => {
  const { messages } = useLanguage();
  
  // Define feature data
  const features = [
    {
      icon: <FileText />,
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
    <Section id="facility">
      <Container>
        <Header>
          <HeaderBadge>{messages.facilityBadge || "Die Cast Mexico"}</HeaderBadge>
          <Title>{messages.facilityTitle || "Our Facility"}</Title>
        </Header>
        
        <CardsWrapper>
          <ImageCard>
            <FacilityImage 
              src="/images/industries/die_cast_cnc.png" 
              alt="Die Cast Mexico Facility" 
            />
          </ImageCard>
          
          <EmptyCard />
          <EmptyCard />
        </CardsWrapper>
        
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconContainer>
                {feature.icon}
              </IconContainer>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Container>
    </Section>
  );
};

export default FacilitySection;