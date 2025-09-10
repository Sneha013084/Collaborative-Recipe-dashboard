import React from "react";
import RecipeCard from "./RecipeCard";

/**
 * RecipeList renders a grid of RecipeCard components.
 */
function RecipeList({ recipes }) {
    if (recipes.length === 0) return <p>No recipes found.</p>

    return (
        <div className="recipe-grid">
            {recipes.map((r) => (
                <RecipeCard 
                    key={r.idMeal}
                    name={r.strMeal}
                    category={r.strCategory}
                    area={r.strArea}
                    image={r.strMealThumb}
                />
            ))}
        </div>
    );
};

export default RecipeList;