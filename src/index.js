import './styles.css';
import './components/todo-list/todo-list.ts';
import './components/todo-item/todo-item.ts';

document.addEventListener('DOMContentLoaded', function(event) {
    var inputElement = document.getElementById('task-input');
    var addButton = document.getElementById('add-button');
    var todoListElement = document.getElementById('todo-list');

    addButton.addEventListener("click", function(){
        todoListElement.addTask(inputElement.value);
        inputElement.value = '';
    });

    inputElement.addEventListener('keypress', function(event) {
        if(event.key === 'Enter'){
            todoListElement.addTask(inputElement.value);
            inputElement.value = '';
        }
    });

    todoListElement.addEventListener("change", function(){
        console.log('Changed');
    });

});