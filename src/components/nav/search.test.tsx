import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./search";
import { SearchProvider } from "../../context/searchProvider";
import { useSearch } from "../../context/searchContext";

const TestComponent = () => {
  const { searchTerm } = useSearch();
  return (
    <div>
      <Search />
      <span data-testid="search-term">{searchTerm}</span>
    </div>
  );
};

describe("Search Component", () => {
  it("should update search term on input", () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Technology" } });

    expect(screen.getByTestId("search-term")).toHaveTextContent("Technology");
  });
});
