import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage.js';
import NavBar from './NavBar.js';
import MyAccount from './MyAccount.js';
// import SingleRecipe from './RecipeFinder/SingleRecipe';
import RecipeHomePage from './RecipeFinder/RecipeHomePage.js';
import Protected from './Protected.js';
import AddRecipeForm from './RecipeFinder/AddRecipeForm.js';
import Login from './Login.js';
import CreateAccount from './CreateAccount.js';
import Landing from './LandingPage';

const App = () => {

  return (
    <div className="app">
      <AuthContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/recipe-form" element={<RecipeHomePage />} />
          <Route path="/my-account" element={<Protected><MyAccount /></Protected>} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<CreateAccount />} />
          {/* <Route path="/single-recipe" element={<SingleRecipe />} /> */}
          <Route path="/add-recipe" element={<Protected><AddRecipeForm /></Protected>} />
          
        </Routes>
      </AuthContext>
      </div>
    );
  }

export default App
