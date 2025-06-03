import React from "react";
import { LanguageProvider } from "./src/context/LanguageContext";
import detectAndRedirectLanguage from "./src/utils/languageRedirect";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>;
};

export const onClientEntry = () => {
  // Run comprehensive language detection and redirect
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      detectAndRedirectLanguage();
    }, 100);
  }
};