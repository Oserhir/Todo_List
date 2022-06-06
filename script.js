// getting all required elements
const btnRemove = document.getElementById("remove");
const input_todo = document.getElementById("input-todo"); // getting user entered value
const display = document.getElementById("display");
const count = document.getElementById("count");
const clearAll = document.querySelector(".clearAll");

// active - unactive the add button
input_todo.addEventListener("keyup", () => {
  if (input_todo.value.trim() != 0) {
    // check if value aren't only space
    btnAdd.classList.add("active"); // active add btn
  } else {
    btnAdd.classList.remove("active"); // unactive add btn
  }
});
