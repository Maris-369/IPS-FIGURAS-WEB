// Ruta: /workspaces/ips_fig-cucuta/src/pages/index.js
import React from 'react';
import { Head } from "gatsby"; // Para manejar el contenido del <head>

// --- Componente para el contenido del <head> ---
// Gatsby usará esto para generar las etiquetas <head> de la página
export const PageHead = () => (
  <>
    <title>IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional y Especialidades Médicas</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="IPS FIGURAS SST en Cúcuta - Expertos en salud ocupacional, medicina laboral, exámenes médicos ocupacionales y especialidades como cardiología, odontología y más." />
    <meta name="keywords" content="IPS Cúcuta, salud ocupacional, exámenes médicos, medicina laboral, cardiología Cúcuta, audiometría, oftalmología ocupacional, cursos manipulación alimentos" />
    <meta name="author" content="IPS FIGURAS SST CÚCUTA SAS" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trabajosenalturascucuta.com/" />
    <meta property="og:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral" />
    <meta property="og:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Exámenes médicos, cursos y más." />
    {/* Nota: Esta imagen debe existir en la carpeta 'static/images/og-image.jpg' de tu proyecto */}
    <meta property="og:image" content="/images/og-image.jpg" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.trabajosenalturascucuta.com/" />
    <meta property="twitter:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral" />
    <meta property="twitter:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Exámenes médicos, cursos y más." />
    <meta property="twitter:image" content="/images/og-image.jpg" /> {/* Igual que arriba */}

    {/* Links a CSS externos y fuentes */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

// --- Componente principal de la página de inicio ---
const PaginaDeInicio = () => {
  // Aquí va el contenido que estaba dentro de tu <body> original, adaptado a JSX

  // Nota: El JavaScript para el menú móvil necesitaría implementarse
  // usando el estado de React (useState) y manejadores de eventos (onClick).
  // Por ahora, solo se incluye la estructura HTML/JSX.

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <div className="mobile-menu-header">
          <div className="logo">
            <div className="logo-text">
              <span className="main">IPS FIGURAS</span>
              <span className="sub">SST CÚCUTA SAS</span>
            </div>
          </div>
          <button className="mobile-menu-close" id="mobileMenuClose" aria-label="Cerrar menú">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            <li><a href="#inicio"><i className="fas fa-home"></i> Inicio</a></li>
            <li><a href="#servicios"><i className="fas fa-medkit"></i> Servicios</a></li>
            <li><a href="#nosotros"><i className="fas fa-building"></i> Nosotros</a></li>
            <li><a href="#testimonios"><i className="fas fa-comments"></i> Testimonios</a></li>
            <li><a href="#contacto"><i className="fas fa-envelope"></i> Contacto</a></li>
            <li><a href="#agendar-cita"><i className="fas fa-calendar-alt"></i> Agendar Cita</a></li>
          </ul>
        </nav>
      </div>
      <div className="overlay" id="overlay"></div>

      {/* Header */}
      <header>
        <div className="container">
          <div className="header-container">
            <div className="logo">
              {/* Asegúrate que exista 'static/images/logo-placeholder.png' o cambia la ruta */}
              <img src="/images/logo-placeholder.png" alt="IPS FIGURAS SST Logo" id="logoImg" />
              <div className="logo-text">
                <span className="main">IPS FIGURAS</span>
                <span className="sub">SST CÚCUTA SAS</span>
              </div>
            </div>
            <nav>
              <ul>
                <li><a href="#inicio"><i className="fas fa-home"></i> Inicio</a></li>
                <li><a href="#servicios"><i className="fas fa-medkit"></i> Servicios</a></li>
                <li><a href="#nosotros"><i className="fas fa-building"></i> Nosotros</a></li>
                <li><a href="#testimonios"><i className="fas fa-comments"></i> Testimonios</a></li>
                <li><a href="#contacto"><i className="fas fa-envelope"></i> Contacto</a></li>
                <li><a href="#agendar-cita" className="btn btn-sm"><i className="fas fa-calendar-alt"></i> Agendar Cita</a></li>
              </ul>
            </nav>
            <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Abrir menú">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <h1>Especialistas en Salud Ocupacional y Medicina Integral</h1>
            <p>En IPS FIGURAS SST CÚCUTA SAS nos dedicamos a proteger y mejorar la salud de tus colaboradores con servicios médicos ocupacionales de alta calidad.</p>
            <div className="hero-btns">
              <a href="#contacto" className="btn"><i className="fas fa-calendar-alt"></i> Agendar Cita</a>
              <a href="#servicios" className="btn btn-outline"><i className="fas fa-search"></i> Nuestros Servicios</a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
            <p>Ofrecemos una amplia gama de servicios médicos ocupacionales y especialidades para garantizar la salud y bienestar de tus colaboradores.</p>
          </div>
          <div className="services-grid" id="servicesContainer">
            {/* TODO: Cargar servicios dinámicamente o añadir contenido estático */}
            <p><i>(Contenido de servicios se mostrará aquí)</i></p>
            {/* Ejemplo de cómo podría verse una tarjeta estática:
            <div className="service-card">
              <div className="service-img">
                <img src="/images/servicio-ejemplo.jpg" alt="Medicina Ocupacional" />
              </div>
              <div className="service-content">
                <h3><i className="fas fa-stethoscope"></i> Medicina Ocupacional</h3>
                <p>Exámenes médicos de ingreso, periódicos y de egreso.</p>
                <a href="#" className="service-link">Leer más <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="bg-light">
        <div className="container">
          <div className="about-container">
            <div className="about-content">
              <h3>IPS FIGURAS SST CÚCUTA SAS</h3>
              <p>Somos una Institución Prestadora de Servicios de Salud con enfoque en salud ocupacional y medicina integral, comprometidos con la calidad y el bienestar de nuestros pacientes.</p>
              <p>Contamos con un equipo multidisciplinario de profesionales altamente calificados y tecnología de vanguardia para ofrecer los mejores servicios médicos en Cúcuta y su área metropolitana.</p>
              <ul className="features-list"> {/* Cambiado a lista para mejor semántica */}
                <li className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Certificaciones</h4>
                    <p>Contamos con todas las certificaciones requeridas por las autoridades de salud.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <i className="fas fa-user-md"></i>
                  <div>
                    <h4>Profesionales Calificados</h4>
                    <p>Médicos especialistas con amplia experiencia en salud ocupacional.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <i className="fas fa-heartbeat"></i>
                  <div>
                    <h4>Tecnología Avanzada</h4>
                    <p>Equipos médicos de última generación para diagnósticos precisos.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about-img">
              {/* Asegúrate que exista 'static/images/equipo-medico-placeholder.jpg' o cambia la ruta */}
              <img src="/images/equipo-medico-placeholder.jpg" alt="Equipo médico de IPS FIGURAS" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Lo que dicen nuestros clientes</h2>
            <p>Testimonios de empresas y pacientes que han confiado en nuestros servicios.</p>
          </div>
          <div className="testimonials-container" id="testimonialsContainer">
            {/* TODO: Cargar testimonios dinámicamente o añadir contenido estático */}
            <p><i>(Contenido de testimonios se mostrará aquí)</i></p>
             {/* Ejemplo de cómo podría verse una tarjeta estática:
            <div className="testimonial-card">
               <div className="author-img">
                 <img src="/images/cliente-ejemplo.jpg" alt="Cliente Satisfecho" />
               </div>
               <p className="testimonial-text">"Excelente atención y profesionalismo. Muy recomendados."</p>
               <div className="testimonial-author">
                 <div className="author-name">Nombre Cliente</div>
                 <div className="author-role">Cargo/Empresa</div>
               </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" id="yearsExp">10+</div>
              <div className="stat-text">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="happyClients">500+</div>
              <div className="stat-text">Empresas Satisfechas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="examsDone">90,000+</div>
              <div className="stat-text">Exámenes Realizados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="specialists">20+</div>
              <div className="stat-text">Especialistas Médicos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <div className="container">
          <div className="section-title">
            <h2>Contáctanos</h2>
            <p>Estamos aquí para responder todas tus preguntas y brindarte la mejor atención.</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <p>Puedes visitarnos en nuestras instalaciones o comunicarte con nosotros por cualquiera de estos medios:</p>
              <div className="contact-method">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-details">
                  <h4>Dirección</h4>
                  <p id="address">Calle 21A #0B-122, Barrio Blanco Cúcuta, Norte de Santander</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-details">
                  <h4>Teléfonos</h4>
                  <p><a href="tel:+573138914384" id="phone1">+57 3138914384</a></p>
                  <p><a href="tel:+573158525385" id="phone2">+57 3158525385</a></p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-details">
                  <h4>Correo Electrónico</h4>
                  <p><a href="mailto:admin@trabajosenalturaipsfigurascucuta.com" id="email">admin@trabajosenalturaipsfigurascucuta.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div className="contact-details">
                  <h4>Horario de Atención</h4>
                  <p id="schedule">Lunes a Viernes: 6:00 AM - 6:00 PM<br />Sábados: 6:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              {/* Para que este formulario funcione con Netlify Forms, añade data-netlify="true" */}
              <form id="contactForm" name="contacto" method="POST" data-netlify="true">
                {/* Campo oculto necesario para Netlify Forms */}
                <input type="hidden" name="form-name" value="contacto" />
                <input name="nombre" type="text" placeholder="Nombre Completo" required />
                <input name="email" type="email" placeholder="Correo Electrónico" required />
                <input name="telefono" type="tel" placeholder="Teléfono" />
                <select name="servicio" required>
                  <option value="">Selecciona un servicio</option>
                  <option value="medicina-ocupacional">Medicina Ocupacional</option>
                  <option value="cardiologia">Cardiología</option>
                  <option value="audiometria">Audiometría</option>
                  <option value="odontologia">Odontología</option>
                  <option value="oftalmologia">Oftalmología</option>
                  <option value="cursos">Cursos Manipulación de Alimentos</option>
                  <option value="laboratorio">Laboratorio Clínico</option>
                  <option value="otros">Otros Servicios</option>
                </select>
                <textarea name="mensaje" placeholder="Tu Mensaje" required></textarea>
                <button type="submit" className="btn"><i className="fas fa-paper-plane"></i> Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <div className="section-title">
            <h2>Empresas que confían en nosotros</h2>
            <p>Hemos trabajado con importantes empresas de la región en la protección de la salud de sus colaboradores.</p>
          </div>
          <div className="clients-grid" id="clientsContainer">
            {/* TODO: Cargar logos dinámicamente o añadir contenido estático */}
            <p><i>(Logos de clientes se mostrarán aquí)</i></p>
            {/* Ejemplo:
            <img src="/images/cliente1-logo.png" alt="Logo Cliente 1" className="client-logo" />
            <img src="/images/cliente2-logo.png" alt="Logo Cliente 2" className="client-logo" />
            */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>¿Listo para proteger la salud de tus colaboradores?</h2>
           <p>Contáctanos hoy mismo para obtener más información sobre nuestros servicios y cómo podemos ayudarte.</p>
           <a href="#contacto" className="btn"><i className="fas fa-phone-alt"></i> Contactar Ahora</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>IPS Figuras SST</h3>
              <p>Tu aliado en salud ocupacional y bienestar laboral en Cúcuta.</p>
              <div className="social-links">
                {/* Reemplaza '#' con tus URLs reales */}
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Enlaces Rápidos</h3>
              <ul className="footer-links">
                <li><a href="#inicio"><i className="fas fa-angle-right"></i> Inicio</a></li>
                <li><a href="#servicios"><i className="fas fa-angle-right"></i> Servicios</a></li>
                <li><a href="#nosotros"><i className="fas fa-angle-right"></i> Nosotros</a></li>
                <li><a href="#contacto"><i className="fas fa-angle-right"></i> Contacto</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contacto</h3>
              <ul className="footer-links">
                <li><i className="fas fa-map-marker-alt"></i> Calle 21A #0B-122, Barrio Blanco</li>
                <li><a href="tel:+573138914384"><i className="fas fa-phone"></i> +57 3138914384</a></li>
                <li><a href="mailto:admin@trabajosenalturaipsfigurascucuta.com"><i className="fas fa-envelope"></i> admin@trabajosenalt...</a></li> {/* Acortado para visualización */}
              </ul>
            </div>
            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>Suscríbete para recibir novedades y promociones.</p>
              {/* Para que funcione con Netlify Forms, añade data-netlify="true" */}
              <form className="newsletter-form" name="newsletter" method="POST" data-netlify="true">
                 <input type="hidden" name="form-name" value="newsletter" />
                 <input name="email_newsletter" type="email" placeholder="Tu Correo" required/>
                 <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} IPS FIGURAS SST CÚCUTA SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PaginaDeInicio;

// Exporta el componente Head para que Gatsby lo use
export { PageHead as Head };
