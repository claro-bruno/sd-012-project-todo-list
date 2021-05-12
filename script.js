let input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
let addTaskButton = document.getElementById('criar-tarefa');
function criarTarefa () {
    if (input.value === '') {
        alert('Insira uma tarefa!');
      } else {
      const taskList = document.getElementById('lista-tarefas');
      const task = document.createElement('li');
      task.className = 'task-item';
      task.innerHTML = input.value;
      taskList.appendChild(task);
      input.value = '';
      }
}
addTaskButton.addEventListener('click', criarTarefa);