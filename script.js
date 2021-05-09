const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
// Adiciona tarefas
function makeJob() {
  const list = document.querySelector('#lista-tarefas');
  const newJob = document.createElement('li');
  newJob.innerHTML = input.value;
  list.appendChild(newJob);
  input.value = '';
}
button.addEventListener('click', makeJob);

// Adiciona cor a tarefa selecionada
function addColor(event) {
  const classElement = document.querySelector('.selected-item');
  event.target.classList.add('selected-item');
  classElement.classList.remove('selected-item');
}

function addSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}
list.addEventListener('click', addColor);
