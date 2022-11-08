const counterRef = document.querySelector("#value");
const decrBtnRef = document.querySelector('[data-action="decrement"]');
const incrBtnRef = document.querySelector('[data-action="increment"]');
let counterValue = +counterRef.textContent;

function increment() {
  counterValue += 1;
  counterRef.textContent = counterValue;
  return counterRef.textContent;
}

function decrement() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
  return counterRef.textContent;
}

decrBtnRef.addEventListener("click", decrement);
incrBtnRef.addEventListener("click", increment);
