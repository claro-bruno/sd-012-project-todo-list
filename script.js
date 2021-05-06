const input = document.getElementById('texto-tarefa');
const addTaskBtn = document.getElementById('criar-tarefa');
const olEl = document.getElementById('lista-tarefas');

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

function lineThrough() {
    const tasks = document.querySelectorAll('.taskLi');
    for(let index = 0; index < tasks.length; index += 1) {
        tasks[index].addEventListener('dblclick', (e) => {
            if(e.target.className === 'completed') {
                e.target.className = 'taskLi';
            } else {
                e.target.className = 'completed';
            }
        })
    }
}


addTask();