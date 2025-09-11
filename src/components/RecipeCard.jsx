import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "250px",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h2> {recipe.strMeal} </h2>
      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>

      <p>
        <strong>Area: </strong> {recipe.strArea}
      </p>
      <p>
        {" "}
        {recipe.strInstructions
          ? recipe.strInstructions.substring(0, 80) + "..."
          : "No instructions available "}{" "}
      </p>
    </div>
  );
}

export default RecipeCard;
