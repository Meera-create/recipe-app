import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import RecipeFinderForm from '../components/RecipeFinder/RecipeFinderForm';


jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
  Toaster: jest.fn(),
}));


jest.mock('axios');

describe('RecipeFinderForm', () => {
  test('should render the form and handle submission', async () => {
    const setRecipesMock = jest.fn();
    const setSearchMock = jest.fn();
    const setIngredientsListMock = jest.fn();
    const setRecipeIDMock = jest.fn();

    // Set up a mock response for the axios call
    const mockData = [{ id: 1, name: 'Recipe 1' }];
    axios.get.mockResolvedValue({ data: mockData });

    const { getByText, getByPlaceholderText } = render(
      <RecipeFinderForm
        recipes={[]}
        setRecipes={setRecipesMock}
        setSearch={setSearchMock}
        ingredientsList={[]}
        setIngredientsList={setIngredientsListMock}
        setRecipeID={setRecipeIDMock}
      />
    );

    
    const ingredientInput = getByPlaceholderText('Add ingredients');
    fireEvent.change(ingredientInput, { target: { value: 'Tomato' } });

  
    fireEvent.click(getByText('Add'));

  
    fireEvent.click(getByText('Search'));

   
    console.log(setRecipesMock.mock.calls);
    console.log(setSearchMock.mock.calls);

   
    await waitFor(() => {
    
      expect(setRecipesMock).toHaveBeenCalled();
      expect(setSearchMock).toHaveBeenCalledWith(true);
    });

   
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.spoonacular.com/recipes/findByIngredients?ingredients=Tomato',
      expect.objectContaining({
        headers: {
          'x-api-key': "5c87ad70e10c47e9b36b49aef30ece98"
        },
      })
    );

  
  });
});




