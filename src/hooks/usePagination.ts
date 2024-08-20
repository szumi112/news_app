import { useState, useEffect } from "react";

interface PaginationResult<T> {
  currentItems: T[];
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  itemsPerPage: number;
}

function usePagination<T>(
  data: T[],
  initialItemsPerPage: number
): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = data.slice(
    indexOfLastItem - itemsPerPage,
    indexOfLastItem
  );
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentItems,
    totalPages,
    currentPage,
    handlePageChange,
    setItemsPerPage,
    itemsPerPage,
  };
}

export default usePagination;
