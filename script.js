let input = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');
let createButton = document.getElementById('criar-tarefa');

function createTask() {
  let li = document.createElement('li');
  return li;
}

function clearInput() {
  input.value = '';
}

function newTask() {
  let newLi = createTask();
  newLi.innerText = input.value;
  list.appendChild(newLi);
  clearInput();
}

createButton.addEventListener('click', function() {
  newTask();
});

