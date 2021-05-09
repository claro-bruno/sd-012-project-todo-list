const button = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');

function makeJob () {
  const list = document.querySelector('#lista-tarefas');
  const newJob = document.createElement('li');
  newJob.innerHTML = input.value;
  list.appendChild(newJob);
  input.value = '';
}
// Cria tarefa
// linkar input e botao
button.addEventListener('click', makeJob);
// Mandar texto input para lista de tarefa