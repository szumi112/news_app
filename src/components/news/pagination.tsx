import React from "react";
import { Button, Flex, Text, Select } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  articlesPerPage: number;
  setArticlesPerPage: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  articlesPerPage,
  setArticlesPerPage,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Flex justifyContent="center" mt={4} alignItems="center" flexDir={"column"}>
      <Flex justifyContent="center" mt={4} alignItems="center">
        <Button
          onClick={handlePrevious}
          isDisabled={currentPage === 1}
          mr={2}
          width="100px"
        >
          Previous
        </Button>
        <Text mx={4}>
          {currentPage}/{totalPages}
        </Text>
        <Button
          onClick={handleNext}
          isDisabled={currentPage === totalPages}
          width="100px"
        >
          Next
        </Button>
      </Flex>
      <Select
        mt={4}
        width="175px"
        value={articlesPerPage}
        onChange={(e) => setArticlesPerPage(Number(e.target.value))}
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </Select>
    </Flex>
  );
};

export default Pagination;
