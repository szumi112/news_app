import { createContext, useContext } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  dateSort: string;
  setDateSort: (sort: "newest" | "oldest") => void;
  source: string;
  setSource: (source: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
