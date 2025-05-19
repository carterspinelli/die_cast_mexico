import { useEffect } from "react";
import { navigate } from "gatsby";
import { trackPageView } from "./analytics";

// Hook to track page views
export const usePageTracking = () => {
  useEffect(() => {
    // Track page view on component mount
    if (typeof window !== "undefined") {
      trackPageView(window.location.pathname);
    }
  }, []);
};

// Hook to detect user's preferred language
export const usePreferredLanguage = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Get current language from URL path
    const pathname = window.location.pathname;
    const currentLang = pathname.startsWith("/es") ? "es" : "en";
    
    // Get user's browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const preferredLang = browserLang.startsWith("es") ? "es" : "en";
    
    // If user is on default page and preferred language is Spanish, redirect
    if (pathname === "/" && preferredLang === "es" && currentLang !== "es") {
      navigate("/es/", { replace: true });
    }
  }, []);
};
