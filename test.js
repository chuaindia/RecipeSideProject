// Import the function to test
const { createRecipeListItem } = require('./script');

// Sample recipe data for testing
const recipe = {
  name: 'Test Recipe',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  instructions: 'Test instructions'
};

// Test the createRecipeListItem function
test('createRecipeListItem returns a valid recipe list item', () => {
  // Call the function
  const listItem = createRecipeListItem(recipe);

  // Assert the expected result
  expect(listItem).toBeDefined();
  expect(listItem.nodeName).toBe('LI');
  expect(listItem.innerHTML).toContain(recipe.name);
  expect(listItem.innerHTML).toContain(recipe.ingredients.join(', '));
  expect(listItem.innerHTML).toContain(recipe.instructions);
});
