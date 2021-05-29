const toDoList_ls = "ToDo-items";
let toDoArray = [];

const toDoForm = document.querySelector(".toDoListForm");
const enteredToDo = document.querySelector(".inputForToDo");
const toDoUl = document.querySelector(".toDoList-ul");

function handleDeleteClick(event) {
  console.log(event.target);
  console.dir(event.target);
  const deleBtnLi = event.target.parentElement;
  const deleBtnId = deleBtnLi.id;
  console.log(deleBtnId);

  // First, remove li from html not in local storage
  toDoUl.removeChild(deleBtnLi);

  // Second, remove the information in local storage
  const leftLi = toDoArray.filter((item) => {
    return item.id !== parseInt(deleBtnId);
  });

  toDoArray = leftLi;
  console.log(toDoArray);
  saveToDoItems(toDoArray);
}

function saveToDoItems(toDoArray) {
  localStorage.setItem(toDoList_ls, JSON.stringify(toDoArray));
}

function handleSubmit(event) {
  event.preventDefault();
  const enteredToDoItems = enteredToDo.value;
  displayToDoList(enteredToDoItems);
  enteredToDo.value = "";
}

function displayToDoList(enteredToDoItems) {
  // First, Li
  const li = document.createElement("li");
  li.id = toDoArray.length + 1;
  li.classList.add("toDoList-li");

  // Second, Complete button
  const compelteBtn = document.createElement("input");
  compelteBtn.setAttribute("type", "checkbox");
  compelteBtn.classList.add("compelteBtn");
  compelteBtn.id = toDoArray.length + 1;

  // Third, span
  const span = document.createElement("span");
  span.innerText = enteredToDoItems;
  span.classList.add("span-toDoItem");

  // Fourth, delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", handleDeleteClick);

  li.appendChild(compelteBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  toDoUl.appendChild(li);

  const toDosObs = {
    item: enteredToDoItems,
    id: toDoArray.length + 1,
  };

  toDoArray.push(toDosObs);
  saveToDoItems(toDoArray);
}

function loadToDoList() {
  const loadedtoDoItems = localStorage.getItem(toDoList_ls);
  if (loadedtoDoItems !== null) {
    const parsedToDoItems = JSON.parse(loadedtoDoItems);
    parsedToDoItems.forEach((toDoItem) => {
      displayToDoList(toDoItem.item);
    });
  }
}

function init() {
  loadToDoList();
  toDoForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });
}

init();
