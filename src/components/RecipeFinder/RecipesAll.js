import React from 'react'
import Alert from './Alert.js'
// import SingleRecipe from './SingleRecipe.js';

const RecipeAll = ({ recipes, search }) => {
    return (
        <div className="recipesAll">
          {search && <h1>Here is a list of recipes that match your search!</h1>}
          {alert && <Alert message={alert.message} />}

          <ul className="recipes">
            {recipes.map((recipe, index) => (
              <li className="eachRecipe" key={index}>
                {/* <SingleRecipe /> */}
                {recipe.recipe.label}
              </li>
            ))}
          </ul>
        </div>
    )
}

export default RecipeAll;