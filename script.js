let btnAddTask = document.querySelector('#criar-tarefa');
btnAddTask.addEventListener('click',  (evt) => addTask(document.querySelector('#texto-tarefa').value,evt));

let btnCleanList = document.querySelector('#apaga-tudo');
btnCleanList.addEventListener('click', cleanTask);

let btnCleanCompletedTasks = document.querySelector('#remover-finalizados');
btnCleanCompletedTasks.addEventListener('click', cleanCompletedTasks);

let btnSaveTasks = document.querySelector('#salvar-tarefas');
btnSaveTasks.addEventListener('click', saveTasks);

let btnRemoverSelecionado = document.querySelector('#remover-selecionado');
btnRemoverSelecionado.addEventListener('click', removeSelected);

function addTask(myTask,evt) {

   

    if(myTask.length > 0) {


        let ol_task = document.querySelector('#lista-tarefas');
        let li_task = document.createElement('li');
        li_task.innerHTML = myTask;
        li_task.className = 'task';
        li_task.addEventListener('click', changeBackgroundTask)
        li_task.addEventListener('dblclick', setCompletedTask)
        ol_task.appendChild(li_task);
        document.querySelector('#texto-tarefa').value = '';
    } 
}

function changeBackgroundTask(event) {
    const removeSelected = document.querySelector('.selected');
    if(removeSelected !== null){
        removeSelected.classList.remove('selected');
        event.target.classList.add('selected');
    } 
    else {
        event.target.classList.add('selected');
    }
}

function setCompletedTask(event) {

    if(event.target.classList.value.includes('completed')) {
        event.target.className = 'task';
    }
    else {
        event.target.className = 'task completed';
    }
}

function cleanTask(event) {
    let ol_task = document.querySelector('#lista-tarefas');
    ol_task.innerHTML = '';
}

function cleanCompletedTasks(event) {
    let li_tasks = document.querySelectorAll('.task');
    let ol_tasks = document.querySelector('#lista-tarefas');
    for(let index = 0; index < li_tasks.length; index += 1) {
        if(li_tasks[index].classList.value.includes('completed')) {
            ol_tasks.removeChild(li_tasks[index]);
        }
    }
}

function saveTasks (event) {
    let li_tasks = document.querySelectorAll('.task');
    let ol_tasks = document.querySelector('#lista-tarefas').innerHTML;
    /*
    let arrTasks = [];
    for(let index = 0; index < li_tasks.length; index += 1) {
        arrTasks.push(li_tasks[index].innerText);
    }*/
    console.log(ol_tasks);
    localStorage.setItem('task', JSON.stringify(ol_tasks));
}

function removeSelected(event) {
    let li_selected = document.querySelector('.selected');
    let ol_tasks = document.querySelector('#lista-tarefas');

    if(li_selected !== null) {
        ol_tasks.removeChild(li_selected);
    }
}

window.onload = function () {
    let ol_tasks = document.querySelector('#lista-tarefas');
    ol_tasks.innerHTML = JSON.parse(localStorage.getItem('task'));
    let li_task = document.querySelectorAll('.task');
    for(let index = 0 ; index < li_task.length; index += 1 ) {
        li_task[index].addEventListener('click', changeBackgroundTask)
        li_task[index].addEventListener('dblclick', setCompletedTask)
    }
};
