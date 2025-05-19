// Define the gtag function globally
export const initGA = () => {
  const measurementId = process.env.GATSBY_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.log('Google Analytics disabled: No measurement ID provided');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  console.log(`Page view tracked: ${url}`);
};

// Track events
export const trackEvent = (
  action, 
  category, 
  label, 
  value
) => {
  if (typeof window === 'undefined') return;
  console.log(`Event tracked: ${action}, Category: ${category}, Label: ${label}`);
};
