import { extendTheme } from "native-base";
import colors from "./colors";
import shadows from "./shadows";
import sizes from "./sizes";
import spacing  from "./space";
import typography from "./typography ";
import opacity from "./opacity";

const theme = extendTheme({
  colors,
  shadows,
  sizes,
  spacing,
  typography,
  opacity
});

export default theme;
