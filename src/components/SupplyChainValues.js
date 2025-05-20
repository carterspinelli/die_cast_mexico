import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 900px;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightText = styled.span`
  color: #0066cc;
  font-weight: 600;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  height: 300px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Helper for handling translations with fallbacks
const translate = (messages, key, fallback) => {
  if (!messages) return fallback;
  return messages[key] || fallback;
};

const SupplyChainValues = () => {
  const { messages } = useLanguage();
  
  return (
    <Section id="supply-chain">
      <Container>
        <Header>
          <Title>
            {translate(messages, 'supplyChainTitle', "Supply Chain Added Values")}
          </Title>
        </Header>
        
        <Description>
          {translate(messages, 'supplyChainIntro', "At Die Cast Mexico, we prioritize development of skilled suppliers for liquid painting, surface finishes such as nickel plating to add value to our supply chain and meet our clients' needs.")}
        </Description>
        
        <Description>
          {translate(messages, 'supplyChainExpertise1', "We rely on our suppliers' ")}
          <HighlightText>
            {translate(messages, 'supplyChainExpertiseHighlight', "expertise")}
          </HighlightText>
          {translate(messages, 'supplyChainExpertise2', ", we ensure exceptional quality standards and improved product performance. Our commitment to skilled suppliers strengthens our supply chain, reduces lead times, and fosters long-term partnerships built on trust and collaboration, ultimately exceeding our clients' expectations.")}
        </Description>
        
        <ImagesGrid>
          <ImageContainer>
            <Image 
              src="/images/die_cast_add_value.png" 
              alt={translate(messages, 'supplyImageAlt1', "Die casting plating process")}
            />
          </ImageContainer>
          <ImageContainer>
            <Image 
              src="/images/die_cast_add_value_02.png" 
              alt={translate(messages, 'supplyImageAlt2', "Die casting painting process")}
            />
          </ImageContainer>
        </ImagesGrid>
      </Container>
    </Section>
  );
};

export default SupplyChainValues;