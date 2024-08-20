import { render, screen, fireEvent } from "@testing-library/react";
import ToggleModeButton from "./toggleModeButton";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

describe("ToggleModeButton Component", () => {
  it("should toggle between light and dark modes", () => {
    const theme = extendTheme({
      config: { initialColorMode: "light", useSystemColorMode: false },
    });

    render(
      <ChakraProvider theme={theme}>
        <ToggleModeButton />
      </ChakraProvider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(document.body.classList.contains("chakra-ui-dark")).toBe(true);

    fireEvent.click(button);

    expect(document.body.classList.contains("chakra-ui-light")).toBe(true);
  });
});
