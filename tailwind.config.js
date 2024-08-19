/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
    preflight: false,
  },
  important: '#root', // id của thẻ body
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: '1024px',
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          1: "#D7F0FF",
          5: "#448EF7",
          8: "#0d47a1",
          10: "#184785", //blue 900
        },
        secondary: {
          10: "#8C8C8C",
          30: "#D9D9D9"

        },
        success: {
          10: "#119757",
        },
        danger: {
          10: "#A23434",
          40: "#E13C39"
        },      
        warning: {
          10: "#D4CD16",
        },
        info: {
          10: "#1890FF",
        },
        light: {
          10: "#D7F0FF",
        },
        dark: { 10: "#000000" },
        gray: {
          1: "#FFFFFF",
          5: "#D9D9D9",
        },
        red: {
          6: "#E13C39",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: theme("columns.7xl"),
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
        },
      });
    }),
  ],
};
