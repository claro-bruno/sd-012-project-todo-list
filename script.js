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
        toDoList.addEventListener('click', function(event) {
            toDoListItems.classList.remove('selected');
            event.target.classList.add('selected');
        })
    }
}

button.addEventListener('click', addTarefa);