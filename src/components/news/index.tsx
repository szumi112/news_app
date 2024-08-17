import { useState } from "react";
import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { useNewsData } from "../../hooks/useNewsData";
import NewsCard from "./newsCard";
import Pagination from "./pagination";

const NewsList = () => {
  const { articles, isLoading, isError } = useNewsData();
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading && (
        <Box display="flex" justifyContent="center" mt="20px">
          <Spinner size="xl" />
        </Box>
      )}

      {isError && (
        <Box display="flex" justifyContent="center" mt="20px">
          <Text color="red.500">Failed to load news articles</Text>
        </Box>
      )}

      {!isLoading && !isError && (
        <>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {currentArticles.map((article) => (
              <GridItem w="100%" key={article.url}>
                <NewsCard
                  title={article.title}
                  source={article.source}
                  url={article.url}
                  category={article.category}
                  date={article.publishedAt}
                />
              </GridItem>
            ))}
          </Grid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            articlesPerPage={articlesPerPage}
            setArticlesPerPage={setArticlesPerPage}
          />
        </>
      )}
    </>
  );
};

export default NewsList;
