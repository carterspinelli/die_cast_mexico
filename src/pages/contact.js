import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import SimpleContactForm from "../components/SimpleContactForm";

const ContactPage = () => {
  return (
    <Layout>
      <SEO 
        title="Contact Us | Die Cast Mexico" 
        description="Get in touch with our team for inquiries, quotes, or support"
      />
      <SimpleContactForm />
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