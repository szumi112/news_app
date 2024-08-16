import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  image: string;
  title: string;
  description: string;
}

const NewsCard = ({ image, title, description }: Props) => {
  return (
    <Box maxW="100%" overflow="hidden">
      <Image src={image} maxW="100%" objectFit="cover" />
      <Heading as="h3" size="md" mt={4}>
        {title}
      </Heading>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

export default NewsCard;
