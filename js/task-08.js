const inputRef = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

let boxHeight = 30;
let boxWidth = 30;

createBtnRef.addEventListener("click", () => {
  createBoxes(inputRef.valueAsNumber);
});

destroyBtnRef.addEventListener("click", destroyBoxes);

function randomRGB() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");

    box.style.height = `${boxHeight}px`;
    box.style.width = `${boxWidth}px`;
    box.style.backgroundColor = randomRGB();

    box.classList.add("box");

    boxesRef.append(box);

    boxHeight += 10;
    boxWidth += 10;
  }
}

function destroyBoxes() {
  const box = document.querySelectorAll(".box");
  box.forEach((elem) => {
    elem.remove();
  });
  //   boxesRef.innerHTML = "";
  boxHeight = 30;
  boxWidth = 30;
}
