import { Select, Box } from "@chakra-ui/react";
import { useSearch } from "../../../context/searchContext";

const DateSortSelect = () => {
  const { setDateSort, dateSort = "newest" } = useSearch();

  return (
    <Box mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }}>
      <Select
        value={dateSort}
        placeholder="Sort by Date"
        onChange={(e) => setDateSort(e.target.value as "newest" | "oldest")}
        data-testid="sort-date"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </Select>
    </Box>
  );
};

export default DateSortSelect;
