import React from "react";

/**
 * SearchBar component for filtering recipes by name.
 */
function SearchBar({ search, setSearch }) {
    return (
        <input 
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default SearchBar;