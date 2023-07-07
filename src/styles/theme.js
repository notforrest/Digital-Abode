const Color = require("color");

const theme = {
  fontFamily: {
    sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: "Menlo, Monaco, monospace",
  },
  colors: {
    text: "#333",
    background: "#fff",
    headerBackground: "#1b1b1b",
    headerHover: "#333",
    headerMenuBackground: `${Color("#1b1b1b").lighten(1.5)}`,
    headerMenuHover: `${Color("#1b1b1b").lighten(2)}`,
    link: "#1eaaf1",
    linkHover: "#0d8ecf",
    border: "#ddd",
    warning: "#fff3cd",
    success: "#d4edda",
  },
};

export default theme;
