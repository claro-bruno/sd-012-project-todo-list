function selectOnlyOne(elemento) {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected === null) {
    elemento.target.classList.add('selected');
  } else {
    itemSelected.classList.remove('selected');
    itemSelected.classList.add('item');
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

function addTaskClick() {
  const task = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  const list = document.getElementById('lista-tarefas');
  item.innerHTML = task.value;
  item.className = 'item';
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

function clearListClick() {
  const list = document.getElementById('lista-tarefas');
  list.innerHTML = '';
}

function clearList() {
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', clearListClick);
}

function clearCheckListClick() {
  const list = document.getElementById('lista-tarefas');
  const checkedElements = document.querySelectorAll('.completed');
  for (let index = 0; index < checkedElements.length; index += 1) {
    list.removeChild(checkedElements[index]);
  }
}

function clearCheckList() {
  const clearCheckedButton = document.getElementById('remover-finalizados');
  clearCheckedButton.addEventListener('click', clearCheckListClick);
}

function moveRules(selected, items, reference) {
  if (selected === items[0] && reference === 'up') {
    return true;
  } if (selected === items[items.length - 1] && reference === 'down') {
    return true;
  }
}

function moveNull(selected) {
  if (selected === null) {
    return alert('Selecione uma tarefa para mover.');
  }
}

function moveUpClick() {
  const list = document.getElementById('lista-tarefas');
  const selected = document.querySelector('.selected');
  const items = document.querySelectorAll('.item');
  moveNull(selected);
  if (moveRules(selected, items, 'up')) {
    return alert('Não é possível mover para cima');
  }
  for (let index = 0; index < items.length; index += 1) {
    if (selected === items[index]) {
      list.insertBefore(items[index], items[index - 1]);
    }
  }
}

function moveUp() {
  const buttonDown = document.getElementById('mover-cima');
  buttonDown.addEventListener('click', moveUpClick);
}

function moveDownClick() {
  const list = document.getElementById('lista-tarefas');
  const selected = document.querySelector('.selected');
  const items = document.querySelectorAll('.item');
  moveNull(selected);
  if (moveRules(selected, items, 'down')) {
    return alert('Não é possível mover para baixo');
  }
  for (let index = 0; index < items.length; index += 1) {
    if (selected === items[index]) {
      list.insertBefore(items[index], items[index + 2]);
    }
  }
}

function moveDown() {
  const buttonDown = document.getElementById('mover-baixo');
  buttonDown.addEventListener('click', moveDownClick);
}

function removeSelectedClick() {
  const list = document.getElementById('lista-tarefas');
  const selected = document.querySelector('.selected');
  list.removeChild(selected);
}

function removeSelected() {
  const buttonDSelected = document.getElementById('remover-selecionado');
  buttonDSelected.addEventListener('click', removeSelectedClick);
}

window.onload = function toDoList() {
  addTask();
  clearList();
  clearCheckList();
  moveUp();
  moveDown();
  removeSelected();
};
