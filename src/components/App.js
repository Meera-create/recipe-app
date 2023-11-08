import React from 'react';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm.js';
import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage.js';
import '../styles/Homepage.css';

function App() {
  

  return (
    <div className="app">
      
      <Routes>
        {/* <Navbar/> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe-form" element={<RecipeFinderForm />} />
      </Routes>

  
    </div>
  );
}

export default App;
