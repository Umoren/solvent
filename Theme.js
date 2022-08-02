import { extendTheme } from "@chakra-ui/react";

const overrides = {
  components: {
    Box: {
      baseStyle: {
        border: "none"
      }
    }

  },
};

const theme = extendTheme(overrides);
export default theme;