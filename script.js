const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', adicionaTarefa)

function adicionaTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = document.querySelector('#texto-tarefa').value;
  novaTarefa.addEventListener('click', changeColor);
  document.querySelector('#lista-tarefas').appendChild(novaTarefa);
}

function changeColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}