import React , { useState } from 'react'
import axios from 'axios';
import Alert from './Alert.js'
import SingleRecipe from './SingleRecipe.js';




const RecipeAll = () => {

   
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("message")

    axios.get(`https://api.edamam.com/search?app_id=${apiConfig.app_id}&app_key=${apiConfig.app_key}&q=${ingredients}`)
        .then(({ data }) => {
        setRecipes(data)
        })
        .catch((error) => {
        setAlert({message:"Please try different ingredients"})
    })

     



    return (
        <div className="recipesAll">
        
            <h1>Here is a list of recipes that match your search!</h1>

            {alert && <Alert message={alert.message} />}


        <ul className="recipes">
        {recipes.map((recipe, index) => (
            <li className="eachRecipe" key={index}>
                <SingleRecipe />
          </li>
        ))}
            </ul>
            
        </div>
    )
}


export default RecipeAll;