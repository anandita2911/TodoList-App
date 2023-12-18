let todoList=JSON.parse(localStorage.getItem('todolist')) ||[
    {items:'Enter you Todo', date:'00-00-0000'}
];
displayItems();



function addTodo(){
  let inputElement= document.querySelector('#todo-input');
  let inputdate= document.querySelector('#todo-date');
  let todoItem =inputElement.value ;
  let todoDate =inputdate.value;
  todoList.push({items : todoItem , date :todoDate });
  inputElement.value='';
  inputdate.value='';
  storage();
  displayItems();
}

function displayItems(){
    let element= document.querySelector('#container');
    element.innerHTML='';
    for (let i = 0; i < todoList.length; i++) {
        let item=todoList[i].items;
        let date=todoList[i].date;
        element.innerHTML += `
        
            <span>${item}    </span>
            <span>${date}</span>
            <button class='btn-delete' onclick='todoList.splice(${i},1);  displayItems(); storage();'>Delete</button>
        `;
        
    }
    


}

function storage(){
    localStorage.setItem('todolist',JSON.stringify(todoList));
}