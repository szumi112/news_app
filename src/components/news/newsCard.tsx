import { Box, Heading, Text, Link, Flex, Badge } from "@chakra-ui/react";
import { timeAgo } from "../../utils/formatTime";

interface Props {
  title: string;
  source: string;
  url: string;
  category: string;
  date: string;
}

const NewsCard = ({ title, source, url, category, date }: Props) => {
  return (
    <Box maxW="100%" overflow="hidden">
      <Badge>{category}</Badge>
      <Link href={url} isExternal>
        <Heading
          as="h3"
          size="md"
          mt={4}
          _hover={{ textDecoration: "underline" }}
        >
          {title}
        </Heading>
      </Link>
      <Flex
        color={"gray.500"}
        fontSize="14px"
        justifyContent={"space-between"}
        mt={3}
      >
        <Text>{source}</Text>
        <Text>{timeAgo(date)}</Text>
      </Flex>
    </Box>
  );
};

export default NewsCard;
