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
import IconButton from "@mui/material/IconButton";
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
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
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
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const services: ServiceItem[] = [
  {
    title: "Estrategia digital",
    description:
      "Definimos una hoja de ruta clara para que la landing venda tu valor sin depender de explicaciones largas.",
    benefits: ["Prioridades comerciales", "Arquitectura de mensajes", "Ruta de conversion"],
    icon: CampaignRoundedIcon,
  },
  {
    title: "Diseno UI/UX",
    description:
      "Creamos una interfaz diferenciada que transmite confianza, mejora lectura y acelera decisiones del cliente.",
    benefits: ["Sistema visual", "Prototipo interactivo", "Jerarquia de contenido"],
    icon: DesignServicesRoundedIcon,
  },
  {
    title: "Desarrollo web",
    description:
      "Implementamos una base robusta en Next.js y Material 3 para escalar sin rehacer tu sitio desde cero.",
    benefits: ["Codigo mantenible", "SEO tecnico", "Performance web"],
    icon: BuildRoundedIcon,
  },
  {
    title: "Optimizacion continua",
    description:
      "Medimos comportamiento real para ajustar secciones y CTA con foco en conversion y calidad de leads.",
    benefits: ["Panel de metricas", "Ajustes iterativos", "Hipotesis accionables"],
    icon: BarChartRoundedIcon,
  },
];

const processSteps: StepItem[] = [
  {
    title: "Discovery",
    description:
      "Analizamos negocio, audiencia y diferencial para evitar una landing generica y sin direccion.",
    icon: RouteRoundedIcon,
  },
  {
    title: "Definicion",
    description:
      "Estructuramos narrativa, bloques y CTA para guiar la lectura hacia una accion concreta.",
    icon: AutoAwesomeRoundedIcon,
  },
  {
    title: "Produccion",
    description:
      "Construimos la onepage responsive con componentes M3, accesibilidad y rendimiento optimizado.",
    icon: RocketLaunchRoundedIcon,
  },
  {
    title: "Refinamiento",
    description:
      "Monitoreamos uso y evolucionamos el contenido para mejorar conversion en ciclos cortos.",
    icon: TuneRoundedIcon,
  },
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
      "Incluye discovery, arquitectura de contenido, diseno UI, desarrollo, ajustes de lanzamiento y soporte inicial.",
  },
  {
    question: "Pueden trabajar con mi identidad visual actual?",
    answer:
      "Si. Podemos respetar tu sistema actual o proponer una evolucion sin perder consistencia de marca.",
  },
  {
    question: "Como se mide el exito del proyecto?",
    answer:
      "Definimos metricas clave antes de producir: conversion, tiempo de lectura y calidad de contacto.",
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
          bgcolor: "rgba(244, 248, 252, 0.8)",
          borderBottom: "1px solid rgba(24, 94, 122, 0.2)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76 }}>
            <Stack direction="row" spacing={1.25} sx={{ flexGrow: 1, alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 3,
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                }}
              >
                EH
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ lineHeight: 1.05 }}>
                  Estudio Horizonte
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Diseno y desarrollo de experiencias de servicio
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={0.75}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navItems.map((item) => (
                <Button key={item.href} href={item.href} color="inherit">
                  {item.label}
                </Button>
              ))}
              <Button variant="contained" href="#contacto" endIcon={<CallMadeRoundedIcon />}>
                Agenda una llamada
              </Button>
              <Button variant="outlined" href="/v2" color="inherit">
                Ver V2
              </Button>
            </Stack>

            <IconButton
              aria-label="Abrir menu"
              color="primary"
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 11 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "center",
          }}
        >
          <Box className="reveal-up">
            <Stack direction="row" spacing={1.1} sx={{ mb: 2.2, flexWrap: "wrap", gap: 1 }}>
              <Chip icon={<TaskAltRoundedIcon />} label="Onepage tipo Material 3" color="primary" />
              <Chip icon={<TimelineRoundedIcon />} label="Orientada a conversion" variant="outlined" />
            </Stack>

            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2.4rem", sm: "2.9rem", md: "4.3rem" }, mb: 2.2 }}
            >
              Una interfaz con personalidad para vender tus servicios con claridad.
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mb: 4 }}>
              Combinamos estrategia, diseno y desarrollo para que tu presencia digital no solo se
              vea mejor: tambien convierta mejor.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button variant="contained" href="#contacto" endIcon={<ArrowForwardRoundedIcon />}>
                Solicitar diagnostico
              </Button>
              <Button
                variant="outlined"
                href="#servicios"
                color="primary"
                endIcon={<ChatRoundedIcon />}
              >
                Explorar servicios
              </Button>
            </Stack>

            <Box
              sx={{
                mt: 4.5,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0,1fr))" },
                gap: 1.2,
              }}
            >
              {stats.map((item) => (
                <Paper
                  key={item.label}
                  elevation={0}
                  sx={{
                    p: 1.8,
                    borderRadius: 4,
                    border: "1px solid rgba(24, 94, 122, 0.18)",
                    bgcolor: "rgba(255, 255, 255, 0.68)",
                  }}
                >
                  <Typography variant="h5" sx={{ lineHeight: 1 }}>
                    {item.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.label}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>

          <Paper
            className="reveal-up reveal-delay-2"
            elevation={0}
            sx={{
              borderRadius: 7,
              p: { xs: 3, md: 4 },
              border: "1px solid rgba(24, 94, 122, 0.22)",
              bgcolor: "rgba(255, 255, 255, 0.84)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box className="grain-overlay" />
            <Typography variant="h5" sx={{ mb: 1.5, position: "relative" }}>
              Radar de oportunidad digital
            </Typography>
            <Typography variant="body2" sx={{ mb: 2.8, position: "relative" }}>
              Detectamos los bloqueos que frenan conversion y te entregamos un plan accionable en
              5 dias habiles.
            </Typography>

            <Stack spacing={1.6} sx={{ position: "relative" }}>
              {[
                "Mapa de narrativa y propuesta de valor",
                "Lectura UX por capas de decision",
                "Revision tecnica de SEO y velocidad",
                "Backlog priorizado para 30 dias",
              ].map((item) => (
                <Stack key={item} direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                  <CheckCircleRoundedIcon color="primary" fontSize="small" />
                  <Typography variant="body2">{item}</Typography>
                </Stack>
              ))}
            </Stack>

            <Divider sx={{ my: 2.5 }} />

            <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "secondary.main" }}>
                <StarRoundedIcon fontSize="small" />
              </Avatar>
              <Box>
                <Typography variant="subtitle2">Sesiones semanales de avance</Typography>
                <Typography variant="caption" color="text.secondary">
                  Transparencia total sobre progreso, decisiones y siguientes pasos.
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 9, md: 12 } }}>
        <Stack id="servicios" className="section-anchor" spacing={1.5} sx={{ mb: 4.2 }}>
          <Typography variant="overline" color="primary.main">
            Servicios
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.95rem", md: "3.15rem" } }}>
            Soluciones con enfoque comercial, no solo visual.
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
                sx={{ height: "100%", bgcolor: "rgba(255, 255, 255, 0.94)" }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between", alignItems: "center", mb: 2.1 }}
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
        <Paper
          id="proceso"
          className="section-anchor"
          elevation={0}
          sx={{
            p: { xs: 2.6, md: 3.4 },
            borderRadius: 7,
            border: "1px solid rgba(24, 94, 122, 0.18)",
            bgcolor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Stack spacing={1.4} sx={{ mb: 3.4 }}>
            <Typography variant="overline" color="primary.main">
              Proceso
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "3rem" } }}>
              Un flujo claro para entregar valor desde la primera semana.
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
              gap: 1.6,
            }}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Paper
                  key={step.title}
                  className={`reveal-up reveal-delay-${(index % 3) + 1}`}
                  sx={{
                    p: 2.2,
                    borderRadius: 5,
                    border: "1px solid rgba(24, 94, 122, 0.2)",
                    bgcolor: "background.paper",
                  }}
                >
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: "center", mb: 1.4 }}>
                    <Avatar sx={{ bgcolor: "secondary.main", width: 34, height: 34 }}>
                      <Icon fontSize="small" />
                    </Avatar>
                    <Chip label={`Fase ${index + 1}`} size="small" color="secondary" />
                  </Stack>
                  <Typography variant="h6" sx={{ mb: 0.8 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2">{step.description}</Typography>
                </Paper>
              );
            })}
          </Box>
        </Paper>
      </Container>

      <Container maxWidth="lg" sx={{ pt: { xs: 9, md: 12 } }}>
        <Stack id="resultados" className="section-anchor" spacing={1.5} sx={{ mb: 4.2 }}>
          <Typography variant="overline" color="primary.main">
            Resultados y testimonios
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.95rem", md: "3.1rem" } }}>
            Impacto real en equipos que venden servicios especializados.
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
            <Card
              key={item.name}
              className={`reveal-up reveal-delay-${(index % 3) + 1}`}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.94)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body1" sx={{ mb: 2.6 }}>
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
            Respuestas rapidas para avanzar sin friccion.
          </Typography>
        </Stack>

        <Box>
          {faqs.map((faq) => (
            <Accordion key={faq.question} className="reveal-up" sx={{ bgcolor: "rgba(255,255,255,0.9)" }}>
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
            border: "1px solid rgba(24, 94, 122, 0.24)",
            bgcolor: "rgba(255, 255, 255, 0.9)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
              gap: { xs: 3.2, md: 4.4 },
            }}
          >
            <Box>
              <Typography variant="overline" color="primary.main">
                Contacto
              </Typography>
              <Typography variant="h3" sx={{ mt: 1, mb: 1.6 }}>
                Cuentanos tu objetivo y te devolvemos un plan concreto.
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Recibiras una propuesta inicial en menos de 24 horas habiles con alcance,
                prioridad y siguientes pasos recomendados.
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
                border: "1px solid rgba(24, 94, 122, 0.16)",
                borderRadius: 5,
                p: { xs: 2.25, md: 2.6 },
              }}
            >
              <TextField label="Nombre" name="name" fullWidth />
              <TextField label="Correo" type="email" name="email" fullWidth />
              <TextField label="Tipo de proyecto" select defaultValue="landing" fullWidth>
                <MenuItem value="landing">Landing onepage</MenuItem>
                <MenuItem value="sitio">Sitio corporativo</MenuItem>
                <MenuItem value="redesign">Rediseno UI/UX</MenuItem>
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
                placeholder="Comparte contexto, objetivo principal y fecha ideal de lanzamiento."
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
            borderTop: "1px solid rgba(24, 94, 122, 0.2)",
            pt: 3.2,
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2">
            Estudio Horizonte. Interfaces estrategicas para negocios de servicios.
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
