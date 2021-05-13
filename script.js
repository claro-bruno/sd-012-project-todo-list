function addTask(){
    let newTask = document.createElement('li');
    newTask.innerHTML = document.querySelector('#text-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';
    newTask.addEventListener('click', changeColor);
    newTask.addEventListener('dblclick', completedTask);
    document.querySelector('#lista-tarefas').appendChild(newTask);
}

let madeTask = document.querySelector('#criar-tarefa');
madeTask.addEventListener('click', 'addTask');