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
        let selected = document.getElementsByClassName('selected');
        for (let task = 0; task < selected.length; task += 1) {
            selected[task].className = 'taskItem';
        }
        event.target.className = 'taskItem selected';
    }
})

document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
        event.target.className = 'taskItem'
    } else {
        event.target.className = 'completed'
    }
})

document.getElementById('apaga-tudo').addEventListener('click', function () {
    let taskList = document.getElementById('lista-tarefas')
    let allTasks = document.getElementsByTagName('li');
    let quantity = allTasks.length
    for (let task = 0; task < quantity; task += 1) {
        taskList.removeChild(taskList.firstChild)
    }
})

document.getElementById('remover-finalizados').addEventListener('click', function () {
    let finished = document.getElementsByClassName('completed');
    let quantity = finished.length
    for (let task = 0; task < quantity;) {
        finished[task].remove();
    }
})