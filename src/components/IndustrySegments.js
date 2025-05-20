import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const IndustrySegmentsSection = styled.section`
  padding: 5rem 1rem;
  background-color: var(--color-light-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Tab = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.active ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-primary)'};
  border: 2px solid var(--color-primary);
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-primary-light)'};
    color: ${props => props.active ? 'white' : 'var(--color-primary)'};
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const SegmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const SegmentCard = styled.div`
  background-color: white;
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

const IndustrySegments = () => {
  const { messages: translations } = useLanguage();
  const [activeTab, setActiveTab] = useState('industries');
  
  const industries = [
    {
      icon: "/icons/automotive.svg",
      title: translations.automotiveTitle,
      description: translations.automotiveDesc
    },
    {
      icon: "/icons/telecom.svg",
      title: translations.telecomTitle,
      description: translations.telecomDesc
    },
    {
      icon: "/icons/instrumentation.svg",
      title: translations.energyTitle,
      description: translations.energyDesc
    },
    {
      icon: "/icons/marine.svg",
      title: translations.marineTitle,
      description: translations.marineDesc
    }
  ];
  
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
    <IndustrySegmentsSection>
      <Container>
        <SectionHeader>
          <Title>
            {activeTab === 'industries' 
              ? translations.industriesTitle 
              : translations.productSegmentsTitle}
          </Title>
          <Subtitle>
            {activeTab === 'industries' 
              ? translations.industriesSubtitle 
              : translations.productSegmentsSubtitle}
          </Subtitle>
        </SectionHeader>
        
        <TabsContainer>
          <Tab 
            active={activeTab === 'industries'} 
            onClick={() => setActiveTab('industries')}
          >
            {translations.industries}
          </Tab>
          <Tab 
            active={activeTab === 'segments'} 
            onClick={() => setActiveTab('segments')}
          >
            {translations.productSegmentsTitle}
          </Tab>
        </TabsContainer>
        
        <SegmentsGrid>
          {(activeTab === 'industries' ? industries : segments).map((item, index) => (
            <SegmentCard key={index}>
              <IconContainer>
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  width="30" 
                  height="30" 
                  style={{ filter: "brightness(0) invert(1)" }} 
                />
              </IconContainer>
              <SegmentTitle>{item.title}</SegmentTitle>
              <SegmentDesc>{item.description}</SegmentDesc>
            </SegmentCard>
          ))}
        </SegmentsGrid>
      </Container>
    </IndustrySegmentsSection>
  );
};

export default IndustrySegments;