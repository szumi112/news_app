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
    <Box
      maxW="100%"
      overflow="hidden"
      borderBottom="1px solid rgba(255,255,255,0.1)"
      h={{ base: "110%", sm: "225px" }}
      position="relative"
      p={4}
    >
      <Box mb={8}>
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
      </Box>

      <Flex
        color={"gray.500"}
        fontSize="14px"
        justifyContent={"space-between"}
        position="absolute"
        bottom={4}
        left={4}
        right={4}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text>{source}</Text>
        <Text>{timeAgo(date)}</Text>
      </Flex>
    </Box>
  );
};

export default NewsCard;
