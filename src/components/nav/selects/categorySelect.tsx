import { Select, Box } from "@chakra-ui/react";
import { useSearch } from "../../../context/searchContext";
import { categories } from "../../../consts/filters";

const CategorySelect = () => {
  const { setCategory, category = "All" } = useSearch();

  return (
    <Box mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }}>
      <Select
        value={category}
        placeholder="Select Category"
        onChange={(e) => setCategory(e.target.value)}
        data-testid="select-category"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default CategorySelect;
