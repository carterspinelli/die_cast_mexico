import React, { createContext, useState, useEffect, useContext } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState(translations.en);
  
  useEffect(() => {
    // Get browser language preference
    const browserLang = typeof navigator !== "undefined" 
      ? (navigator.language || navigator.userLanguage).split("-")[0] 
      : "en";
    
    // Check if browser language is supported
    const initialLang = browserLang === "es" ? "es" : "en";
    
    // Set initial language
    changeLanguage(initialLang);
  }, []);
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setMessages(translations[lang]);
    
    // Store language preference
    if (typeof window !== "undefined") {
      localStorage.setItem("diecastmexico-language", lang);
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, messages, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Helper function to construct localized paths
export const getLocalizedPath = (path, language) => {
  // For hash links, don't add language prefix - this helps with anchor navigation
  if (path.includes('#')) {
    return path;
  }
  
  if (language === "en") {
    return path;
  }
  
  // For Spanish, add language prefix
  return `/${language}${path === "/" ? "" : path}`;
};