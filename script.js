const taskList = 'lista-tarefas';

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

// function eventClearCompleted() {
//   const clearCompletedButton = document.getElementById('remover-finalizados');

//   clearCompletedButton.addEventListener('click', () => {
//     const listItens = document.querySelectorAll('.completed');

//     for (let index = 0; index < listItens.length; index += 1) {
//       const parentElement = document.getElementById(taskList);
//       parentElement.removeChild(listItens[index]);
//     }
//   });
// }

createButton('criar-tarefa', 'Adicionar', '#b1b2b5', 'input');
createButton('remover-selecionado', 'X', '#E9967A', 'setup');
createButton('remover-finalizados', 'Limpar Completos', '#F0E68C', 'setup');
createButton('apaga-tudo', 'Limpar lista', '#E9967A', 'setup');

eventAddTask();
eventClearItens('apaga-tudo', '.item-tarefa');
eventClearItens('remover-finalizados', '.completed');
eventClearItens('remover-selecionado', '.selected');
// eventClearCompleted();
