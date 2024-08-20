import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Filters from "./filters";
import { vi } from "vitest";
import { SearchContext } from "../../context/searchContext";

describe("Filters Component", () => {
  const mockSetCategory = vi.fn();
  const mockSetDateSort = vi.fn();
  const mockSetSource = vi.fn();

  const renderFilters = (
    category = "All",
    dateSort = "newest",
    source = "All"
  ) => {
    render(
      <SearchContext.Provider
        value={{
          category,
          setCategory: mockSetCategory,
          dateSort,
          setDateSort: mockSetDateSort,
          source,
          setSource: mockSetSource,
          searchTerm: "",
          setSearchTerm: vi.fn(),
        }}
      >
        <Filters />
      </SearchContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render all filter options", () => {
    renderFilters();

    expect(screen.getByTestId("select-category")).toBeInTheDocument();
    expect(screen.getByTestId("select-source")).toBeInTheDocument();
    expect(screen.getByTestId("sort-date")).toBeInTheDocument();
  });

  it("should not show the reset button when filters are in their default state", () => {
    renderFilters();
    expect(screen.queryByTestId("reset-button")).not.toBeInTheDocument();
  });

  it("should show the reset button when a category is changed", () => {
    renderFilters();

    fireEvent.change(screen.getByTestId("select-category"), {
      target: { value: "Technology" },
    });

    expect(mockSetCategory).toHaveBeenCalledWith("Technology");

    waitFor(() => {
      expect(screen.getByTestId("reset-button")).toBeInTheDocument();
    });
  });

  it("should show the reset button when a source is changed", () => {
    renderFilters();

    fireEvent.change(screen.getByTestId("select-source"), {
      target: { value: "New York Times" },
    });

    expect(mockSetSource).toHaveBeenCalledWith("New York Times");

    waitFor(() => {
      expect(screen.getByTestId("reset-button")).toBeInTheDocument();
    });
  });

  it("should show the reset button when a date sort option is changed", () => {
    renderFilters();

    fireEvent.change(screen.getByTestId("sort-date"), {
      target: { value: "oldest" },
    });

    expect(mockSetDateSort).toHaveBeenCalledWith("oldest");

    waitFor(() => {
      expect(screen.getByTestId("reset-button")).toBeInTheDocument();
    });
  });

  it("should reset filters when the reset button is clicked", async () => {
    renderFilters("Technology", "oldest", "New York Times");

    const resetButton = await screen.findByTestId("reset-button");

    fireEvent.click(resetButton);

    expect(mockSetCategory).toHaveBeenCalledWith("All");
    expect(mockSetDateSort).toHaveBeenCalledWith("newest");
    expect(mockSetSource).toHaveBeenCalledWith("All");
  });
});
