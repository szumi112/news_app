import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo } from "react";
import { categorizeTitle } from "../utils/categorize";
import { Article } from "../types";

interface OpenNewsArticle {
  title: string;
  url: string;
  publishedAt: string;
  category?: string;
}

interface GuardianArticleFields {
  trailText?: string;
  bodyText?: string;
}

interface GuardianArticle {
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  fields?: GuardianArticleFields;
  url: string;
  category?: string;
}

interface NYTArticle {
  title: string;
  abstract: string;
  url: string;
  published_date: string;
  category?: string;
}

const fetchNewsData = async (): Promise<Article[]> => {
  const query =
    "world OR us OR politics OR business OR technology OR sports OR US OR UK";
  try {
    const urls = [
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&apiKey=88c7f3236f644e9bbd9d032b2e1d80b8&language=en`,
      "https://content.guardianapis.com/search?api-key=68160b14-7929-4e4d-9443-2785153ce0cf",
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=9jRmU39DAGM3osstzNUWiaxAKirM0Tr2",
    ];

    const requests = urls.map((url) => axios.get(url));
    const responses = await Promise.all(requests);

    const articles = responses.flatMap((response, index) => {
      if (index === 0) {
        const data = response.data as { articles: OpenNewsArticle[] };
        return data.articles.map((article) => ({
          title: article.title,
          url: article.url,
          source: "OpenNews",
          publishedAt: article.publishedAt,
          category: categorizeTitle(article.title),
        }));
      } else if (index === 1) {
        const data = response.data as {
          response: { results: GuardianArticle[] };
        };
        return data.response.results.map((article) => ({
          title: article.webTitle,
          url: article.webUrl,
          source: "The Guardian",
          publishedAt: article.webPublicationDate,
          category: categorizeTitle(article.webTitle),
        }));
      } else if (index === 2) {
        const data = response.data as { results: NYTArticle[] };
        return data.results.map((article) => ({
          title: article.title,
          url: article.url,
          source: "New York Times",
          publishedAt: article.published_date,
          category: categorizeTitle(article.title),
        }));
      }
      return [];
    });

    return articles;
  } catch (error) {
    console.error("Failed to fetch news data:", error);
    throw new Error("Failed to load news articles");
  }
};

export const useNewsData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery<Article[], Error>({
    queryKey: ["newsData"],
    queryFn: fetchNewsData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

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

  return {
    articles: filteredArticles,
    isLoading,
    isError,
    setSearchTerm,
    setSortBy,
  };
};
