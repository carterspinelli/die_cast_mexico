import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";

const IndustriesContainer = styled.div`
  padding: 3rem 1rem;
  background-color: var(--color-dark-bg);
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--color-light);
  margin-bottom: 3rem;
  text-align: center;
`;

const IndustryImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const IndustryImageContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 4px;
`;

// Industry images component
const IndustryImage = ({ industry }) => (
  <IndustryImageWrapper>
    <IndustryImageContent>
      {industry}
    </IndustryImageContent>
  </IndustryImageWrapper>
);

const IndustriesStickyScroll = () => {
  const { messages, currentLanguage } = useLanguage();

  // Content for the sticky scroll
  const industriesContent = [
    {
      title: messages.automotiveIndustry,
      description: messages.automotiveDesc || "Aluminum die-cast components for the automotive industry including transmission cases, engine mounts, and various structural elements.",
      content: <IndustryImage industry={messages.automotiveIndustry} />
    },
    {
      title: messages.lightingIndustry,
      description: messages.lightingDesc || "LED housing components, heat sinks, and other high-precision lighting components requiring excellent thermal management.",
      content: <IndustryImage industry={messages.lightingIndustry} />
    },
    {
      title: messages.toolsIndustry,
      description: messages.toolsDesc || "Precision components for power tools, hand tools, and industrial equipment that require durability and tight tolerances.",
      content: <IndustryImage industry={messages.toolsIndustry} />
    },
    {
      title: messages.telecomIndustry,
      description: messages.telecomDesc || "Housing components, connectors, and structural parts for telecommunications equipment with high requirements for EMI shielding.",
      content: <IndustryImage industry={messages.telecomIndustry} />
    },
    {
      title: messages.mechatronicsIndustry,
      description: messages.mechatronicsDesc || "Precision components for mechatronic systems combining mechanical and electronic elements in automated equipment.",
      content: <IndustryImage industry={messages.mechatronicsIndustry} />
    },
    {
      title: messages.marineIndustry,
      description: messages.marineDesc || "Corrosion resistant components for marine applications, including structural elements and decorative fixtures.",
      content: <IndustryImage industry={messages.marineIndustry} />
    },
    {
      title: messages.hydraulicIndustry,
      description: messages.hydraulicDesc || "Pressure-resistant components for hydraulic and pneumatic systems that require precision and reliability.",
      content: <IndustryImage industry={messages.hydraulicIndustry} />
    },
    {
      title: messages.instrumentationIndustry,
      description: messages.instrumentationDesc || "High-precision components for measurement and instrumentation devices requiring tight tolerances.",
      content: <IndustryImage industry={messages.instrumentationIndustry} />
    }
  ];

  return (
    <IndustriesContainer id="industries">
      <SectionTitle className="slide-in-left">{messages.industriesTitle}</SectionTitle>
      <StickyScroll content={industriesContent} />
    </IndustriesContainer>
  );
};

export default IndustriesStickyScroll;