import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeChoice } from "../components/RecipeChoice";

export const RecipePage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState("");
  return (
    <div>
      {selectedRecipe ? (
        <RecipeChoice recipe={selectedRecipe} onClick={setSelectedRecipe} />
      ) : (
        <>
          <RecipeSearch onClick={setSelectedRecipe} />
        </>
      )}
    </div>
  );
};
