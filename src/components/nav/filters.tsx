import { Flex, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import CategorySelect from "./selects/categorySelect";
import DateSortSelect from "./selects/dateSortSelect";
import SourceSelect from "./selects/sourceSelect";
import { useSearch } from "../../context/searchContext";

const Filters = () => {
  const {
    setCategory,
    setDateSort,
    setSource,
    category = "All",
    dateSort = "newest",
    source = "All",
  } = useSearch();

  const [showReset, setShowReset] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setShowReset(
      category !== "All" || dateSort !== "newest" || source !== "All"
    );
  }, [category, dateSort, source]);

  const handleResetFilters = useCallback(() => {
    setCategory("All");
    setDateSort("newest");
    setSource("All");
  }, [setCategory, setDateSort, setSource]);

  return (
    <Flex
      justifyContent="space-between"
      my={4}
      flexDir={{ base: "column", md: "row" }}
    >
      <Button
        display={{ base: "block", md: "none" }}
        onClick={isOpen ? onClose : onOpen}
        mb={4}
      >
        {isOpen ? "Hide Filters" : "Show Filters"}{" "}
        <SettingsIcon style={{ marginBottom: "2px", marginLeft: "10px" }} />
      </Button>

      <Flex
        flexDir={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
      >
        <CategorySelect />
        <DateSortSelect />
        <SourceSelect />
      </Flex>

      {showReset && (
        <Button
          onClick={handleResetFilters}
          colorScheme="red"
          mt={{ base: 4, md: 0 }}
          data-testid="reset-button"
        >
          Reset Filters
        </Button>
      )}
    </Flex>
  );
};

export default Filters;
