import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";
import { Contact2 } from "../components/ui/contact-2";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
`;

const MapWrapper = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  width: 100%;
  height: 450px;
`;

const ContactPage = () => {
  const { messages } = useLanguage();
  
  return (
    <Layout>
      <SEO 
        title={messages?.contactTitle || "Contact Us"} 
        description={messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
      />
      
      <Contact2 
        title={messages?.contactTitle || "Contact Us"}
        description={messages?.contactSubtitle || "Get in touch with our team for inquiries, quotes, or support"}
        phone="+52 33 3968 3660"
        email={messages?.footerEmailValue || "info@diecastmexico.com"}
        web={{ 
          label: "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.", 
          url: "https://maps.google.com/?q=Av. Aviación 4376, Jardín Real, 45136 Zapopan, Jal." 
        }}
      />
      
      <MapContainer>
        <MapWrapper>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8748761218494!2d-103.42603092398329!3d20.67114170094902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428add9aeaaacf5%3A0x51ad90d1bb656c6d!2sAv.%20Aviaci%C3%B3n%204376%2C%20Jard%C3%ADn%20Real%2C%2045136%20Zapopan%2C%20Jal.!5e0!3m2!1sen!2smx!4v1684156749223!5m2!1sen!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Die Cast Mexico Location"
          />
        </MapWrapper>
      </MapContainer>
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