todoList = [
  {
    name:'make dinner',
    date:'15-03-2002'
  },
  {
    name:'wash dishes',
    date:'10-03-2002'
  }
];
function renderTodoList() {
  let todoListHTML = "";
  /* the loop for generate the input from todoList to htmlList*/
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const date = todoObject.date;
    const { name, date } = todoObject;
    const html = `
    <div class="todo-list-name">${name}</div>
    <div class="todo-list-date">${date} </div>
    <button onclick="todoList.splice(${i},1)
    renderTodoList();
    "class="delete-todo-button">
    Delete
    </button>`;
    todoListHTML += html;
  }
  document.querySelector(".js-todoList-result").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-inputElement");
  const name = inputElement.value;
  const inputDate = document.querySelector(".js-input-date");
  const date = inputDate.value;
  todoList.push({
    /*name:name,
    date:date*/
    name,
    date,
  });
  inputElement.value = "";
  inputDate.value = "";
  renderTodoList();
}