const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = todoForm.querySelector("input");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteList(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(toDosObject) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  todoList.appendChild(li);
  li.id = toDosObject.id;
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = toDosObject.text;
  button.innerText = "X";
  button.addEventListener("click", deleteList);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const toDosObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(toDosObject);
  paintToDo(toDosObject);
  saveToDos();
}
todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
