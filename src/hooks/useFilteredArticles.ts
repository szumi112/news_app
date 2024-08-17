import { useMemo } from "react";
import { Article } from "../types";

export const useFilteredArticles = (
  articles: Article[],
  searchTerm: string,
  sortBy: "date" | "title"
) => {
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (searchTerm) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "date") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } else if (sortBy === "title") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [articles, searchTerm, sortBy]);

  return filteredArticles;
};
