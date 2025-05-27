import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import TechnicalStats from "../../components/TechnicalStats";
import IndustriesTabsSimple from "../../components/IndustriesTabsSimple";
import FacilityAbout from "../../components/FacilityAbout";
import SupplyChainValues from "../../components/SupplyChainValues";
import KeyCollaborations from "../../components/KeyCollaborations";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <TechnicalStats />
      <IndustriesTabsSimple />
      <FacilityAbout />
      <SupplyChainValues />
      <KeyCollaborations />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO 
    title="Die Cast Mexico | Soluciones Profesionales de Fundición a Presión en México" 
    description="Servicios de fundición a presión de aluminio de alta calidad para las industrias automotriz, energética, telecomunicaciones, marina y más."
  />
);