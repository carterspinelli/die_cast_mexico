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

const TerminosServicioPage = () => {
  return (
    <Layout>
      <SEO 
        title="Términos de Servicio | Die Cast Mexico"
        description="Términos de Servicio de Die Cast Mexico - Términos y condiciones legales para el uso de nuestro sitio web y servicios."
      />
      <PolicySection>
        <Container>
          <Title>Términos de Servicio</Title>
          <LastUpdated>Última Actualización: 3 de Junio, 2025</LastUpdated>
          
          <PolicyContent>
            <p>
              Bienvenido a Die Cast Mexico. Estos Términos de Servicio ("Términos") rigen tu uso de nuestro sitio web y servicios. Al acceder a nuestro sitio web o utilizar nuestros servicios, aceptas estar sujeto a estos Términos.
            </p>

            <h2>1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web y nuestros servicios, aceptas y acuerdas estar sujeto a los términos y disposiciones de este acuerdo. Si no estás de acuerdo con lo anterior, por favor no utilices este servicio.
            </p>

            <h2>2. Información de la Empresa</h2>
            <p>
              Die Cast Mexico es una empresa manufacturera especializada en fundición, moldeo por inyección y servicios de manufactura de precisión, ubicada en Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jalisco, México.
            </p>

            <h2>3. Servicios</h2>
            <p>Proporcionamos los siguientes servicios de manufactura:</p>
            <ul>
              <li>Fundición de aluminio y zinc</li>
              <li>Moldeo por inyección de plásticos</li>
              <li>Maquinado CNC y manufactura de precisión</li>
              <li>Servicios de ensamble y pruebas</li>
              <li>Control de calidad y certificación</li>
              <li>Gestión de cadena de suministro</li>
            </ul>

            <h2>4. Uso del Sitio Web</h2>
            
            <h3>Uso Permitido</h3>
            <p>Puedes usar nuestro sitio web para:</p>
            <ul>
              <li>Conocer nuestras capacidades de manufactura</li>
              <li>Solicitar cotizaciones e información</li>
              <li>Contactarnos con propósitos comerciales</li>
              <li>Descargar recursos públicos y documentación</li>
            </ul>

            <h3>Uso Prohibido</h3>
            <p>No puedes usar nuestro sitio web para:</p>
            <ul>
              <li>Participar en actividades ilegales o fraudulentas</li>
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Infringir derechos de propiedad intelectual</li>
              <li>Distribuir malware o código dañino</li>
              <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
              <li>Usar sistemas automatizados para extraer o recopilar datos</li>
            </ul>

            <h2>5. Cotizaciones y Estimaciones</h2>
            <p>
              Todas las cotizaciones y estimaciones proporcionadas son preliminares y están sujetas a confirmación final basada en especificaciones detalladas, requerimientos de materiales y condiciones actuales del mercado. Las cotizaciones son válidas por 30 días a menos que se especifique lo contrario.
            </p>

            <h2>6. Servicios de Manufactura</h2>
            
            <h3>Estándares de Calidad</h3>
            <p>
              Mantenemos certificaciones ISO 9001:2015 e IATF 16949:2016 y seguimos procedimientos estrictos de control de calidad. Todos los productos se manufacturan de acuerdo a requerimientos específicos y estándares de la industria.
            </p>

            <h3>Tiempos de Entrega</h3>
            <p>
              Los tiempos de entrega son estimaciones basadas en horarios de producción actuales y pueden variar dependiendo de la complejidad del proyecto, disponibilidad de materiales y capacidad de producción. Proporcionaremos cronogramas actualizados durante el proceso de manufactura.
            </p>

            <h3>Especificaciones y Cambios</h3>
            <p>
              Todas las especificaciones de manufactura deben confirmarse por escrito antes de comenzar la producción. Los cambios a las especificaciones después del inicio de la producción pueden resultar en costos adicionales y tiempos de entrega extendidos.
            </p>

            <h2>7. Propiedad Intelectual</h2>
            
            <h3>Nuestros Derechos</h3>
            <p>
              Todo el contenido en este sitio web, incluyendo texto, gráficos, logotipos, imágenes y software, es propiedad de Die Cast Mexico y está protegido por derechos de autor y otras leyes de propiedad intelectual.
            </p>

            <h3>Derechos del Cliente</h3>
            <p>
              Respetamos los derechos de propiedad intelectual de nuestros clientes. Todos los diseños, especificaciones e información propietaria del cliente permanecen como propiedad del cliente y se tratan como confidenciales.
            </p>

            <h2>8. Confidencialidad</h2>
            <p>
              Mantenemos estricta confidencialidad respecto a todos los proyectos, especificaciones e información comercial de clientes. Los acuerdos de no divulgación están disponibles bajo solicitud para proyectos sensibles.
            </p>

            <h2>9. Términos de Pago</h2>
            <p>
              Los términos de pago se especifican en contratos individuales y órdenes de compra. Los términos estándar incluyen requerimientos de depósito para proyectos nuevos y términos de pago neto para clientes establecidos. Pueden aplicar cargos por pago tardío.
            </p>

            <h2>10. Garantías y Exenciones</h2>
            
            <h3>Garantía de Manufactura</h3>
            <p>
              Garantizamos que todos los productos manufacturados cumplirán con las especificaciones acordadas y estarán libres de defectos en materiales y mano de obra por un período especificado en el contrato individual.
            </p>

            <h3>Exención del Sitio Web</h3>
            <p>
              Este sitio web se proporciona "tal como está" sin garantías de ningún tipo. No garantizamos que el sitio web será ininterrumpido, libre de errores o libre de virus u otros componentes dañinos.
            </p>

            <h2>11. Limitación de Responsabilidad</h2>
            <p>
              Nuestra responsabilidad por cualquier daño derivado de nuestros servicios no excederá el monto total pagado por el proyecto específico que dé lugar al reclamo. No seremos responsables de daños indirectos, incidentales o consecuenciales.
            </p>

            <h2>12. Fuerza Mayor</h2>
            <p>
              No seremos responsables de cualquier falla o retraso en el desempeño debido a circunstancias fuera de nuestro control razonable, incluyendo pero no limitado a desastres naturales, acciones gubernamentales, disputas laborales o escasez de materiales.
            </p>

            <h2>13. Control de Exportaciones y Cumplimiento</h2>
            <p>
              Todos los productos y servicios están sujetos a leyes y regulaciones de control de exportaciones aplicables. Los clientes son responsables de obtener cualquier licencia o permiso de exportación necesario.
            </p>

            <h2>14. Política de Privacidad</h2>
            <p>
              Tu privacidad es importante para nosotros. Por favor revisa nuestra <a href="/es/politica-de-privacidad">Política de Privacidad</a>, que también rige tu uso del sitio web, para entender nuestras prácticas.
            </p>

            <h2>15. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos inmediatamente al ser publicados en nuestro sitio web. Tu uso continuado de nuestros servicios constituye la aceptación de cualquier modificación.
            </p>

            <h2>16. Terminación</h2>
            <p>
              Podemos terminar o suspender el acceso a nuestro sitio web inmediatamente, sin previo aviso, por conducta que viole estos Términos o sea dañina para otros usuarios, nosotros o terceros.
            </p>

            <h2>17. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de México. Cualquier disputa que surja bajo estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Jalisco, México.
            </p>

            <h2>18. Divisibilidad</h2>
            <p>
              Si cualquier disposición de estos Términos se encuentra inaplicable o inválida, esa disposición será limitada o eliminada en la medida mínima necesaria para que los Términos permanezcan en pleno vigor y efecto.
            </p>

            <h2>19. Información de Contacto</h2>
            <p>Si tienes preguntas sobre estos Términos de Servicio, por favor contáctanos:</p>
            <ul>
              <li><strong>Correo:</strong> info@diecastmexico.com</li>
              <li><strong>Teléfono:</strong> +52 33 3968 3660</li>
              <li><strong>Dirección:</strong> Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal., México</li>
            </ul>

            <h2>20. Acuerdo Completo</h2>
            <p>
              Estos Términos de Servicio, junto con nuestra Política de Privacidad y cualquier acuerdo de servicio específico, constituyen el acuerdo completo entre tú y Die Cast Mexico respecto al uso de nuestro sitio web y servicios.
            </p>
          </PolicyContent>
        </Container>
      </PolicySection>
    </Layout>
  );
};

export default TerminosServicioPage;

export const Head = () => {
  return (
    <SEO 
      title="Términos de Servicio | Die Cast Mexico" 
      description="Términos de Servicio de Die Cast Mexico - Términos y condiciones legales para el uso de nuestro sitio web y servicios."
    />
  );
};