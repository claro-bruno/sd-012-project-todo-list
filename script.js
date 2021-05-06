function createButton(id, text, bgColor, parent) {
  const parentElement = document.getElementById(parent);
  const button = document.createElement('button');

  button.innerHTML = text;
  button.id = id;
  button.style.backgroundColor = bgColor;

  parentElement.appendChild(button);
}

function createListItem(text) {
  const listParent = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');

  listItem.innerHTML = text;
  listItem.className = 'item-tarefa';

  listParent.appendChild(listItem);
}

function eventSelectItem() {
  const listItens = document.querySelectorAll('.item-tarefa');

  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].addEventListener('click', (event) => {
      const listItemSelected = document.querySelector('.selected');
      if (listItemSelected !== null) {
        listItemSelected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}

function eventCompleteTask() {
  const listItens = document.querySelectorAll('.item-tarefa');

  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
  }
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

createButton('criar-tarefa', 'Adicionar', '#b1b2b5', 'input');
eventAddTask();
