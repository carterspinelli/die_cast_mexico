import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";

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

const TerminosDelServicio = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <Title>Términos del Servicio</Title>
          <LastUpdated>Última Actualización: 4 de junio de 2025</LastUpdated>
        </Header>
        
        <Content>
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar el sitio web de Die Cast Mexico ("Servicio"), usted acepta y acuerda estar sujeto a los términos y disposiciones de este acuerdo. Si no está de acuerdo con lo anterior, por favor no utilice este servicio.
          </p>

          <h2>2. Descripción del Servicio</h2>
          <p>
            Die Cast Mexico proporciona información sobre nuestros servicios de fundición de aluminio, capacidades de manufactura e información de contacto a través de nuestro sitio web. Nuestros servicios incluyen:
          </p>
          <ul>
            <li><strong>Servicios de Fundición:</strong> Manufactura de fundición de aluminio de alta precisión</li>
            <li><strong>Maquinado CNC:</strong> Operaciones secundarias y servicios de acabado</li>
            <li><strong>Control de Calidad:</strong> Servicios de pruebas e inspección</li>
            <li><strong>Soporte de Ingeniería:</strong> Asistencia en diseño y consultoría técnica</li>
            <li><strong>Servicios de Información:</strong> Recursos técnicos y conocimientos industriales</li>
          </ul>

          <h2>3. Responsabilidades del Usuario</h2>
          <p>Como usuario de nuestro sitio web, usted acepta:</p>
          <ul>
            <li>Proporcionar información precisa y completa al contactarnos</li>
            <li>Usar el sitio web solo para propósitos legales</li>
            <li>No intentar obtener acceso no autorizado a nuestros sistemas</li>
            <li>No interferir con el funcionamiento adecuado del sitio web</li>
            <li>Respetar los derechos de propiedad intelectual</li>
            <li>Cumplir con todas las leyes y regulaciones aplicables</li>
          </ul>

          <h2>4. Derechos de Propiedad Intelectual</h2>
          <p>
            El contenido, diseño, gráficos, logotipos y otros materiales en este sitio web son propiedad de Die Cast Mexico o nuestros licenciantes y están protegidos por las leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual. Usted no puede:
          </p>
          <ul>
            <li>Copiar, reproducir o distribuir contenido sin permiso escrito</li>
            <li>Usar nuestras marcas registradas o logotipos sin autorización</li>
            <li>Crear trabajos derivados basados en nuestro contenido</li>
            <li>Realizar ingeniería inversa o intentar extraer código fuente</li>
          </ul>

          <h2>5. Términos de Servicios de Manufactura</h2>
          
          <h3>5.1 Cotizaciones y Estimaciones</h3>
          <p>
            Todas las cotizaciones y estimaciones proporcionadas están sujetas a nuestros términos y condiciones estándar de venta. Los precios son válidos por el período especificado y pueden cambiar según los costos de materiales, especificaciones o condiciones del mercado.
          </p>

          <h3>5.2 Estándares de Manufactura</h3>
          <p>
            Nuestros servicios de manufactura cumplen con estándares industriales incluyendo IATF 16949:2016 y otros sistemas de gestión de calidad aplicables. Todos los productos se manufacturan según las especificaciones del cliente y tolerancias acordadas.
          </p>

          <h3>5.3 Entrega y Tiempos de Producción</h3>
          <p>
            Las fechas de entrega son estimaciones basadas en los horarios de producción actuales. Nos esforzamos por cumplir todos los compromisos de entrega pero no podemos garantizar fechas específicas debido a factores fuera de nuestro control.
          </p>

          <h2>6. Limitación de Responsabilidad</h2>
          <p>
            Die Cast Mexico no será responsable por daños indirectos, incidentales, especiales, consecuenciales o punitivos, incluyendo pero no limitado a pérdida de ganancias, datos o uso, independientemente de la teoría de responsabilidad, incluso si hemos sido advertidos de la posibilidad de tales daños.
          </p>

          <h2>7. Descargos de Responsabilidad</h2>
          <p>
            La información en este sitio web se proporciona "tal como está" sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que:
          </p>
          <ul>
            <li>El sitio web será ininterrumpido o libre de errores</li>
            <li>La información es precisa, completa o actual</li>
            <li>El sitio web está libre de virus o componentes dañinos</li>
            <li>Los resultados del uso del sitio web cumplirán sus requisitos</li>
          </ul>

          <h2>8. Privacidad y Protección de Datos</h2>
          <p>
            Su privacidad es importante para nosotros. Nuestra recopilación y uso de información personal se rige por nuestra Política de Privacidad, que se incorpora a estos Términos del Servicio por referencia.
          </p>

          <h2>9. Formulario de Contacto y Comunicaciones</h2>
          <p>
            Cuando utiliza nuestros formularios de contacto o nos envía comunicaciones:
          </p>
          <ul>
            <li>Podemos usar la información para responder a sus consultas</li>
            <li>Sus mensajes pueden almacenarse para fines de mantenimiento de registros</li>
            <li>Podemos dar seguimiento a consultas comerciales</li>
            <li>Las comunicaciones están sujetas a nuestra Política de Privacidad</li>
          </ul>

          <h2>10. Servicios de Terceros</h2>
          <p>
            Nuestro sitio web puede usar servicios de terceros incluyendo:
          </p>
          <ul>
            <li><strong>Google reCAPTCHA:</strong> Para seguridad de formularios (sujeto a los Términos de Servicio de Google)</li>
            <li><strong>Formspree:</strong> Para procesamiento de formularios de contacto (sujeto a los Términos de Servicio de Formspree)</li>
            <li><strong>Cloudflare:</strong> Para rendimiento y seguridad del sitio web</li>
          </ul>
          <p>Su uso de estos servicios está sujeto a sus respectivos términos y condiciones.</p>

          <h2>11. Modificaciones a los Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos del Servicio en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en este sitio web. Su uso continuo del servicio después de que se publiquen los cambios constituye la aceptación de los términos modificados.
          </p>

          <h2>12. Terminación</h2>
          <p>
            Podemos terminar o suspender su acceso a nuestro sitio web inmediatamente, sin previo aviso, si viola estos Términos del Servicio.
          </p>

          <h2>13. Ley Aplicable</h2>
          <p>
            Estos Términos del Servicio se rigen e interpretan de acuerdo con las leyes de México. Cualquier disputa que surja de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Jalisco, México.
          </p>

          <h2>14. Usuarios Internacionales</h2>
          <p>
            Si accede a nuestro sitio web desde fuera de México, usted es responsable del cumplimiento de las leyes locales en su jurisdicción.
          </p>

          <h2>15. Divisibilidad</h2>
          <p>
            Si alguna disposición de estos Términos del Servicio se considera inaplicable, el resto de los términos permanecerá en pleno vigor y efecto.
          </p>

          <h2>16. Información de Contacto</h2>
          <p>Si tiene preguntas sobre estos Términos del Servicio, por favor contáctenos:</p>
          <ul>
            <li><strong>Correo:</strong> info@diecastmexico.com</li>
            <li><strong>Teléfono:</strong> +52 33 3968 3660</li>
            <li><strong>Dirección:</strong> Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal., México</li>
          </ul>

          <h2>17. Acuerdo Completo</h2>
          <p>
            Estos Términos del Servicio, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre usted y Die Cast Mexico con respecto al uso de nuestro sitio web.
          </p>
        </Content>
      </Container>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Términos del Servicio | Die Cast Mexico</title>
      <meta name="description" content="Términos del Servicio para el sitio web y servicios de manufactura de Die Cast Mexico. Conozca nuestras políticas, responsabilidades del usuario y términos de servicio." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://diecastmexico.com/es/terminos-del-servicio" />
    </>
  );
};

export default TerminosDelServicio;