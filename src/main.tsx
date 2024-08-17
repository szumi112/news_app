import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme.ts";
import { Suspense } from "react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </ChakraProvider>
  </QueryClientProvider>,
);
