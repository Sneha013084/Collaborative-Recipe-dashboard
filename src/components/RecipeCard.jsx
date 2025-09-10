import React from "react";
/**
 * RecipeCard displays individual recipe details.
 */
function RecipeCard({ name, category, area, image }) {
    return (
        <div className="recipe-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="category">{category}</p>
            <p className="area">{area}</p>
        </div>
    );
};

export default RecipeCard;