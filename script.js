const list = document.getElementById('lista-tarefas');
function addTask() {
  const input = document.getElementById('texto-tarefa');
  const buttonAdd = document.getElementById('criar-tarefa');
  buttonAdd.addEventListener('click', () => {
    const taskLi = document.createElement('li');
    taskLi.innerHTML = input.value;
    taskLi.classList.add('item-lista');
    input.value = '';
    list.appendChild(taskLi);
  });
}

function removeClassSelected() {
  const elementSelected = document.querySelector('.selected');
  if (elementSelected !== null) {
    elementSelected.classList.remove('selected');
  }
}

function selectedItems() {
  list.addEventListener('click', (event) => {
    const evento = event;
    removeClassSelected();
    evento.target.classList.add('selected');
  });
}

function completedTask() {
  list.addEventListener('dblclick', (event) => {
    const evento = event;
    if (evento.target.classList.contains('completed')) {
      evento.target.classList.remove('completed');
    } else {
      evento.target.classList.add('completed');
    }
  });
}

function clearList() {
  const buttonClear = document.getElementById('apaga-tudo');
  buttonClear.addEventListener('click', () => {
    list.innerHTML = '';
  });
}

function clearCompleted() {
  const buttonCompleted = document.getElementById('remover-finalizados');
  buttonCompleted.addEventListener('click', () => {
    const completedItems = document.querySelectorAll('.completed');
    for (let index = 0; index < completedItems.length; index += 1) {
      list.removeChild(completedItems[index]);
    }
  });
}

function saveTasks() {
  const buttonSave = document.getElementById('salvar-tarefas');
  buttonSave.addEventListener('click', () => {
    const listContent = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('lista', listContent);
  });
}

function initialize() {
  list.innerHTML = localStorage.getItem('lista');
}

function moveItemsUp() {
  const buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null && selectedItem.previousElementSibling !== null) {
      list.insertBefore(selectedItem, selectedItem.previousElementSibling);
    }
  });
}

function moveItemsDown() {
  const buttonMoveDown = document.getElementById('mover-baixo');
  buttonMoveDown.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null && selectedItem.nextElementSibling !== null) {
      list.insertBefore(selectedItem, selectedItem.nextElementSibling.nextElementSibling);
    }
  });
}

function removeSelected() {
  const buttonRemoveSelected = document.getElementById('remover-selecionado');
  buttonRemoveSelected.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    console.log(selectedItem);
    list.removeChild(selectedItem);
  });
}

window.onload = () => {
  initialize();
  addTask();
  selectedItems();
  completedTask();
  clearList();
  clearCompleted();
  saveTasks();
  moveItemsUp();
  moveItemsDown();
  removeSelected();
};
