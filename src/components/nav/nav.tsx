import { Input } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <Input
      placeholder="Search for news"
      fontSize="16px"
      h="30px"
      w="300px"
      my={5}
    />
  );
};

export default Search;
