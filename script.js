const button = document.querySelector('#criar-tarefa');

function criarTarefa() {
  const textoTarefa = document.querySelector('#texto-tarefa').value;
  const listaTarefas = document.querySelector('#lista-tarefas');
  const adicionaTarefa = document.createElement('li');
  adicionaTarefa.innerHTML = textoTarefa;
  listaTarefas.appendChild(adicionaTarefa);
  document.querySelector('#texto-tarefa').value = '';
}

button.addEventListener('click', criarTarefa);
