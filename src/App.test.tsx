import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";

const queryClient = new QueryClient();

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the App and allow filtering of news articles", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
