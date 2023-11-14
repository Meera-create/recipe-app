import React from 'react';

import Alert from './Alert';

import {useNavigate} from 'react-router-dom';
import SingleRecipe from './SingleRecipe';


const RecipeAll = ({ recipes, search, recipeID , setIndex, setRecipeID}) => {


    const navigate = useNavigate();



    return (
        <div className="recipesAll">
          {search && <h1>Here is a list of recipes that match your search!</h1>}
          {alert && <Alert message={alert.message} />}

          <ul className="recipes">
                {recipes.map((recipe, index) => (
                    <button className="eachRecipe"
                       
                        value={recipe.id}
                        key={recipe.id}
                   
                    
                     
                        onClick={(() => 
                            setRecipeID(recipe.id) &&
                            navigate("/single-recipe") &&
                            <SingleRecipe />
                        )}
                    
                    >
                        {recipe.title}
                        {/* {recipe.url} */}
                      
                        {recipe.id}
                     
                   
                    

                   
                    </button>
                
                 
            ))}
          </ul>
        </div>
    )
}

export default RecipeAll;