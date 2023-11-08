import React from 'react';
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

function App() {
  return (
    <div className="app">
      <AuthContext>
        <NavBar />
        <Routes>
          
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe-form" element={<RecipeFinderForm />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/recipe-list" element={<RecipesAll />} />
          <Route path="/single-recipe" element={<SingleRecipe />} />
          
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
