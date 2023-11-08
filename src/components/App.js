import React from 'react';
import '../styles/App.css';
import { AuthContext } from '../Context/AuthContext';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm.js';
import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage.js';
import NavBar from './NavBar.js';
import '../styles/HomePage.css';

function App() {
  return (
    <div className="app">
      <AuthContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe-form" element={<RecipeFinderForm />} />
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
