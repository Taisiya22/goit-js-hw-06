const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");


// ingredients.forEach((ingredient) => { 
//   const listElements = document.createElement("li");
//   listElements.textContent = ingredient;
//   listElements.classList.add('item');
//  list.append(listElements);
  
// })


list.append(
  ...ingredients.map((ingredient) => {
    let listElements = document.createElement("li");
    listElements.textContent = ingredient;
    listElements.classList.add('item');
    return listElements;
  })
);