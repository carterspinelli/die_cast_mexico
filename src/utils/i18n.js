import { useIntl } from "gatsby-plugin-intl";

// Custom hook to get the current language
export const useLanguage = () => {
  const intl = useIntl();
  return intl.locale;
};

// Function to translate URLs based on language
export const getLocalizedPath = (path, language) => {
  if (language === "en") {
    return path;
  }
  return `/${language}${path}`;
};
