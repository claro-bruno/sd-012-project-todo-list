const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function changeBgColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

function changeSelected() {
// Utilizei a dica da colega Adriana Biberg para implementar esta checagem utilizando for e if.
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].className.includes('selected')) {
      list.children[index].classList.remove('selected');
      list.children[index].style.backgroundColor = '';
    }
  }
}

function completedTasks(event) {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
  event.target.classList.add('completed');
  }
}

function createItem() {
  const newItem = document.createElement('li');
  newItem.addEventListener('click', changeSelected);
  newItem.addEventListener('click', changeBgColor);
  newItem.addEventListener('dblclick', completedTasks);
  newItem.innerHTML = input.value;
  list.appendChild(newItem);
  input.value = '';
}

button.addEventListener('click', createItem);
