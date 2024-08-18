import { Select, Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import { useSearch } from "../../context/searchContext";
import { useEffect, useState, useCallback } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import { categories, sources } from "../../consts/filters";

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
        <Box mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }}>
          <Select
            value={category}
            placeholder="Select Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
        </Box>

        <Box mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }}>
          <Select
            value={dateSort}
            placeholder="Sort by Date"
            onChange={(e) => setDateSort(e.target.value as "newest" | "oldest")}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </Select>
        </Box>

        <Box mb={{ base: 6, md: 0 }}>
          <Select
            value={source}
            placeholder="Select Source"
            onChange={(e) => setSource(e.target.value)}
          >
            {sources.map((src) => (
              <option key={src} value={src}>
                {src}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>

      {showReset && (
        <Button
          onClick={handleResetFilters}
          colorScheme="red"
          mt={{ base: 4, md: 0 }}
        >
          Reset Filters
        </Button>
      )}
    </Flex>
  );
};

export default Filters;
