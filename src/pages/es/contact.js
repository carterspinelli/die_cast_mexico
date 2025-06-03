import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import ContactForm from "../../components/ui/contact-form";
import { useLanguage } from "../../context/LanguageContext";

const ContactPage = () => {
  const { translations } = useLanguage();
  const messages = translations?.contact || {};
  
  return (
    <Layout>
      <SEO 
        title={`${messages?.title || "Contáctanos"} | Die Cast Mexico`}
        description={messages?.description || "Contacta Die Cast Mexico para soluciones profesionales de fundición e inyección a presión. Ponte en contacto con nuestro equipo para consultas, cotizaciones o soporte."}
      />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  return (
    <SEO 
      title="Contáctanos | Die Cast Mexico" 
      description="Contacta Die Cast Mexico para soluciones profesionales de fundición e inyección a presión"
    />
  );
};