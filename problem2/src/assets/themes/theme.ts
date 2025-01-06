import { PaletteMode } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

import {
  alpha_light_home,
  blue_light_home,
  brown_light_home,
  color_base,
  color_blue,
  color_gray,
  color_gray_platform_light,
  cyan_light_home,
  gray_light_home,
  green_light_home,
  mint_light_home,
  orange_light_home,
  purple_light_home,
  red_light_home,
  yellow_light_home,
} from "./system-palette";
import { convertToRem } from "utils/convert-to-rem";
import { DotNotation } from "types/types";

export type TypoCategoriesType = keyof typeof typoCategories;
const mainColor = {
  main_primary: {
    purple500: "#565ADD",
    black900: "#0B172D",
    semiWhite: "#C3C4C5",
  },
  main_grey: {
    gray10: color_gray[10],
    gray50: color_gray[50],
    gray100: color_gray[100],
    gray150: color_gray[150],
    gray160: color_gray[160],
    gray200: color_gray[200],
    gray300: color_gray[300],
    gray400: color_gray[400],
    gray500: color_gray[500],
    gray550: color_gray[550],
    gray600: color_gray[600],
    gray700: color_gray[700],
    gray800: color_gray[800],
    gray900: color_gray[900],
    gray950: color_gray[950],
    gray1000: "#f6f6f6",
    colors_popup_background_icon_surface: "#ECEFF3",
    gray_scale_50: "#EDEEF1",
    gray_scale_100: "#9498A3",
    gray_scale_300: "#252629",
    gray_scale_500: "#101014",
    gray800_disabled: color_gray["800_disabled"],
  },
};

export const lightPalette = {
  main: {
    primary: "#565ADD",
    white: "#FFFFFF",
    black: "#242424",
    point: "#28FFFF",
    gray30: "#9F9EA4",
    gray40: "#7E7E86",
    gray50: "#62626C",
    gray70: "#2C2C34",
    danger: "#FF0A09",
    button_secondary_active: "rgba(49, 130, 247, 0.10)",
  },
  ...mainColor,
  background: {
    default: "#FFFFFF",
  },
  button: {
    primary: {
      bg: "#565ADD",
      label: "#111827",
      disabled: {
        bg: color_blue[60],
        label: color_gray_platform_light[500],
      },
    },
    secondary: {
      bg: color_blue[60],
      label: color_gray_platform_light[100],
      border: color_blue[300],
      disabled: {
        bg: "transparent",
        label: color_gray_platform_light[500],
        border: color_gray_platform_light[500],
      },
      hover: {
        bg: color_blue[20],
      },
      in_active: {
        label: color_gray_platform_light[200],
      },
    },
    neutral: {
      bg: color_gray[150],
      border: color_gray_platform_light[500],
      label: color_gray_platform_light[200],
      hover: {
        bg: color_gray_platform_light[600],
      },
    },
    transparent: {
      label: color_blue[500],
      disabled: {
        label: color_gray[500],
      },
    },
    link: {
      label: color_gray[900],
      disabled: {
        label: color_gray[200],
      },
    },
  },
  home: {
    ...gray_light_home,
    ...blue_light_home,
    ...mint_light_home,
    ...red_light_home,
    ...yellow_light_home,
    ...alpha_light_home,
    ...purple_light_home,
    ...cyan_light_home,
    ...green_light_home,
    ...orange_light_home,
    ...brown_light_home,
    ...color_base,
    ...yellow_light_home,
    dropdown: {
      boxShadow: "rgba(5, 6, 6, 0.15)",
    },
  },
};

export const darkPalette = {
  main: {
    primary: "#2D68FE",
    white: "#FFFFFF",
    black: "#242424",
    point: "#28FFFF",
    gray30: "#9F9EA4",
    gray40: "#7E7E86",
    gray50: "#62626C",
    danger: "#FF0A09",
    gray70: "#2C2C34",
    button_secondary_active: "rgba(49, 130, 247, 0.10)",
  },
  ...mainColor,
  background: {
    default: "#101014",
  },
  button: {
    primary: {
      bg: "#565ADD",
      label: color_gray[100],
      disabled: {
        bg: color_blue[60],
        label: color_gray_platform_light[500],
      },
    },
    secondary: {
      bg: color_blue[60],
      label: color_gray_platform_light[100],
      border: color_blue[300],
      disabled: {
        bg: "transparent",
        label: color_gray_platform_light[500],
        border: color_gray_platform_light[500],
      },
      hover: {
        bg: color_blue[20],
      },
      in_active: {
        label: color_gray_platform_light[200],
      },
    },
    neutral: {
      bg: color_gray[150],
      border: color_gray_platform_light[500],
      label: color_gray_platform_light[200],
      hover: {
        bg: color_gray_platform_light[600],
      },
    },
    transparent: {
      label: color_blue[500],
      disabled: {
        label: color_gray[500],
      },
    },
    link: {
      label: color_gray[900],
      disabled: {
        label: color_gray[200],
      },
    },
  },
  home: {
    ...gray_light_home,
    ...blue_light_home,
    ...mint_light_home,
    ...red_light_home,
    ...yellow_light_home,
    ...alpha_light_home,
    ...purple_light_home,
    ...cyan_light_home,
    ...green_light_home,
    ...orange_light_home,
    ...brown_light_home,
    ...color_base,
    ...yellow_light_home,
    dropdown: {
      boxShadow: "rgba(5, 6, 6, 0.15)",
    },
  },
};

const breakpoints = {
  xs: 0,
  sm: 360,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  sl: 1600,
};

export const defaultTypo = {
  fontFamily: "Poppins, Arial, sans-serif",
  fontWeight: 400,
  color: "#0F172A",
  letterSpacing: 0,
  fontSize: convertToRem(16),
  lineHeight: convertToRem(20),
  textTransform: "none",
};

export const getTextStyles = (
  fz: number,
  lh: number,
  fw: number,
  ls?: number
) => ({
  ...defaultTypo,
  fontSize: convertToRem(fz),
  lineHeight: `${lh}%`,
  fontWeight: fw,
  fontFamily: "inherit",
  letterSpacing: ls ? `${ls}%` : "inherit",
});

const typoCategories = {
  large_title: getTextStyles(40, 100, 700, 0),
  title_1_bold: getTextStyles(36, 120, 700, 0),
};

export type BreakpointKeys = keyof typeof breakpoints;

export type ColorPalette = DotNotation<typeof darkPalette>;

export type ThemePalette = typeof darkPalette;

export const getDesignTokens = (mode: PaletteMode) => {
  return {
    palette: {
      type: mode,
      mode,
      ...(mode === "light" ? lightPalette : darkPalette),
    },
    typography: {
      allVariants: defaultTypo,
      ...typoCategories,
    } as TypographyOptions,
    breakpoints: {
      values: breakpoints,
    },
  };
};
