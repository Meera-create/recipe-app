import React, {useState} from 'react';
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



function App(props) {


  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

    const handleSubmit = async (e) => {
      e.preventDefault()
      

       await axios.get(
          `https://api.edamam.com/search?app_id=${apiConfig.app_id}&app_key=${apiConfig.app_key}&q=${ingredients}`,
        )
     .then((result) => {
       console.log(result.data)
       setRecipes(result.data)
       
     })
        
      
      .catch ((error)=> console.log(error));
    
             }


    return (
      <div className="app">
        <AuthContext>
          <NavBar />
          <Routes>
          
            <Route path="/" element={<Homepage />} />
            <Route path="/recipe-form" element={<RecipeFinderForm handleSubmit={handleSubmit} setIngredients={setIngredients} />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/recipe-list" element={<RecipesAll allData={[...recipes]} />} />
            <Route path="/single-recipe" element={<SingleRecipe allData={[...recipes]}  />} />
          
          </Routes>
        </AuthContext>
      </div>
    );
  }

export default App
