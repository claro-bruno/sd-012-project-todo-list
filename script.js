let arrTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(arrTasks);
function loadTasksList(arrTasks){
    if(arrTasks !== null) {
        for(let index = 0; index < arrTasks.length; index += 1) {
            addTask(arrTasks[index],'');
        }
    }
}

loadTasksList(arrTasks);

let btnAddTask = document.querySelector('#criar-tarefa');
btnAddTask.addEventListener('click',  (evt) => addTask(document.querySelector('#texto-tarefa').value,evt));

let btnCleanList = document.querySelector('#apaga-tudo');
btnCleanList.addEventListener('click', cleanTask);

let btnCleanCompletedTasks = document.querySelector('#remover-finalizados');
btnCleanCompletedTasks.addEventListener('click', cleanCompletedTasks);

let btnSaveTasks = document.querySelector('#salvar-tarefas');
btnSaveTasks.addEventListener('click', saveTasks);

function addTask(myTask,evt) {

    let ol_task = document.querySelector('#lista-tarefas');
    //let txtTask = document.querySelector('#texto_tarefa').value;

    if(myTask.length > 0) {
        
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
    let arrTasks = [];
    for(let index = 0; index < li_tasks.length; index += 1) {
        arrTasks.push(li_tasks[index].innerText);
    }
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
    }
