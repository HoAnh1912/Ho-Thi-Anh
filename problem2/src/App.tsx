import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens, ThemePalette } from "assets/themes/theme";
import { useEffect, useMemo } from "react";
import Routes from "routes";

declare module "@mui/material/styles" {
  interface Palette extends ThemePalette {}
  // allow configuration using `createTheme`
  interface PaletteOptions extends ThemePalette {}

  interface TypographyOptions {
    large_title?: any;
    title_1_bold?: any;
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    sl: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    large_title: true;
    title_1_bold: true;
  }
}
function App() {
  //config for lazy
  useEffect(() => {
    window.addEventListener("vite:preloadError", (_) => {
      window.location.reload();
    });
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        ...getDesignTokens("light"),
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
