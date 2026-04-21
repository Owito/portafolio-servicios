import type { ElementType } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

type ServiceItem = {
  title: string;
  description: string;
  benefits: string[];
  icon: ElementType;
};

type StepItem = {
  title: string;
  description: string;
  icon: ElementType;
};

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const services: ServiceItem[] = [
  {
    title: "Estrategia digital",
    description:
      "Alineamos objetivos de negocio, propuesta de valor y mensajes para que cada visita tenga una direccion clara.",
    benefits: ["Mapa de objetivos", "Definicion de audiencias", "Narrativa comercial"],
    icon: CampaignRoundedIcon,
  },
  {
    title: "Diseno UI/UX",
    description:
      "Creamos experiencias visuales consistentes, faciles de navegar y enfocadas en claridad, confianza y conversion.",
    benefits: ["Arquitectura onepage", "Sistema visual", "Prototipo navegable"],
    icon: DesignServicesRoundedIcon,
  },
  {
    title: "Desarrollo web",
    description:
      "Implementamos una base tecnica estable y escalable con rendimiento optimizado para captar y filtrar oportunidades.",
    benefits: ["Implementacion Next.js", "Buenas practicas SEO", "Formularios listos"],
    icon: BuildRoundedIcon,
  },
  {
    title: "Analitica y mejora",
    description:
      "Medimos el comportamiento de usuarios para iterar contenido, ofertas y llamadas a la accion con evidencia real.",
    benefits: ["Eventos clave", "Dashboard operativo", "Plan de iteraciones"],
    icon: BarChartRoundedIcon,
  },
];

const processSteps: StepItem[] = [
  {
    title: "Descubrimiento",
    description:
      "Entendemos contexto, oferta y retos para definir una direccion realista y priorizada.",
    icon: RouteRoundedIcon,
  },
  {
    title: "Estrategia",
    description:
      "Traducimos objetivos a estructura, contenido y decisiones de experiencia que faciliten la conversion.",
    icon: AutoAwesomeRoundedIcon,
  },
  {
    title: "Implementacion",
    description:
      "Construimos la onepage con base Material 3 y criterios de calidad para desktop y mobile.",
    icon: RocketLaunchRoundedIcon,
  },
  {
    title: "Mejora continua",
    description:
      "Ajustamos mensajes, orden de secciones y CTA segun datos y resultados de uso.",
    icon: TuneRoundedIcon,
  },
];

const testimonials = [
  {
    quote:
      "En tres semanas pasamos de una presentacion dispersa a una landing clara. Subieron las consultas calificadas desde el primer mes.",
    name: "Laura M.",
    role: "Directora comercial",
  },
  {
    quote:
      "Lo mejor fue el proceso: cada decision tenia sentido de negocio y ahora el equipo vende con un mensaje unificado.",
    name: "Santiago R.",
    role: "Fundador",
  },
  {
    quote:
      "La nueva onepage nos ayudo a explicar servicios complejos de forma simple. Hoy tenemos reuniones mejor preparadas.",
    name: "Paula V.",
    role: "Consultora senior",
  },
];

const faqs = [
  {
    question: "Cuanto tarda una onepage completa?",
    answer:
      "Normalmente entre 2 y 4 semanas, segun nivel de detalle, revision de contenidos y alcance de integraciones.",
  },
  {
    question: "Que incluye el alcance inicial?",
    answer:
      "Incluye discovery breve, arquitectura de secciones, diseno de interfaz, implementacion tecnica y ajustes de lanzamiento.",
  },
  {
    question: "Pueden trabajar con mi identidad actual?",
    answer:
      "Si. Podemos respetar lineamientos existentes o proponer una evolucion visual manteniendo coherencia con tu marca.",
  },
  {
    question: "Ofrecen soporte despues del lanzamiento?",
    answer:
      "Si, con bolsa de horas mensual para mejoras, actualizacion de contenidos y optimizacion continua basada en datos.",
  },
];

export default function Home() {
  return (
    <Box id="inicio" sx={{ pb: { xs: 10, md: 14 } }}>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          bgcolor: "rgba(248, 249, 255, 0.78)",
          borderBottom: "1px solid rgba(68, 94, 145, 0.16)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            <Stack direction="row" spacing={1.25} sx={{ flexGrow: 1, alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>EH</Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ lineHeight: 1.1 }}>
                  Estudio Horizonte
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Portafolio de servicios digitales
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={0.75}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Button key={item.href} href={item.href} color="inherit">
                  {item.label}
                </Button>
              ))}
              <Button variant="contained" href="#contacto" endIcon={<CallMadeRoundedIcon />}>
                Solicitar diagnostico
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 12 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "center",
          }}
        >
          <Box className="reveal-up">
            <Chip
              label="Onepage lista para conversion"
              color="primary"
              sx={{ mb: 2.5 }}
              icon={<TaskAltRoundedIcon />}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.25rem", md: "4rem" }, mb: 2 }}>
              Transformamos tu portafolio de servicios en una experiencia que comunica valor.
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 680, mb: 4 }}>
              Diseno, desarrollo y optimizacion en un solo flujo para que tu negocio genere
              confianza, claridad comercial y oportunidades reales.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                variant="contained"
                href="#contacto"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Solicitar diagnostico
              </Button>
              <Button
                variant="contained"
                href="#servicios"
                sx={{
                  bgcolor: "secondary.light",
                  color: "secondary.dark",
                  "&:hover": {
                    bgcolor: "secondary.light",
                    opacity: 0.92,
                  },
                }}
              >
                Ver servicios
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ mt: 4, flexWrap: "wrap" }}
            >
              <Chip label="Base Material 3" variant="outlined" />
              <Chip label="Mobile first" variant="outlined" />
              <Chip label="SEO tecnico" variant="outlined" />
            </Stack>
          </Box>

          <Paper
            className="reveal-up reveal-delay-2"
            elevation={0}
            sx={{
              borderRadius: 6,
              p: { xs: 3, md: 4 },
              border: "1px solid rgba(68, 94, 145, 0.2)",
              bgcolor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Diagnostico express de presencia digital
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Evaluamos estructura, mensaje y experiencia de usuario para detectar fricciones y
              priorizar acciones de alto impacto en 30 dias.
            </Typography>
            <Stack spacing={1.75}>
              {[
                "Auditoria de propuesta de valor",
                "Lectura de conversion por secciones",
                "Checklist SEO y rendimiento",
                "Plan de mejoras por prioridad",
              ].map((item) => (
                <Stack key={item} direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
                  <CheckCircleRoundedIcon color="primary" fontSize="small" />
                  <Typography variant="body2">{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 9, md: 12 } }}>
        <Stack id="servicios" className="section-anchor" spacing={1.5} sx={{ mb: 4 }}>
          <Typography variant="overline" color="primary.main">
            Servicios
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "3rem" } }}>
            Soluciones disenadas para convertir visitas en conversaciones utiles.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 2.5,
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`reveal-up reveal-delay-${(index % 3) + 1}`}
                sx={{ height: "100%" }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
                  >
                    <Typography variant="h5">{service.title}</Typography>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <Icon fontSize="small" />
                    </Avatar>
                  </Stack>
                  <Typography variant="body2" sx={{ mb: 2.5 }}>
                    {service.description}
                  </Typography>
                  <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
                    {service.benefits.map((benefit) => (
                      <Chip key={benefit} size="small" label={benefit} variant="outlined" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 9, md: 12 } }}>
        <Stack id="proceso" className="section-anchor" spacing={1.5} sx={{ mb: 4 }}>
          <Typography variant="overline" color="primary.main">
            Proceso
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "3rem" } }}>
            Un flujo simple, colaborativo y orientado a resultados medibles.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Paper
                key={step.title}
                className={`reveal-up reveal-delay-${(index % 3) + 1}`}
                sx={{
                  p: 2.5,
                  borderRadius: 5,
                  border: "1px solid rgba(68, 94, 145, 0.2)",
                  bgcolor: "rgba(255, 255, 255, 0.76)",
                }}
              >
                <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", mb: 1.4 }}>
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    <Icon fontSize="small" />
                  </Avatar>
                  <Chip label={`Paso ${index + 1}`} size="small" color="secondary" />
                </Stack>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </Paper>
            );
          })}
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 9, md: 12 } }}>
        <Stack id="testimonios" className="section-anchor" spacing={1.5} sx={{ mb: 4 }}>
          <Typography variant="overline" color="primary.main">
            Testimonios
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "3rem" } }}>
            Equipos que ahora presentan sus servicios con mayor claridad y confianza.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {testimonials.map((item, index) => (
            <Card key={item.name} className={`reveal-up reveal-delay-${(index % 3) + 1}`}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body1" sx={{ mb: 2.5 }}>
                  {`"${item.quote}"`}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2">{item.role}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 9, md: 12 } }}>
        <Stack id="faq" className="section-anchor" spacing={1.5} sx={{ mb: 4 }}>
          <Typography variant="overline" color="primary.main">
            Preguntas frecuentes
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "3rem" } }}>
            Todo lo esencial para comenzar sin friccion.
          </Typography>
        </Stack>
        <Box>
          {faqs.map((faq) => (
            <Accordion key={faq.question} className="reveal-up">
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                <Typography variant="subtitle1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 9, md: 12 } }}>
        <Paper
          id="contacto"
          className="section-anchor reveal-up"
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 7,
            border: "1px solid rgba(68, 94, 145, 0.2)",
            bgcolor: "rgba(255, 255, 255, 0.86)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
              gap: { xs: 3, md: 4 },
            }}
          >
            <Box>
              <Typography variant="overline" color="primary.main">
                Contacto
              </Typography>
              <Typography variant="h3" sx={{ mt: 1, mb: 1.5 }}>
                Cuentanos tu reto y te proponemos un plan accionable.
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Respuesta inicial en menos de 24 horas habiles, con un enfoque claro en objetivos,
                alcance y resultados esperados.
              </Typography>
              <Stack spacing={1.25}>
                <Chip label="contacto@estudiohorizonte.com" variant="outlined" />
                <Chip label="WhatsApp: +57 300 000 0000" variant="outlined" />
              </Stack>
            </Box>
            <Stack
              component="form"
              spacing={1.5}
              sx={{
                bgcolor: "background.paper",
                border: "1px solid rgba(68, 94, 145, 0.16)",
                borderRadius: 5,
                p: { xs: 2.25, md: 2.5 },
              }}
            >
              <TextField label="Nombre" name="name" fullWidth />
              <TextField label="Correo" type="email" name="email" fullWidth />
              <TextField label="Tipo de proyecto" select defaultValue="landing" fullWidth>
                <MenuItem value="landing">Landing onepage</MenuItem>
                <MenuItem value="sitio">Sitio corporativo</MenuItem>
                <MenuItem value="redesign">Rediseno UX/UI</MenuItem>
              </TextField>
              <TextField label="Rango de presupuesto" select defaultValue="medio" fullWidth>
                <MenuItem value="bajo">USD 1.000 - 2.500</MenuItem>
                <MenuItem value="medio">USD 2.500 - 6.000</MenuItem>
                <MenuItem value="alto">USD 6.000+</MenuItem>
              </TextField>
              <TextField
                label="Mensaje"
                name="message"
                multiline
                minRows={4}
                placeholder="Comparte objetivo principal, fecha ideal y contexto actual."
                fullWidth
              />
              <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                Enviar solicitud
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 9 } }}>
        <Box
          sx={{
            borderTop: "1px solid rgba(68, 94, 145, 0.18)",
            pt: 3,
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2">
            Estudio Horizonte. Diseno y desarrollo digital para servicios que necesitan vender con
            claridad.
          </Typography>
          <Typography variant="body2">2026 - Todos los derechos reservados.</Typography>
        </Box>
      </Container>

      <Fab
        href="#inicio"
        size="medium"
        color="secondary"
        aria-label="Volver arriba"
        sx={{
          position: "fixed",
          right: { xs: 16, md: 26 },
          bottom: { xs: 16, md: 30 },
          zIndex: 1200,
        }}
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </Box>
  );
}
