import React from "react";
import { ArrowRight, ChevronRight, Download } from "lucide-react";
import { Button } from "./button";
import styled from "styled-components";

const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const DemoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const SectionTitle = styled.h3`
  color: #374151;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 100%;
`;

const ButtonDemo = () => {
  return (
    <DemoContainer>
      <DemoSection>
        <SectionTitle>Default Variants</SectionTitle>
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Expand Icon Buttons</SectionTitle>
        <Button 
          variant="expandIcon" 
          Icon={() => <ArrowRight size={16} />} 
          iconPlacement="right"
        >
          Icon Right
        </Button>
        <Button 
          variant="expandIcon" 
          Icon={() => <ChevronRight size={16} />} 
          iconPlacement="left"
        >
          Icon Left
        </Button>
        <Button 
          variant="expandIcon" 
          Icon={() => <Download size={16} />} 
          iconPlacement="right"
          size="lg"
        >
          Download
        </Button>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Animation Variants</SectionTitle>
        <Button variant="shine">Shine Effect</Button>
        <Button variant="ringHover">Ring Hover</Button>
        <Button variant="gooeyRight">Gooey Right</Button>
        <Button variant="gooeyLeft">Gooey Left</Button>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Link Hover Effects</SectionTitle>
        <Button variant="linkHover1">Link Hover 1</Button>
        <Button variant="linkHover2">Link Hover 2</Button>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Sizes</SectionTitle>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <ArrowRight size={16} />
        </Button>
      </DemoSection>
    </DemoContainer>
  );
};

export default ButtonDemo;