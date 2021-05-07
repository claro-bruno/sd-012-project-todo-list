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
eventAddTask();
