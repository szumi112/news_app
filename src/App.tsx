import React from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav";
import NewsList from "./components/news";
import Filters from "./components/nav/filters";
import { SearchProvider } from "./context/searchProvider";

const App: React.FC = () => {
  return (
    <Box maxW={"1200px"} m={"0 auto 60px"} p={"0 12px"}>
      <SearchProvider>
        <Nav />
        <Filters />
        <NewsList />
      </SearchProvider>
    </Box>
  );
};

export default App;
