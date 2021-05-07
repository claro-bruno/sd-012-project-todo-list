document.getElementById('criar-tarefa').addEventListener('click', function () {
    let task = document.createElement('li');
    let text = document.getElementById('texto-tarefa');
    task.className = 'taskItem';
    task.innerHTML = text.value;
    document.getElementById('lista-tarefas').appendChild(task);
    text.value = '';
});

document.body.addEventListener('click', function (event) {
    if (event.target.className === 'taskItem') {
        let selected = document.getElementsByClassName('selected');
        for (let task = 0; task < selected.length; task += 1) {
            selected[task].className = 'taskItem';
        }
        event.target.className = 'taskItem selected';
    }
});

document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
        event.target.className = 'taskItem';
    } else {
        event.target.className = 'completed';
    }
});

document.getElementById('apaga-tudo').addEventListener('click', function () {
    let taskList = document.getElementById('lista-tarefas');
    let allTasks = document.getElementsByTagName('li');
    let quantity = allTasks.length;
    for (let task = 0; task < quantity; task += 1) {
        taskList.removeChild(taskList.firstChild);
    }
});

document.getElementById('remover-finalizados').addEventListener('click', function () {
    let finished = document.getElementsByClassName('completed');
    for (let task = 0; task < finished.length;) {
        finished[task].remove();
    }
});

document.getElementById('remover-selecionado').addEventListener('click', function () {
    let selected = document.getElementsByClassName('selected');
    for (let task = 0; task < selected.length;) {
        selected[task].remove();
    }
});

document.getElementById('salvar-tarefas').addEventListener('click', function () {
    let taskItems = document.getElementsByTagName('li');
    let order = []
    for (let item = 0; item < taskItems.length; item += 1) {
        localStorage.setItem((taskItems[item].innerText), taskItems[item].className);
        order.push(taskItems[item].innerText)
    }
    localStorage.setItem('ordem', JSON.stringify(order))
});

if (localStorage.length > 0) {
    
    for (let data = 0; data < localStorage.length - 1; data +=1) {
        let correctOrder = JSON.parse(localStorage.getItem('ordem'))
        let task = document.createElement('li');
        task.innerHTML = correctOrder[data];
        task.className = localStorage.getItem(correctOrder[data]);
        document.getElementById('lista-tarefas').appendChild(task);
    }
}