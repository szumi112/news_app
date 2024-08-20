import { Select, Box } from "@chakra-ui/react";
import { useSearch } from "../../../context/searchContext";
import { sources } from "../../../consts/filters";

const SourceSelect = () => {
  const { setSource, source = "All" } = useSearch();

  return (
    <Box mb={{ base: 6, md: 0 }}>
      <Select
        value={source}
        placeholder="Select Source"
        onChange={(e) => setSource(e.target.value)}
        data-testid="select-source"
      >
        {sources.map((src) => (
          <option key={src} value={src}>
            {src}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SourceSelect;
