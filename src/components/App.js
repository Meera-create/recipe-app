import React, { useState } from 'react';
import '../styles/App.css';
import { AuthContext } from '../Context/AuthContext';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm.js';
import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage.js';
import '../styles/Homepage.css';

function App() {
  return (
    <div className="app">
      <AuthContext>
        <Routes>
          {/* <Navbar/> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe-form" element={<RecipeFinderForm />} />
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.name}</li>
            ))}
          </ul>
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
