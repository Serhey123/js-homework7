const listChildRef = document.querySelectorAll(".item");
console.log(`В списке ${listChildRef.length} категории.`);

listChildRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${item.lastElementChild.childElementCount}`
  );
});
