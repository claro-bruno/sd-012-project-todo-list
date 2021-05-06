function addTask() {
  const input = document.getElementById('texto-tarefa');
  const buttonAdd = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas');
  buttonAdd.addEventListener('click', () => {
    let taskLi = document.createElement('li');
    taskLi.innerHTML = input.value;
    taskLi.classList.add('item-lista');
    input.value = '';
    list.appendChild(taskLi);
  });
}
addTask();

function removeClassSelected() {
  const elementSelected = document.querySelector('.selected');
  if (elementSelected !== null) {
    elementSelected.classList.remove('selected');
  }
}

function selectedItems() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', (event) => {
    const evento = event;
    removeClassSelected();
    evento.target.classList.add('selected');
  });
}
selectedItems();

function completedTask() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', (event) => {
    const evento = event;
    if (evento.target.classList.contains('completed')) {
      evento.target.classList.remove('completed');
    } else {
      evento.target.classList.add('completed');
    }
  });
}
completedTask();

function clearList() {
  const list = document.getElementById('lista-tarefas');
  const buttonClear = document.getElementById('apaga-tudo');
  buttonClear.addEventListener('click', () => {
    list.innerHTML = '';
  });
}
clearList();

function clearCompleted() {
  const list = document.getElementById('lista-tarefas');
  const buttonCompleted = document.getElementById('remover-finalizados');
  buttonCompleted.addEventListener('click', () => {
    const completedItems = document.querySelectorAll('.completed');
    for (let index = 0; index < completedItems.length; index += 1) {
      list.removeChild(completedItems[index]);
    }
  });
}
clearCompleted();

function saveTasks() {
  const buttonSave = document.getElementById('salvar-tarefas');
  buttonSave.addEventListener('click', () => {
    const listContent = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('lista', listContent);
  });
}
saveTasks();

function initialize() {
  const list = document.getElementById('lista-tarefas');
  list.innerHTML = localStorage.getItem('lista');
}
initialize();

function moveItemsUp() {
  const buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem.previousElementSibling !== null || selectedItem !== null) {
      let itemAntes = document.createElement('li');
      itemAntes.innerHTML = selectedItem.previousElementSibling.innerHTML;
      itemAntes.classList = selectedItem.previousElementSibling.classList;
      selectedItem.previousElementSibling.innerHTML = selectedItem.innerHTML;
      selectedItem.previousElementSibling.classList = selectedItem.classList;
      selectedItem.innerHTML = itemAntes.innerHTML;
      selectedItem.classList = itemAntes.classList;
    }
  });
}
moveItemsUp();

function moveItemsDown() {
  const buttonMoveDown = document.getElementById('mover-baixo');
  buttonMoveDown.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem.nextElementSibling !== null || selectedItem !== null) {
      const itemDepois = document.createElement('li');
      itemDepois.innerHTML = selectedItem.nextElementSibling.innerHTML;
      itemDepois.classList = selectedItem.nextElementSibling.classList;
      selectedItem.nextElementSibling.innerHTML = selectedItem.innerHTML;
      selectedItem.nextElementSibling.classList = selectedItem.classList;
      selectedItem.innerHTML = itemDepois.innerHTML;
      selectedItem.classList = itemDepois.classList;
    }
  });
}
moveItemsDown();

function removeSelected() {
  const buttonRemoveSelected = document.getElementById('remover-selecionado');
  const list = document.getElementById('lista-tarefas');
  buttonRemoveSelected.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    console.log(selectedItem);
    list.removeChild(selectedItem);
  });
}
removeSelected();
