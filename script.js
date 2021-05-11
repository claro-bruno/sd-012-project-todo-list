document.getElementById('criar-tarefa').addEventListener('click', CreateTask);
function CreateTask() {//cria a tarefa
    const text = document.getElementById('texto-tarefa');
    const task = document.createElement('li');
    document.getElementById('lista-tarefas').appendChild(task);
    task.innerText = text.value;
    text.value = null;
  }