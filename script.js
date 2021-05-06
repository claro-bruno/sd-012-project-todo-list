const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function createItem() {
  const newItem = document.createElement('li');
  newItem.addEventListener('click', changeItemBgColor);
  newItem.innerHTML = input.value;
  list.appendChild(newItem);
  input.value = '';
}

button.addEventListener('click', createItem);

function changeItemBgColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
