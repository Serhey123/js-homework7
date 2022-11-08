const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (event.target.value) {
    outputRef.textContent = event.target.value;
  } else {
    outputRef.textContent = "незнакомец";
  }
});
