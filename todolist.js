    const todolist=[        
            ];

    renderTodolist();


    function renderTodolist(){

    let todolistHTML = '';

    todolist.forEach(/*function*/(todoObject , index) =>{
        const name = todoObject.name
        const dueDate = todoObject.dueDate
       // const { name , dueDate} = todoObject; destructring for name,dueDate

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button  class="delete-todo-button js-delete-todobutton">delete</button>
        `;

        todolistHTML +=html;
    

    });

    /*for(let i=0; i < todolist.length; i++){
        const todoObject = todolist[i];
        const name = todoObject.name
        const dueDate = todoObject.dueDate
       // const { name , dueDate} = todoObject; destructring for name,dueDate

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="todolist.splice(${i}, 1);
        renderTodolist();
         " class="delete-todo-button">delete</button>
        `;

        todolistHTML +=html
    }*/
   // console.log(todolistHTML);

    document.querySelector('.js-todo-list').innerHTML = todolistHTML

    document.querySelectorAll('.js-delete-todobutton')
    .forEach((deletebutton, index) =>{
        deletebutton.addEventListener('click', () =>{
            todolist.splice(index, 1);
        renderTodolist();
        });

    });
}
      document.querySelector('.js-add-todobutton')
      .addEventListener('click',() =>{
        addtodo();
      });

    function addtodo() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;
        const dateInputElement = document.querySelector('.js-due-date-input');
        const dueDate = dateInputElement.value;
        todolist.push({
            //name: name, shorthand property below line
            //dueDate: dueDate shorthand property below line
            name,
            dueDate
        });
       // console.log(todolist);
        inputElement.value ='';
        renderTodolist();
    }
    
