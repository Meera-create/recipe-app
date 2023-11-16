import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage.js';
import NavBar from './NavBar.js';
import MyAccount from './MyAccount.js';
import SingleRecipe from './RecipeFinder/SingleRecipe';
import RecipeHomePage from './RecipeFinder/RecipeHomePage.js';

const App = () => {

  return (
    <div className="app">
      <AuthContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe-form" element={<RecipeHomePage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/single-recipe" element={<SingleRecipe />} />
        </Routes>
      </AuthContext>
      </div>
    );
  }

export default App
