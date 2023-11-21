import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from '../../config/firebase';
import parse from 'html-react-parser';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_single-recipe.scss'



const SingleRecipe = ({ extractedRecipe, ingredientsList ,missedIngredients}) => {
   
    const { user } = useContext(Context);

    const saveRecipe = async (e) => {
        e.preventDefault();
        console.log(extractedRecipe);
        try {
            await setDoc(doc(db, "recipes", `${extractedRecipe.id} - ${user.uid}`), {
                uid: user.uid,
                recipe: extractedRecipe,
                createdAt: serverTimestamp()
            });
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


    const missingFoodItems = missedIngredients.missedIngredients.map((val) => (
            val.name
    ))
    // console.log(missedIngredients,'RECIPE')
    // console.log(missedIngredients.missedIngredients.map((value)=>(value.name)),'MISED INGREDIENTS')
    // console.log(missingFoodItems,'MISSING FOOD ITEMS ')


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
                              unlistedIngredients.map((ingredient,index) => (
                
                                  
                    <li key={index}>{ingredient.original}</li> 
            ))}
                         
                          missing items:{missingFoodItems.map((fooditem, index) => (
                              <li kry={index}>{fooditem}</li>
                          ))}
                  
             

              <h3>Instructions:</h3>
                  {parse(`${extractedRecipe.instructions}`)}
                  
                          <h3>Time to cook: {extractedRecipe.readyInMinutes} minutes </h3>
                          </ul>
              
                  </div>
                  
                  </div>
                      
       
          
          
      <button className="save-button" type="button" onClick={saveRecipe}>
        Save
              </button>
              
      </div >
      </div>
  
              
  );
};

export default SingleRecipe;