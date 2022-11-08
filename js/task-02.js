const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const mappedIng = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  return ingredient;
});

const ingListRef = document.querySelector("#ingredients");

ingListRef.append(...mappedIng);
