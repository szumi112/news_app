import React from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav";
import NewsList from "./components/news";

const App: React.FC = () => {
  return (
    <Box maxW={"1200px"} m={"0 auto 60px"} p={"0 12px"}>
      <Nav />
      <NewsList />
    </Box>
  );
};

export default App;
