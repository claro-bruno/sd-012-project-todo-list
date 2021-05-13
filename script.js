function addTask(){
    let newTask = document.createElement('li');
    newTask.innerHTML = document.querySelector('#text-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';
    newTask.addEventListener('click', changeColor);
    newTask.addEventListener('dblclick', completedTask);
    document.querySelector('#lista-tarefas').appendChild(newTask);
}

const madeTask = document.querySelector('#criar-tarefa');
madeTask.addEventListener('click', 'addTask');

function completedTask(event){
    if(event.target.className.includes('completed')){
        event.target.classList.remove('completed');
    }else{
        event.target.classList.add('completed');
    }
}