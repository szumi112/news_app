import { Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";

const Search = () => {
  return (
    <InputGroup borderRadius={5} size="sm">
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.600" />
      </InputLeftElement>
      <Input type="text" placeholder="Search..." border="1px solid #949494" />
      <InputRightAddon p={0} border="none">
        <Button
          size="sm"
          borderLeftRadius={0}
          borderRightRadius={3.3}
          border="1px solid #949494"
        >
          Search
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
};

export default Search;
