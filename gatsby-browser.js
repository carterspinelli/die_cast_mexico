import React from "react";
import { LanguageProvider } from "./src/context/LanguageContext";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>;
};

export const onClientEntry = () => {
  // Wait for cookie to be available after Cloudflare Worker sets it
  setTimeout(() => {
    // Only redirect on first visit (no stored language preference)
    const storedLang = localStorage.getItem('diecastmexico-language');
    if (storedLang) return;
    
    // Get country from Cloudflare Worker cookie
    const cookies = document.cookie.split(';');
    const countryCookie = cookies.find(c => c.trim().startsWith('cf-country='));
    
    if (countryCookie) {
      const country = countryCookie.split('=')[1].trim();
      const currentPath = window.location.pathname;
      
      // If user is from Mexico and not on Spanish page, redirect to Spanish
      if (country === 'MX' && !currentPath.startsWith('/es')) {
        const spanishPath = currentPath === '/' ? '/es' : `/es${currentPath}`;
        window.location.href = spanishPath;
      }
      // If user is not from Mexico and on Spanish page, redirect to English
      else if (country !== 'MX' && currentPath.startsWith('/es')) {
        const englishPath = currentPath.replace('/es', '') || '/';
        window.location.href = englishPath;
      }
    }
  }, 200);
};