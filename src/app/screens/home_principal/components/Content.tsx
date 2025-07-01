"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../styles/content.css";
import heroImage from "@/assets/hero-image-talent.600f3403.jpg";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.jpg";
import avatar5 from "@/assets/avatar5.png";
import avatar6 from "@/assets/avatar6.png";
import avatar7 from "@/assets/avatar7.png";
import avatar8 from "@/assets/avatar8.jpg";

export const Content: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="content-landing">
      {/* HERO */}
      <section className="hero-section container my-5" id="inicio">
        <div className="row align-items-center clean-hero p-4">
          <div className="col-md-6" data-aos="fade-right">
            <div className="row benefits-grid mb-4">
              <div className="col-6 d-flex align-items-center mb-2">
                <i className="bi bi-person-check-fill benefit-icon"></i>
                <span className="text-dark">Registro gratuito</span>
              </div>
              <div className="col-6 d-flex align-items-center mb-2">
                <i className="bi bi-shield-check benefit-icon"></i>
                <span className="text-dark">Pagos protegidos</span>
              </div>
              <div className="col-12 d-flex align-items-center mt-1">
                <i className="bi bi-wallet2 benefit-icon"></i>
                <span className="text-dark">Múltiples opciones de retiro</span>
              </div>
            </div>

            <h1 className="hero-title fw-bold">
              Encontrar <br />
              <span className="text-primary">Oportunidades de trabajo remotas.</span>
            </h1>
            <h5 className="fw-semibold text-dark mt-3">Impulsa tu carrera.</h5>
            <p className="hero-description text-dark mt-2">
              Descubre oportunidades para obtener ingresos confiables y estables,
              todo mientras trabajas desde casa.
            </p>

            <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
              <a href="#trabajar" className="btn btn-work btn-equal">Quiero trabajar</a>
              <a href="#contratar" className="btn btn-outline-secondary fw-semibold btn-equal">¿Quieres contratar?</a>
            </div>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src={heroImage.src}
              alt="Talento joven trabajando"
              className="img-fluid rounded-4 clean-img"
            />
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES FULL CHAMBA? */}
      <section className="quienes-somos-section py-5 bg-light" id="quienes-somos">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="mb-4 fw-bold">¿Qué es Full Chamba?</h2>
          <p className="lead mb-5">
            Full Chamba es una plataforma peruana que conecta a estudiantes y egresados con empresas a través de <strong>retos laborales reales</strong>, impulsando el desarrollo de experiencia práctica desde etapas tempranas.
          </p>

          <div className="row">
            <div className="col-md-4 mb-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-people-fill text-primary fs-1 mb-3"></i>
                  <h5 className="fw-bold">Conecta talento con empresas</h5>
                  <p className="text-muted">Estudiantes y egresados postulan a desafíos que responden a necesidades reales del mercado.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-mortarboard-fill text-success fs-1 mb-3"></i>
                  <h5 className="fw-bold">Aprende haciendo</h5>
                  <p className="text-muted">Los usuarios desarrollan habilidades en contextos reales, reforzando su perfil profesional con cada reto superado.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-award-fill text-warning fs-1 mb-3"></i>
                  <h5 className="fw-bold">Certifica tu esfuerzo</h5>
                  <p className="text-muted">Al finalizar cada reto, puedes recibir certificados o recompensas que validan tu participación activa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="como-funciona-section py-5 text-white" id="como-funciona">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-5 fw-bold">¿Cómo funciona?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4" data-aos="zoom-in">
              <div className="card glass-card p-4 h-100">
                <h5 className="fw-bold mb-3">1. Regístrate</h5>
                <p>
                  Crea tu cuenta gratuita como <strong>estudiante</strong> o <strong>empresa</strong>. Configura tu perfil, destaca tus habilidades o los talentos que buscas y prepárate para conectar.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card glass-card p-4 h-100">
                <h5 className="fw-bold mb-3">2. Participa o publica</h5>
                <p>
                  Si eres estudiante, <strong>postúlate a retos reales</strong> creados por empresas. Si eres empresa, <strong>publica desafíos</strong> relacionados a tus proyectos para evaluar talento en acción.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card glass-card p-4 h-100">
                <h5 className="fw-bold mb-3">3. Evalúa y gana</h5>
                <p>
                  Los retos son revisados por las empresas. Si destacas, puedes recibir <strong>certificados, oportunidades reales o recompensas</strong>. ¡Demuestra tu potencial y haz crecer tu carrera!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section id="contratar" className="feature-section container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold text-primary">¿Eres una empresa?</h2>
        <p className="text-center mb-5">
          Publica retos y encuentra talento joven sin experiencia, pero con ganas de innovar y crecer contigo.
        </p>

        <div className="row text-center">
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <div className="card company-card h-100">
              <div className="card-body">
                <i className="bi bi-lightbulb-fill fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Ideas frescas</h5>
                <p className="text-muted">Recibe soluciones creativas desde la perspectiva de mentes jóvenes y motivadas.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card company-card h-100">
              <div className="card-body">
                <i className="bi bi-graph-up-arrow fs-1 text-success mb-3"></i>
                <h5 className="fw-bold">Evalúa talento</h5>
                <p className="text-muted">Observa cómo se desempeñan antes de considerar contrataciones reales.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card company-card h-100">
              <div className="card-body">
                <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Impulsa el futuro</h5>
                <p className="text-muted">Apoya la formación profesional de quienes serán parte del mercado laboral del mañana.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTUDIANTES */}
      <section id="trabajar" className="feature-section container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold text-success">¿Eres estudiante o egresado?</h2>
        <p className="text-center mb-3">
          Vive experiencias reales, construye tu portafolio y prepárate para el mundo laboral desde hoy.
        </p>

        <div className="text-center mb-5">
          <a
            href="https://mega.nz/file/EEhQXJCC#mzO93kGsr9vrPrRcURYdvSYqqNTIzAjUeQ_ewN9gLEY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-4 py-2 shadow-sm"
            style={{ borderRadius: "12px", fontWeight: 600 }}
          >
            📲 Descarga nuestra app
          </a>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <div className="card student-card h-100">
              <div className="card-body">
                <i className="bi bi-award-fill fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Certifica tu talento</h5>
                <p className="text-muted">
                  Obtén constancias de participación y demuestra tus habilidades con hechos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card student-card h-100">
              <div className="card-body">
                <i className="bi bi-laptop-fill fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Aprende haciendo</h5>
                <p className="text-muted">
                  Resuelve problemas reales y gana experiencia sin necesidad de prácticas laborales tradicionales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card student-card h-100">
              <div className="card-body">
                <i className="bi bi-cash-coin fs-1 text-success mb-3"></i>
                <h5 className="fw-bold">Gana recompensas</h5>
                <p className="text-muted">
                  Los retos pueden incluir premios, mentorías o acceso a oportunidades laborales reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO DE TRABAJO */}
      <section className="equipo-section py-5 bg-light" id="equipo" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-5 fw-bold text-center">Nuestro Equipo</h2>

          <div className="row justify-content-center g-4 mb-4">
            {[{
              avatar: avatar1,
              nombre: "Quispe Guzman Ribeyro Sayder",
              rol: "Backend Developer",
              descripcion: "Encargado de la lógica de negocio y estructura de base de datos."
            }, {
              avatar: avatar2,
              nombre: "Aroni Suaña Linda Gabriela",
              rol: "Frontend / UX UI",
              descripcion: "Diseño de interfaz de usuario e implementación visual."
            }, {
              avatar: avatar3,
              nombre: "Sebastian Becerra",
              rol: "Marketing",
              descripcion: "Estrategias para la visibilidad y posicionamiento de Full Chamba."
            }].map((miembro, index) => (
              <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="team-horizontal">
                  <img src={miembro.avatar.src} alt={miembro.nombre} className="team-avatar-horizontal" />
                  <div className="team-info">
                    <h6>{miembro.nombre}</h6>
                    <p className="mb-1 fw-medium text-primary">{miembro.rol}</p>
                    <p>{miembro.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center g-4 mb-4">
            {[{
              avatar: avatar4,
              nombre: "Pisconte Chuctaya Santiago Joel",
              rol: "Frontend / UX UI",
              descripcion: "Lideró el desarrollo visual y experiencia de usuario."
            }, {
              avatar: avatar5,
              nombre: "Ayllón Rubio Patrick Hugo",
              rol: "Backend Developer",
              descripcion: "Integración de servicios y mantenimiento de endpoints."
            }, {
              avatar: avatar6,
              nombre: "Malque Zurita Willians Leonardo",
              rol: "Backend Developer",
              descripcion: "Gestión de base de datos y optimización de queries."
            }].map((miembro, index) => (
              <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="team-horizontal">
                  <img src={miembro.avatar.src} alt={miembro.nombre} className="team-avatar-horizontal" />
                  <div className="team-info">
                    <h6>{miembro.nombre}</h6>
                    <p className="mb-1 fw-medium text-primary">{miembro.rol}</p>
                    <p>{miembro.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center g-4">
            {[{
              avatar: avatar7,
              nombre: "Huerta Gonzales Luis Enrique",
              rol: "Móvil / UX UI",
              descripcion: "Diseño e implementación de la aplicación móvil."
            }, {
              avatar: avatar8,
              nombre: "Caya Poma Kevin Daniel",
              rol: "Móvil / UX UI",
              descripcion: "Interfaz móvil y experiencia de usuario en app."
            }].map((miembro, index) => (
              <div className="col-md-5" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="team-horizontal">
                  <img src={miembro.avatar.src} alt={miembro.nombre} className="team-avatar-horizontal" />
                  <div className="team-info">
                    <h6>{miembro.nombre}</h6>
                    <p className="mb-1 fw-medium text-primary">{miembro.rol}</p>
                    <p>{miembro.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMACIÓN DE LA EMPRESA - NO ES FOOTER PRINCIPAL */}
      <section className="empresa-info-section py-5 glass-footer" data-aos="fade-up">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3 text-primary">¿Quiénes somos?</h5>
              <ul className="list-unstyled small">
                <li><a href="#quienes-somos" className="empresa-link">Sobre Full Chamba</a></li>
                <li><a href="#equipo" className="empresa-link">Nuestro equipo</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3 text-primary">Recursos</h5>
              <ul className="list-unstyled small">
                <li><a href="#como-funciona" className="empresa-link">Cómo funciona</a></li>
                <li><a href="#" className="empresa-link">Centro de ayuda</a></li>
                <li><a href="#contratar" className="empresa-link">Para empresas</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3 text-primary">Categorías</h5>
              <ul className="list-unstyled small">
                <li><a className="empresa-link">Diseño & UX/UI</a></li>
                <li><a className="empresa-link">Marketing digital</a></li>
                <li><a className="empresa-link">Soporte administrativo</a></li>
                <li><a className="empresa-link">Producción audiovisual</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3 text-primary">Síguenos</h5>
              <div className="d-flex gap-3 justify-content-md-start justify-content-center mb-3">
                <a href="https://www.instagram.com/fullchambaworking/" className="text-primary fs-5"><i className="bi bi-instagram"></i></a>
              </div>
              <p className="small text-muted">
                ¿Tienes preguntas? <br />
                <strong>fullchamba.devs@gmail.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>




    </main>
  );
};

export default Content;
