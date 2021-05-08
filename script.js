const button = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');




function addTarefa() {
    let toDoListItems = document.createElement('li');
    toDoListItems.className = 'tasks';
    toDoListItems.innerHTML = input.value;
    input.value = '';
    toDoList.appendChild(toDoListItems);
    if (toDoListItems !== null) {
        toDoListItems.addEventListener('click', function(event) {
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        })
    }
}

button.addEventListener('click', addTarefa);