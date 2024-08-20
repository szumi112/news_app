// src/context/SearchProvider.tsx
import React, { useState, useMemo, ReactNode } from "react";
import { SearchContext } from "./searchContext";

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
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
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
