import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { 
  Radio, 
  Cpu, 
  Wrench, 
  Car, 
  Lightbulb, 
  Gauge, 
  Cog, 
  Anchor 
} from "lucide-react";

const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #0c1220;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto;
`;

const TabsContainer = styled.div`
  margin-top: 2rem;
`;

const TabsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  background-color: ${props => props.active ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  color: ${props => props.active ? "#ffffff" : "#94a3b8"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const ContentContainer = styled.div`
  background-color: rgba(15, 23, 42, 0.7);
  border-radius: 1rem;
  padding: 1.5rem;
  
  @media (min-width: 992px) {
    padding: 4rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Badge = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: transparent;
  color: #94a3b8;
  border: 1px solid #1e293b;
  border-radius: 9999px;
  width: fit-content;
`;

const ContentTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const ContentDescription = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const ImageContainer = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #172b49;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const IndustryImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover {
    transform: scale(1.05);
  }
`;

const IndustriesTabsSimple = () => {
  const { messages } = useLanguage();
  const [activeTab, setActiveTab] = useState('telecom');
  
  // Industry data with additional fields
  const industriesData = [
    {
      value: "telecom",
      label: messages.telecomTitle || "Telecommunications",
      icon: <Radio />,
      imageSrc: "/images/industries/telecom.jpg",
      content: {
        badge: messages.modernSolutionsLabel || "Modern Solutions",
        title: messages.telecomTitle || "Telecommunications",
        description: messages.telecomDesc || "Die cast components for telecommunications infrastructure, including networking equipment, cell towers, and data center hardware.",
      }
    },
    {
      value: "mechatronics",
      label: messages.mechatronicsTitle || "Mechatronics",
      icon: <Cpu />,
      imageSrc: "/images/mechatronics_automation_02.jpg",
      content: {
        badge: messages.advancedTechLabel || "Advanced Technology",
        title: messages.mechatronicsTitle || "Mechatronics & Automation",
        description: messages.mechatronicsDesc || "Die cast components for industrial automation, robotic systems, and mechatronic applications requiring precision and reliability.",
      }
    },
    {
      value: "tools",
      label: messages.powertoolsSegmentTitle || "Power Tools",
      icon: <Wrench />,
      imageSrc: "/images/industries/powertools.jpg",
      content: {
        badge: messages.durableLabel || "Durable Solutions",
        title: messages.powertoolsSegmentTitle || "Power Tools",
        description: messages.powertoolsSegmentDesc || "Precision die cast components for power tools, providing durability and performance in professional and consumer applications.",
      }
    },
    {
      value: "automotive",
      label: messages.automotiveTitle || "Automotive",
      icon: <Car />,
      imageSrc: "/images/industries/automotive.jpg",
      content: {
        badge: messages.precisionEngLabel || "Precision Engineering",
        title: messages.automotiveTitle || "Automotive",
        description: messages.automotiveDesc || "High-quality die cast components for the automotive industry, meeting strict tolerances and specifications required for modern vehicles.",
      }
    },
    {
      value: "lighting",
      label: messages.lightingSegmentTitle || "Lighting",
      icon: <Lightbulb />,
      imageSrc: "/images/industries/lighting.jpg",
      content: {
        badge: messages.innovativeSolLabel || "Innovative Solutions",
        title: messages.lightingSegmentTitle || "Lighting",
        description: messages.lightingSegmentDesc || "Die cast components for commercial and industrial lighting systems, providing essential heat dissipation and structural support.",
      }
    },
    {
      value: "instrumentation",
      label: messages.instrumentationSegmentTitle || "Instrumentation",
      icon: <Gauge />,
      imageSrc: "/images/industries/instrumentation.jpg",
      content: {
        badge: messages.highPrecisionLabel || "High Precision",
        title: messages.instrumentationSegmentTitle || "Instrumentation",
        description: messages.instrumentationSegmentDesc || "Precision die cast housings and components for measurement devices, sensors, and industrial instrumentation.",
      }
    },
    {
      value: "hydraulic",
      label: messages.pneumaticSegmentTitle || "Pneumatic & Hydraulic",
      icon: <Cog />,
      imageSrc: "/images/industries/pneumatic.png",
      content: {
        badge: messages.reliableCompLabel || "Reliable Components",
        title: messages.pneumaticSegmentTitle || "Pneumatic & Hydraulic",
        description: messages.pneumaticSegmentDesc || "Die cast components for pneumatic and hydraulic systems, designed to withstand high pressures and provide reliable performance.",
      }
    },
    {
      value: "marine",
      label: messages.marineTitle || "Marine",
      icon: <Anchor />,
      imageSrc: "/images/industries/marine.jpg",
      content: {
        badge: messages.durableInEnvLabel || "Durable in Extreme Environments",
        title: messages.marineTitle || "Marine Products",
        description: messages.marineDesc || "Corrosion-resistant die cast components for marine applications, built to withstand harsh saltwater environments.",
      }
    }
  ];
  
  // Get the active industry data
  const activeIndustry = industriesData.find(industry => industry.value === activeTab) || industriesData[0];
  
  return (
    <Section id="industries">
      <Container>
        <Header>
          <Title className="slide-in-left">{messages.industriesTitle || "Industries We Serve"}</Title>
          <Subtitle className="slide-in-right">
            {messages.industriesSubtitle || "Our die casting expertise spans across multiple industries, providing precision components for diverse applications."}
          </Subtitle>
        </Header>
        
        <TabsContainer>
          <TabsList>
            {industriesData.map((industry) => (
              <TabButton
                key={industry.value}
                active={activeTab === industry.value}
                onClick={() => setActiveTab(industry.value)}
              >
                {industry.icon} {industry.label}
              </TabButton>
            ))}
          </TabsList>
          
          <ContentContainer>
            <ContentGrid>
              <ContentText>
                <Badge>{activeIndustry.content.badge}</Badge>
                <ContentTitle>{activeIndustry.content.title}</ContentTitle>
                <ContentDescription>{activeIndustry.content.description}</ContentDescription>
              </ContentText>
              
              <ImageContainer>
                <IndustryImage src={activeIndustry.imageSrc} />
              </ImageContainer>
            </ContentGrid>
          </ContentContainer>
        </TabsContainer>
      </Container>
    </Section>
  );
};

export default IndustriesTabsSimple;