const input = document.getElementById('texto-tarefa');
const addTaskBtn = document.getElementById('criar-tarefa');
const olEl = document.getElementById('lista-tarefas');

function addTask() {
    addTaskBtn.addEventListener('click', () => {
        if(input.value !== '') {
            const taskLi = document.createElement('li');
            taskLi.innerText = input.value
            olEl.appendChild(taskLi);
            input.value = '';
        } else {
            alert('Preencha com alguma tarefa');
        }
    })
}
addTask();