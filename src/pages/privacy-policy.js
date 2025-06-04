import React, { useEffect } from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";
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

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Redirect Spanish users to Spanish privacy policy
    if (language === 'es' && typeof window !== 'undefined') {
      navigate('/es/politica-de-privacidad/');
    }
  }, [language]);

  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Die Cast Mexico"
        description="Privacy Policy for Die Cast Mexico - Learn how we collect, use, and protect your personal information and data."
      />
      <PolicySection>
        <Container>
          <Title>Privacy Policy</Title>
          <LastUpdated>Last Updated: June 3, 2025</LastUpdated>
          
          <PolicyContent>
            <p>
              Die Cast Mexico ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out our contact form</li>
              <li>Request a quote or information about our services</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            
            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and business information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect certain information when you visit our website:</p>
            <ul>
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
            </ul>

            <h3>Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your language preferences</li>
              <li>Provide security through reCAPTCHA</li>
              <li>Analyze website usage and performance</li>
              <li>Improve user experience</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process quotes and business communications</li>
              <li>Improve our website and services</li>
              <li>Send you relevant business communications</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations (email services, website hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. International Data Transfers</h2>
            <p>
              As an international manufacturing company, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
            </ul>

            <h2>7. Retention of Information</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2>8. Cookie Policy</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content. Below is detailed information about the cookies we use:
            </p>

            <h3>8.1 Types of Cookies We Use</h3>
            
            <h4>Essential Cookies</h4>
            <p>These cookies are necessary for the website to function properly and cannot be disabled:</p>
            <ul>
              <li><strong>cookieConsent:</strong> Stores your cookie preferences and consent status</li>
              <li><strong>language:</strong> Remembers your preferred language setting (English/Spanish)</li>
              <li><strong>diecastmexico-language:</strong> Additional language preference storage</li>
            </ul>

            <h4>Functional Cookies</h4>
            <p>These cookies enhance website functionality and user experience:</p>
            <ul>
              <li><strong>cf-country:</strong> Country detection cookie set by Cloudflare for automatic language selection</li>
              <li><strong>Session Storage:</strong> Temporary storage for form data and navigation state</li>
            </ul>

            <h4>Performance and Analytics Cookies</h4>
            <p>These cookies help us understand how visitors interact with our website:</p>
            <ul>
              <li><strong>Website Analytics:</strong> Anonymous usage statistics and performance metrics</li>
              <li><strong>reCAPTCHA:</strong> Google reCAPTCHA cookies for form security and spam prevention</li>
            </ul>

            <h3>8.2 Cookie Management</h3>
            <p>You can manage your cookie preferences in the following ways:</p>
            <ul>
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
              <li><strong>Website Banner:</strong> Use our cookie notice to acknowledge our cookie policy</li>
              <li><strong>Contact Us:</strong> Email us at info@diecastmexico.com for cookie-related inquiries</li>
            </ul>

            <h3>8.3 Third-Party Cookies</h3>
            <p>Our website may contain cookies from third-party services:</p>
            <ul>
              <li><strong>Google reCAPTCHA:</strong> For contact form security</li>
              <li><strong>Cloudflare:</strong> For website performance and security</li>
              <li><strong>Formspree:</strong> For contact form processing</li>
            </ul>

            <h3>8.4 Cookie Retention</h3>
            <p>Cookie retention periods vary by type:</p>
            <ul>
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Stored for specific periods (typically 30 days to 1 year)</li>
              <li><strong>Essential Cookies:</strong> Retained as long as necessary for website functionality</li>
            </ul>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>

            <h2>10. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites or use third-party services:</p>
            <ul>
              <li><strong>Google reCAPTCHA:</strong> Used for spam protection (subject to Google's Privacy Policy)</li>
              <li><strong>Formspree:</strong> Used for contact form processing (subject to Formspree's Privacy Policy)</li>
            </ul>
            <p>We are not responsible for the privacy practices of these third parties.</p>

            <h2>10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> info@diecastmexico.com</li>
              <li><strong>Phone:</strong> +52 33 3968 3660</li>
              <li><strong>Address:</strong> Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal., Mexico</li>
            </ul>

            <h2>12. Jurisdiction-Specific Information</h2>
            
            <h3>For European Union Residents (GDPR)</h3>
            <p>
              If you are a resident of the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory authority.
            </p>

            <h3>For California Residents (CCPA)</h3>
            <p>
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how it is used.
            </p>

            <h3>For Mexico Residents (LFPDPPP)</h3>
            <p>
              If you are a resident of Mexico, you have rights under the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP), including rights to access, rectification, cancellation, and opposition.
            </p>
          </PolicyContent>
        </Container>
      </PolicySection>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export const Head = () => {
  return (
    <SEO 
      title="Privacy Policy | Die Cast Mexico" 
      description="Privacy Policy for Die Cast Mexico - Learn how we collect, use, and protect your personal information and data."
    />
  );
};