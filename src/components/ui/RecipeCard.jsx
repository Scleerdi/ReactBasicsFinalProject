import { Box, Image, Tag, TagLabel, Text } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  const {
    label,
    image,
    dietLabels = [],
    cautions = [],
    mealType,
    dishType,
  } = recipe;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      overflow="hidden"
      borderRadius="md"
      alignContent="Center"
      as="button"
      onClick={() => onClick(recipe)}
    >
      <Image
        boxSize="250px"
        objectFit="cover"
        src={image}
        alt={label}
        borderRadius="md"
      />
      <Box p="4">
        <Text fontWeight="bold" fontSize="lg" mb="2">
          {label}
        </Text>
        <Text mb="2">
          Diet Labels: {dietLabels.length > 0 ? dietLabels.join(", ") : "N/A"}
        </Text>
        <Text mb="2">
          Cautions: {cautions.length > 0 ? cautions.join(", ") : "N/A"}
        </Text>
        <Tag colorScheme="gray" mb="2">
          <TagLabel>Meal Type: {mealType || "N/A"}</TagLabel>
        </Tag>
        <Tag colorScheme="gray">
          <TagLabel>Dish Type: {dishType || "N/A"}</TagLabel>
        </Tag>
      </Box>
    </Box>
  );
};
