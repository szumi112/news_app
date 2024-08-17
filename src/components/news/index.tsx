import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { useNewsData } from "../../hooks/useNewsData";
import NewsCard from "./newsCard";

const NewsList = () => {
  const { articles, isLoading, isError } = useNewsData();
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
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {articles.map((article) => (
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
      )}
    </>
  );
};

export default NewsList;
