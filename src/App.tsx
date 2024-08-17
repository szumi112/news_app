import React, { useState, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav";
import NewsList from "./components/news";
import { SearchContext } from "./context/searchContext";
import Filters from "./components/nav/filters";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [dateSort, setDateSort] = useState<"newest" | "oldest">("newest");
  const [source, setSource] = useState<string>("All");

  const contextValue = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      category,
      setCategory,
      dateSort,
      setDateSort,
      source,
      setSource,
    }),
    [searchTerm, category, dateSort, source]
  );

  return (
    <Box maxW={"1200px"} m={"0 auto 60px"} p={"0 12px"}>
      <SearchContext.Provider value={contextValue}>
        <Nav />
        <Filters />
        <NewsList />
      </SearchContext.Provider>
    </Box>
  );
};

export default App;
