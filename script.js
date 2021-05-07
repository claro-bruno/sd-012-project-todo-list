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
}

function clearTaskCompleted() {
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
clearTaskCompleted();
createClearButton();
eventAddTask();
let clearButton = document.querySelector('#apaga-tudo');
clearButton.addEventListener('click', clearListTask);
let clearCompleted = document.querySelector('#remover-finalizados');
clearCompleted.addEventListener('click', clearItemCompleted);
