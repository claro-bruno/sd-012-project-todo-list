const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const selected = document.querySelector('.selected');

function changeBgColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

function changeSelected() {
  for (index = 0; index < list.children.length; index += 1) {
    if (list.children[index].className = 'selected') {
      list.children[index].classList.remove('selected');
      list.children[index].style.backgroundColor = '';
    }
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
