import { createTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

export const palette = {
  grayBlack: "#1B1B1B",
  gray1: "rgba(255, 255, 255, 0.08);",
  grayWhite: "#FFFFFF",
};

export const theme = createTheme({
  colors: {
    ...palette,

    primaryContrast: palette.grayWhite,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,
  },
  spacing: {
    s24: 24,
  },
  borderRadius: {
    s8: 8,
    s16: 16,
    s24: 24,
  },

  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
