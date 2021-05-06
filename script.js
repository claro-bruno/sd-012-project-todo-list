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

            // Desafio 7
            const tasks = document.querySelectorAll('.taskLi');
            for(let index = 0; index < tasks.length; index += 1) {
                tasks[index].addEventListener('click', () => {
                    tasks[index].style.backgroundColor = 'rgb(128, 128, 128)';
                })
            }

        } else {
            alert('Preencha com alguma tarefa');
        }
    })
}
addTask();
