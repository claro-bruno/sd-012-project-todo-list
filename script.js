const taskList = document.getElementById('lista-tarefas');
const addBtn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const title = document.getElementById('title');

function upgradeList() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', select);
  };
};

function addTask() {
  const task = document.createElement('li');
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = null;
  upgradeList();
}

function select(event) {
    event.target.classList.add('selected');
}

window.onload = function loadPage() {
  addBtn.addEventListener('click', addTask);
  title.addEventListener('click', select);
};
