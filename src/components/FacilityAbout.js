import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaClipboardList, FaCogs, FaPalette } from 'react-icons/fa';

const FacilitySection = styled.section`
  padding: 6rem 1rem;
  background: rgba(248, 250, 252, 0.3);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const CapabilitiesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
  
  @media (min-width: 1024px) {
    gap: 8rem;
  }
`;

const CapabilitiesIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  width: fit-content;
`;

const BadgeIcon = styled.div`
  width: 1rem;
  height: 1rem;
  background: #2563eb;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const BadgeText = styled.span`
  font-weight: 500;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavigationDots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1rem;
`;

const NavigationDot = styled.button`
  height: 0.625rem;
  border-radius: 2rem;
  border: none;
  background: ${props => props.active ? '#2563eb' : 'rgba(107, 114, 128, 0.3)'};
  width: ${props => props.active ? '2.5rem' : '0.625rem'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.active ? '#2563eb' : 'rgba(107, 114, 128, 0.5)'};
  }
`;

const CapabilitiesDisplay = styled.div`
  position: relative;
  min-height: 400px;
  margin-right: 2.5rem;
  
  @media (max-width: 767px) {
    margin-right: 0;
    min-height: 300px;
  }
`;

const CapabilityCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: ${props => props.active ? 1 : 0};
  transform: translateX(${props => props.active ? 0 : 100}px) scale(${props => props.active ? 1 : 0.9});
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
`;

const CapabilityCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem;
  
  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const CapabilityIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    color: white;
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${CapabilityCard}:hover & {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
  }
`;

const CapabilityTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.4;
`;

const CapabilityDescription = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0.5rem 0 0 0;
`;

const CapabilityDivider = styled.div`
  height: 1px;
  background: #e2e8f0;
  margin: 0 2rem;
  
  @media (max-width: 640px) {
    margin: 0 1.5rem;
  }
`;

const CapabilityItems = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const CapabilityItem = styled.div`
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.125rem;
  transition: all 0.2s ease;
  border: 1px solid #f3f4f6;
  
  &:hover {
    background: #f3f4f6;
    border-color: #e5e7eb;
  }
  
  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const CapabilityLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const CapabilityValue = styled.div`
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  background: rgba(37, 99, 235, 0.05);
  border-radius: 1rem;
  
  ${props => props.top ? `
    top: -1.5rem;
    right: -1.5rem;
  ` : `
    bottom: -1.5rem;
    left: -1.5rem;
  `}
`;

const FacilityAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const capabilities = [
    {
      id: 1,
      title: "Overview",
      icon: <FaClipboardList />,
      description: "Comprehensive die casting solutions with over 25 years of manufacturing excellence",
      items: [
        { label: "EXPERIENCE", value: "25+ years in precision die casting" },
        { label: "CAPACITY", value: "High-volume production capabilities" },
        { label: "MATERIALS", value: "Aluminum, zinc, and magnesium alloys" },
        { label: "QUALITY", value: "ISO 9001:2015 certified processes" }
      ]
    },
    {
      id: 2,
      title: "Manufacturing",
      icon: <FaCogs />,
      description: "Advanced manufacturing processes with state-of-the-art equipment and precision engineering",
      items: [
        { label: "EQUIPMENT", value: "State-of-the-art die casting machines" },
        { label: "PRECISION", value: "±0.05mm tolerance capabilities" },
        { label: "AUTOMATION", value: "Robotic systems for consistency" },
        { label: "TESTING", value: "In-house quality control laboratory" }
      ]
    },
    {
      id: 3,
      title: "Surface Finishing",
      icon: <FaPalette />,
      description: "Complete surface treatment solutions for enhanced durability and aesthetic appeal",
      items: [
        { label: "TREATMENTS", value: "Anodizing, powder coating, plating" },
        { label: "DURABILITY", value: "Corrosion resistance solutions" },
        { label: "APPEARANCE", value: "Custom colors and textures" },
        { label: "STANDARDS", value: "Automotive and aerospace grade" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % capabilities.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FacilitySection>
      <Container>
        <CapabilitiesContainer>
          {/* Left side: Heading and navigation */}
          <CapabilitiesIntro>
            <BadgeContainer>
              <BadgeIcon />
              <BadgeText>Manufacturing Excellence</BadgeText>
            </BadgeContainer>

            <SectionTitle>Our Manufacturing Capabilities</SectionTitle>
            <SectionSubtitle>
              Advanced die casting solutions with precision engineering, quality assurance, and comprehensive surface finishing services.
            </SectionSubtitle>

            <NavigationDots>
              {capabilities.map((_, index) => (
                <NavigationDot
                  key={index}
                  active={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </NavigationDots>
          </CapabilitiesIntro>

          {/* Right side: Capability cards */}
          <CapabilitiesDisplay>
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={capability.id}
                active={activeIndex === index}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <CapabilityCardHeader>
                  <CapabilityIcon>
                    {capability.icon}
                  </CapabilityIcon>
                  <div>
                    <CapabilityTitle>{capability.title}</CapabilityTitle>
                    <CapabilityDescription>{capability.description}</CapabilityDescription>
                  </div>
                </CapabilityCardHeader>

                <CapabilityDivider />

                <CapabilityItems>
                  {capability.items.map((item, itemIndex) => (
                    <CapabilityItem key={itemIndex}>
                      <CapabilityLabel>{item.label}</CapabilityLabel>
                      <CapabilityValue>{item.value}</CapabilityValue>
                    </CapabilityItem>
                  ))}
                </CapabilityItems>
              </CapabilityCard>
            ))}
            
            <DecorativeElement top />
            <DecorativeElement />
          </CapabilitiesDisplay>
        </CapabilitiesContainer>
      </Container>
    </FacilitySection>
  );
};

export default FacilityAbout;