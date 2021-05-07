function createButton() {
  let createButtonSubmit = document.createElement('button');
  createButtonSubmit.id = 'criar-tarefa';
  createButtonSubmit.innerHTML = 'Criar Tarefa';
  document.querySelector('#container-submit').appendChild(createButtonSubmit);
}
createButton();

function createListItem() {
  let createItemList = document.createElement('li');
  let contentInput = document.querySelector('#texto-tarefa').value;
  createItemList.innerHTML = contentInput;
  createItemList.className = 'task';
  document.querySelector('#lista-tarefas').appendChild(createItemList);
}

function clearInput() {
  let contentInput = document.querySelector('#texto-tarefa');
  contentInput.value = '';
}

function selectItemList() {
  let itemList = document.querySelectorAll('.task');
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].addEventListener('click', (event) => {
      let itemSelected = document.querySelector('.selected');
      if (itemSelected !== null) {
        itemSelected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
// Essa questão eu consegui através do PR do Roberval.
// https://github.com/tryber/sd-012-project-todo-list/pull/15/files
function itemListConcluded() {
  let itemList = document.querySelector('#lista-tarefas').lastChild;
  itemList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function createClearButton() {
  let createButton = document.createElement('button');
  createButton.id = 'apaga-tudo';
  createButton.innerHTML = 'Limpar tarefas';
  document.querySelector('#container-tools').appendChild(createButton);
}

function clearListTask() {
  let listItem = document.querySelectorAll('.task');
  let containerListItem = document.querySelector('#lista-tarefas');
  for (let index = 0; index < listItem.length; index += 1) {
    containerListItem.removeChild(listItem[index]);
  }
  saveToDoList();
}

function createButtonClearCompleted() {
  let createButton = document.createElement('button');
  createButton.id = 'remover-finalizados';
  createButton.innerHTML = 'Remover concluídos';
  document.querySelector('#container-tools').appendChild(createButton);
}

function clearItemCompleted() {
  let itemCompleted = document.querySelectorAll('.completed');
  let containerListItem = document.querySelector('#lista-tarefas');
  for (let index = 0; index < itemCompleted.length; index += 1) {
    containerListItem.removeChild(itemCompleted[index]);
  }
  saveToDoList();
}

function createSaveButton() {
  let createButton = document.createElement('button');
  createButton.id = 'salvar-tarefas';
  createButton.innerHTML = 'Salvar lista';
  document.querySelector('#container-tools').appendChild(createButton);
}

let taskList = document.querySelector('#lista-tarefas');

function saveToDoList() {
  localStorage.setItem('taskList', taskList.innerHTML);
}

function recoverToDoList() {
  let ListSaved = localStorage.getItem('taskList');
  if (ListSaved !== null) {
    taskList.innerHTML = ListSaved;
  }
}

function createMoveUpButton() {
  let createButton = document.createElement('button');
  createButton.id = 'mover-cima';
  createButton.innerHTML = '&uarr;';
  document.querySelector('#container-tools').appendChild(createButton);
}

function createMoveDownButton() {
  let createButton = document.createElement('button');
  createButton.id = 'mover-baixo';
  createButton.innerHTML = '&darr;';
  document.querySelector('#container-tools').appendChild(createButton);
}

//Consultei o PR do Thalles Carneiro para resolver essa parte
// https://github.com/tryber/sd-012-project-todo-list/pull/51/files
function moveUp() {
  let itemList = document.querySelector('.selected');
  if (itemList !== null && itemList !== taskList.firstElementChild) {
    itemList.parentNode.insertBefore(itemList, itemList.previousElementSibling);
  }
}

function moveDown() {
  let itemList = document.querySelector('.selected');
  if (itemList !== null && itemList !== taskList.lastElementChild) {
    itemList.parentNode.insertBefore(itemList.nextElementSibling, itemList);
  }
}

let itemList = document.querySelectorAll('li');
let buttonSubmit = document.querySelector('#criar-tarefa');
let ordenedList = document.querySelector('#lista-tarefas');

function eventAddTask() {
  buttonSubmit.addEventListener('click', () => {
    createListItem();
    clearInput();
    selectItemList();
    itemListConcluded();
  });
}
createMoveUpButton();
createMoveDownButton();
recoverToDoList();
createButtonClearCompleted();
createClearButton();
createSaveButton();
eventAddTask();
let clearButton = document.querySelector('#apaga-tudo');
clearButton.addEventListener('click', clearListTask);
let clearCompleted = document.querySelector('#remover-finalizados');
clearCompleted.addEventListener('click', clearItemCompleted);
let saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', saveToDoList);
let moveListUp = document.querySelector('#mover-cima');
moveListUp.addEventListener('click', moveUp);
let moveListDown = document.querySelector('#mover-baixo');
moveListDown.addEventListener('click', moveDown);
