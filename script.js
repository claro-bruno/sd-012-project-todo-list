window.onload = function(){
    createTask();
    selectTask();
    doubleSelectTask();
    clearAll();
    clearFinished();
}

function createTask(){
    let list = document.getElementById('lista-tarefas'); 
    let taskName = document.getElementById('texto-tarefa');
    let button = document.getElementById('criar-tarefa');
    button.addEventListener('click', () => {
        if(taskName.value === ''){
            alert('Você deve inserir um nome para a tarefa')
        }
        else{
            let newTask = document.createElement('li');
            newTask.innerText = taskName.value;
            newTask.className = 'task';
            list.appendChild(newTask);
            taskName.value = '';
        }
    })
}

function selectTask(){
    addEventListener('click', (event) => {
        if(event.target.className === 'task'){
            if(!document.querySelector('.selected')){
                event.target.classList.toggle('selected')
            }
            else{
                let selected = document.querySelector('.selected')
                selected.className = 'task'
                selected.style.background = ''
                event.target.classList.toggle('selected')
            }
        }
    })
}

function doubleSelectTask(){
    addEventListener('dblclick', (event) => {
        if(event.target.classList.contains('completed')){
            event.target.classList.remove('completed')
            event.target.classList.remove('selected')
        }
        else if(event.target.classList.contains('task')){
            event.target.classList.remove('selected')
            event.target.classList.add('completed')
        }
    })
}

function clearAll(){
    let button = document.getElementById('apaga-tudo')
    let list = document.getElementById('lista-tarefas'); 
    button.addEventListener('click', () => {
        while(list.firstChild){
            list.removeChild(list.lastChild)
        }
    })
}

function clearFinished(){
    let button = document.getElementById('remover-finalizados')
    button.addEventListener('click', () => {
        let tasks = document.getElementsByClassName('completed'); 
        for(let i = tasks.length - 1; i >= 0; i--){
            tasks[i].remove()
        }
    })
}