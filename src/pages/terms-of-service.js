import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
`;

const Title = styled.h1`
  color: #0c1220;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LastUpdated = styled.p`
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
`;

const Content = styled.div`
  line-height: 1.8;
  color: #374151;
  
  h2 {
    color: #0c1220;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }
  
  h3 {
    color: #0c1220;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem 0;
  }
  
  h4 {
    color: #0c1220;
    font-size: 1.125rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  strong {
    color: #0c1220;
    font-weight: 600;
  }
`;

const TermsOfService = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <Title>Terms of Service</Title>
          <LastUpdated>Last Updated: June 4, 2025</LastUpdated>
        </Header>
        
        <Content>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Die Cast Mexico website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Die Cast Mexico provides information about our aluminum die casting services, manufacturing capabilities, and contact information through our website. Our services include:
          </p>
          <ul>
            <li><strong>Die Casting Services:</strong> High-precision aluminum die casting manufacturing</li>
            <li><strong>CNC Machining:</strong> Secondary operations and finishing services</li>
            <li><strong>Quality Control:</strong> Testing and inspection services</li>
            <li><strong>Engineering Support:</strong> Design assistance and technical consultation</li>
            <li><strong>Information Services:</strong> Technical resources and industry insights</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <p>As a user of our website, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when contacting us</li>
            <li>Use the website for lawful purposes only</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Not interfere with the proper functioning of the website</li>
            <li>Respect intellectual property rights</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2>4. Intellectual Property Rights</h2>
          <p>
            The content, design, graphics, logos, and other materials on this website are owned by Die Cast Mexico or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not:
          </p>
          <ul>
            <li>Copy, reproduce, or distribute content without written permission</li>
            <li>Use our trademarks or logos without authorization</li>
            <li>Create derivative works based on our content</li>
            <li>Reverse engineer or attempt to extract source code</li>
          </ul>

          <h2>5. Manufacturing Services Terms</h2>
          
          <h3>5.1 Quotations and Estimates</h3>
          <p>
            All quotations and estimates provided are subject to our standard terms and conditions of sale. Prices are valid for the period specified and may change based on material costs, specifications, or market conditions.
          </p>

          <h3>5.2 Manufacturing Standards</h3>
          <p>
            Our manufacturing services comply with industry standards including IATF 16949:2016 and other applicable quality management systems. All products are manufactured according to customer specifications and agreed-upon tolerances.
          </p>

          <h3>5.3 Delivery and Lead Times</h3>
          <p>
            Delivery dates are estimates based on current production schedules. We strive to meet all delivery commitments but cannot guarantee specific delivery dates due to factors beyond our control.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Die Cast Mexico shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, regardless of the theory of liability, even if we have been advised of the possibility of such damages.
          </p>

          <h2>7. Disclaimers</h2>
          <p>
            The information on this website is provided "as is" without warranties of any kind, either express or implied. We do not warrant that:
          </p>
          <ul>
            <li>The website will be uninterrupted or error-free</li>
            <li>Information is accurate, complete, or current</li>
            <li>The website is free of viruses or harmful components</li>
            <li>Results from using the website will meet your requirements</li>
          </ul>

          <h2>8. Privacy and Data Protection</h2>
          <p>
            Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
          </p>

          <h2>9. Contact Form and Communications</h2>
          <p>
            When you use our contact forms or send us communications:
          </p>
          <ul>
            <li>We may use the information to respond to your inquiries</li>
            <li>Your messages may be stored for record-keeping purposes</li>
            <li>We may follow up on business inquiries</li>
            <li>Communications are subject to our Privacy Policy</li>
          </ul>

          <h2>10. Third-Party Services</h2>
          <p>
            Our website may use third-party services including:
          </p>
          <ul>
            <li><strong>Google reCAPTCHA:</strong> For form security (subject to Google's Terms of Service)</li>
            <li><strong>Formspree:</strong> For contact form processing (subject to Formspree's Terms of Service)</li>
            <li><strong>Cloudflare:</strong> For website performance and security</li>
          </ul>
          <p>Your use of these services is subject to their respective terms and conditions.</p>

          <h2>11. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this website. Your continued use of the service after changes are posted constitutes acceptance of the modified terms.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your access to our website immediately, without prior notice, if you breach these Terms of Service.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of Mexico. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Jalisco, Mexico.
          </p>

          <h2>14. International Users</h2>
          <p>
            If you access our website from outside Mexico, you are responsible for compliance with local laws in your jurisdiction.
          </p>

          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms of Service is found to be unenforceable, the remainder of the terms will remain in full force and effect.
          </p>

          <h2>16. Contact Information</h2>
          <p>If you have questions about these Terms of Service, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> info@diecastmexico.com</li>
            <li><strong>Phone:</strong> +52 33 3968 3660</li>
            <li><strong>Address:</strong> Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal., México</li>
          </ul>

          <h2>17. Entire Agreement</h2>
          <p>
            These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Die Cast Mexico regarding your use of our website.
          </p>
        </Content>
      </Container>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Terms of Service | Die Cast Mexico</title>
      <meta name="description" content="Terms of Service for Die Cast Mexico's website and manufacturing services. Learn about our policies, user responsibilities, and service terms." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://diecastmexico.com/terms-of-service" />
    </>
  );
};

export default TermsOfService;