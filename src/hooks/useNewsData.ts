import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { categorizeTitle } from "../utils/categorize";
import { Article } from "../types";
import { useSearch } from "../context/searchContext";
import { query } from "../consts/newsApiSearchQuery";

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
  try {
    const urls = [
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&apiKey=${import.meta.env.VITE_NEWSAPI_KEY}&language=en`,
      `https://content.guardianapis.com/search?api-key=${
        import.meta.env.VITE_GUARDIAN_KEY
      }`,
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${
        import.meta.env.VITE_NYTIMES_KEY
      }`,
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
  const { searchTerm, category, dateSort, source } = useSearch();

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

    filtered = filtered.filter((article) => article.title !== "[Removed]");

    if (searchTerm) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category && category !== "All") {
      filtered = filtered.filter((article) => article.category === category);
    }

    if (source && source !== "All") {
      filtered = filtered.filter((article) => article.source === source);
    }

    if (dateSort === "newest") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } else {
      filtered = filtered.sort(
        (a, b) =>
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    }

    return filtered;
  }, [articles, searchTerm, category, dateSort, source]);

  return {
    articles: filteredArticles,
    isLoading,
    isError,
  };
};
