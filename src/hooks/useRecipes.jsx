import { useState, useEffect } from "react";

/**
 * Custom hook to fetch recipes from TheMealDB API,
 * manages loading and error states, and filter by search term.
 */
export function useRecipes(initialSearch = "") {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState(initialSearch);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then((res) => res.json())
            .then ((data) => {
                setRecipes(data.meals || []); // fallback if APT returns null
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load recipes.");
                setLoading(false);
            });
    }, []);

    // Filter recipes based on search term
    const filteredRecipes = recipes.filter((r) => 
        r.strMeal.toLowerCase().includes(search.toLowerCase())
    );

    return { recipes: filteredRecipes, search, setSearch, loading, error };
};