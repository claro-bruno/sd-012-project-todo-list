const taskList = 'lista-tarefas';
const taskItem = '.item-tarefa';
const up = 'mover-cima';
const down = 'mover-baixo';

function createButton(id, text, bgColor, parent) {
  const parentElement = document.getElementById(parent);
  const button = document.createElement('button');

  button.innerHTML = text;
  button.id = id;
  button.style.backgroundColor = bgColor;

  parentElement.appendChild(button);
}

function createListItem(text) {
  const listParent = document.getElementById(taskList);
  const listItem = document.createElement('li');

  listItem.innerHTML = text;
  listItem.className = 'item-tarefa';

  listParent.appendChild(listItem);
}

function eventSelectItem() {
  const lastAddedItem = document.getElementById(taskList).lastChild;

  lastAddedItem.addEventListener('click', (event) => {
    const listItemSelected = document.querySelector('.selected');
    if (listItemSelected !== null) {
      listItemSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function eventCompleteTask() {
  const lastAddedItem = document.getElementById(taskList).lastChild;

  lastAddedItem.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function eventAddTask() {
  const addTaskButton = document.getElementById('criar-tarefa');

  addTaskButton.addEventListener('click', () => {
    const inputContent = document.getElementById('texto-tarefa');
    createListItem(inputContent.value);
    inputContent.value = '';
    eventSelectItem();
    eventCompleteTask();
  });
}

function eventClearItens(buttonId, classToClear) {
  const clearButton = document.getElementById(buttonId);

  clearButton.addEventListener('click', () => {
    const listItens = document.querySelectorAll(classToClear);

    for (let index = 0; index < listItens.length; index += 1) {
      const parentElement = document.getElementById(taskList);
      parentElement.removeChild(listItens[index]);
    }
  });
}

function moveUpItem(selectedItem) {
  if (selectedItem !== null) {
    const parentElement = document.getElementById(taskList);
    const previousElement = selectedItem.previousSibling;
    parentElement.insertBefore(selectedItem, previousElement);
  }
}

function moveDownItem(selectedItem) {
  if (selectedItem !== null) {
    const parentElement = document.getElementById(taskList);
    const netxElement = selectedItem.nextSibling;
    parentElement.insertBefore(selectedItem, netxElement.nextSibling);
  }
}

function eventItemMove(direction) {
  const upButton = document.getElementById(direction);

  upButton.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    const siblings = document.querySelectorAll(taskItem);

    if (direction === up && selected !== siblings[0]) moveUpItem(selected);
    if (direction === down && selected !== siblings[siblings.length - 1]) moveDownItem(selected);
  });
}

function eventSaveList() {
  const saveButton = document.getElementById('salvar-tarefas');

  saveButton.addEventListener('click', () => {
    const listItens = document.querySelectorAll(taskItem);
    localStorage.setItem('itens', listItens[0].innerHTML);
    localStorage.setItem('classLists', listItens[0].classList);

    for (let index = 1; index < listItens.length; index += 1) {
      localStorage.setItem('itens',
        `${localStorage.getItem('itens')}|${listItens[index].innerHTML}`);
      localStorage.setItem('classLists',
        `${localStorage.getItem('classLists')}|${listItens[index].classList}`);
    }
  });
}

function addSavedItens() {
  const savedItens = localStorage.getItem('itens').split('|');
  const savedClassLists = localStorage.getItem('classLists').split('|');
  const parentElement = document.getElementById(taskList);

  for (let index = 0; index < savedItens.length; index += 1) {
    const listItem = document.createElement('li');
    listItem.innerHTML = savedItens[index];
    listItem.classList = savedClassLists[index];
    parentElement.appendChild(listItem);
  }
}

function checkLocalStorage() {
  if (localStorage.getItem('itens')) {
    addSavedItens();
  }
}

createButton('criar-tarefa', 'Adicionar', '#b1b2b5', 'input');
createButton('remover-selecionado', '\u2716', '#E9967A', 'setup');
createButton(up, '\u2191', '#FF8C00', 'setup');
createButton(down, '\u2193', '#FF8C00', 'setup');
createButton('remover-finalizados', 'Limpar Completos', '#F0E68C', 'setup');
createButton('apaga-tudo', 'Limpar Lista', '#E9967A', 'setup');
createButton('salvar-tarefas', 'Salvar Lista', '#3CB371', 'setup');
eventAddTask();
eventClearItens('apaga-tudo', taskItem);
eventClearItens('remover-finalizados', '.completed');
eventClearItens('remover-selecionado', '.selected');
eventItemMove(up);
eventItemMove(down);
eventSaveList();
checkLocalStorage();
