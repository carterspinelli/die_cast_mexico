import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { TypeTable } from "./ui/type-table";
import { Tabs, TabsTrigger, TabsContent } from "./ui/tabs";

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

const TableContainer = styled.div`
  margin: 1.5rem 0;
  overflow: auto;
  border: 1px solid var(--color-border, #e2e8f0);
  border-radius: 0.75rem;
  background-color: white;
`;

const StyledTable = styled.table`
  width: 100%;
  white-space: nowrap;
  font-size: 0.875rem;
  color: var(--color-text, #64748b);
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid var(--color-border, #e2e8f0);
  background-color: var(--color-light-bg, #f8fafc);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    
    &:not(:first-child) {
      border-left: 1px solid var(--color-border, #e2e8f0);
    }
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border, #e2e8f0);
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  
  &:not(:first-child) {
    border-left: 1px solid var(--color-border, #e2e8f0);
  }
`;

const PrimaryCode = styled.code`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-family: sans-serif;
  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);
  color: var(--color-primary, #3b82f6);
`;

const SecondaryCode = styled.code`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-family: sans-serif;
  background-color: var(--color-secondary-light, #f1f5f9);
  color: var(--color-secondary, #475569);
`;

const TableSection = styled.div`
  margin-top: 2rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
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
  
  // Facility overview data
  const facilityOverview = [
    { attribute: "Workforce", value: "125 skilled employees" },
    { attribute: "Material Capacity", value: "Up to 250ton/month aluminum ingots" },
    { attribute: "Aluminum Alloys", value: "AlSi12(Fe), A380, A360, A413, ADC12" }
  ];
  
  // Facility data organized by tabs
  const facilityTabs = [
    {
      id: "overview",
      label: "Overview",
      items: [
        { attribute: "Workforce", value: "125 skilled employees" },
        { attribute: "Material Capacity", value: "Up to 250ton/month aluminum ingots" },
        { attribute: "Aluminum Alloys", value: "AlSi12(Fe), A380, A360, A413, ADC12" }
      ]
    },
    {
      id: "manufacturing",
      label: "Manufacturing",
      items: [
        { attribute: "Die Casting", value: "8 full automatic manufacturing cells" },
        { attribute: "CNC Machining", value: "19 horizontal 4 axis machines" },
        { attribute: "Mechanical Assembly", value: "Dowel pins, labels, helicoils, plugs, etc." }
      ]
    },
    {
      id: "finishing",
      label: "Surface Finishing",
      items: [
        { attribute: "FIP Gasket", value: "Precision gasket application" },
        { attribute: "Powder Painting", value: "Akzo Nobel, Cardinal, Sherwin Williams, etc." },
        { attribute: "Liquid Painting", value: "Custom color solutions" },
        { attribute: "Nickel Plating", value: "High-quality surface finish" },
        { attribute: "Surface Treatment", value: "Tri-chrome passivation on Aluminum: Surtec 650®" }
      ]
    }
  ];
  
  // Legacy data structures - keeping for compatibility
  const manufacturingCapabilities = facilityTabs[1].items;
  const surfaceFinishingCapabilities = facilityTabs[2].items;
  
  return (
    <CapabilitiesSection>
      <Container>
        <SectionHeader>
          <Title>{translations.capabilitiesTitle}</Title>
          <Subtitle>{translations.capabilitiesSubtitle}</Subtitle>
        </SectionHeader>
        
        {/* Facility Overview with Tabs */}
        <SpecsCard>
          <SpecsTitle>{translations.facilityOverviewTitle || "Facility Overview"}</SpecsTitle>
          
          <Tabs defaultValue="overview">
            {facilityTabs.map(tab => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.id === 'overview' ? translations.overviewTabLabel || "Overview" : 
                 tab.id === 'manufacturing' ? translations.manufacturingTabLabel || "Manufacturing" : 
                 translations.finishingTabLabel || "Surface Finishing"}
              </TabsTrigger>
            ))}
            
            {facilityTabs.map(tab => (
              <TabsContent key={tab.id} value={tab.id}>
                <TableContainer>
                  <StyledTable>
                    <TableHead>
                      <tr>
                        <th width="45%">
                          {tab.id === 'overview' ? translations.specificationLabel || 'Specification' : 
                           translations.processLabel || 'Process'}
                        </th>
                        <th width="55%">
                          {translations.valueLabel || 'Value'}
                        </th>
                      </tr>
                    </TableHead>
                    <tbody>
                      {tab.items.map((item, index) => (
                        <tr key={index} style={{ borderBottom: index !== tab.items.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                          <td style={{ padding: '1rem', borderRight: '1px solid #e2e8f0' }}>
                            <PrimaryCode>{item.attribute}</PrimaryCode>
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <SecondaryCode>{item.value}</SecondaryCode>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </StyledTable>
                </TableContainer>
              </TabsContent>
            ))}
          </Tabs>
        </SpecsCard>
        
        {/* Technical Specifications */}
        <SpecsGrid>
          <SpecsCard>
            <SpecsTitle>{translations.machineTitle}</SpecsTitle>
            <TypeTable type={machineSpecs} />
          </SpecsCard>
        </SpecsGrid>
      </Container>
    </CapabilitiesSection>
  );
};

export default Capabilities;