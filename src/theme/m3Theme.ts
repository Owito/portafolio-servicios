"use client";

import { alpha, createTheme } from "@mui/material/styles";

export const m3Theme = createTheme({
  cssVariables: true,
  shape: {
    borderRadius: 24,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#185E7A",
      light: "#77B6D2",
      dark: "#0E415A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C5662A",
      light: "#F0B086",
      dark: "#8E481B",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2D6A4F",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#986A00",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#BA1A1A",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#182129",
      secondary: "#42515D",
    },
    background: {
      default: "#F4F8FC",
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
      lineHeight: 1.03,
      letterSpacing: "-0.022em",
    },
    h2: {
      fontFamily:
        "var(--font-fraunces), Iowan Old Style, Times New Roman, serif",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.016em",
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.25,
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.45,
    },
    body1: {
      lineHeight: 1.66,
    },
    body2: {
      lineHeight: 1.58,
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
            "radial-gradient(1300px 560px at 7% -14%, rgba(119,182,210,0.3), transparent 64%), radial-gradient(1100px 560px at 97% 0%, rgba(240,176,134,0.24), transparent 62%), linear-gradient(180deg, #F4F8FC 0%, #F5FAFF 46%, #EEF5FB 100%)",
          color: "#182129",
        },
        "*": {
          boxSizing: "border-box",
        },
        "*::selection": {
          backgroundColor: "rgba(24, 94, 122, 0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(14px)",
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
          minHeight: 44,
          paddingInline: "1.35rem",
        },
        contained: ({ theme }) => ({
          boxShadow: `0 12px 26px ${alpha(theme.palette.primary.main, 0.26)}`,
        }),
        outlined: ({ theme }) => ({
          borderWidth: 1.4,
          borderColor: alpha(theme.palette.primary.main, 0.36),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 30,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.11)}`,
          boxShadow: `0 18px 48px ${alpha(theme.palette.primary.main, 0.13)}`,
          transition: "transform 220ms ease, box-shadow 220ms ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: `0 24px 56px ${alpha(theme.palette.primary.main, 0.18)}`,
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: alpha(theme.palette.primary.main, 0.16),
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 650,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 20,
          marginBottom: theme.spacing(1.3),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
          boxShadow: "none",
          overflow: "hidden",
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
          borderRadius: 20,
          boxShadow: `0 14px 30px ${alpha(theme.palette.secondary.main, 0.34)}`,
        }),
      },
    },
  },
});
