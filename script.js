// getting all required elements
const btnRemove = document.getElementById("remove");
const input_todo = document.getElementById("input-todo"); // getting user entered value
const display = document.getElementById("display");
const count = document.getElementById("count");
const clearAll = document.querySelector(".clearAll");
const btnAdd = document.getElementsByClassName("fa-solid fa-circle-plus")[0]; //

let tasks = [];

showtask();

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
  let getLocalStorage = localStorage.getItem("todoliststorage"); // getting localStorage
  // Checking if LocalStorage = Null
  if (getLocalStorage == null) {
    tasks = []; // Create Blank ARRAYS
  } else {
    tasks = JSON.parse(getLocalStorage);
  }

  tasks.push(userData); // add THE user
  localStorage.setItem("todoliststorage", JSON.stringify(tasks)); // transform json objet into json string
  showtask();
  input_todo.value = "";
});

function showtask() {
  // Getting LocalStorage
  let getLocalStorage = localStorage.getItem("todoliststorage");

  // Checking if LocalStorage = Null
  if (getLocalStorage == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(getLocalStorage);
  }

  let task = "";
  for (let i = tasks.length - 1; i >= 0; i--) {
    task += `<li>
       ${tasks[i]}
       <div class="icons">
         <span id="remove" onclick="deleteTask(${i})"   > <i class="fa-solid fa-trash-can"></i> </span>
       </div>
     </li>`;
  }
  count.innerText = tasks.length;
  display.innerHTML = task;
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("todoliststorage");
  tasks = JSON.parse(getLocalStorage);
  tasks.splice(index, 1);
  localStorage.setItem("todoliststorage", JSON.stringify(tasks));
  showtask();
}
