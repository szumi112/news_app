import { Box, Flex, Heading } from "@chakra-ui/react";
import ToggleColorModeButton from "./colorMode/toggleModeButton";
import Search from "./search";

const Nav = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} my={4}>
        <Heading as={"h1"}>News</Heading>
        <ToggleColorModeButton />
      </Flex>
      <Box my="40px" textAlign={"center"}>
        <Search />
      </Box>
    </>
  );
};

export default Nav;
