import React from "react";
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import styled from "styled-components";

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageButton = styled.button`
  background: ${props => props.active ? "var(--primary)" : "transparent"};
  color: ${props => props.active ? "var(--white)" : "var(--primary)"};
  border: 1px solid var(--primary);
  padding: 0.3rem 0.6rem;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all var(--transition-duration);
  
  &:hover {
    background: ${props => props.active ? "var(--primary-dark)" : "var(--gray-light)"};
  }
`;

const LanguageSwitcher = () => {
  const intl = useIntl();
  const currentLocale = intl.locale;
  
  return (
    <SwitcherContainer>
      <LanguageButton
        active={currentLocale === "en"}
        onClick={() => changeLocale("en")}
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={currentLocale === "es"}
        onClick={() => changeLocale("es")}
      >
        ES
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
