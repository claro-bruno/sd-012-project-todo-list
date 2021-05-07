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
  for (const checkedElement of checkedElements) {
    list.removeChild(checkedElement);
  }
}

function clearCheckList() {
  const clearCheckedButton = document.getElementById('remover-finalizados');
  clearCheckedButton.addEventListener('click', clearCheckListClick);
}

function moveUpOrDownBlock(items, index, upOrDown) {
  if (upOrDown === 'up') {
    const elementUp = items[index - 1].innerHTML;
    items[index - 1].innerHTML = items[index].innerHTML;
    items[index].innerHTML = elementUp;
    items[index - 1].classList.add('selected');
    items[index].classList.remove('selected');
  } else if (upOrDown === 'down') {
    const elementUp = items[index + 1].innerHTML;
    items[index + 1].innerHTML = items[index].innerHTML;
    items[index].innerHTML = elementUp;
    items[index + 1].classList.add('selected');
    items[index].classList.remove('selected');
  }
}

function upConditionals(selected, index, items) {
  if (selected === items[index]) {
    if (index === 0) {
      alert('[ERROR] Não pode mover para cima');
    } else {
      moveUpOrDownBlock(items, index, 'up');
    }
  }
}

function moveUpExec() {
  const items = document.querySelectorAll('.item');
  const selected = document.querySelector('.selected');
  if (selected === null) {
    alert('NÃO É POSSIVEL MOVER PARA CIMA');
  } else {
    for (let index = 0; index < items.length; index += 1) {
      upConditionals(selected, index, items);
    }
  }
}

function moveUpClick() {
  const selected = document.querySelector('.selected');
  if (selected === null) {
    alert('NÃO É POSSIVEL MOVER');
  } else {
    moveUpExec();
  }
}

function moveUp() {
  const buttonDown = document.getElementById('mover-cima');
  buttonDown.addEventListener('click', moveUpClick);
}

function downConditionals(selected, items, index) {
  if (selected === items[index]) {
    if (index === (items.length - 1)) {
      alert('[ERROR] Não pode mover para baixo');
    } else {
      moveUpOrDownBlock(items, index, 'down');
    }
  }
}

function moveDownExec() {
  const items = document.querySelectorAll('.item');
  const selected = document.querySelector('.selected');
  for (let index = 0; index < items.length; index += 1) {
    downConditionals(selected, items, index);
  }
}

function moveDownClick() {
  const selected = document.querySelector('.selected');
  if (selected === null) {
    alert('NÃO É POSSIVEL MOVER');
  } else {
    moveDownExec();
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
