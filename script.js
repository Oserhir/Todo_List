// getting all required elements
const btnRemove = document.getElementById("remove");
const input_todo = document.getElementById("input-todo");
const btnAdd = document.getElementsByClassName("fa-solid fa-circle-plus")[0];
const display = document.getElementById("display");
const count = document.getElementById("count");
const clearAll = document.querySelector(".clearAll");

// active - unactive the add button
input_todo.addEventListener("keyup", () => {
  if (input_todo.value.trim() != 0) {
    btnAdd.classList.add("active");
  } else {
    btnAdd.classList.remove("active");
  }
});
