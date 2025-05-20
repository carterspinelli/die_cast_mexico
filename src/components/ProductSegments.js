import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const ProductSegmentsSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
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
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 700px;
  margin: 0 auto;
`;

const SegmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const SegmentCard = styled.div`
  background-color: var(--color-light-bg);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const SegmentTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--color-secondary);
  margin-bottom: 1rem;
`;

const SegmentDesc = styled.p`
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.6;
  flex-grow: 1;
`;

const ProductSegments = () => {
  const { messages: translations } = useLanguage();
  
  const segments = [
    {
      icon: "/icons/automotive.svg",
      title: translations.automotiveSegmentTitle,
      description: translations.automotiveSegmentDesc
    },
    {
      icon: "/icons/telecom.svg",
      title: translations.telecomSegmentTitle,
      description: translations.telecomSegmentDesc
    },
    {
      icon: "/icons/instrumentation.svg",
      title: translations.instrumentationSegmentTitle,
      description: translations.instrumentationSegmentDesc
    },
    {
      icon: "/icons/marine.svg",
      title: translations.marineSegmentTitle,
      description: translations.marineSegmentDesc
    },
    {
      icon: "/icons/automation.svg",
      title: translations.automationSegmentTitle,
      description: translations.automationSegmentDesc
    },
    {
      icon: "/icons/powertools.svg",
      title: translations.powertoolsSegmentTitle,
      description: translations.powertoolsSegmentDesc
    },
    {
      icon: "/icons/lighting.svg",
      title: translations.lightingSegmentTitle,
      description: translations.lightingSegmentDesc
    },
    {
      icon: "/icons/pneumatic.svg",
      title: translations.pneumaticSegmentTitle,
      description: translations.pneumaticSegmentDesc
    }
  ];
  
  return (
    <ProductSegmentsSection>
      <Container>
        <SectionHeader>
          <Title>{translations.productSegmentsTitle}</Title>
          <Subtitle>{translations.productSegmentsSubtitle}</Subtitle>
        </SectionHeader>
        <SegmentsGrid>
          {segments.map((segment, index) => (
            <SegmentCard key={index}>
              <IconContainer>
                <img src={segment.icon} alt={segment.title} width="30" height="30" style={{ filter: "brightness(0) invert(1)" }} />
              </IconContainer>
              <SegmentTitle>{segment.title}</SegmentTitle>
              <SegmentDesc>{segment.description}</SegmentDesc>
            </SegmentCard>
          ))}
        </SegmentsGrid>
      </Container>
    </ProductSegmentsSection>
  );
};

export default ProductSegments;