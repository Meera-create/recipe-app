import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import parse from 'html-react-parser';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_single-recipe.scss'



const SingleRecipe = ({ extractedRecipe }) => {
    // console.log(extractedRecipe);

    const { user } = useContext(Context);

    const saveRecipe = async (e) => {
        e.preventDefault();
        console.log(extractedRecipe);
        try {
            const docRef = await addDoc(collection(db, "recipes"), {
                uid: user.uid,
                recipe: extractedRecipe
                // recipeId: extractedRecipe.id,
                // title: extractedRecipe.title,
                // image: extractedRecipe.image,
                // cheap: extractedRecipe.cheap,
                // dairyFree: extractedRecipe.dairyFree,
                // diets: extractedRecipe.diets,
                // extendedIngredients: extractedRecipe.extendedIngredients,
                // glutenFree: extractedRecipe.glutenFree,
                // instructions: extractedRecipe.instructions,
                // readyInMinutes: extractedRecipe.readyInMinutes,
                // servings: extractedRecipe.servings,
                // sourceUrl: extractedRecipe.sourceUrl,
                // summary: extractedRecipe.summary,
                // vegan: extractedRecipe.vegan,
                // vegetarian: extractedRecipe.vegetarian,
            });
            console.log("Document written with ID: ", docRef.id);
            toast.success("Recipe saved!")
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("There was a problem saving the recipe - please try again later");
        }
    };
    // console.log(recipeID, 'this is a recipe ID')
        return (
            <div className="single_recipe">
                <Toaster />
                <h1>Your recipe</h1>
                <h2>{extractedRecipe.title}</h2>
                <img className="recipe-pic" src={extractedRecipe.image} alt="recipe" />
                <div className="instructions">
                    {parse(`${extractedRecipe.instructions}`)}
                </div>
                
                <h3>Time to cook {extractedRecipe.readyInMinutes}</h3>
                <button className="save-recipe" type="button" onClick={saveRecipe}>Save</button>
            </div>
        )
    }


export default SingleRecipe;
