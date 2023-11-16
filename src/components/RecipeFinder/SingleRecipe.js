import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import parse from 'html-react-parser';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_single-recipe.scss';

const SingleRecipe = ({ extractedRecipe }) => {
  const { user } = useContext(Context);

  const saveRecipe = async (e) => {
    e.preventDefault();
    console.log(extractedRecipe);
    try {
      const docRef = await addDoc(collection(db, 'recipes'), {
        uid: user.uid,
        recipe: extractedRecipe,
      });
      console.log('Document written with ID: ', docRef.id);
      toast.success('Recipe saved!');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('There was a problem saving the recipe - please try again later');
    }
  };

  return (
    <div className="single_recipe">
      <Toaster />
      <h1>Your recipe</h1>
      <p>{extractedRecipe.title}</p>
      <div>
        <h2>Ingredients:</h2>
        <ul>
          {extractedRecipe.extendedIngredients &&
            extractedRecipe.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
        </ul>
      </div>
      {parse(`${extractedRecipe.instructions}`)}
      <p>Time to cook {extractedRecipe.readyInMinutes}</p>
      <button type="button" onClick={saveRecipe}>
        Save
      </button>
    </div>
  );
};

export default SingleRecipe;

