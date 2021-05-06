function addTask() {
  let input = document.getElementById('texto-tarefa');
  let buttonAdd = document.getElementById('criar-tarefa');
  let list = document.getElementById('lista-tarefas');
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
  let elementSelected = document.querySelector('.selected');
  if (elementSelected !== null) {
    elementSelected.classList.remove('selected');
  }
}

function selectedItems() {
  let list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', (event) => {
    let evento = event;
    removeClassSelected();
    evento.target.classList.add('selected');
  });
}
selectedItems();

function completedTask() {
  let list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', (event) => {
    let evento = event;
    if (evento.target.classList.contains('completed')) {
      evento.target.classList.remove('completed');
    } else {
      evento.target.classList.add('completed');
    }
  });
}
completedTask();

function clearList() {
  let list = document.getElementById('lista-tarefas');
  let buttonClear = document.getElementById('apaga-tudo');
  buttonClear.addEventListener('click', () => {
    list.innerHTML = '';
  });
}
clearList();

function clearCompleted() {
  let list = document.getElementById('lista-tarefas');
  let buttonCompleted = document.getElementById('remover-finalizados');
  buttonCompleted.addEventListener('click', () => {
    let completedItems = document.querySelectorAll('.completed');
    for (let index = 0; index < completedItems.length; index += 1) {
      list.removeChild(completedItems[index]);
    }
  });
}
clearCompleted();

function saveTasks() {
  let buttonSave = document.getElementById('salvar-tarefas');
  buttonSave.addEventListener('click', () => {
    let listContent = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('lista', listContent);
  });
}
saveTasks();

function initialize() {
  let list = document.getElementById('lista-tarefas');
  list.innerHTML = localStorage.getItem('lista');
}
initialize();

function moveItemsUp() {
  let buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', () => {
    let selectedItem = document.querySelector('.selected');
    if (selectedItem.previousElementSibling !== null) {
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
    let buttonMoveDown = document.getElementById('mover-baixo');
    buttonMoveDown.addEventListener('click', () => {
      let selectedItem = document.querySelector('.selected');
      if (selectedItem.nextElementSibling !== null) {
          let itemDepois = document.createElement('li');
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
