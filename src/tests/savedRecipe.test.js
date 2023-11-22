import React from 'react';
import { render } from '@testing-library/react';
import SavedRecipe from '../components/RecipeFinder/SavedRecipe';

// Mock data for testing
const mockRecipe = {
  title: 'Test Recipe',
  image: 'test-image.jpg',
  extendedIngredients: [
    { original: 'Ingredient 1' },
    { original: 'Ingredient 2' },
  ],
  instructions: '<p>Test instructions</p>',
  readyInMinutes: 30,
};

test('renders SavedRecipe component with mock data', () => {
  // Render the component with mock data
  const { getByText, getByAltText } = render(<SavedRecipe recipe={mockRecipe} />);

  // Check if the rendered elements are present
  const titleElement = getByText('Test Recipe');
  const imageElement = getByAltText('pic of food');
  const ingredientElement1 = getByText('Ingredient 1');
  const ingredientElement2 = getByText('Ingredient 2');
  const instructionsElement = getByText('Test instructions');
  const timeElement = getByText('Time to cook: 30 minutes');

  // Assert that the elements are present in the document
  expect(titleElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(ingredientElement1).toBeInTheDocument();
  expect(ingredientElement2).toBeInTheDocument();
  expect(instructionsElement).toBeInTheDocument();
  expect(timeElement).toBeInTheDocument();
});
