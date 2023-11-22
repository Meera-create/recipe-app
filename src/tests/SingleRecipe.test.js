import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SingleRecipe from '../components/RecipeFinder/SingleRecipe';
import { Context } from '../Context/AuthContext'; // Make sure the path is correct
import { db } from '../config/firebase'; // Make sure the path is correct

// Use the actual Context provider
jest.mock('../Context/AuthContext', () => ({
  Context: {
    Consumer: ({ children }) => children({ user: { uid: 'testUserId' } }),
  },
}));

describe('SingleRecipe component', () => {
  const mockExtractedRecipe = {
    id: 'testRecipeId',
    title: 'Test Recipe',
    image: 'test-image.jpg',
    extendedIngredients: [{ original: 'Ingredient 1' }],
    instructions: '<p>Test instructions</p>',
    readyInMinutes: 30,
  };

  const mockIngredientsList = ['Ingredient 2'];

  test('renders SingleRecipe component with mock data', async () => {
    render(<SingleRecipe extractedRecipe={mockExtractedRecipe} ingredientsList={mockIngredientsList} />);

    // Check if the rendered elements are present
    expect(screen.getByText('Your recipe')).toBeInTheDocument();
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByAltText('pic of food')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 1')).toBeInTheDocument();
    expect(screen.getByText('Test instructions')).toBeInTheDocument();
    expect(screen.getByText('Time to cook: 30 minutes')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();

    // Trigger the save button click
    fireEvent.click(screen.getByText('Save'));

    // Wait for the async operation to complete
    await waitFor(() => {});

    // Check if the toast functions were called (You may need to adjust this part based on your actual toast implementation)
    expect(screen.getByText('Recipe saved!')).toBeInTheDocument();
  });
});

