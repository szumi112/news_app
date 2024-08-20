import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Pagination from "./pagination";

describe("Pagination Component", () => {
  const mockOnPageChange = vi.fn();
  const mockSetArticlesPerPage = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders pagination controls", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
        articlesPerPage={10}
        setArticlesPerPage={mockSetArticlesPerPage}
      />
    );

    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("1/5")).toBeInTheDocument();
  });

  it('disables the "Previous" button on the first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
        articlesPerPage={10}
        setArticlesPerPage={mockSetArticlesPerPage}
      />
    );

    expect(screen.getByText("Previous")).toBeDisabled();
  });

  it('disables the "Next" button on the last page', () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
        articlesPerPage={10}
        setArticlesPerPage={mockSetArticlesPerPage}
      />
    );

    expect(screen.getByText("Next")).toBeDisabled();
  });

  it('calls onPageChange with the correct page when "Previous" button is clicked', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
        articlesPerPage={10}
        setArticlesPerPage={mockSetArticlesPerPage}
      />
    );

    fireEvent.click(screen.getByText("Previous"));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with the correct page when "Next" button is clicked', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
        articlesPerPage={10}
        setArticlesPerPage={mockSetArticlesPerPage}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  it("calls setArticlesPerPage when the number of articles per page is changed", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
        articlesPerPage={10}
        setArticlesPerPage={mockSetArticlesPerPage}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "20" } });
    expect(mockSetArticlesPerPage).toHaveBeenCalledWith(20);
  });
});
