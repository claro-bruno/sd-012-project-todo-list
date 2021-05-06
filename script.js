window.onload = function(){
    createTask();
    selectTask();
    doubleSelectTask();
}

function createTask(){
    let list = document.getElementById('lista-tarefas'); 
    let taskName = document.getElementById('texto-tarefa');
    let button = document.getElementById('criar-tarefa');
    button.addEventListener('click', () => {
        let newTask = document.createElement('li');
        newTask.innerText = taskName.value;
        newTask.className = 'task';
        list.appendChild(newTask);
        taskName.value = '';
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