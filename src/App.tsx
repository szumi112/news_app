import React, { useState, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav";
import NewsList from "./components/news";
import { SearchContext } from "./context/searchContext";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const contextValue = useMemo(
    () => ({ searchTerm, setSearchTerm }),
    [searchTerm]
  );

  return (
    <Box maxW={"1200px"} m={"0 auto 60px"} p={"0 12px"}>
      <SearchContext.Provider value={contextValue}>
        <Nav />
        <NewsList />
      </SearchContext.Provider>
    </Box>
  );
};

export default App;
