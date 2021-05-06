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
            taskLi.addEventListener('click', oneAtTime);
            
            // Desafio 7
            const tasks = document.querySelectorAll('.taskLi');
            for(let index = 0; index < tasks.length; index += 1) {
                tasks[index].addEventListener('click', (e) => {
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



addTask();