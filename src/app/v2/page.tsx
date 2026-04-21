import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio v2 | Neo-brutalista",
  description:
    "Landing neo-brutalista sin Material 3 - una version alternativa con personalidad fuerte y diseño disruptivo.",
};

const services = [
  {
    title: "Estrategia digital",
    description:
      "Definimos una hoja de ruta clara para que la landing venda tu valor sin depender de explicaciones largas.",
    icon: "📊",
    benefits: ["Prioridades comerciales", "Arquitectura de mensajes", "Ruta de conversion"],
  },
  {
    title: "Diseño UI/UX",
    description:
      "Creamos una interfaz diferenciada que transmite confianza, mejora lectura y acelera decisiones del cliente.",
    icon: "🎨",
    benefits: ["Sistema visual", "Prototipo interactivo", "Jerarquia de contenido"],
  },
  {
    title: "Desarrollo web",
    description:
      "Implementamos una base robusta en Next.js para escalar sin rehacer tu sitio desde cero.",
    icon: "⚡",
    benefits: ["Codigo mantenible", "SEO tecnico", "Performance web"],
  },
  {
    title: "Optimizacion continua",
    description:
      "Medimos comportamiento real para ajustar secciones y CTA con foco en conversion y calidad de leads.",
    icon: "📈",
    benefits: ["Panel de metricas", "Ajustes iterativos", "Hipotesis accionables"],
  },
];

const processSteps = [
  { title: "Discovery", description: "Analizamos negocio, audiencia y diferencial para evitar una landing generica." },
  { title: "Definicion", description: "Estructuramos narrativa, bloques y CTA para guiar la lectura hacia una accion concreta." },
  { title: "Produccion", description: "Construimos la onepage responsive con accesibilidad y rendimiento optimizado." },
  { title: "Refinamiento", description: "Monitoreamos uso y evolucionamos el contenido para mejorar conversion." },
];

const stats = [
  { label: "Tasa de contacto", value: "+38%" },
  { label: "Tiempo de lectura", value: "3.2 min" },
  { label: "Leads calificados", value: "+52%" },
];

const testimonials = [
  {
    quote:
      "Pasamos de mostrar servicios sueltos a contar una historia coherente. En un mes mejoro la calidad de las reuniones.",
    name: "Laura M.",
    role: "Directora comercial",
  },
  {
    quote:
      "Lo mas valioso fue la claridad: ahora cada seccion responde una objecion concreta y cierra mejor.",
    name: "Santiago R.",
    role: "Fundador",
  },
  {
    quote:
      "La interfaz se siente premium y practica. El cliente entiende rapido nuestro alcance y nos contacta mejor informado.",
    name: "Paula V.",
    role: "Consultora senior",
  },
];

const faqs = [
  {
    question: "Cuanto tarda una onepage completa?",
    answer:
      "Entre 2 y 4 semanas segun alcance, disponibilidad de contenido y numero de rondas de revision.",
  },
  {
    question: "Que incluye el servicio base?",
    answer:
      "Incluye discovery, arquitectura de contenido, diseño UI, desarrollo, ajustes de lanzamiento y soporte inicial.",
  },
  {
    question: "Pueden trabajar con mi identidad visual actual?",
    answer:
      "Si. Podemos respetar tu sistema actual o proponer una evolucion sin perder consistencia.",
  },
  {
    question: "Como se mide el exito del proyecto?",
    answer:
      "Definimos metricas clave antes de producir: conversion, tiempo de lectura y calidad de contacto.",
  },
];

export default function V2Page() {
  return (
    <main>
      <nav className="neo-nav">
        <div className="neo-container neo-nav-content">
          <Link href="/v2" className="neo-logo">
            EH V2
          </Link>
          <div className="neo-nav-links">
            <Link href="/v2#servicios">Servicios</Link>
            <Link href="/v2#proceso">Proceso</Link>
            <Link href="/v2#resultados">Resultados</Link>
            <Link href="/v2#faq">FAQ</Link>
            <Link href="/v2#contacto" className="neo-btn neo-btn-primary">
              Agenda
            </Link>
            <Link href="/" className="neo-chip">
              Ver M3
            </Link>
          </div>
        </div>
      </nav>

      <section className="neo-hero">
        <div className="neo-container neo-hero-content">
          <div>
            <span className="neo-badge">Neo-brutalista v2</span>
            <h1>Una interfaz con personalidad para vender tus servicios con claridad.</h1>
            <p>
              Combinamos estrategia, diseño y desarrollo para que tu presencia digital no solo se
              vea mejor: tambien convierta mejor.
            </p>
            <div className="neo-hero-btns">
              <Link href="/v2#contacto" className="neo-btn neo-btn-primary">
                Solicitar diagnostico →
              </Link>
              <Link href="/v2#servicios" className="neo-btn neo-btn-secondary">
                Explorar servicios
              </Link>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {stats.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#0a0a0a",
                    color: "#FFDE00",
                    padding: "1rem 1.5rem",
                    border: "3px solid #0a0a0a",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: 900 }}>{item.value}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="neo-card"
            style={{
              background: "#0a0a0a",
              color: "#FFDE00",
              borderColor: "#0a0a0a",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textTransform: "uppercase" }}>
              Radar de oportunidad
            </h3>
            <p style={{ marginBottom: "1.5rem", opacity: 0.9 }}>
              Detectamos los bloqueos que frenan conversion y te entregamos un plan accionable en 5 dias.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Mapa de narrativa y propuesta de valor",
                "Lectura UX por capas de decision",
                "Revision tecnica de SEO y velocidad",
                "Backlog priorizado para 30 dias",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: "#00FF66", fontSize: "1.25rem" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="servicios" className="neo-section">
        <div className="neo-container">
          <span className="label">Servicios</span>
          <h2>Soluciones con enfoque comercial, no solo visual.</h2>
          <div className="neo-grid-2">
            {services.map((service) => (
              <div key={service.title} className="neo-card">
                <div className="neo-card-icon">{service.icon}</div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ marginBottom: "1rem", fontWeight: 500 }}>
                  {service.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {service.benefits.map((benefit) => (
                    <span key={benefit} className="neo-chip neo-chip-outline">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="neo-section neo-section-alt">
        <div className="neo-container">
          <span className="label">Proceso</span>
          <h2>Un flujo claro para entregar valor desde la primera semana.</h2>
          <div className="neo-grid-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                style={{
                  background: "#0a0a0a",
                  color: "#FFDE00",
                  padding: "1.5rem",
                  border: "4px solid #0a0a0a",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    background: "#FF3CAC",
                    color: "#FAFAFA",
                    padding: "0.25rem 0.75rem",
                    display: "inline-block",
                    marginBottom: "1rem",
                    border: "2px solid #0a0a0a",
                  }}
                >
                  FASE {index + 1}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontWeight: 500, fontSize: "0.875rem" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="neo-section">
        <div className="neo-container">
          <span className="label">Resultados y testimonios</span>
          <h2>Impacto real en equipos que venden servicios especializados.</h2>
          <div className="neo-grid-4" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="neo-card"
                style={{ background: "#FFDE00" }}
              >
                <p style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1.5rem", fontStyle: "italic" }}>
                  &quot;{item.quote}&quot;
                </p>
                <div
                  style={{
                    borderTop: "3px solid #0a0a0a",
                    paddingTop: "1rem",
                  }}
                >
                  <div style={{ fontWeight: 800 }}>{item.name}</div>
                  <div style={{ fontWeight: 500, fontSize: "0.875rem" }}>{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="neo-section neo-section-alt">
        <div className="neo-container">
          <span className="label">Preguntas frecuentes</span>
          <h2>Respuestas rapidas para avanzar sin friccion.</h2>
          <div>
            {faqs.map((faq) => (
              <div key={faq.question} className="neo-faq-item">
                <div className="neo-faq-question">
                  {faq.question}
                  <span style={{ fontSize: "1.5rem" }}>+</span>
                </div>
                <div className="neo-faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="neo-section">
        <div className="neo-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              background: "#0a0a0a",
              color: "#FFDE00",
              padding: "3rem",
              border: "4px solid #0a0a0a",
            }}
          >
            <div>
              <span className="label" style={{ color: "#FFDE00" }}>Contacto</span>
              <h2
                style={{
                  fontSize: "2rem",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                Cuentanos tu objetivo
              </h2>
              <p style={{ marginBottom: "2rem", fontWeight: 500 }}>
                Recibiras una propuesta inicial en menos de 24 horas habiles.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span className="neo-chip">contacto@estudiohorizonte.com</span>
                <span className="neo-chip">WhatsApp: +57 300 000 0000</span>
              </div>
            </div>
            <form className="neo-form">
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Correo" />
              <select>
                <option>Landing onepage</option>
                <option>Sitio corporativo</option>
                <option>Rediseño UI/UX</option>
              </select>
              <select>
                <option>USD 1.000 - 2.500</option>
                <option>USD 2.500 - 6.000</option>
                <option>USD 6.000+</option>
              </select>
              <textarea
                rows={4}
                placeholder="Comparte contexto, objetivo principal y fecha ideal."
              />
              <button type="submit">Enviar solicitud →</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="neo-footer">
        <div className="neo-container">
          <p>Estudio Horizonte. Interfaces estrategicas para negocios de servicios.</p>
          <p style={{ marginTop: "0.5rem", opacity: 0.6 }}>
            2026 - Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}