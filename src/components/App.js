import React, { useState } from 'react';
import '../styles/App.css';
import { AuthContext } from '../Context/AuthContext';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm.js';
import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage.js';
import NavBar from './NavBar.js';
import '../styles/HomePage.css';
import MyAccount from './MyAccount.js';
import RecipesAll from './RecipeFinder/RecipesAll';
import SingleRecipe from './RecipeFinder/SingleRecipe';
import axios from 'axios'
import apiConfig from '../config/apiConfig';

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="app">
      <AuthContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe-form" element={<RecipeFinderForm recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/recipe-list" element={<RecipesAll recipes={recipes} />} />
          <Route path="/single-recipe" element={<SingleRecipe />} /> 
         </Routes>
        </AuthContext>
      </div>
    );
  }

export default App
