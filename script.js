const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
// Adiciona tarefas
function makeJob() {
  const newJob = document.createElement('li');
  newJob.innerHTML = input.value;
  newJob.className = 'selected';
  list.appendChild(newJob);
  input.value = '';
}
button.addEventListener('click', makeJob);

// Adiciona cor a tarefa selecionada
function addColor(event) {
  const classElement = document.querySelector('.selected-item');
  if (classElement !== null) {
    classElement.classList.remove('selected-item');
  }
  event.target.classList.add('selected-item');
  console.log(classElement);
}

list.addEventListener('click', addColor);
