const button = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');



function addTarefa() {
    let toDoListItems = document.createElement('li');
    toDoListItems.className = 'tasks';
    toDoListItems.innerHTML = input.value;
    input.value = '';
    return toDoList.appendChild(toDoListItems);
}

function selectListItem(event) {
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    event.target.classList.add('selected');
}

function completedTask(event) {
    event.target.classList.toggle('completed');
}

toDoList.addEventListener('dblclick', completedTask);
toDoList.addEventListener('click', selectListItem);
button.addEventListener('click', addTarefa);