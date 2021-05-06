window.onload = function(){
    createTask();
    selectTask();
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
                event.target.style.background = 'rgb(128, 128, 128)'
                event.target.classList.toggle('selected')
            }
            else{
                let selected = document.querySelector('.selected')
                selected.className = 'task'
                selected.style.background = ''
                event.target.classList.toggle('selected')
                event.target.style.background = 'rgb(128, 128, 128)'
            }
        }
    })
}