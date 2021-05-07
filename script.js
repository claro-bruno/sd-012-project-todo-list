window.onload = function() {
    let addButton = document.getElementById('criar-tarefa');
    let taskInput = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');

    addButton.addEventListener('click', addTask);

    function addTask() {
        let listItem = document.createElement('li');
        listItem.innerHTML = taskInput.value;
        taskInput.value = '';
        taskList.appendChild(listItem);
    }
}