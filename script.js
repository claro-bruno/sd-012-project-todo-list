const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');


button.addEventListener("click", function () {
  const createItem = document.createElement('li');
  createItem.className = 'task-item';
  createItem.innerText = input.value;
  taskList.appendChild(createItem);
  input.value = '';
});
