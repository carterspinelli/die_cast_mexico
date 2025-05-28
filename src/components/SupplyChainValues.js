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
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    text-align: left;
  }
`;

const HighlightText = styled.span`
  color: #0066cc;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  background: linear-gradient(135deg, #0a0f1b 0%, #1a2332 25%, #2c3e50 75%, #4a5568 100%);
  border-radius: 1.5rem;
  padding: 4rem 2rem;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(10, 15, 27, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    opacity: 0.4;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`;

const ContentInner = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
`;

const ContentTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  height: 350px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  }
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
        <Header data-aos="fade-up">
          <Title data-aos="fade-up" data-aos-delay="100">
            {translate(messages, 'supplyChainTitle', "Supply Chain Added Values")}
          </Title>
        </Header>

        <Description data-aos="fade-up" data-aos-delay="200">
          {translate(messages, 'supplyChainIntro', "At Die Cast Mexico, we prioritize development of skilled suppliers for liquid painting, surface finishes such as nickel plating to add value to our supply chain and meet our clients' needs.")}
        </Description>

        <ContentWrapper data-aos="fade-up" data-aos-delay="300">
          <ContentInner>
            <ContentTitle data-aos="fade-up" data-aos-delay="400">
              {translate(messages, 'supplyChainCommitmentTitle', "Our Commitment to Excellence")}
            </ContentTitle>
            <ContentDescription data-aos="fade-up" data-aos-delay="500">
              {translate(messages, 'supplyChainExpertise1', "We rely on our suppliers' ")}
              <HighlightText style={{ color: '#FFD700', fontWeight: '700' }}>
                {translate(messages, 'supplyChainExpertiseHighlight', "expertise")}
              </HighlightText>
              {translate(messages, 'supplyChainExpertise2', ", we ensure exceptional quality standards and improved product performance. Our commitment to skilled suppliers strengthens our supply chain, reduces lead times, and fosters long-term partnerships built on trust and collaboration, ultimately exceeding our clients' expectations.")}
            </ContentDescription>
          </ContentInner>
        </ContentWrapper>

        <ImagesGrid data-aos="fade-up" data-aos-delay="600">
          <ImageContainer data-aos="fade-right" data-aos-delay="700">
            <Image 
              src="/images/die_cast_add_value.png" 
              alt={translate(messages, 'supplyImageAlt1', "Die casting plating process")}
            />
          </ImageContainer>
          <ImageContainer data-aos="fade-left" data-aos-delay="800">
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