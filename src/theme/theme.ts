import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Button: {
      variants: {
        colorModeToggle: (props: StyleFunctionProps) => ({
          bgGradient:
            props.colorMode === "light"
              ? "linear(to-r, teal.400, cyan.400)"
              : "linear(to-r, orange.300, pink.300)",
          color: "white",
          _hover: {
            bgGradient:
              props.colorMode === "light"
                ? "linear(to-r, teal.500, cyan.500)"
                : "linear(to-r, orange.400, pink.400)",
            boxShadow: "xl",
          },
          _active: {
            bgGradient:
              props.colorMode === "light"
                ? "linear(to-r, teal.600, cyan.600)"
                : "linear(to-r, orange.500, pink.500)",
            transform: "scale(0.95)",
          },
          borderRadius: "full",
          boxShadow: "md",
          height: "40px",
          width: "40px",
          fontWeight: "bold",
        }),
      },
    },
  },
});

export default theme;
