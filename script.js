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

  listParent.appendChild(listItem);
}

function eventAddTask() {
  const addTaskButton = document.getElementById('criar-tarefa');

  addTaskButton.addEventListener('click', () => {
    const inputContent = document.getElementById('texto-tarefa');
    createListItem(inputContent.value);
    inputContent.value = '';
  });
}

createButton('criar-tarefa', 'Adicionar', '#b1b2b5', 'input');
eventAddTask();
