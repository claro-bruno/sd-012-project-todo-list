const taskList = document.getElementById('lista-tarefas');
const addBtn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const title = document.getElementById('title');
const clearAllBtn = document.getElementById('apaga-tudo');
const clearDoneBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');

function clearSelection() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('selected')) {
      list[index].classList.remove('selected');
    }
  }
}

function clearCompleted() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('completed')) {
      taskList.removeChild(list[index]);
    }
  }
}

function select(event) {
  clearSelection();
  event.target.classList.add('selected');
}

function check(event) {
  clearSelection();
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function updateList() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', select);
    list[index].addEventListener('dblclick', check);
  }
}

function addTask() {
  const task = document.createElement('li');
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = null;
  updateList();
}

function clearList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
}

function save() {
  const listItens = taskList.innerHTML;
  if (localStorage.getItem('list')) {
    localStorage.removeItem('list');
  }
  localStorage.setItem("list", listItens);
}

window.onload = function loadPage() {
  addBtn.addEventListener('click', addTask);
  clearAllBtn.addEventListener('click', clearList);
  clearDoneBtn.addEventListener('click', clearCompleted);
  saveBtn.addEventListener('click', save);
  if (localStorage.getItem('list')) {
    const list = localStorage.getItem('list');
    taskList.innerHTML = list;
    updateList();
  }
};
