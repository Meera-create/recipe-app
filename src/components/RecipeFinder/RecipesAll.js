import React from 'react'

import Alert from './Alert.js'
import SingleRecipe from './SingleRecipe.js';


const RecipeAll = ({allData}) => {




    return (
        <div className="recipesAll">
        
            <h1>Here is a list of recipes that match your search!</h1>
    {console.log(allData,"MOOOOO")}

            {alert && <Alert message={alert.message} />}


        <ul className="recipes">
                {allData.map((recipe,index) => (
            
            <div className="eachRecipe" key={index} >
                <SingleRecipe {...recipe} />
                ...recipe
                      </div>
                    
        ))}
            </ul>
            
        </div>
    )
}


export default RecipeAll;