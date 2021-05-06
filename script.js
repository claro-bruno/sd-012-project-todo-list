
// Adiciona tarefa digitada pelo usuário;
function addTaskClick() {
  const task = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  const list = document.getElementById('lista-tarefas');
  item.innerHTML = task.value;
  item.className = 'unselected';
  task.value = '';
  item.addEventListener('click', selectOnlyOne);
  item.addEventListener('dblclick', riskItem);
  list.appendChild(item);
  task.focus();
}

function addTask() {
  const task = document.getElementById('texto-tarefa');
  const addButton = document.getElementById('criar-tarefa');
  task.focus();
  addButton.addEventListener('click', addTaskClick);
}

function selectOnlyOne(elemento) {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected === null) {
    elemento.target.classList.add('selected');
  } else {
    itemSelected.classList.remove('selected');
    itemSelected.classList.add('unselected');
    elemento.target.classList.add('selected');
  }
}

function riskItem(elemento) {
  const cards = document.querySelectorAll('.completed');
  if (cards.length === 0) {
    elemento.target.classList.toggle('completed');
  } else {
    elemento.target.classList.toggle('completed');
  }
}

function clearList() {
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', clearListClick);
}

function clearListClick() {
  const list = document.getElementById('lista-tarefas');
  list.innerHTML = '';
}

function clearCheckList() {
  const clearCheckedButton = document.getElementById('remover-finalizados');
  clearCheckedButton.addEventListener('click', clearCheckListClick);
}

function clearCheckListClick() {
  const list = document.getElementById('lista-tarefas');
  const checkedElements = document.querySelectorAll('.completed');
  for (const checkedElement of checkedElements) {
    list.removeChild(checkedElement);
  }
}

window.onload = function toDoList() {
  addTask();
  clearList();
  clearCheckList();
}
