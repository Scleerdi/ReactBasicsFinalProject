import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { RecipeFilter } from "./ui/RecipeFilter";
import { RecipeCards } from "./RecipeCards";

const availableRecipes = data.hits;

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const [filter, setFilter] = useState("all");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const recipesForSearch = availableRecipes.filter((recipe) => {
    if (filter === "all") return recipe;
    if (filter === "vegan") return recipe.recipe.healthLabels.includes("Vegan");
    if (filter === "vegetarian")
      return recipe.recipe.healthLabels.includes("Vegetarian");
    if (filter === "pescatarian")
      return recipe.recipe.healthLabels.includes("Pescatarian");
  });

  const matchedRecipes = recipesForSearch.filter((recipe) => {
    return recipe.recipe.label
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput onChange={(event) => setSearchField(event.target.value)} />
      <RecipeFilter filter={filter} onChange={handleFilter} />
      <RecipeCards recipes={matchedRecipes} onClick={onClick} />
    </>
  );
};
