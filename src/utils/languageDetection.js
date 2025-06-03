/**
 * Language detection utilities for Die Cast Mexico website
 * Reads country data from Cloudflare Worker cookie for automatic language selection
 */

// Get country from Cloudflare Worker cookie
export const getCountryFromCookie = () => {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    const countryCookie = cookies.find(c => c.trim().startsWith('cf-country='));
    return countryCookie ? countryCookie.split('=')[1].trim() : null;
  }
  return null;
};

// Determine language based on country
export const getLanguageFromCountry = (country) => {
  return country === 'MX' ? 'es' : 'en';
};

// Get stored language preference or detect from country
export const detectLanguage = () => {
  // Check for stored preference first
  if (typeof localStorage !== 'undefined') {
    const storedLang = localStorage.getItem('language');
    if (storedLang) return storedLang;
  }
  
  // Fall back to country detection from Cloudflare Worker
  const country = getCountryFromCookie();
  if (country) {
    const detectedLang = getLanguageFromCountry(country);
    // Store the detected language for future visits
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', detectedLang);
    }
    return detectedLang;
  }
  
  // Final fallback to browser language
  if (typeof navigator !== 'undefined') {
    return navigator.language.startsWith('es') ? 'es' : 'en';
  }
  
  return 'en'; // Default fallback
};

// Check if we should redirect to language-specific path
export const shouldRedirectToLanguagePath = (currentPath, detectedLanguage) => {
  if (detectedLanguage === 'es' && !currentPath.startsWith('/es')) {
    return true;
  }
  return false;
};

// Get the correct path for detected language
export const getLanguageSpecificPath = (currentPath, language) => {
  if (language === 'es' && !currentPath.startsWith('/es')) {
    return `/es${currentPath === '/' ? '' : currentPath}`;
  }
  return currentPath;
};