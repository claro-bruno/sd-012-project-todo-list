const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const buttonClear = document.querySelector('#apaga-tudo');
// Adiciona tarefas
function makeJob() {
  const newJob = document.createElement('li');
  newJob.innerHTML = input.value;
  list.appendChild(newJob);
  input.value = '';
}
button.addEventListener('click', makeJob);

// Adiciona cor a tarefa selecionada
function addColor(event) {
  const classElement = document.querySelector('.selected');
  if (classElement !== null) {
    classElement.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

list.addEventListener('click', addColor);
// Adiciona letra riscada ao clicar duas vezes
function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

list.addEventListener('dblclick', completeTask);

// Botão que apaga geral
function clearButton() {
  list.innerHTML = '';
  console.log(list);
  console.log(buttonClear);
}
buttonClear.addEventListener('click', clearButton);
