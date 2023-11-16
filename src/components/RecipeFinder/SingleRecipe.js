import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import parse from 'html-react-parser';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_single-recipe.scss'



const SingleRecipe = ({ extractedRecipe, ingredientsList }) => {
    const { user } = useContext(Context);

    const saveRecipe = async (e) => {
        e.preventDefault();
        console.log(extractedRecipe);
        try {
            const docRef = await addDoc(collection(db, "recipes"), {
                uid: user.uid,
                recipe: extractedRecipe
            });
            console.log("Document written with ID: ", docRef.id);
            toast.success("Recipe saved!")
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("There was a problem saving the recipe - please try again later");
        }
    };


  const unlistedIngredients =
    extractedRecipe.extendedIngredients &&
    extractedRecipe.extendedIngredients.filter(
      (ingredient) => !ingredientsList?.includes(ingredient.original)
    );

  return (
    <div className="single_recipe">
      <Toaster />
          <h1>Your recipe</h1>
          <div className="clicked-recipe">
              <h2>{extractedRecipe.title}</h2>
              <div className="full-recipe">
            <div >
                <img className="image" alt="pic of food"  src={extractedRecipe.image} />
            </div> 
      <div className="ingredients" >
        <h3>Ingredients:</h3>
        <ul>
          {unlistedIngredients &&
            unlistedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
        </ul>
              </div className="instructions">
              <h3>Instructions:</h3>
                  {parse(`${extractedRecipe.instructions}`)}
                  
              <h3>Time to cook: {extractedRecipe.readyInMinutes} minutes </h3>
              
              </div>
          </div>
          
          
      <button className="save-button" type="button" onClick={saveRecipe}>
        Save
      </button>
    </div>
  );
};

export default SingleRecipe;
