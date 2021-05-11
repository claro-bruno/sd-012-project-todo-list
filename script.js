const btnCreateTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const olTask = document.querySelector('#lista-tarefas');

function createTask() {
  const liTask = document.createElement('li');
  liTask.innerText = inputTask.value;
  olTask.appendChild(liTask);
  inputTask.value = '';
}

btnCreateTask.addEventListener('click', createTask);
