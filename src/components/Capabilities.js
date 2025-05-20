import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { TypeTable } from "./ui/type-table";

const CapabilitiesSection = styled.section`
  padding: 5rem 1rem;
  background-color: var(--color-light-bg);
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

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const SpecsCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  padding: 2rem;
`;

const SpecsTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--color-primary);
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
    background-color: var(--color-accent);
  }
`;

const Capabilities = () => {
  const { messages: translations } = useLanguage();
  
  // Machine specifications data
  const machineSpecs = {
    [translations.tonnageCapacity]: {
      type: translations.tonnageRange,
      description: "The clamping force of the die casting machine determines the maximum size and complexity of parts that can be produced.",
      default: "180-850t"
    },
    [translations.shotWeight]: {
      type: translations.shotWeightRange,
      description: "The maximum amount of aluminum that can be injected per cycle, affecting part size and production efficiency.",
      default: "1.2-16kg"
    },
    [translations.partWeight]: {
      type: translations.partWeightRange,
      description: "The weight range of final parts that can be efficiently produced with our equipment.",
      default: "0.05-12kg"
    },
    [translations.dieSize]: {
      type: translations.dieSizeRange,
      description: "The physical dimensions of the die that can be accommodated by our machines, determining maximum part size.",
      default: "200×200mm - 850×650mm"
    }
  };
  
  // Quality specifications data
  const qualitySpecs = {
    [translations.dimensionalTolerance]: {
      type: translations.dimensionalToleranceValue,
      description: "The accuracy of dimensions that can be achieved in our die casting process, crucial for precision parts.",
      typeDescription: "Tighter tolerances may be achieved with additional machining operations.",
      default: "±0.05mm"
    },
    [translations.surfaceFinish]: {
      type: translations.surfaceFinishValue,
      description: "The surface quality that can be achieved directly from the die casting process before any finishing operations.",
      default: "Ra 1.2-3.2"
    },
    [translations.wallThickness]: {
      type: translations.wallThicknessValue,
      description: "The minimum wall thickness that can be reliably produced with our die casting process.",
      typeDescription: "Thinner walls can reduce weight and material costs but may affect structural integrity.",
      default: "1.0-3.0mm"
    },
    [translations.materialPurity]: {
      type: translations.materialPurityValue,
      description: "The level of purity we can maintain in the aluminum alloys used in our die casting process.",
      typeDescription: "Higher purity levels can improve mechanical properties and surface finish.",
      default: "99.7-99.95%"
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