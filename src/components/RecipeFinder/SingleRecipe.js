import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import parse from 'html-react-parser';


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
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
    // console.log(recipeID, 'this is a recipe ID')
        return (
            <div className="single_recipe">
                <h1>Your recipe</h1>
                <p>{extractedRecipe.title}</p>
                {parse(`${extractedRecipe.instructions}`)}
                <p>Time to cook {extractedRecipe.readyInMinutes}</p>
                <button type="button" onClick={saveRecipe}>Save</button>
            </div>
        )
    }


export default SingleRecipe;
