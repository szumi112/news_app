import { screen, fireEvent } from "@testing-library/react";
import CategorySelect from "./categorySelect";
import { vi } from "vitest";
import { renderWithSearchContext } from "../../../utils/testUtils";

describe("CategorySelect Component", () => {
  const mockSetCategory = vi.fn();
  const renderCategorySelect = () => {
    renderWithSearchContext(<CategorySelect />, {
      setCategory: mockSetCategory,
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render category select dropdown", () => {
    renderCategorySelect();
    expect(screen.getByTestId("select-category")).toBeInTheDocument();
  });

  it("should allow selecting a category", () => {
    renderCategorySelect();
    fireEvent.change(screen.getByTestId("select-category"), {
      target: { value: "Technology" },
    });
    expect(mockSetCategory).toHaveBeenCalledWith("Technology");
  });
});
