import { Box, Grid, GridItem } from "@chakra-ui/react";
import NewsCard from "./components/news/newsCard";
import Nav from "./components/nav";

const App = () => {
  return (
    <Box maxW={"1200px"} m={"0 auto"} p={"0 12px"}>
      <Nav />
      <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
        <GridItem w="100%">
          <NewsCard
            image={
              "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/d6ea/live/c0bb84c0-5bce-11ef-b2d2-cdb23d5d7c5b.jpg"
            }
            title={"hi"}
            description={`"Since 12 noon today, the enemy has been carrying out targeted massive strikes on the Petrovsky district of the regional capital. According to preliminary information, seven civilians, including a teenager, were wounded," Pushilin said in a statement on Telegram.`}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
