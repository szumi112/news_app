import { render, screen } from "@testing-library/react";
import NewsList from "./index";
import { useNewsData } from "../../hooks/useNewsData";
import { Mock, vi } from "vitest";

vi.mock("../../hooks/useNewsData");

describe("NewsList Component", () => {
  it("should render a list of news articles", () => {
    (useNewsData as Mock).mockReturnValue({
      articles: [
        {
          title: "Article 1",
          url: "https://example.com/1",
          source: "Source 1",
          publishedAt: "2023-01-01",
          category: "Tech",
        },
        {
          title: "Article 2",
          url: "https://example.com/2",
          source: "Source 2",
          publishedAt: "2023-01-02",
          category: "Health",
        },
      ],
      isLoading: false,
      isError: false,
    });

    render(<NewsList />);

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
  });

  it("should display a message when no articles are found", () => {
    (useNewsData as Mock).mockReturnValue({
      articles: [],
      isLoading: false,
      isError: false,
    });

    render(<NewsList />);

    expect(screen.getByText("No articles found")).toBeInTheDocument();
  });

  it("should display 'Loading...' when data is loading", () => {
    (useNewsData as Mock).mockReturnValue({
      articles: [],
      isLoading: true,
      isError: false,
    });

    render(<NewsList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display an error message when data fails to load", () => {
    (useNewsData as Mock).mockReturnValue({
      articles: [],
      isLoading: false,
      isError: true,
    });

    render(<NewsList />);

    expect(
      screen.getByText("Failed to load news articles")
    ).toBeInTheDocument();
  });
});
