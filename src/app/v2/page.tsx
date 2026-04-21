import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudio Horizonte | Ingeniería de Software de Próxima Generación",
  description:
    "Unidad de élite en Arquitectura de Software y Operaciones Cloud. Ayudamos a las empresas a escalar con seguridad, eficiencia y diseño inteligente.",
};

const services = [
  {
    title: "Cloud Architecture & Modernization",
    description:
      "Diseñamos la base donde vive su negocio. Transiciones seguras a Azure o AWS, Kubernetes para 99.9% de disponibilidad, y optimización de costos.",
    icon: "☁️",
    benefits: ["Migraciones Enterprise", "Kubernetes", "Optimización de costos"],
  },
  {
    title: "Automatización de Operaciones",
    description:
      "Hacemos que la tecnología trabaje por usted. Workflows con n8n, integración de herramientas y dashboards en tiempo real.",
    icon: "⚙️",
    benefits: ["Workflows Inteligentes", "Integración de ecosistemas", "Dashboards de control"],
  },
  {
    title: "Ingeniería de Alto Rendimiento",
    description:
      "Desarrollo donde cada milisegundo cuenta. Backend con Rust y Go, Privacy by Design y APIs escalables.",
    icon: "🚀",
    benefits: ["Rust / Go", "Privacy by Design", "APIs robustas"],
  },
];

const methods = [
  { title: "Diagnóstico", description: "Evaluamos deuda técnica y cuellos de botella" },
  { title: "Diseño", description: "Solución bajo estándares internacionales" },
  { title: "Ejecución", description: "Entregas incrementales con especialistas" },
  { title: "Transferencia", description: "Capacitamos, no creamos dependencia" },
];

const stack = [
  { category: "Lenguajes", items: "Rust, Go, Python, Node.js" },
  { category: "Cloud & DevOps", items: "Azure, Kubernetes, Terraform, Docker" },
  { category: "Bases de Datos", items: "PostgreSQL, Redis, MongoDB" },
  { category: "Automatización", items: "n8n, Airtable, APIs" },
];

const testimonials = [
  {
    quote:
      "Nuestra facturación en Azure bajó 40% en 3 meses después de su auditoría. El enfoque técnico es ruthless.",
    name: "Miguel R.",
    role: "CTO, Fintech regional",
  },
  {
    quote:
      "Migrareon 200 microservicios a Kubernetes sin downtime perceptible. El equipo opera con confianza.",
    name: "Carolina L.",
    role: "Directora de Ingeniería",
  },
  {
    quote:
      "Por primera vez tenemos visibilidad en tiempo real de nuestras métricas. eso cambio todo.",
    name: "Andres T.",
    role: "Founder SaaS",
  },
];

const faqs = [
  {
    question: "Cuánto tiempo toma una migración típica?",
    answer:
      "Entre 4 y 12 semanas dependiendo del alcance. Trabajamos en sprints de 2 semanas con entregas incrementales.",
  },
  {
    question: "Trabajamos con otras nubes además de Azure?",
    answer:
      "Si. Tenemos experiencia con AWS, GCP y On-Premise. Recomendamos basada en su caso de uso específico.",
  },
  {
    question: "Ofrecen soporte posterior al lanzamiento?",
    answer:
      "Si, con contratos de retención técnica. Monitoreo, parches de seguridad y mejoras continuas.",
  },
  {
    question: "Cloud Readiness Audit qué incluye?",
    answer:
      "Análisis de arquitectura actual, identificación de riesgos, oportunidades de ahorro y hoja de ruta priorizada en 30 días.",
  },
];

export default function V2Page() {
  return (
    <main>
      <nav className="neo-nav">
        <div className="neo-container neo-nav-content">
          <Link href="/v2" className="neo-logo">
            EH
          </Link>
          <div className="neo-nav-links">
            <Link href="/v2#servicios">Servicios</Link>
            <Link href="/v2#metodo">Método</Link>
            <Link href="/v2#stack">Stack</Link>
            <Link href="/v2#faq">FAQ</Link>
            <Link href="/v2#contacto" className="neo-btn neo-btn-primary">
              Audit
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
            <span className="neo-badge">INGENIERÍA DE SOFTWARE</span>
            <h1>Próxima Generación</h1>
            <p>
              Unidad de élite en Arquitectura de Software y Operaciones Cloud. Forjados en la
              resolución de desafíos técnicos complejos, ayudamos a escalar con seguridad, eficiencia
              y diseño inteligente.
            </p>
            <div className="neo-hero-btns">
              <Link href="/v2#contacto" className="neo-btn neo-btn-primary">
                Cloud Readiness Audit →
              </Link>
              <Link href="/v2#servicios" className="neo-btn neo-btn-secondary">
                Ver servicios
              </Link>
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
            <h3
              style={{ fontSize: "1.5rem", marginBottom: "1rem", textTransform: "uppercase" }}
            >
              Diagnóstico Gratis
            </h3>
            <p style={{ marginBottom: "1.5rem", opacity: 0.9 }}>
              Evaluamos tu arquitectura actual y te entregamos un informe con riesgos y oportunidades de ahorro.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Auditoría de deuda técnica",
                "Análisis de costos cloud",
                "Hoja de ruta priorizada",
                "Sesión de revisión de 45 min",
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
          <span className="label">Líneas de Servicio</span>
          <h2>Expertisis que resuelven problemas reales.</h2>
          <div className="neo-grid-2">
            {services.map((service) => (
              <div key={service.title} className="neo-card">
                <div className="neo-card-icon">{service.icon}</div>
                <h3
                  style={{
                    fontSize: "1.25rem",
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

      <section id="metodo" className="neo-section neo-section-alt">
        <div className="neo-container">
          <span className="label">El Método ARQUITECTO</span>
          <h2>No programamos. Ingeniería rigorosa.</h2>
          <div className="neo-grid-4">
            {methods.map((step, index) => (
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
                <p style={{ fontWeight: 500, fontSize: "0.875rem" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="neo-section">
        <div className="neo-container">
          <span className="label">Tecnologías</span>
          <h2>Lo que dominamos.</h2>
          <div className="neo-grid-4">
            {stack.map((tech) => (
              <div
                key={tech.category}
                className="neo-card"
                style={{ background: "#FFDE00" }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tech.category}
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>{tech.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="neo-section neo-section-alt">
        <div className="neo-container">
          <span className="label">Resultados</span>
          <h2>Impacto medible en empresas reales.</h2>
          <div className="neo-grid-4" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {testimonials.map((item) => (
              <div key={item.name} className="neo-card" style={{ background: "#FFDE00" }}>
                <p
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  &quot;{item.quote}&quot;
                </p>
                <div
                  style={{
                    borderTop: "3px solid #0a0a0a",
                    paddingTop: "1rem",
                  }}
                >
                  <div style={{ fontWeight: 800 }}>{item.name}</div>
                  <div style={{ fontWeight: 500, fontSize: "0.875rem" }}>
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="neo-section">
        <div className="neo-container">
          <span className="label">Preguntas</span>
          <h2>Respuestas directassss.</h2>
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

      <section id="contacto" className="neo-section neo-section-alt">
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
              <span className="label" style={{ color: "#FFDE00" }}>
                Contacto
              </span>
              <h2
                style={{
                  fontSize: "2rem",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                Empecemos
              </h2>
              <p style={{ marginBottom: "2rem", fontWeight: 500 }}>
                Cuéntanos tu desafío técnico. Te respondemos en menos de 24 horas con una evaluación inicial.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span className="neo-chip">hola@estudiohorizonte.com</span>
                <span className="neo-chip">WhatsApp: +57 300 000 0000</span>
              </div>
            </div>
            <form className="neo-form">
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Correo" />
              <select>
                <option>Cloud Readiness Audit</option>
                <option>Migración a Kubernetes</option>
                <option>Optimización de costos</option>
                <option>Automatización</option>
              </select>
              <select>
                <option>USD 1.000 - 2.500</option>
                <option>USD 2.500 - 6.000</option>
                <option>USD 6.000+</option>
              </select>
              <textarea rows={4} placeholder="Describe tu desafío técnico..." />
              <button type="submit">Solicitar evaluación →</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="neo-footer">
        <div className="neo-container">
          <p>
            Estudio Horizonte. Ingeniería de software de próxima generación.
          </p>
          <p style={{ marginTop: "0.5rem", opacity: 0.6 }}>
            2026 - Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}