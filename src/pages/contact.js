import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Contact2 } from "../components/ui/contact-2";

const ContactPage = () => {
  return (
    <Layout>
      <SEO 
        title="Contact Us | Die Cast Mexico" 
        description="Get in touch with our team for inquiries, quotes, or support"
      />
      <Contact2 
        title="Contact Us"
        description="Get in touch with our team for inquiries, quotes, or support"
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

export const Head = () => (
  <SEO 
    title="Contact Us | Die Cast Mexico" 
    description="Get in touch with our team for inquiries, quotes, or support"
  />
);