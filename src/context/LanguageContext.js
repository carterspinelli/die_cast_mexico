import React, { createContext, useState, useEffect, useContext } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState(translations.en);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const detectAndSetLanguage = async () => {
      try {
        // First priority: Check URL path for explicit language preference
        if (typeof window !== "undefined") {
          const currentPath = window.location.pathname;
          if (currentPath.startsWith('/es/') || currentPath === '/es') {
            setLanguage('es');
            setMessages(translations.es);
            localStorage.setItem("diecastmexico-language", 'es');
            setIsLoading(false);
            return;
          } else if (currentPath === '/' || currentPath.startsWith('/en/')) {
            // For root path, we'll determine based on location, not force English
            // For /en/ paths, we force English
            if (currentPath.startsWith('/en/')) {
              setLanguage('en');
              setMessages(translations.en);
              localStorage.setItem("diecastmexico-language", 'en');
              setIsLoading(false);
              return;
            }
          }
        }

        // Second priority: Check if user has manually set a language preference
        if (typeof window !== "undefined") {
          const savedLang = localStorage.getItem("diecastmexico-language");
          if (savedLang) {
            setLanguage(savedLang);
            setMessages(translations[savedLang]);
            setIsLoading(false);
            return;
          }
        }

        // Third priority: Try IP-based detection
        let countryCode = null;
        
        // Check for existing country cookie
        if (typeof document !== "undefined") {
          countryCode = document.cookie
            .split('; ')
            .find(row => row.startsWith('cf-country='))
            ?.split('=')[1];
        }

        // If no cookie, try to fetch from worker (both development and production)
        if (!countryCode) {
          const workerUrls = [
            'https://country-detection.carter-spinelli.workers.dev/',
            '/api/country-detection' // This will work when the route is properly configured
          ];
          
          for (const url of workerUrls) {
            try {
              const response = await fetch(url, {
                method: 'GET',
                credentials: 'include'
              });
              
              if (response.ok) {
                const countryHeader = response.headers.get('X-Visitor-Country') || 
                                    response.headers.get('x-visitor-country');
                if (countryHeader) {
                  countryCode = countryHeader;
                  // Set cookie manually
                  if (typeof document !== "undefined") {
                    document.cookie = `cf-country=${countryCode}; Max-Age=2592000; Path=/; Secure; SameSite=Lax`;
                  }
                  break;
                }
              }
            } catch (fetchError) {
              console.log(`Could not fetch from ${url}:`, fetchError.message);
              continue;
            }
          }
        }
        
        // Determine language based on country
        let detectedLang = 'en'; // Default to English
        if (countryCode === 'MX') {
          detectedLang = 'es';
        }
        
        setLanguage(detectedLang);
        setMessages(translations[detectedLang]);
        
        // Store the detected language preference
        if (typeof window !== "undefined") {
          localStorage.setItem("diecastmexico-language", detectedLang);
        }
        
      } catch (error) {
        console.log('Language detection failed, using browser language fallback');
        
        // Final fallback: browser language detection
        const browserLang = typeof navigator !== "undefined" 
          ? (navigator.language || navigator.userLanguage).split("-")[0] 
          : "en";
        
        const initialLang = browserLang === "es" ? "es" : "en";
        setLanguage(initialLang);
        setMessages(translations[initialLang]);
        
        if (typeof window !== "undefined") {
          localStorage.setItem("diecastmexico-language", initialLang);
        }
      } finally {
        setIsLoading(false);
      }
    };

    detectAndSetLanguage();
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