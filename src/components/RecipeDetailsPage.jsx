import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetailsPage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load recipe details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-details">
      <Link to="/">
        <button>Back to Recipes</button>
      </Link>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <p>
          <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
            Watch Video
          </a>
        </p>
      )}
    </div>
  );
};

export default RecipeDetailsPage;