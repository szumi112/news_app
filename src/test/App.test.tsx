import { render, screen } from "@testing-library/react";
import App from "../App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { server } from "./mocks/server";
import { http, HttpResponse } from "msw";
import NewsList from "../components/news";
import { SearchContext } from "../context/searchContext";

const queryClient = new QueryClient();

const mockSetSearchTerm = () => {};
const mockSetCategory = () => {};
const mockSetDateSort = () => {};
const mockSetSource = () => {};

const mockSearchContextValue = {
  searchTerm: "",
  setSearchTerm: mockSetSearchTerm,
  category: "All",
  setCategory: mockSetCategory,
  dateSort: "newest" as "newest" | "oldest",
  setDateSort: mockSetDateSort,
  source: "All",
  setSource: mockSetSource,
};

describe("App", () => {
  it("Renders the JSX", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    const text = screen.getByText("News");
    expect(text).toBeInTheDocument();
  });

  it("Test API not returning data", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchContext.Provider value={mockSearchContextValue}>
          <NewsList />
        </SearchContext.Provider>
      </QueryClientProvider>
    );
    server.use(
      http.get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=no-key`,
        () => {
          return new HttpResponse(null, { status: 401 });
        }
      )
    );
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("Fetches news within 2 seconds", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchContext.Provider value={mockSearchContextValue}>
          <NewsList />
        </SearchContext.Provider>
      </QueryClientProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
