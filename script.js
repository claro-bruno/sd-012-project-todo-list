function addTask() {
    let input = document.getElementById('texto-tarefa');
    let button = document.getElementById('criar-tarefa');
    let list = document.getElementById('lista-tarefas');
    button.addEventListener('click', () => {
        let taskLi = document.createElement('li');
        taskLi.innerHTML = input.value;
        input.value = '';
        list.appendChild(taskLi);
    })
}
addTask();