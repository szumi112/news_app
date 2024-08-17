import { Select, Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import { useSearch } from "../../context/searchContext";
import { useEffect, useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";

const Filters = () => {
  const { setCategory, setDateSort, setSource, category, dateSort, source } =
    useSearch();
  const [showReset, setShowReset] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (category !== "All" || dateSort !== "newest" || source !== "All") {
      setShowReset(true);
    } else {
      setShowReset(false);
    }
  }, [category, dateSort, source]);

  const handleResetFilters = () => {
    setCategory("All");
    setDateSort("newest");
    setSource("All");
  };

  return (
    <Flex
      justifyContent={"space-between"}
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
            <option value="World">World</option>
            <option value="Politics">Politics</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Science">Science</option>
            <option value="Environment">Environment</option>
            <option value="US">US</option>
            <option value="Other">Other</option>
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
            <option value="OpenNews">OpenNews</option>
            <option value="The Guardian">The Guardian</option>
            <option value="New York Times">New York Times</option>
          </Select>
        </Box>
      </Flex>

      {showReset && (
        <Button
          onClick={handleResetFilters}
          colorScheme={"red"}
          mt={{ base: 4, md: 0 }}
        >
          Reset Filters
        </Button>
      )}
    </Flex>
  );
};

export default Filters;
