import { render } from "@testing-library/react";
import { SearchContext } from "../context/searchContext";
import { ReactElement } from "react";
import { vi } from "vitest";

export const renderWithSearchContext = (ui: ReactElement, overrides = {}) => {
  const defaultValues = {
    category: "All",
    setCategory: vi.fn(),
    dateSort: "newest",
    setDateSort: vi.fn(),
    source: "All",
    setSource: vi.fn(),
    searchTerm: "",
    setSearchTerm: vi.fn(),
  };

  const value = { ...defaultValues, ...overrides };

  return render(
    <SearchContext.Provider value={value}>{ui}</SearchContext.Provider>
  );
};
