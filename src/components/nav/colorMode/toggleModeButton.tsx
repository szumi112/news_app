import React from "react";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ToggleColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      bgGradient={useColorModeValue(
        "linear(to-r, teal.400, cyan.400)",
        "linear(to-r, orange.300, pink.300)"
      )}
      color="white"
      _hover={{
        bgGradient: useColorModeValue(
          "linear(to-r, teal.500, cyan.500)",
          "linear(to-r, orange.400, pink.400)"
        ),
        boxShadow: "xl",
      }}
      _active={{
        bgGradient: useColorModeValue(
          "linear(to-r, teal.600, cyan.600)",
          "linear(to-r, orange.500, pink.500)"
        ),
        transform: "scale(0.95)",
      }}
      borderRadius="full"
      boxShadow="md"
      height={"40px"}
      w={"40px"}
      fontWeight="bold"
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ToggleColorModeButton;
