import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import FormspreeContactForm from "../../components/FormspreeContactForm";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { Badge } from "../../components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = styled.section`
  padding: 8rem 1rem 6rem 1rem;
  background-color: var(--color-light-bg);
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const HeaderContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Badge_Styled = styled(Badge)`
  background-color: var(--color-accent);
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: start;
  }
`;

const ContactInfo = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.8);
  height: fit-content;
`;

const ContactInfoTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: var(--color-accent);
  }
`;

const IconWrapper = styled.div`
  background: var(--color-accent);
  color: var(--color-primary);
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ContactContent = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.div`
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.5;
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--color-accent);
      text-decoration: underline;
    }
  }
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.8);
`;

const BusinessHours = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const HoursRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const HoursDay = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const HoursTime = styled.span`
  color: var(--color-text-muted);
`;

const ContactPage = () => {
  const { translations } = useLanguage();
  const messages = translations?.contact || {};
  
  return (
    <Layout>
      <SEO 
        title={`${messages?.title || "Contáctanos"} | Die Cast Mexico`}
        description={messages?.description || "Contacta Die Cast Mexico para soluciones profesionales de fundición e inyección a presión. Ponte en contacto con nuestro equipo para consultas, cotizaciones o soporte."}
      />
      <ContactSection>
        <Container>
          <HeaderContent>
            <Badge_Styled>
              {translations?.servicesTagline || "Soluciones Expertas"}
            </Badge_Styled>
            <Title>
              {messages?.title || "Contáctanos"}
            </Title>
            <Description>
              {messages?.description || "Ponte en contacto con nuestro equipo para obtener más información sobre nuestros servicios de fundición e inyección a presión. Estamos aquí para ayudarte con tus necesidades de manufactura."}
            </Description>
          </HeaderContent>
          
          <ContentGrid>
            <ContactInfo>
              <ContactInfoTitle>
                {translations?.contactInfo || "Información de Contacto"}
              </ContactInfoTitle>
              
              <ContactDetails>
                <ContactDetail>
                  <IconWrapper>
                    <Phone size={20} />
                  </IconWrapper>
                  <ContactContent>
                    <ContactLabel>
                      {translations?.phoneLabel || "Teléfono"}
                    </ContactLabel>
                    <ContactValue>
                      <a href="tel:+523339683660">+52 33 3968 3660</a>
                    </ContactValue>
                  </ContactContent>
                </ContactDetail>
                
                <ContactDetail>
                  <IconWrapper>
                    <Mail size={20} />
                  </IconWrapper>
                  <ContactContent>
                    <ContactLabel>
                      {translations?.emailLabel || "Correo Electrónico"}
                    </ContactLabel>
                    <ContactValue>
                      <a href="mailto:info@diecastmexico.com">info@diecastmexico.com</a>
                    </ContactValue>
                  </ContactContent>
                </ContactDetail>
                
                <ContactDetail>
                  <IconWrapper>
                    <MapPin size={20} />
                  </IconWrapper>
                  <ContactContent>
                    <ContactLabel>
                      {translations?.addressLabel || "Dirección"}
                    </ContactLabel>
                    <ContactValue>
                      Av. Aviación 4376-LOCAL 5<br />
                      Jardín Real, 45136<br />
                      Zapopan, Jalisco, México
                    </ContactValue>
                  </ContactContent>
                </ContactDetail>
              </ContactDetails>
              
              <BusinessHours>
                <ContactDetail style={{ background: 'transparent', border: 'none', padding: '0' }}>
                  <IconWrapper>
                    <Clock size={20} />
                  </IconWrapper>
                  <ContactContent>
                    <ContactLabel>
                      {translations?.businessHours || "Horarios de Atención"}
                    </ContactLabel>
                    <HoursGrid>
                      <HoursRow>
                        <HoursDay>{translations?.monday || "Lunes"} - {translations?.friday || "Viernes"}</HoursDay>
                        <HoursTime>8:00 AM - 6:00 PM</HoursTime>
                      </HoursRow>
                      <HoursRow>
                        <HoursDay>{translations?.saturday || "Sábado"}</HoursDay>
                        <HoursTime>9:00 AM - 2:00 PM</HoursTime>
                      </HoursRow>
                      <HoursRow>
                        <HoursDay>{translations?.sunday || "Domingo"}</HoursDay>
                        <HoursTime>{translations?.closed || "Cerrado"}</HoursTime>
                      </HoursRow>
                    </HoursGrid>
                  </ContactContent>
                </ContactDetail>
              </BusinessHours>
            </ContactInfo>
            
            <FormContainer>
              <FormspreeContactForm />
            </FormContainer>
          </ContentGrid>
        </Container>
      </ContactSection>
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