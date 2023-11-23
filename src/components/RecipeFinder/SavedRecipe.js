import React from 'react';
import parse from 'html-react-parser';

const SavedRecipe = ({ recipe }) => {
  const buttonStyle = {
    display: 'none',
    visibility: 'hidden',
    opacity: 0,
    position: 'relative', // Change to 'relative' or remove this line
  };
  

  return (
    <div className="single_recipe">
      <div className="clicked-recipe">
        <button style={buttonStyle}>Hidden Button</button>

        {recipe.image !== undefined && (
          <div>
            <img className="image" alt="pic of food" src={recipe.image} />
          </div>
        )}

        <h2>{recipe.title}</h2>

        <div>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        </div>

        <h3>Instructions:</h3>
        {parse(`${recipe.instructions}`)}

        <h3>Time to cook: {recipe.readyInMinutes} minutes </h3>
      </div>
    </div>
  );
};

export default SavedRecipe;



