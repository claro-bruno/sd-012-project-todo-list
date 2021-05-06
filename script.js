function select(event) {
  const ultimaTarefa = document.querySelector('.selected');
  if (ultimaTarefa != null) {
    ultimaTarefa.classList.remove('selected');
  }

  const tarefaAtual = event.target;
  tarefaAtual.classList.add('selected');
}

function complete(event) {
  const tarefaCompleta = event.target;
  if (tarefaCompleta.classList.value.includes('completed')) {
    tarefaCompleta.classList.remove('completed');
  } else {
    tarefaCompleta.classList.add('completed');
  }
}

function adicionaTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  novaTarefa.addEventListener('click', select);
  novaTarefa.addEventListener('dblclick', complete);
  lista.appendChild(novaTarefa);
  document.getElementById('form').reset();
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);
