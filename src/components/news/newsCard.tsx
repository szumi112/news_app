import { Box, Heading, Text, Link } from "@chakra-ui/react";

interface Props {
  title: string;
  source: string;
  url: string;
}

const NewsCard = ({ title, source, url }: Props) => {
  return (
    <Box maxW="100%" overflow="hidden">
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
      <Text color={"gray.500"}>{source}</Text>
    </Box>
  );
};

export default NewsCard;
