document.getElementById('criar-tarefa').addEventListener('click', function () {
    task = document.createElement('li');
    text = document.getElementById('texto-tarefa');
    task.className = 'taskItem'
    task.innerHTML = text.value;
    document.getElementById('lista-tarefas').appendChild(task);
    text.value = '';
})

document.body.addEventListener('click', function (event) {
    if (event.target.className === 'taskItem') {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }
})