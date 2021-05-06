const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

window.onload = function () {

  function changeBgColor(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    event.target.classList.add('selected');
  }

  function changeSelected() {
    const selected = document.querySelector('.selected');
    selected.style.backgroundColor = '';
    selected.classList.remove('selected');
  }
}  

function createItem() {
  const newItem = document.createElement('li');
  newItem.addEventListener('click', changeSelected);
  newItem.addEventListener('click', changeBgColor);
  newItem.innerHTML = input.value;
  list.appendChild(newItem);
  input.value = '';
}

button.addEventListener('click', createItem);
