import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
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

const PoliticaPrivacidadPage = () => {
  return (
    <Layout>
      <SEO 
        title="Política de Privacidad | Die Cast Mexico"
        description="Política de Privacidad de Die Cast Mexico - Conoce cómo recopilamos, usamos y protegemos tu información personal y datos."
      />
      <PolicySection>
        <Container>
          <Title>Política de Privacidad</Title>
          <LastUpdated>Última Actualización: 3 de Junio, 2025</LastUpdated>
          
          <PolicyContent>
            <p>
              Die Cast Mexico ("nosotros", "nuestro" o "nos") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web o utilizas nuestros servicios.
            </p>

            <h2>1. Información que Recopilamos</h2>
            
            <h3>Información Personal</h3>
            <p>Podemos recopilar información personal que nos proporciones voluntariamente cuando:</p>
            <ul>
              <li>Completas nuestro formulario de contacto</li>
              <li>Solicitas una cotización o información sobre nuestros servicios</li>
              <li>Te suscribes a nuestro boletín o comunicaciones</li>
              <li>Te comunicas con nosotros por correo electrónico o teléfono</li>
            </ul>
            
            <p>Esta información puede incluir:</p>
            <ul>
              <li>Nombre e información de contacto (correo, teléfono, dirección)</li>
              <li>Nombre de la empresa e información comercial</li>
              <li>Requerimientos y especificaciones del proyecto</li>
              <li>Preferencias de comunicación</li>
            </ul>

            <h3>Información Técnica</h3>
            <p>Recopilamos automáticamente cierta información cuando visitas nuestro sitio web:</p>
            <ul>
              <li>Dirección IP y ubicación aproximada</li>
              <li>Tipo y versión del navegador</li>
              <li>Información del dispositivo</li>
              <li>Páginas visitadas y tiempo en nuestro sitio</li>
              <li>Información del sitio web de referencia</li>
            </ul>

            <h3>Cookies y Tecnologías de Seguimiento</h3>
            <p>Utilizamos cookies y tecnologías similares para:</p>
            <ul>
              <li>Recordar tus preferencias de idioma</li>
              <li>Proporcionar seguridad a través de reCAPTCHA</li>
              <li>Analizar el uso y rendimiento del sitio web</li>
              <li>Mejorar la experiencia del usuario</li>
            </ul>

            <h2>2. Cómo Utilizamos tu Información</h2>
            <p>Utilizamos la información que recopilamos para:</p>
            <ul>
              <li>Responder a tus consultas y proporcionar servicio al cliente</li>
              <li>Procesar cotizaciones y comunicaciones comerciales</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Enviarte comunicaciones comerciales relevantes</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Proteger nuestros derechos y prevenir fraudes</li>
            </ul>

            <h2>3. Compartir y Divulgación de Información</h2>
            <p>No vendemos, intercambiamos o alquilamos tu información personal a terceros. Podemos compartir tu información solo en las siguientes circunstancias:</p>
            <ul>
              <li><strong>Proveedores de Servicios:</strong> Con proveedores terceros de confianza que nos asisten en nuestras operaciones (servicios de correo, hosting del sitio web, análisis)</li>
              <li><strong>Requerimientos Legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
              <li><strong>Transferencias Comerciales:</strong> En conexión con una fusión, adquisición o venta de activos</li>
              <li><strong>Consentimiento:</strong> Con tu consentimiento explícito para propósitos específicos</li>
            </ul>

            <h2>4. Seguridad de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizacionales apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet es 100% seguro.
            </p>

            <h2>5. Transferencias Internacionales de Datos</h2>
            <p>
              Como empresa manufacturera internacional, tu información puede ser transferida y procesada en países distintos al tuyo. Garantizamos que existan salvaguardas apropiadas para tales transferencias de acuerdo con las leyes de protección de datos aplicables.
            </p>

            <h2>6. Tus Derechos y Opciones</h2>
            <p>Dependiendo de tu ubicación, puedes tener los siguientes derechos:</p>
            <ul>
              <li><strong>Acceso:</strong> Solicitar información sobre los datos personales que tenemos sobre ti</li>
              <li><strong>Corrección:</strong> Solicitar corrección de datos inexactos o incompletos</li>
              <li><strong>Eliminación:</strong> Solicitar eliminación de tus datos personales</li>
              <li><strong>Portabilidad:</strong> Solicitar transferencia de tus datos a otro servicio</li>
              <li><strong>Oposición:</strong> Oponerte a ciertos tipos de procesamiento</li>
              <li><strong>Retiro:</strong> Retirar el consentimiento donde el procesamiento se base en consentimiento</li>
            </ul>

            <h2>7. Retención de Información</h2>
            <p>
              Conservamos tu información personal solo durante el tiempo necesario para cumplir los propósitos descritos en esta Política de Privacidad, cumplir obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos.
            </p>

            <h2>8. Privacidad de Menores</h2>
            <p>
              Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos conscientemente información personal de menores de 18 años.
            </p>

            <h2>9. Servicios de Terceros</h2>
            <p>Nuestro sitio web puede contener enlaces a sitios web de terceros o usar servicios de terceros:</p>
            <ul>
              <li><strong>Google reCAPTCHA:</strong> Utilizado para protección contra spam (sujeto a la Política de Privacidad de Google)</li>
              <li><strong>Formspree:</strong> Utilizado para procesamiento de formularios de contacto (sujeto a la Política de Privacidad de Formspree)</li>
            </ul>
            <p>No somos responsables de las prácticas de privacidad de estos terceros.</p>

            <h2>10. Actualizaciones a Esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio material publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última Actualización".
            </p>

            <h2>11. Contáctanos</h2>
            <p>Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de privacidad, por favor contáctanos:</p>
            <ul>
              <li><strong>Correo:</strong> info@diecastmexico.com</li>
              <li><strong>Teléfono:</strong> +52 33 3968 3660</li>
              <li><strong>Dirección:</strong> Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal., México</li>
            </ul>

            <h2>12. Información Específica por Jurisdicción</h2>
            
            <h3>Para Residentes de la Unión Europea (GDPR)</h3>
            <p>
              Si eres residente de la Unión Europea, tienes derechos adicionales bajo el Reglamento General de Protección de Datos (GDPR), incluyendo el derecho a presentar una queja ante una autoridad supervisora.
            </p>

            <h3>Para Residentes de California (CCPA)</h3>
            <p>
              Si eres residente de California, tienes derechos específicos bajo la Ley de Privacidad del Consumidor de California (CCPA), incluyendo el derecho a saber qué información personal recopilamos y cómo se utiliza.
            </p>

            <h3>Para Residentes de México (LFPDPPP)</h3>
            <p>
              Si eres residente de México, tienes derechos bajo la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), incluyendo derechos de acceso, rectificación, cancelación y oposición.
            </p>
          </PolicyContent>
        </Container>
      </PolicySection>
    </Layout>
  );
};

export default PoliticaPrivacidadPage;

export const Head = () => {
  return (
    <SEO 
      title="Política de Privacidad | Die Cast Mexico" 
      description="Política de Privacidad de Die Cast Mexico - Conoce cómo recopilamos, usamos y protegemos tu información personal y datos."
    />
  );
};