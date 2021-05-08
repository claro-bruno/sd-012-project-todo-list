const button = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');


function addTarefa() {
    let toDoListItems = document.createElement('li');
    toDoListItems.innerHTML = input.value;
    input.value = '';
    toDoList.appendChild(toDoListItems);
}

button.addEventListener('click', addTarefa);