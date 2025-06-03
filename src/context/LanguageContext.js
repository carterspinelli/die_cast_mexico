import React, { createContext, useState, useEffect, useContext } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState(translations.en);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const detectCountryFromIP = async () => {
      try {
        // Check if user has already set a language preference
        if (typeof window !== "undefined") {
          const savedLang = localStorage.getItem("diecastmexico-language");
          if (savedLang) {
            setLanguage(savedLang);
            setMessages(translations[savedLang]);
            setIsLoading(false);
            return;
          }
        }

        // First try to read country from existing cookie
        let countryCode = document.cookie
          .split('; ')
          .find(row => row.startsWith('cf-country='))
          ?.split('=')[1];

        // If no cookie exists, fetch from Cloudflare Worker
        if (!countryCode) {
          try {
            const response = await fetch('https://country-detection.carter-spinelli.workers.dev/', {
              method: 'GET',
              credentials: 'include'
            });
            
            if (response.ok) {
              const countryHeader = response.headers.get('X-Visitor-Country');
              if (countryHeader) {
                countryCode = countryHeader;
                // Set the cookie manually since the worker response includes it
                document.cookie = `cf-country=${countryCode}; Max-Age=2592000; Path=/; Secure; SameSite=Lax`;
              }
            }
          } catch (fetchError) {
            console.log('Could not fetch from Cloudflare Worker:', fetchError.message);
          }
        }
        
        // Determine language based on country (Mexico = Spanish, others = English)
        const detectedLang = countryCode === 'MX' ? 'es' : 'en';
        setLanguage(detectedLang);
        setMessages(translations[detectedLang]);
        
        // Store the detected language preference
        if (typeof window !== "undefined") {
          localStorage.setItem("diecastmexico-language", detectedLang);
        }
        
      } catch (error) {
        console.log('Country detection failed, falling back to browser language');
        
        // Fallback to browser language detection
        const browserLang = typeof navigator !== "undefined" 
          ? (navigator.language || navigator.userLanguage).split("-")[0] 
          : "en";
        
        const initialLang = browserLang === "es" ? "es" : "en";
        setLanguage(initialLang);
        setMessages(translations[initialLang]);
        
        // Store the fallback language preference
        if (typeof window !== "undefined") {
          localStorage.setItem("diecastmexico-language", initialLang);
        }
      } finally {
        setIsLoading(false);
      }
    };

    detectCountryFromIP();
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
    <LanguageContext.Provider value={{ language, messages, changeLanguage, isLoading }}>
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