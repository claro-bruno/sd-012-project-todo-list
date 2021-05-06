const taskList = document.getElementById('lista-tarefas');
const addBtn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');

function addTask() {
  const task = document.createElement('li');
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = null;
}

window.onload = function loadPage() {
  addBtn.addEventListener('click', addTask)
};
