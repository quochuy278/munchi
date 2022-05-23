import { extendTheme } from "native-base";

const ThemeConfig = extendTheme({
  //Native base default will take 600 for every parameters in colors
  colors: {
    primary: {
      500: "#db2777",
      600: "#FF3537", //Main theme
      700: "#9d174d",
    },
    black: {
      600: "#000000",
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
    fontConfig: {
      Roboto: {
        100: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        200: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        300: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        400: {
          normal: "Roboto-Regular",
          italic: "Roboto-Italic",
        },
        500: {
          normal: "Roboto-Medium",
        },
        600: {
          normal: "Roboto-Medium",
          italic: "Roboto-MediumItalic",
        },
        // Add more variants
        700: {
          normal: "Roboto-Bold",
        },
        800: {
          normal: "Roboto-Bold",
          italic: "Roboto-BoldItalic",
        },
        900: {
          normal: "Roboto-Bold",
          italic: "Roboto-BoldItalic",
        },
      },
      Mulish: {
        100: {
          normal: "Mulish-Light",
          italic: "Mulish-LightItalic",
        },
        200: {
          normal: "Mulish-Light",
          italic: "Mulish-LightItalic",
        },
        300: {
          normal: "Mulish-Light",
          italic: "Mulish-LightItalic",
        },
        400: {
          normal: "Mulish-Regular",
          italic: "Mulish-Italic",
        },
        500: {
          normal: "Mulish-Medium",
        },
        600: {
          normal: "Mulish-Medium",
          italic: "Mulish-MediumItalic",
        },
        // Add more variants
        700: {
          normal: "Mulish-Bold",
        },
        800: {
          normal: "Mulish-Bold",
          italic: "Mulish-BoldItalic",
        },
        900: {
          normal: "Mulish-Bold",
          italic: "Mulish-BoldItalic",
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "Roboto",
      body: "Roboto",
      mono: "Mulish",
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  },
});

export default ThemeConfig;
