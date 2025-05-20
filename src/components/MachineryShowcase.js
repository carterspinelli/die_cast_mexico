import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";
import images from "../data/images";

const ShowcaseSection = styled.section`
  padding: 3rem 0;
  background-color: var(--color-light-bg);
  background-image: linear-gradient(to bottom, var(--color-light-bg), white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MachineImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
`;

const CallToAction = styled(Link)`
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const MachineryShowcase = () => {
  const { messages: translations, language } = useLanguage();
  
  return (
    <ShowcaseSection>
      <Container>
        <ShowcaseContent>
          <MachineImage 
            src={images.dieCastingMachinery[0]} 
            alt="TOYO BD-800V7EX Die Casting Machine"
          />
          <CallToAction to={getLocalizedPath("/contact", language)}>
            {translations.cta}
          </CallToAction>
        </ShowcaseContent>
      </Container>
    </ShowcaseSection>
  );
};

export default MachineryShowcase;