const buttonToDo = document.querySelector('#criar-tarefa');
const inputToDo = document.querySelector('#texto-tarefa');
const orderList = document.querySelector('#lista-tarefas');


function createList() {
  const inputToDo = document.getElementById('texto-tarefa');
  const newLi = document.createElement('li');
  orderList.appendChild(newLi);
  newLi.textContent = inputToDo.value;
  inputToDo.value = '';
}

buttonToDo.addEventListener('click', createList);
