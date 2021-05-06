document.getElementById('criar-tarefa').addEventListener('click' , function () {
    task = document.createElement('li');
    text = document.getElementById('texto-tarefa')
    task.innerHTML = text.value;
    document.getElementById('lista-tarefas').appendChild(task)
    text.value = ''
})