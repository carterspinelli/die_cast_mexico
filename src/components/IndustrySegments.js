import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import ExpandableIndustryCard from "./ui/ExpandableIndustryCard";

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

const SegmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

// Define some common details to be displayed in the expandable part
const industryDetails = {
  telecom: [
    "High precision aluminum die casting for telecommunications components",
    "Specialized finish and plating options for EMI/RFI shielding",
    "Tight tolerance components for routers, switches, and base stations",
    "Secondary operations including CNC machining and assembly",
    "Quality assurance testing and validation"
  ],
  mechatronics: [
    "Precision components for automation systems",
    "Complex geometries for mechanical interfaces",
    "Multi-material solutions for integrated systems",
    "Heat-dissipating enclosures for electronics",
    "Robotics components with high reliability standards"
  ],
  powertools: [
    "Lightweight aluminum components for power tool housings",
    "Vibration-dampening designs for comfort and safety",
    "Heat sink integration for motor components",
    "Custom surface finishes for durability and grip",
    "High strength-to-weight ratio parts"
  ],
  automotive: [
    "IATF 16949 compliant die casting processes",
    "Engine components with tight tolerances",
    "Structural parts with validated safety profiles",
    "Lightweight solutions for improved fuel efficiency",
    "Specialized coatings for corrosion resistance"
  ],
  lighting: [
    "Heat-dissipating LED fixture housings",
    "Decorative and functional aluminum profiles",
    "Custom surface treatments for optical properties",
    "Integration of mounting and connection features",
    "Thin-wall casting capabilities for lighting design"
  ],
  instrumentation: [
    "Pressure and flow sensor housings",
    "High precision measurement device components",
    "EMI shielded enclosures for sensitive electronics",
    "Corrosion-resistant materials for harsh environments",
    "Integration of mounting features and connectors"
  ],
  pneumatic: [
    "High pressure-rated valve bodies and components",
    "Precision-machined surfaces for air-tight sealing",
    "Durable manifold blocks with complex internal passages",
    "Corrosion-resistant treatments for industrial applications",
    "Custom port configurations and connection interfaces"
  ],
  marine: [
    "Salt-water resistant aluminum alloys",
    "Special coatings for extreme marine environments",
    "Propulsion system components with high reliability",
    "Lightweight structural parts for improved efficiency",
    "Water-tight enclosures for marine electronics"
  ]
};

// SVG icon components for each industry
const IndustryIcon = ({ iconPath }) => (
  <img 
    src={iconPath} 
    alt="" 
    width="30" 
    height="30" 
    style={{ filter: "brightness(0) invert(1)" }} 
  />
);

const IndustrySegments = () => {
  const { messages: translations } = useLanguage();
  
  const industries = [
    {
      icon: "/icons/telecom.svg",
      title: translations.telecomTitle,
      description: translations.telecomDesc,
      details: industryDetails.telecom
    },
    {
      icon: "/icons/automation.svg",
      title: translations.mechatronicsTitle,
      description: translations.mechatronicsDesc,
      details: industryDetails.mechatronics
    },
    {
      icon: "/icons/powertools.svg",
      title: translations.powertoolsSegmentTitle,
      description: translations.powertoolsSegmentDesc,
      details: industryDetails.powertools
    },
    {
      icon: "/icons/automotive.svg",
      title: translations.automotiveTitle,
      description: translations.automotiveDesc,
      details: industryDetails.automotive
    },
    {
      icon: "/icons/lighting.svg",
      title: translations.lightingSegmentTitle,
      description: translations.lightingSegmentDesc,
      details: industryDetails.lighting
    },
    {
      icon: "/icons/instrumentation.svg",
      title: translations.instrumentationSegmentTitle,
      description: translations.instrumentationSegmentDesc,
      details: industryDetails.instrumentation
    },
    {
      icon: "/icons/pneumatic.svg",
      title: translations.pneumaticSegmentTitle,
      description: translations.pneumaticSegmentDesc,
      details: industryDetails.pneumatic
    },
    {
      icon: "/icons/marine.svg",
      title: translations.marineTitle,
      description: translations.marineDesc,
      details: industryDetails.marine
    }
  ];
  
  return (
    <IndustrySegmentsSection>
      <Container>
        <SectionHeader>
          <Title>{translations.industriesTitle}</Title>
          <Subtitle>{translations.industriesSubtitle}</Subtitle>
        </SectionHeader>
        
        <SegmentsGrid>
          {industries.map((item, index) => (
            <ExpandableIndustryCard 
              key={index}
              title={item.title}
              icon={<IndustryIcon iconPath={item.icon} />}
              description={item.description}
              details={item.details}
            />
          ))}
        </SegmentsGrid>
      </Container>
    </IndustrySegmentsSection>
  );
};

export default IndustrySegments;