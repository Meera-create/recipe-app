import React, { forwardRef, useState, useEffect } from 'react';
import parse from 'html-react-parser';
import StarRating from '../StarRating';
import "../../styles/components/_saved-recipe.scss";

const SavedRecipe = ({ recipe }, ref) => {
  
  // console.log(setRating);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (recipe.rating !== undefined) {
      setRating(recipe.rating);
    }
  }, [recipe]);

  return (
    <div ref={ref} className="single_recipe">
      <div className="clicked-recipe">
        {/* <button >Hidden Button</button> */}
        {recipe.image !== undefined && (
          <div>
            <img className="image" alt="pic of food" src={recipe.image} />
          </div>
        )}
        <h2>{recipe.title}</h2>
        {recipe.savedRecipe && <StarRating recipe={recipe} rating={rating} setRating={setRating}/>}
        <div>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original ? ingredient.original : ingredient}</li>
            ))}
          </ul>
        </div>
        <h3>Instructions:</h3>
          {parse(`${recipe.instructions}`)}   
        <h3>Time to cook: {recipe.readyInMinutes} minutes </h3>
      </div>
    </div>
  )
}

export default forwardRef(SavedRecipe);