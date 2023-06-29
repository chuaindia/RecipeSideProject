// Sample recipe data
const recipes = [
    { category: 'appetizer', name: 'Bruschetta', ingredients: ['Bread', 'Tomatoes', 'Basil', 'Garlic'], instructions: '1. Toast the bread\n2. Chop the tomatoes and basil\n3. Rub the garlic on the toasted bread\n4. Top with tomatoes and basil' },
    { category: 'main-course', name: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic'], instructions: '1. Cook the spaghetti according to package instructions\n2. Brown the ground beef with onions and garlic\n3. Add tomato sauce and simmer\n4. Serve over spaghetti' },
    { category: 'dessert', name: 'Chocolate Chip Cookies', ingredients: ['Flour', 'Butter', 'Sugar', 'Chocolate chips', 'Eggs'], instructions: '1. Preheat oven to 350°F\n2. Cream butter and sugar\n3. Beat in eggs\n4. Mix in flour and chocolate chips\n5. Drop spoonfuls of dough onto baking sheet\n6. Bake for 10-12 minutes' },
    { category: 'appetizer', name: 'Bruschetta', ingredients: ['Bread', 'Tomatoes', 'Basil', 'Garlic'], instructions: '1. Toast the bread\n2. Chop the tomatoes and basil\n3. Rub the garlic on the toasted bread\n4. Top with tomatoes and basil' },
    { category: 'main-course', name: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic'], instructions: '1. Cook the spaghetti according to package instructions\n2. Brown the ground beef with onions and garlic\n3. Add tomato sauce and simmer\n4. Serve over spaghetti' },
    { category: 'dessert', name: 'Chocolate Chip Cookies', ingredients: ['Flour', 'Butter', 'Sugar', 'Chocolate chips', 'Eggs'], instructions: '1. Preheat oven to 350°F\n2. Cream butter and sugar\n3. Beat in eggs\n4. Mix in flour and chocolate chips\n5. Drop spoonfuls of dough onto baking sheet\n6. Bake for 10-12 minutes' },
    { category: 'appetizer', name: 'Bruschetta', ingredients: ['Bread', 'Tomatoes', 'Basil', 'Garlic'], instructions: '1. Toast the bread\n2. Chop the tomatoes and basil\n3. Rub the garlic on the toasted bread\n4. Top with tomatoes and basil' },
    { category: 'main-course', name: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic'], instructions: '1. Cook the spaghetti according to package instructions\n2. Brown the ground beef with onions and garlic\n3. Add tomato sauce and simmer\n4. Serve over spaghetti' },
    { category: 'dessert', name: 'Chocolate Chip Cookies', ingredients: ['Flour', 'Butter', 'Sugar', 'Chocolate chips', 'Eggs'], instructions: '1. Preheat oven to 350°F\n2. Cream butter and sugar\n3. Beat in eggs\n4. Mix in flour and chocolate chips\n5. Drop spoonfuls of dough onto baking sheet\n6. Bake for 10-12 minutes' }
  ];
  
  // Function to create recipe list items
  function createRecipeListItem(recipe) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
    return listItem;
  }
  
  // Function to populate recipe lists
  function populateRecipeLists() {
    const appetizerList = document.getElementById('appetizer-list');
    const mainCourseList = document.getElementById('main-course-list');
    const dessertList = document.getElementById('dessert-list');
  
    recipes.forEach(recipe => {
      const listItem = createRecipeListItem(recipe);
  
      if (recipe.category === 'appetizer') {
        appetizerList.appendChild(listItem);
      } else if (recipe.category === 'main-course') {
        mainCourseList.appendChild(listItem);
      } else if (recipe.category === 'dessert') {
        dessertList.appendChild(listItem);
      }
    });
  }
  
  // Call the function to populate recipe lists on page load
  document.addEventListener('DOMContentLoaded', populateRecipeLists);
  