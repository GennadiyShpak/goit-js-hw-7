'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listOfIngridientsRef = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  listOfIngridientsRef.appendChild(ingredient);
});
