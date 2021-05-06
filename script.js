const input = document.getElementById('texto-tarefa');
const addTaskBtn = document.getElementById('criar-tarefa');
const olEl = document.getElementById('lista-tarefas');
const deleteBtn = document.getElementById('apaga-tudo');
const deleteCompleteBtn = document.getElementById('remover-finalizados');

function addTask() {
    addTaskBtn.addEventListener('click', () => {

        if(input.value !== '') {
            const taskLi = document.createElement('li');
            taskLi.innerText = input.value
            taskLi.className = 'taskLi';
            olEl.appendChild(taskLi);
            input.value = '';
            const tasks = document.querySelectorAll('.taskLi');
            taskLi.addEventListener('click', oneAtTime);
            taskLi.addEventListener('dblclick', lineThrough)
            deleteBtn.addEventListener('click', deleteAll);
            deleteCompleteBtn.addEventListener('click', deleteComplete);
            
            // Desafio 7
            for(let index = 0; index < tasks.length; index += 1) {
                tasks[index].addEventListener('click', () => {
                    tasks[index].classList.add('selected');
                })
            }
            
        } else {
            alert('Preencha com alguma tarefa');
        }
    })
}

function oneAtTime(e) {
    const selectedLi = document.querySelector('.selected');
    if(selectedLi === null) {
        e.target.classList.add('selected');
    } else {
        selectedLi.classList.remove('selected');
        selectedLi.classList.add('taskLi');
        e.target.classList.add('selected');
    }
}

function lineThrough(e) {
    const completedTasks = document.querySelectorAll('.completed');
    if(completedTasks.length === 0) {
        e.target.classList.toggle('completed');
    } else {
        e.target.classList.toggle('completed');
    }
}

function deleteAll() {
    const li = document.querySelectorAll('li');
    for(let index = 0; index < li.length; index += 1) {
        olEl.removeChild(li[index]);
    }
}

function deleteComplete() {
    const completed = document.querySelectorAll('.completed');
    for(let index = 0; index < completed.length; index += 1) {
        olEl.removeChild(completed[index]);
    }
}


addTask();