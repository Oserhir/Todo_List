// getting all required elements
const btnRemove = document.getElementById("remove");
const input_todo = document.getElementById("input-todo"); // getting user entered value
const display = document.getElementById("display");
const count = document.getElementById("count");
const clearAll = document.querySelector(".clearAll");
const btnAdd = document.getElementsByClassName("fa-solid fa-circle-plus")[0]; //

let tasks = [];

// active - unactive the add button
input_todo.addEventListener("keyup", () => {
  if (input_todo.value.trim() != 0) {
    // check if value aren't only space
    btnAdd.classList.add("active"); // active add btn
  } else {
    btnAdd.classList.remove("active"); // unactive add btn
  }
});

// if user click to the add button
btnAdd.addEventListener("click", () => {
  let userData = input_todo.value; // Getting User input Value
  // Getting LocalStorage
  let getLocalStorage = localStorage.getItem("todoliststorage");
  // Checking if LocalStorage = Null
  if (getLocalStorage == null) {
    tasks = []; // Create Blank ARRAYS
  } else {
    tasks = JSON.parse(getLocalStorage);
  }

  tasks.push(userData); // add THE user
  localStorage.setItem("todoliststorage", JSON.stringify(tasks)); // transform json objet into json string
  input_todo.value = "";
});
