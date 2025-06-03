import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContactForm from "../components/ui/contact-form";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = () => {
  const { translations } = useLanguage();
  const messages = translations?.contact || {};
  
  return (
    <Layout>
      <SEO 
        title={`${messages?.title || "Contact Us"} | Die Cast Mexico`}
        description={messages?.description || "Contact Die Cast Mexico for professional die casting solutions. Get in touch with our team for inquiries, quotes, or support."}
      />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  return (
    <SEO 
      title="Contact Us | Die Cast Mexico" 
      description="Contact Die Cast Mexico for professional die casting solutions"
    />
  );
};