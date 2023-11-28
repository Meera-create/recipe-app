import React, { useContext, forwardRef } from 'react';
import { Context } from '../../Context/AuthContext';
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from '../../config/firebase';
import parse from 'html-react-parser';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_single-recipe.scss'

const SingleRecipe = ({ extractedRecipe, ingredientsList ,missedIngredients, missingFood}, ref) => {
   
    const { user } = useContext(Context);

    const saveRecipe = async (e) => {
        e.preventDefault();
        console.log(extractedRecipe);
        try {
            await setDoc(doc(db, "recipes", `${extractedRecipe.id} - ${user.uid}`), {
                uid: user.uid,
                recipe: {...extractedRecipe, savedRecipe: true},
                createdAt: serverTimestamp(),
                
            });
            toast.success("Recipe saved!")
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("There was a problem saving the recipe - please try again later");
        }
    };

    console.log(extractedRecipe);
  const unlistedIngredients =
    extractedRecipe.extendedIngredients &&
    extractedRecipe.extendedIngredients.filter(
      (ingredient) => !ingredientsList?.includes(ingredient.original)
    );
console.log(unlistedIngredients)
    // let missingFoodItems;
    // if (ingredientsList) {
    //   missingFoodItems = missedIngredients.missedIngredients.map((val) => (
    //     val.name
    // ))
    // } else {
    //     missingFoodItems = [];
        
    // }

  // console.log(missingFoodItems);
  // console.log(extractedRecipe.extendedIngredients);
  // console.log(ingredientsList);
  console.log(extractedRecipe);

  return (
    <div ref={ref} className="single_recipe">
      <Toaster />
      <h1 className='title-main'>Your recipe...</h1>
      <div className="clicked-recipe">
        <h2 className='recipe-clicked-title'>{extractedRecipe.title}</h2>
        <div className="full-recipe">    
          <div>
            <img className="image" alt="pic of food"  src={extractedRecipe.image} />
          </div>     
          <div className="ingredients" >
            <h3>Your Ingredients:</h3>
            <ul>
              {ingredientsList.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
              })}
            </ul>
            <h3>Missing Ingredients</h3>
            <ul>
                          {unlistedIngredients && unlistedIngredients.map((ingredient, index) => (
                
                <li key={index} >{ingredient.original}</li> 
              ))}          
                          {/* <li>Missing ingredients:</li> */}
              {/* {ingredientsList && "missing items:"} {missingFoodItems.map((fooditem, index) => (
                  <li key={index}>{fooditem}</li>
                  
              ))} */}
            </ul>
            <h3>Instructions:</h3>
              {parse(`${extractedRecipe.instructions}`)}
              {extractedRecipe.readyInMinutes > 0 && <h3>Time to cook: {extractedRecipe.readyInMinutes} minutes </h3>}
          </div>
        </div>
        <button className="save-button" type="button" onClick={saveRecipe}>
          Save
        </button>  
      </div >
    </div>      
  );
};

export default forwardRef(SingleRecipe);