import React from "react";
import { useRecipes } from "./hooks/useRecipes";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import './App.css';

/**
 * Main App component integrates data logic with UI components.
 */
function App() {
  const { recipes, search, setSearch, loading, error } = useRecipes();

  if (loading) return <p>Loading recipes...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
