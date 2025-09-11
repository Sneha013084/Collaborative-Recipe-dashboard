
import React from "react" ;

function SearchBar ({ searchName, setSearchName }) {

return (
    <input type = "text" placeholder="Search Recipes"  value ={searchName} 
    onChange = {(e) => setSearchName (e.target .value)}
     style={{ padding: "0.5rem", width: "50%", marginBottom: "1rem" }}
     />
);
}

export default SearchBar;