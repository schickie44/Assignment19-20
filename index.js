var list = document.querySelector('ul');

function addNewTodo(){
    event.preventDefault();
    var newItem = event.target.newToDo.value;
    var newTextNode = document.createTextNode(newItem);

    
    var newListItem = document.createElement('li');
    newListItem.appendChild(newTextNode);
    

    newListItem.setAttribute('onclick', 'removeTodo()');
    
    list.appendChild(newListItem);

    var newTodoInput = document.getElementById('input');
    newTodoInput.value = "";
}

function removeTodo() {
    var el = event.target;
    var parentEl = el.parentNode;
    parentEl.removeChild(el);
}
