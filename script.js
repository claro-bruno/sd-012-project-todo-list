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
        let allTasks = document.getElementsByClassName('selected');
        for (let task = 0; task < allTasks.length; task += 1) {
            allTasks[task].className = 'taskItem';
        }
        event.target.className = 'taskItem selected';
    }
})