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
  margin-top: 3rem;
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

const FacilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FacilityCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  padding: 1.2rem;
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  border-bottom: 3px solid var(--color-accent);
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
  
  span {
    display: block;
    font-size: 0.9rem;
    font-weight: normal;
    color: var(--color-text);
    margin-top: 0.25rem;
  }
`;

const ProcessTable = styled.div`
  margin-top: 2rem;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--color-border, #e2e8f0);
  padding: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-primary-light, #f0f7ff);
    border-color: var(--color-primary, #0066cc);
  }
`;

const ProcessName = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const ProcessDescription = styled.div`
  font-size: 0.9rem;
  color: var(--color-text);
`;

const CapabilityGroupTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin: 2rem 0 1rem;
  border-left: 3px solid var(--color-accent);
  padding-left: 0.75rem;
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
  
  // Key facility metrics for card display
  const facilityMetrics = [
    {
      label: "Workforce",
      value: "125",
      description: "Skilled employees"
    },
    {
      label: "Material Capacity",
      value: "250ton/month",
      description: "Aluminum ingots"
    },
    {
      label: "Aluminum Alloys",
      value: "AlSi12(Fe), A380, A360, A413, ADC12",
      description: "Industry-standard materials"
    }
  ];
  
  // Production capabilities
  const productionCapabilities = [
    {
      name: "Die Casting",
      description: "8 full automatic manufacturing cells"
    },
    {
      name: "CNC Machining",
      description: "19 horizontal 4 axis machines"
    },
    {
      name: "Mechanical Assembly",
      description: "Dowel pins, labels, helicoils, plugs, etc."
    },
    {
      name: "FIP Gasket",
      description: "Precision gasket application"
    },
    {
      name: "Powder Painting",
      description: "Akzo Nobel, Cardinal, Sherwin Williams, etc."
    },
    {
      name: "Liquid Painting",
      description: "Custom color solutions"
    },
    {
      name: "Nickel Plating",
      description: "High-quality surface finish"
    },
    {
      name: "Surface Treatment",
      description: "Tri-chrome passivation on Aluminum: Surtec 650®"
    }
  ];
  
  return (
    <CapabilitiesSection>
      <Container>
        <SectionHeader>
          <Title>{translations.capabilitiesTitle}</Title>
          <Subtitle>{translations.capabilitiesSubtitle}</Subtitle>
        </SectionHeader>
        
        {/* Facility Overview with Cards */}
        <FacilityGrid>
          {facilityMetrics.map((metric, index) => (
            <FacilityCard key={index}>
              <CardHeader>{metric.label}</CardHeader>
              <CardContent>
                <CardValue>
                  {metric.value}
                  <span>{metric.description}</span>
                </CardValue>
              </CardContent>
            </FacilityCard>
          ))}
        </FacilityGrid>
        
        {/* Production Capabilities */}
        <ProcessTable>
          <CapabilityGroupTitle>Production Capabilities</CapabilityGroupTitle>
          <ProcessGrid>
            {productionCapabilities.map((process, index) => (
              <ProcessCard key={index}>
                <ProcessName>{process.name}</ProcessName>
                <ProcessDescription>{process.description}</ProcessDescription>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </ProcessTable>
        
        {/* Technical Specifications */}
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