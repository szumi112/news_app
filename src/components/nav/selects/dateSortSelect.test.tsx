import { screen, fireEvent } from "@testing-library/react";
import DateSortSelect from "./dateSortSelect";
import { vi } from "vitest";
import { renderWithSearchContext } from "../../../utils/testUtils";

describe("DateSortSelect Component", () => {
  const mockSetDateSort = vi.fn();

  const renderDateSortSelect = (initialSort = "newest") => {
    renderWithSearchContext(<DateSortSelect />, {
      dateSort: initialSort,
      setDateSort: mockSetDateSort,
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render date sort dropdown", () => {
    renderDateSortSelect();
    expect(screen.getByTestId("sort-date")).toBeInTheDocument();
  });

  it("should allow selecting a date sort option", () => {
    renderDateSortSelect();
    fireEvent.change(screen.getByTestId("sort-date"), {
      target: { value: "oldest" },
    });
    expect(mockSetDateSort).toHaveBeenCalledWith("oldest");
  });
});
