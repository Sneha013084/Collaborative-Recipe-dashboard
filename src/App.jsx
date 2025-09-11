import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  return (
    
<>

{/* Main content with routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeCard></RecipeCard>} />
          
        </Routes>
     </>
        
  )
};

export default App;