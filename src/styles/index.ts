import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      gray900: "#0E1724",
      gray800: "#08181F",
      gray300: "#03C2E0",
      gray100: "#3366FF",

      green500: "#00875f",
      green300: "#00b37e",
    },
  },
});
