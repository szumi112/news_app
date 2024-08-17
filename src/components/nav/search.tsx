import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useSearch } from "../../context/searchContext";

const Search = () => {
  const { setSearchTerm } = useSearch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <InputGroup borderRadius={5} size="sm">
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.600" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search..."
        border="1px solid #949494"
        onChange={handleInputChange}
      />
    </InputGroup>
  );
};

export default Search;
