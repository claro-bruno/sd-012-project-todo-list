const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function createItem() {
  const newItem = document.createElement('li');
  newItem.innerHTML = input.value;
  list.appendChild(newItem);
  input.value = '';
}

button.addEventListener('click', createItem);
