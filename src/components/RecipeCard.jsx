import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/recipe/${idMeal}`}>
                <button>View Recipe Details</button>
            </Link>
        </div>
    );
};

export default RecipeCard;