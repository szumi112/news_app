import React from "react";
import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import Nav from "./components/nav";
import NewsCard from "./components/news/newsCard";
import { useNewsData } from "./components/hooks/useNewsData";

const App: React.FC = () => {
  const { articles, isLoading, isError } = useNewsData();
  // console.log(articles);

  return (
    <Box maxW={"1200px"} m={"0 auto 60px"} p={"0 12px"}>
      <Nav />

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
        <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
          {articles.map((article, index) => (
            <GridItem w="100%" key={index}>
              <NewsCard
                title={article.title}
                source={article.source}
                url={article.url}
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default App;
