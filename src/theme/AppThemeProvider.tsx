"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { m3Theme } from "./m3Theme";

type AppThemeProviderProps = {
  children: React.ReactNode;
};

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme={m3Theme}>
      <CssBaseline />
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      {children}
    </ThemeProvider>
  );
}
