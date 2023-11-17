import React, { useContext, useState } from 'react';
import { Context } from '../../Context/AuthContext';


const AddRecipeForm = () => {
  const { user } = useContext(Context);

  const initialState = {
    fields: {
      title: '',
      extendedIngredients: [],
      instructions: '',
      readyInMinutes: ''
    }
  }

  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  }

  return (
    <div>
      <h1>Add a recipe</h1>
      <form>
        <label htmlFor='title'>Recipe Name: </label>
        <input 
          id='title' 
          name='title' 
          value={fields.title} 
          onChange={handleFieldChange}
        />
        <br />
        <br />
        <label htmlFor='readyInMinutes'>Time to cook (minutes): </label>
        <input 
          type="number" 
          id="readyInMinutes" 
          name="readyInMinutes" 
          value={fields.readyInMinutes} 
          onChange={handleFieldChange} 
        />
        <br />
        <br />
        <button type="button">Add Recipe!</button>
      </form>
    </div>
  )
}

export default AddRecipeForm;