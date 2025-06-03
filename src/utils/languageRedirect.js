/**
 * Client-side language detection and redirect utility
 * This ensures immediate language detection without waiting for worker configuration
 */

export const detectAndRedirectLanguage = () => {
  // Only run in browser
  if (typeof window === 'undefined') return;
  
  const currentPath = window.location.pathname;
  const currentUrl = window.location.href;
  
  // Don't redirect if already on a language-specific path
  if (currentPath.startsWith('/es/') || currentPath.startsWith('/en/')) {
    return;
  }
  
  // Don't redirect if on root page and already have language parameter
  if (currentPath === '/' && window.location.search.includes('lang=')) {
    return;
  }
  
  // Check for existing language preference
  const savedLang = localStorage.getItem('diecastmexico-language');
  if (savedLang) {
    if (savedLang === 'es' && currentPath === '/') {
      window.location.replace('/es/');
      return;
    }
    return; // Don't redirect if preference is English or we're already on correct page
  }
  
  // Try to detect country from various sources
  const detectCountryAndRedirect = async () => {
    let countryCode = null;
    
    // Method 1: Check existing cookie
    const cookies = document.cookie.split(';');
    const countryCookie = cookies.find(c => c.trim().startsWith('cf-country='));
    if (countryCookie) {
      countryCode = countryCookie.split('=')[1].trim();
    }
    
    // Method 2: Try worker endpoints
    if (!countryCode) {
      const workerUrls = [
        'https://diecastmexico.com/api/country-detection',
        'https://country-detection.carter-spinelli.workers.dev/'
      ];
      
      for (const url of workerUrls) {
        try {
          const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            timeout: 3000
          });
          
          if (response.ok) {
            const country = response.headers.get('X-Visitor-Country') || 
                           response.headers.get('x-visitor-country');
            if (country) {
              countryCode = country;
              // Cache the country detection
              document.cookie = `cf-country=${countryCode}; Max-Age=2592000; Path=/; Secure; SameSite=Lax`;
              break;
            }
          }
        } catch (error) {
          console.log(`Country detection from ${url} failed:`, error.message);
          continue;
        }
      }
    }
    
    // Method 3: Use third-party service as fallback
    if (!countryCode) {
      try {
        const response = await fetch('https://ipapi.co/country/', {
          timeout: 3000
        });
        if (response.ok) {
          countryCode = await response.text();
          if (countryCode && countryCode.length === 2) {
            document.cookie = `cf-country=${countryCode}; Max-Age=2592000; Path=/; Secure; SameSite=Lax`;
          }
        }
      } catch (error) {
        console.log('Fallback country detection failed:', error.message);
      }
    }
    
    // Redirect if Mexican visitor on root page
    if (countryCode === 'MX' && currentPath === '/') {
      localStorage.setItem('diecastmexico-language', 'es');
      window.location.replace('/es/');
    } else if (countryCode && countryCode !== 'MX') {
      // Store English preference for non-Mexican visitors
      localStorage.setItem('diecastmexico-language', 'en');
    }
  };
  
  // Run detection with timeout
  Promise.race([
    detectCountryAndRedirect(),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Detection timeout')), 5000)
    )
  ]).catch(error => {
    console.log('Language detection timeout or error:', error.message);
    // Fallback to browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es' && currentPath === '/') {
      localStorage.setItem('diecastmexico-language', 'es');
      window.location.replace('/es/');
    }
  });
};

export default detectAndRedirectLanguage;