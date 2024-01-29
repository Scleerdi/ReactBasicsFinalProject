import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

export const RecipeFilter = ({ value, onChange }) => {
  return (
    <RadioGroup
      p={4}
      value={value}
      mb={8}
      borderRadius={15}
      color="black"
      boxShadow={"xl"}
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Text>Filter recipes:</Text>
        <Radio bg="white" value="all" onChange={onChange}>
          All
        </Radio>
        <Radio bg="white" value="pescatarian" onChange={onChange}>
          Pescatarian
        </Radio>
        <Radio bg="white" value="vegetarian" onChange={onChange}>
          Vegetarian
        </Radio>
        <Radio bg="white" value="vegan" onChange={onChange}>
          Vegan
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
