import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const IndustriesSection = styled.section`
  padding: 5rem 1rem;
  background-color: #0c1220;
  color: white;
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
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #c5c5c5;
  max-width: 700px;
  margin: 0 auto;
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const IndustryCard = styled.div`
  position: relative;
  background: linear-gradient(135deg, #172b49 0%, #0b1528 100%);
  border-radius: 12px;
  overflow: hidden;
  height: 220px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const CardIcon = styled.div`
  margin-bottom: 1rem;
  
  svg {
    width: 2rem;
    height: 2rem;
    color: #64b5f6;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #172b49 0%, #0b1528 100%);
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.75rem;
  color: white;
  margin-right: 2rem;
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #c5c5c5;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: white;
  }
`;

const ModalDescription = styled.p`
  color: #e0e0e0;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  color: #c5c5c5;
  line-height: 1.5;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #64b5f6;
  }
`;

// SVG icons for each industry
const IconTelecom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 5h20M5 2v4M19 2v4M5 13h14M5 18h14" />
  </svg>
);

const IconMechatronics = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const IconPowerTools = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconAutomotive = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M16 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M5 9h14M5 9v4M19 9v4M5 13h14" />
    <path d="M4 17h1M19 17h1M7 13l3-4M14 13l3-4" />
  </svg>
);

const IconLighting = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const IconInstrumentation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 3 4 2v12l-4-2V3z" />
    <path d="m9 5 4-2v12l-4 2V5z" />
    <path d="m13 3 4 2v12l-4-2V3z" />
    <path d="m17 5 4-2v12l-4 2V5z" />
  </svg>
);

const IconPneumatic = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M4 12h16" />
    <path d="M12 9 L7 6 L7 2" />
    <path d="M12 9 L17 6 L17 2" />
    <path d="M12 16 L7 19 L7 22" />
    <path d="M12 16 L17 19 L17 22" />
  </svg>
);

const IconMarine = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a6 6 0 0 0 12 0c0-7-12-7-12 0Z" />
    <path d="M16 4h2a2 2 0 0 1 2 2v12" />
    <path d="M12 13a6 6 0 0 0-4-4" />
  </svg>
);

const IndustriesGrid = () => {
  const { messages } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  
  // Define industry details - more specifically for each industry
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
  
  // Map icons to industries
  const industryIcons = {
    telecom: <IconTelecom />,
    mechatronics: <IconMechatronics />,
    powertools: <IconPowerTools />,
    automotive: <IconAutomotive />,
    lighting: <IconLighting />,
    instrumentation: <IconInstrumentation />,
    pneumatic: <IconPneumatic />,
    marine: <IconMarine />
  };
  
  // Industry data
  const industries = [
    {
      id: "telecom",
      icon: industryIcons.telecom,
      title: messages.telecomTitle || "Telecommunications",
      description: messages.telecomDesc || "Die cast components for telecommunications infrastructure, including networking equipment, cell towers, and data center hardware.",
      details: industryDetails.telecom
    },
    {
      id: "mechatronics",
      icon: industryIcons.mechatronics,
      title: messages.mechatronicsTitle || "Mechatronics & Automation",
      description: messages.mechatronicsDesc || "Die cast components for industrial automation, robotic systems, and mechatronic applications requiring precision and reliability.",
      details: industryDetails.mechatronics
    },
    {
      id: "powertools",
      icon: industryIcons.powertools,
      title: messages.powertoolsSegmentTitle || "Power Tools",
      description: messages.powertoolsSegmentDesc || "Precision die cast components for power tools, providing durability and performance in professional and consumer applications.",
      details: industryDetails.powertools
    },
    {
      id: "automotive",
      icon: industryIcons.automotive,
      title: messages.automotiveTitle || "Automotive",
      description: messages.automotiveDesc || "High-quality die cast components for the automotive industry, meeting strict tolerances and specifications required for modern vehicles.",
      details: industryDetails.automotive
    },
    {
      id: "lighting",
      icon: industryIcons.lighting,
      title: messages.lightingSegmentTitle || "Lighting",
      description: messages.lightingSegmentDesc || "Die cast components for commercial and industrial lighting systems, providing essential heat dissipation and structural support.",
      details: industryDetails.lighting
    },
    {
      id: "instrumentation",
      icon: industryIcons.instrumentation,
      title: messages.instrumentationSegmentTitle || "Instrumentation",
      description: messages.instrumentationSegmentDesc || "Precision die cast housings and components for measurement devices, sensors, and industrial instrumentation.",
      details: industryDetails.instrumentation
    },
    {
      id: "pneumatic",
      icon: industryIcons.pneumatic,
      title: messages.pneumaticSegmentTitle || "Pneumatic & Hydraulic",
      description: messages.pneumaticSegmentDesc || "Die cast components for pneumatic and hydraulic systems, designed to withstand high pressures and provide reliable performance.",
      details: industryDetails.pneumatic
    },
    {
      id: "marine",
      icon: industryIcons.marine,
      title: messages.marineTitle || "Marine Products",
      description: messages.marineDesc || "Corrosion-resistant die cast components for marine applications, built to withstand harsh saltwater environments.",
      details: industryDetails.marine
    }
  ];
  
  const openIndustryModal = (industry) => {
    setSelectedIndustry(industry);
    document.body.style.overflow = 'hidden';
  };
  
  const closeIndustryModal = () => {
    setSelectedIndustry(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <IndustriesSection id="industries">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{messages.industriesTitle || "Industries We Serve"}</Title>
          <Subtitle className="slide-in-right">
            {messages.industriesSubtitle || "Our die casting expertise spans across multiple industries, providing precision components for diverse applications."}
          </Subtitle>
        </SectionHeader>
        
        <IndustryGrid>
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              onClick={() => openIndustryModal(industry)}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardOverlay>
                <CardIcon>{industry.icon}</CardIcon>
                <CardTitle>{industry.title}</CardTitle>
              </CardOverlay>
            </IndustryCard>
          ))}
        </IndustryGrid>
      </Container>
      
      <AnimatePresence>
        {selectedIndustry && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeIndustryModal}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>{selectedIndustry.title}</ModalTitle>
                <CloseButton onClick={closeIndustryModal}>×</CloseButton>
              </ModalHeader>
              
              <ModalDescription>{selectedIndustry.description}</ModalDescription>
              
              <DetailsList>
                {selectedIndustry.details.map((detail, index) => (
                  <DetailItem key={index}>{detail}</DetailItem>
                ))}
              </DetailsList>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </IndustriesSection>
  );
};

export default IndustriesGrid;