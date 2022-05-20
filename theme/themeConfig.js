import { createTheme } from "@mui/system";

const ThemeConfig = createTheme({
  palette: {
    primary: {
      light: "#FF6166",
      main: "#FF6231",
      dark: "#CC5500",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#9C9FA4",
      main: "#8A8D93",
      dark: "#777B82",
      contrastText: "#FFF",
    },
    success: {
      light: "#6AD01F",
      main: "#56CA00",
      dark: "#4CB200",
      contrastText: "#FFF",
    },
    error: {
      light: "#FF6166",
      main: "#FF4C51",
      dark: "#E04347",
      contrastText: "#FFF",
    },
    warning: {
      light: "#FFCA64",
      main: "#FFB400",
      dark: "#E09E00",
      contrastText: "#FFF",
    },
    info: {
      light: "#32BAFF",
      main: "#16B1FF",
      dark: "#139CE0",
      contrastText: "#FFF",
    },
    pending: {
      light: "#F5F5F5",
      main: "#E0E0E0",
      dark: "#9E9E9E",
      contrastText: "#FFF",
    },
    active: {
      light: "#F5F5F5",
      main: "#FF5733",
      dark: "#F53C14",
      contrastText: "#FFF",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030",
    },
  },
});

export default ThemeConfig