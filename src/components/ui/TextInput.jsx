import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => {
  return (
    <Input
      onChange={onChange}
      bg={"white"}
      w={{ base: 290, md: 600, lg: 900 }}
      my={4}
      placeholder="Search for recipe"
    />
  );
};
