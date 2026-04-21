"use client";

import { alpha, createTheme } from "@mui/material/styles";

export const m3Theme = createTheme({
  cssVariables: true,
  shape: {
    borderRadius: 22,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#445E91",
      light: "#8EADE5",
      dark: "#294477",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#5A5891",
      light: "#A09EDE",
      dark: "#434178",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#BA1A1A",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#755A00",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2F6A40",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#1A1B21",
      secondary: "#43474F",
    },
    background: {
      default: "#F8F9FF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily:
      "var(--font-manrope), ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
    h1: {
      fontFamily:
        "var(--font-fraunces), Iowan Old Style, Times New Roman, serif",
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily:
        "var(--font-fraunces), Iowan Old Style, Times New Roman, serif",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.28,
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.45,
    },
    body1: {
      lineHeight: 1.65,
    },
    body2: {
      lineHeight: 1.55,
      color: "#43474F",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          minHeight: "100vh",
          background:
            "radial-gradient(1200px 540px at 10% -10%, rgba(142,173,229,0.24), transparent 64%), radial-gradient(1000px 520px at 100% 6%, rgba(160,158,222,0.2), transparent 62%), linear-gradient(180deg, #F8F9FF 0%, #F4F6FF 46%, #EFF3FF 100%)",
          color: "#1A1B21",
        },
        "*": {
          boxSizing: "border-box",
        },
        "*::selection": {
          backgroundColor: "rgba(68,94,145,0.18)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)",
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1.3rem",
          minHeight: 44,
        },
        contained: ({ theme }) => ({
          boxShadow: `0 9px 22px ${alpha(theme.palette.primary.main, 0.24)}`,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 28,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          boxShadow: `0 16px 44px ${alpha(theme.palette.primary.main, 0.12)}`,
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 20,
          marginBottom: theme.spacing(1.25),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
          boxShadow: "none",
          "&::before": {
            display: "none",
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 18,
          boxShadow: `0 12px 28px ${alpha(theme.palette.secondary.main, 0.3)}`,
        }),
      },
    },
  },
});
