import React from 'react';

import parse from 'html-react-parser';


const SingleRecipe = ({ extractedRecipe }) => {
    console.log(extractedRecipe);
    // console.log(recipeID, 'this is a recipe ID')
        return (
            <div className="single_recipe">
                <h1>Your recipe</h1>
                <p>{extractedRecipe.title}</p>
                {parse(`${extractedRecipe.instructions}`)}
                <p>Time to cook {extractedRecipe.readyInMinutes}</p>
            </div>
        )
    }


export default SingleRecipe;
