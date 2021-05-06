const taskList = document.getElementById('lista-tarefas');
const addBtn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const title = document.getElementById('title');

function clearSelection() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('selected')) {
      list[index].classList.remove('selected');
    }
  };
}

function select(event) {
  clearSelection();
  event.target.classList.add('selected');
}

function upgradeList() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', select);
  };
}

function addTask() {
  const task = document.createElement('li');
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = null;
  upgradeList();
}

window.onload = function loadPage() {
  addBtn.addEventListener('click', addTask);
  title.addEventListener('click', select);
}
