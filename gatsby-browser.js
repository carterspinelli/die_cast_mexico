import React from "react";
import { LanguageProvider } from "./src/context/LanguageContext";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>;
};

export const onClientEntry = () => {
  // Initialize site-wide JavaScript functionality here
};