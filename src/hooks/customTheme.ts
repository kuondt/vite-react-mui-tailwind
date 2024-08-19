import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import "@mui/material/styles/createPalette";
import "@mui/material/Button";

//Custom color name
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    gray: PaletteColor;
  }
  interface PaletteOptions {
    gray: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gray: true;
  }
}

//Custom variant Button
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    square: true;
  }
}

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#184785",
      light: blue[800],
    },
    secondary: {
      main: "#F5222D",
    },
    gray: {
      main: "#8C8C8C",
      light: "#BFBFBF",
      dark: "#595959",
      contrastText: "#fff"
    },

    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

const theme = createTheme({
  palette: { ...defaultTheme.palette },
  components: {
    // MuiTooltip: {
    //   defaultProps: {
    //     followCursor: true,
    //   }
    // },
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${defaultTheme.palette.primary.main}`,
            color: defaultTheme.palette.primary.main,
          },
        },
        {
          props: { variant: "square" },
          style: {
            borderRadius: `4px`,
            color: "white",
            background: defaultTheme.palette.primary.main,
            ":hover": {
              background: defaultTheme.palette.primary.light,
            },
            "&:focus": {
              boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
