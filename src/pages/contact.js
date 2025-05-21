import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Contact2 } from "../components/ui/contact-2";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = () => {
  const { messages } = useLanguage();
  
  return (
    <Layout>
      <SEO 
        title={`${messages?.contactTitle || "Contact Us"} | Die Cast Mexico`}
        description={messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
      />
      <Contact2 
        title={messages?.contactTitle || "Contact Us"}
        description={messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
        phone="+52 33 3968 3660"
        email="info@diecastmexico.com"
        web={{ 
          label: "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.", 
          url: "https://maps.google.com/?q=Av. Aviación 4376, Jardín Real, 45136 Zapopan, Jal." 
        }}
      />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  // Note: We can't use hooks in the Head export function directly
  return (
    <SEO 
      title="Contact Us | Die Cast Mexico" 
      description="Get in touch with our team for inquiries, quotes, or support"
    />
  );
};