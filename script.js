function select(e) {
  const ultimaTarefa = document.querySelector('.selected');
  if (ultimaTarefa != null) {
    ultimaTarefa.classList.remove('selected');
  }

  const tarefaAtual = e.target;
  tarefaAtual.classList.add('selected');
}

function adicionaTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  novaTarefa.addEventListener('click', select);
  lista.appendChild(novaTarefa);
  document.getElementById('form').reset();
  // capturaTarefas();
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);
