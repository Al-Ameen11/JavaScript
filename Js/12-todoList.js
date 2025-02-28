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
    todoList.forEach((todoObject,index)=>{
    const { name, date } = todoObject;
      const html = `
      <div class="todo-list-name">${name}</div>
      <div class="todo-list-date">${date} </div>
      <button class="delete-todo-button js-delete-todo-button ">
      Delete
      </button>`;
      todoListHTML += html;
    });
    
    document.querySelector(".js-todoList-result").innerHTML = todoListHTML;
    
    document.querySelectorAll(".js-delete-todo-button")
      .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
          todoList.splice(index,1);
          renderTodoList();
        })
      })

  }
  const addTodoButton = document.querySelector('.js-add-todo-button');
  addTodoButton.addEventListener('click',()=>{
    addTodo();
  });

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