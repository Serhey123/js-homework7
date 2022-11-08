const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  inputRef.classList.remove("invalid", "valid");

  if (event.target.value.length === +event.target.dataset.length) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
});
