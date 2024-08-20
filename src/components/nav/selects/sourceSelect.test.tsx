import { screen, fireEvent } from "@testing-library/react";
import SourceSelect from "./sourceSelect";
import { vi } from "vitest";
import { renderWithSearchContext } from "../../../utils/testUtils";

describe("SourceSelect Component", () => {
  const mockSetSource = vi.fn();

  const renderSourceSelect = () => {
    renderWithSearchContext(<SourceSelect />, {
      setSource: mockSetSource,
      source: "All",
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render source select dropdown", () => {
    renderSourceSelect();
    expect(screen.getByTestId("select-source")).toBeInTheDocument();
  });

  it("should allow selecting a source", () => {
    renderSourceSelect();
    fireEvent.change(screen.getByTestId("select-source"), {
      target: { value: "OpenNews" },
    });
    expect(mockSetSource).toHaveBeenCalledWith("OpenNews");
  });
});
