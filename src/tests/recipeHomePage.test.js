import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeHomePage from '../components/RecipeFinder/RecipeHomePage';

describe('RecipeHomePage', () => {
  test('should render the RecipeHomePage component', () => {
    render(<RecipeHomePage />);

    // Check if the main components are rendered
    expect(screen.getByText('Search for a recipe...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add ingredients')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('should handle the search form submission', async () => {
    // Mock the necessary functions
    const setRecipesMock = jest.fn();
    const setSearchMock = jest.fn();

    // Render the component with mocked functions
    render(<RecipeHomePage setRecipes={setRecipesMock} setSearch={setSearchMock} />);

    // Simulate adding an ingredient
    fireEvent.change(screen.getByPlaceholderText('Add ingredients'), { target: { value: 'Ingredient 1' } });
    fireEvent.click(screen.getByText('Add'));

    // Simulate submitting the form
    fireEvent.click(screen.getByText('Search'));

    // Wait for the asynchronous operations to complete
    await screen.findByText('Recipes found!');

    // Check if the setRecipes and setSearch functions are called
    expect(setRecipesMock).toHaveBeenCalled();
    expect(setSearchMock).toHaveBeenCalledWith(true);
  });
});
