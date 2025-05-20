import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { TypeTable } from "./ui/type-table";

const CapabilitiesSection = styled.section`
  padding: 6rem 1rem;
  background-color: #f8f9fc;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
    background-size: 80px 80px;
    opacity: 0.3;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-secondary);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 700px;
  margin: 2rem auto 0;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const SpecsCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const SpecsTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--color-secondary);
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const Capabilities = () => {
  const { messages: translations } = useLanguage();
  
  // Machine specifications data
  const machineSpecs = {
    [translations.tonnageCapacity]: {
      type: translations.tonnageRange,
      description: "The clamping force of the die casting machine determines the maximum size and complexity of parts that can be produced.",
      default: "50-1200t"
    },
    [translations.shotWeight]: {
      type: translations.shotWeightRange,
      description: "The maximum amount of aluminum that can be injected per cycle, affecting part size and production efficiency.",
      default: "0.5-20kg"
    },
    [translations.partWeight]: {
      type: translations.partWeightRange,
      description: "The weight range of final parts that can be efficiently produced with our equipment.",
      default: "0.01-15kg"
    },
    [translations.dieSize]: {
      type: translations.dieSizeRange,
      description: "The physical dimensions of the die that can be accommodated by our machines, determining maximum part size.",
      default: "150×150mm - 900×700mm"
    }
  };
  
  // Quality specifications data
  const qualitySpecs = {
    [translations.dimensionalTolerance]: {
      type: translations.dimensionalToleranceValue,
      description: "The accuracy of dimensions that can be achieved in our die casting process, crucial for precision parts.",
      typeDescription: "Tighter tolerances may be achieved with additional machining operations.",
      default: "±0.1mm"
    },
    [translations.surfaceFinish]: {
      type: translations.surfaceFinishValue,
      description: "The surface quality that can be achieved directly from the die casting process before any finishing operations.",
      default: "Ra 1.6-3.2"
    },
    [translations.wallThickness]: {
      type: translations.wallThicknessValue,
      description: "The minimum wall thickness that can be reliably produced with our die casting process.",
      typeDescription: "Thinner walls can reduce weight and material costs but may affect structural integrity.",
      default: "0.8-2.5mm"
    },
    [translations.materialPurity]: {
      type: translations.materialPurityValue,
      description: "The level of purity we can maintain in the aluminum alloys used in our die casting process.",
      typeDescription: "Higher purity levels can improve mechanical properties and surface finish.",
      default: "99.5-99.9%"
    }
  };
  
  // Additional capabilities are available but not shown in the interface
  
  return (
    <CapabilitiesSection>
      <Container>
        <SectionHeader>
          <Title>{translations.capabilitiesTitle}</Title>
          <Subtitle>{translations.capabilitiesSubtitle}</Subtitle>
        </SectionHeader>
        <SpecsGrid>
          <SpecsCard>
            <SpecsTitle>{translations.machineTitle}</SpecsTitle>
            <TypeTable type={machineSpecs} />
          </SpecsCard>
          
          <SpecsCard>
            <SpecsTitle>{translations.qualitySpecsTitle}</SpecsTitle>
            <TypeTable type={qualitySpecs} />
          </SpecsCard>
        </SpecsGrid>
      </Container>
    </CapabilitiesSection>
  );
};

export default Capabilities;