const createBtn = document.getElementById('criar-tarefa');
const InputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

createBtn.addEventListener('click', createTask)

function createTask() {
  let task = document.createElement("LI");
  task.innerText = InputTask.value;
  InputTask.value = '';
  taskList.appendChild(task);
}