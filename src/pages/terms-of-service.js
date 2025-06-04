import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styled from "styled-components";

const PolicySection = styled.section`
  padding: 8rem 1rem 6rem 1rem;
  background-color: var(--color-light-bg);
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-primary);
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  font-style: italic;
`;

const PolicyContent = styled.div`
  color: var(--color-text);
  line-height: 1.7;
  
  h2 {
    color: var(--color-primary);
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2.5rem 0 1rem 0;
    border-bottom: 2px solid var(--color-accent);
    padding-bottom: 0.5rem;
  }
  
  h3 {
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin: 1rem 0 1.5rem 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  strong {
    color: var(--color-primary);
    font-weight: 600;
  }
  
  a {
    color: var(--color-primary);
    text-decoration: underline;
    
    &:hover {
      color: var(--color-accent);
    }
  }
`;

const TermsOfServicePage = () => {
  return (
    <Layout>
      <SEO 
        title="Terms of Service | Die Cast Mexico"
        description="Terms of Service for Die Cast Mexico - Legal terms and conditions for using our website and services."
      />
      <PolicySection>
        <Container>
          <Title>Terms of Service</Title>
          <LastUpdated>Last Updated: June 3, 2025</LastUpdated>
          
          <PolicyContent>
            <p>
              Welcome to Die Cast Mexico. These Terms of Service ("Terms") govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Company Information</h2>
            <p>
              Die Cast Mexico is a manufacturing company specializing in die casting, injection molding, and precision manufacturing services, located at Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jalisco, Mexico.
            </p>

            <h2>3. Services</h2>
            <p>We provide the following manufacturing services:</p>
            <ul>
              <li>Aluminum and zinc die casting</li>
              <li>Injection molding for plastics</li>
              <li>CNC machining and precision manufacturing</li>
              <li>Assembly and testing services</li>
              <li>Quality control and certification</li>
              <li>Supply chain management</li>
            </ul>

            <h2>4. Website Use</h2>
            
            <h3>Permitted Use</h3>
            <p>You may use our website for:</p>
            <ul>
              <li>Learning about our manufacturing capabilities</li>
              <li>Requesting quotes and information</li>
              <li>Contacting us for business purposes</li>
              <li>Downloading public resources and documentation</li>
            </ul>

            <h3>Prohibited Use</h3>
            <p>You may not use our website to:</p>
            <ul>
              <li>Engage in any unlawful or fraudulent activity</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute malware or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to scrape or collect data</li>
            </ul>

            <h2>5. Quotes and Estimates</h2>
            <p>
              All quotes and estimates provided are preliminary and subject to final confirmation based on detailed specifications, material requirements, and current market conditions. Quotes are valid for 30 days unless otherwise specified.
            </p>

            <h2>6. Manufacturing Services</h2>
            
            <h3>Quality Standards</h3>
            <p>
              We maintain ISO 9001:2015 and IATF 16949:2016 certifications and follow strict quality control procedures. All products are manufactured according to specified requirements and industry standards.
            </p>

            <h3>Lead Times</h3>
            <p>
              Lead times are estimates based on current production schedules and may vary depending on project complexity, material availability, and production capacity. We will provide updated timelines throughout the manufacturing process.
            </p>

            <h3>Specifications and Changes</h3>
            <p>
              All manufacturing specifications must be confirmed in writing before production begins. Changes to specifications after production commencement may result in additional costs and extended lead times.
            </p>

            <h2>7. Intellectual Property</h2>
            
            <h3>Our Rights</h3>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Die Cast Mexico and is protected by copyright and other intellectual property laws.
            </p>

            <h3>Client Rights</h3>
            <p>
              We respect our clients' intellectual property rights. All client designs, specifications, and proprietary information remain the property of the client and are treated as confidential.
            </p>

            <h2>8. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client projects, specifications, and business information. Non-disclosure agreements are available upon request for sensitive projects.
            </p>

            <h2>9. Payment Terms</h2>
            <p>
              Payment terms are specified in individual contracts and purchase orders. Standard terms include deposit requirements for new projects and net payment terms for established clients. Late payment charges may apply.
            </p>

            <h2>10. Warranties and Disclaimers</h2>
            
            <h3>Manufacturing Warranty</h3>
            <p>
              We warrant that all manufactured products will conform to agreed specifications and be free from defects in materials and workmanship for a period specified in the individual contract.
            </p>

            <h3>Website Disclaimer</h3>
            <p>
              This website is provided "as is" without warranties of any kind. We do not warrant that the website will be uninterrupted, error-free, or free from viruses or other harmful components.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              Our liability for any damages arising from our services shall not exceed the total amount paid for the specific project giving rise to the claim. We shall not be liable for indirect, incidental, or consequential damages.
            </p>

            <h2>12. Force Majeure</h2>
            <p>
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, labor disputes, or material shortages.
            </p>

            <h2>13. Export Control and Compliance</h2>
            <p>
              All products and services are subject to applicable export control laws and regulations. Clients are responsible for obtaining any necessary export licenses or permits.
            </p>

            <h2>14. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a>, which also governs your use of the website, to understand our practices.
            </p>

            <h2>15. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modifications.
            </p>

            <h2>16. Termination</h2>
            <p>
              We may terminate or suspend access to our website immediately, without prior notice, for conduct that violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>17. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Mexico. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Jalisco, Mexico.
            </p>

            <h2>18. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
            </p>

            <h2>19. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> info@diecastmexico.com</li>
              <li><strong>Phone:</strong> +52 33 3968 3660</li>
              <li><strong>Address:</strong> Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal., Mexico</li>
            </ul>

            <h2>20. Entire Agreement</h2>
            <p>
              These Terms of Service, together with our Privacy Policy and any specific service agreements, constitute the entire agreement between you and Die Cast Mexico regarding the use of our website and services.
            </p>
          </PolicyContent>
        </Container>
      </PolicySection>
    </Layout>
  );
};

export default TermsOfServicePage;

export const Head = () => {
  return (
    <SEO 
      title="Terms of Service | Die Cast Mexico" 
      description="Terms of Service for Die Cast Mexico - Legal terms and conditions for using our website and services."
    />
  );
};