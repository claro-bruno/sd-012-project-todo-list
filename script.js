const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// ==> Gera a lista ordenada
button.addEventListener("click", function () {
  const createItem = document.createElement('li');
  createItem.className = 'task-item';
  createItem.innerText = input.value;
  taskList.appendChild(createItem);
  input.value = '';
});
// <==

// ==> Risca a lista ordenada
const finish = document.querySelector('#lista-tarefas');
finish.addEventListener('dblclick', (evento) => {
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed')
  } else {
    evento.target.classList.add('completed');
  }
});
// <==
