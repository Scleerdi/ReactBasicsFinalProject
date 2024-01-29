import {
  Box,
  Image,
  Badge,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

export const RecipeChoice = ({ recipe, onClick }) => {
  const {
    label,
    image,
    dietLabels = [],
    healthLabels = [],
    cautions = [],
    totalNutrients = [],
    mealType,
    dishType,
    totalTime,
    ingredients,
  } = recipe;

  const selectedNutrients = [
    "ENERC_KCAL",
    "PROCNT",
    "FAT",
    "CHOCDF",
    "CHOLE",
    "NA",
  ];

  return (
    <>
      <Box
        maxW="800px"
        mx="auto"
        p="4"
        bg="gray.100"
        boxShadow="lg"
        borderRadius="md"
        mt="8"
      >
        <Button onClick={() => onClick()}>{"<<"}</Button>
        <Heading textAlign="center" mb="4">
          {label}
        </Heading>
        <Box display={{ md: "flex" }}>
          <Box flex="1" mr={{ md: "4" }}>
            <Image
              src={image}
              alt={label}
              borderRadius="md"
              boxShadow="md"
              mb="4"
            />
            <Text>
              <strong>Diet Labels:</strong>
            </Text>
            <Box>
              {dietLabels.map((label) => (
                <Badge key={label} colorScheme="green" mr="2">
                  {label}
                </Badge>
              ))}
            </Box>
            <Text mt="4">
              <strong>Health Labels:</strong>
            </Text>
            <Box>
              {healthLabels.map((label) => (
                <Badge key={label} colorScheme="green" mr="2">
                  {label}
                </Badge>
              ))}
            </Box>
            <Text mt="4">
              <strong>Cautions :</strong>
            </Text>
            <Box>
              {cautions.map((caution) => (
                <Badge key={caution} colorScheme="red" mr="2">
                  {caution}
                </Badge>
              ))}
            </Box>
            <Text mt="4">
              <strong>Dish Type:</strong> {dishType}
            </Text>
            <Text>
              <strong>Meal Type:</strong> {mealType}
            </Text>
            <Text>
              <strong>Servings:</strong> {recipe.yield}
            </Text>
            <Text>
              <strong>Cooking Time:</strong> {totalTime} {" Minutes"}
            </Text>
          </Box>
          <Box flex="1" ml={{ md: "4" }}>
            <Text mt={{ base: "4", md: "0" }}>
              <strong>Ingredients:</strong>
            </Text>
            <UnorderedList>
              {ingredients.map((ingredient, index) => (
                <ListItem key={index}>{ingredient.text}</ListItem>
              ))}
            </UnorderedList>
            <Text mt="4">
              <strong>Nutritional Values:</strong>
            </Text>
            <UnorderedList>
              {selectedNutrients.map((nutrient) => (
                <li key={nutrient}>
                  {totalNutrients[nutrient]?.label}:{" "}
                  {Math.floor(totalNutrients[nutrient]?.quantity)}{" "}
                  {totalNutrients[nutrient]?.unit}
                </li>
              ))}
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </>
  );
};
