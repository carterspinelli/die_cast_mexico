import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Zap, Briefcase, Car, Lightbulb, Activity, RotateCcw, Anchor, Wrench } from "lucide-react";

// Styled components for the Industries section
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  max-width: 32rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: #94a3b8;
  margin: 0;
`;

const TabsContainer = styled(Tabs)`
  margin-top: 2rem;
`;

const CustomTabsList = styled(TabsList)`
  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
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
  gap: 5rem;
  place-items: center;
  
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

const ContentTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

const ContentDescription = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  
  @media (min-width: 992px) {
    font-size: 1.125rem;
  }
`;

const LearnMoreButton = styled(Button)`
  margin-top: 0.625rem;
  width: fit-content;
`;

const ImageContainer = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  max-width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const IndustryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.75rem;
`;

// Industry icons with styling
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const IndustriesTabs = () => {
  const { messages } = useLanguage();
  
  // Industry data with additional fields
  const industriesData = [
    {
      value: "telecom",
      icon: <IconWrapper><Zap /></IconWrapper>,
      label: messages.telecomTitle || "Telecommunications",
      content: {
        badge: messages.modernSolutionsLabel || "Modern Solutions",
        title: messages.telecomTitle || "Telecommunications",
        description: messages.telecomDesc || "Die cast components for telecommunications infrastructure, including networking equipment, cell towers, and data center hardware.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/telecom.jpg",
        imageAlt: "Telecommunications equipment"
      }
    },
    {
      value: "mechatronics",
      icon: <IconWrapper><Activity /></IconWrapper>,
      label: messages.mechatronicsTitle || "Mechatronics",
      content: {
        badge: messages.advancedTechLabel || "Advanced Technology",
        title: messages.mechatronicsTitle || "Mechatronics & Automation",
        description: messages.mechatronicsDesc || "Die cast components for industrial automation, robotic systems, and mechatronic applications requiring precision and reliability.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/mechatronics.jpg",
        imageAlt: "Mechatronics and automation equipment"
      }
    },
    {
      value: "tools",
      icon: <IconWrapper><Wrench /></IconWrapper>,
      label: messages.powertoolsSegmentTitle || "Power Tools",
      content: {
        badge: messages.durableLabel || "Durable Solutions",
        title: messages.powertoolsSegmentTitle || "Power Tools",
        description: messages.powertoolsSegmentDesc || "Precision die cast components for power tools, providing durability and performance in professional and consumer applications.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/tools.jpg",
        imageAlt: "Power tools"
      }
    },
    {
      value: "automotive",
      icon: <IconWrapper><Car /></IconWrapper>,
      label: messages.automotiveTitle || "Automotive",
      content: {
        badge: messages.precisionEngLabel || "Precision Engineering",
        title: messages.automotiveTitle || "Automotive",
        description: messages.automotiveDesc || "High-quality die cast components for the automotive industry, meeting strict tolerances and specifications required for modern vehicles.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/automotive.jpg",
        imageAlt: "Automotive components"
      }
    },
    {
      value: "lighting",
      icon: <IconWrapper><Lightbulb /></IconWrapper>,
      label: messages.lightingSegmentTitle || "Lighting",
      content: {
        badge: messages.innovativeSolLabel || "Innovative Solutions",
        title: messages.lightingSegmentTitle || "Lighting",
        description: messages.lightingSegmentDesc || "Die cast components for commercial and industrial lighting systems, providing essential heat dissipation and structural support.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/lighting.jpg",
        imageAlt: "Lighting fixtures"
      }
    },
    {
      value: "instrumentation",
      icon: <IconWrapper><Briefcase /></IconWrapper>,
      label: messages.instrumentationSegmentTitle || "Instrumentation",
      content: {
        badge: messages.highPrecisionLabel || "High Precision",
        title: messages.instrumentationSegmentTitle || "Instrumentation",
        description: messages.instrumentationSegmentDesc || "Precision die cast housings and components for measurement devices, sensors, and industrial instrumentation.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/instrumentation.jpg",
        imageAlt: "Instrumentation equipment"
      }
    },
    {
      value: "hydraulic",
      icon: <IconWrapper><RotateCcw /></IconWrapper>,
      label: messages.pneumaticSegmentTitle || "Pneumatic & Hydraulic",
      content: {
        badge: messages.reliableCompLabel || "Reliable Components",
        title: messages.pneumaticSegmentTitle || "Pneumatic & Hydraulic",
        description: messages.pneumaticSegmentDesc || "Die cast components for pneumatic and hydraulic systems, designed to withstand high pressures and provide reliable performance.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/hydraulic.jpg",
        imageAlt: "Hydraulic components"
      }
    },
    {
      value: "marine",
      icon: <IconWrapper><Anchor /></IconWrapper>,
      label: messages.marineTitle || "Marine",
      content: {
        badge: messages.durableInEnvLabel || "Durable in Extreme Environments",
        title: messages.marineTitle || "Marine Products",
        description: messages.marineDesc || "Corrosion-resistant die cast components for marine applications, built to withstand harsh saltwater environments.",
        buttonText: messages.learnMoreBtn || "Learn More",
        imageSrc: "/images/industries/marine.jpg",
        imageAlt: "Marine components"
      }
    }
  ];
  
  // Fallback images if actual industry images aren't available
  const getIndustryImage = (path) => {
    try {
      return path;
    } catch (e) {
      // As a fallback, return a colored background
      return "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20fill%3D%22%23172b49%22%20width%3D%22300%22%20height%3D%22200%22%2F%3E%3C%2Fsvg%3E";
    }
  };
  
  return (
    <Section id="industries">
      <Container>
        <Header>
          <Badge variant="outline">{messages.industriesBadge || "Industries We Serve"}</Badge>
          <Title>{messages.industriesTitle || "We Serve a Diverse Range of Industries"}</Title>
          <Description>{messages.industriesSubtitle || "Our die casting expertise spans across multiple industries, providing precision components for diverse applications."}</Description>
        </Header>
        
        <TabsContainer defaultValue={industriesData[0].value}>
          <CustomTabsList>
            {industriesData.map((industry) => (
              <TabsTrigger key={industry.value} value={industry.value}>
                {industry.icon} {industry.label}
              </TabsTrigger>
            ))}
          </CustomTabsList>
          
          <ContentContainer>
            {industriesData.map((industry) => (
              <TabsContent key={industry.value} value={industry.value}>
                <ContentGrid>
                  <ContentText>
                    <Badge variant="outline">{industry.content.badge}</Badge>
                    <ContentTitle>{industry.content.title}</ContentTitle>
                    <ContentDescription>{industry.content.description}</ContentDescription>
                    <LearnMoreButton size="lg">
                      {industry.content.buttonText}
                    </LearnMoreButton>
                  </ContentText>
                  
                  <ImageContainer>
                    <IndustryImage 
                      src={getIndustryImage(industry.content.imageSrc)}
                      alt={industry.content.imageAlt}
                    />
                  </ImageContainer>
                </ContentGrid>
              </TabsContent>
            ))}
          </ContentContainer>
        </TabsContainer>
      </Container>
    </Section>
  );
};

export default IndustriesTabs;