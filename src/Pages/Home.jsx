import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

//

function RecipeCatalog() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");

  // to get all recipe

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setLoading(false);
      })

      .catch((err) => {
        setError("Error fetching recipes:");
        console.error(err);
      });
  }, []);


  // filter recipe by name

  const filteredRecipes = recipes.filter((recipe) =>
recipe.strMeal.toLowerCase().includes (searchName.toLowerCase()));

    if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
    style={{
      padding :"1rem",   // outer container styling
      maxWidth:"1200px",
      margin:"0 auto",
    }}>

      

      <h2 style={{ textAlign :"center" , marginBottom: "1.5rem"}}>  Recipe Catalog Dashboard </h2>



      <SearchBar searchName = {searchName} setSearchName ={setSearchName} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent:"center"}}>
        

        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeCatalog;
