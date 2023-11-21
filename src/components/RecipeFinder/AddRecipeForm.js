import React, { useContext, useState } from 'react';
import { Context } from '../../Context/AuthContext';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../config/firebase';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import toast, { Toaster } from 'react-hot-toast';


const AddRecipeForm = () => {
  const { user } = useContext(Context);

  const initialState = {
    fields: {
      title: '',
      extendedIngredients: [],
      instructions: [],
      readyInMinutes: ''
    },
    ingredient: '',
    instruction: '',
  }

  const [fields, setFields] = useState(initialState.fields);
  const [ingredient, setIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [instruction, setInstruction] = useState('');
  const [instructionsList, setInstructionsList] = useState([]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  }

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  }

  const handleAddIngredient = (event) => {
    event.preventDefault();
    if (ingredient.length > 0) {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient(initialState.ingredient);
    } else {
      toast.error('Please enter an ingredient');
    }
  }

  const handleSaveIngredients = (event) => {
    event.preventDefault();
    if (ingredientsList.length > 0) {
      try {
        setFields({...fields, extendedIngredients: ingredientsList});
        toast.success('Ingredients saved');    
      } catch (error) {
        toast.error('There was an error saving the ingredients');
      }
    } else {
      toast.error('There are no ingredients in the list :(');
    }
    
  }

  const handleInstructionChange = (event) => {
    setInstruction(event.target.value);
  }

  const handleAddInstruction = (event) => {
    event.preventDefault();
    if (instruction.length > 0) {
      setInstructionsList([...instructionsList, instruction]);
      setInstruction(initialState.instruction);
    } else {
      toast.error('Please add an instruction');
    }
  }

  const handleSaveInstructions = (event) => {
    event.preventDefault();
    if(instructionsList.length > 0) {
      try {
        setFields({...fields, instructions: instructionsList});
        toast.success('Instructions saved');
      } catch (error) {
        toast.error('There was an error saving the instructions');
      }
    } else {
      toast.error('There are no instructions in the list :(');
    }
  }

  const handleAddRecipe = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "userRecipes"), {
        uid: user.uid,
        recipe: fields,
        createdAt: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success('Recipe added!');
      setFields(initialState.fields);
      setIngredientsList([]);
      setInstructionsList([]);
    } catch (error) {
      toast.error('There was an error, please try again later');
    }
  }

  return (
    <div>
      <Toaster />
      <h1>Add a recipe</h1>
      <form>
        <label htmlFor='title'>Recipe Name: </label>
        <input 
          id='title' 
          name='title' 
          value={fields.title} 
          onChange={handleFieldChange}
          required
        />
        <br />
        <br />
        <label htmlFor='ingredient'>Ingredients: </label>
        <input id='ingredient' name='ingredient' type='text' placeholder='Add ingredients' value={ingredient} onChange={handleIngredientChange} required/>
        <button type='submit' onClick={handleAddIngredient}>Add</button>
        <button type='button' onClick={handleSaveIngredients}>Save Ingredients</button>
        <br />
        <br />
        {ingredientsList.length >= 1 && <><IngredientsList ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} /></>}
        <label htmlFor='instruction'>Instructions: </label>
        <input id='instruction' name='instruction' type='text' placeholder='Add instructions' value={instruction} onChange={handleInstructionChange} required/>
        <button type='submit' onClick={handleAddInstruction}>Add</button>
        <button type='button' onClick={handleSaveInstructions}>Save Instructions</button>
        <br />
        <br />
        {instructionsList.length >= 1 && <><InstructionsList instructionsList={instructionsList} setInstructionsList={setInstructionsList} /></>}
        <label htmlFor='readyInMinutes'>Time to cook (minutes): </label>
        <input 
          type='number' 
          id='readyInMinutes' 
          name='readyInMinutes' 
          value={fields.readyInMinutes} 
          onChange={handleFieldChange}
          required
        />
        <br />
        <br />
        <button type='button' onClick={handleAddRecipe}>Add Recipe!</button>
      </form>
    </div>
  )
}

export default AddRecipeForm;