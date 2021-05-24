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

const pintarTarefa = document.querySelector('#lista-tarefas');

function pintar(evento) {
  const tarefaSelecionada = document.querySelectorAll('li');
  for (let index = 0; index < tarefaSelecionada.length; index += 1) {
    tarefaSelecionada[index].style.backgroundColor = '';
  }
  evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
pintarTarefa.addEventListener('click', pintar);

function taxar(event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
}
pintarTarefa.addEventListener('dblclick', taxar);

function apagarTudo() {
  let deletar = document.querySelectorAll('li');
  if (deletar.length > 0){
    for(indice = 0; indice < deletar.length; indice += 1){
      deletar[indice].remove();
    }
  }
}

  const tarefasGeradas = document.querySelector('#apaga-tudo');
  tarefasGeradas.addEventListener('click', apagarTudo);
