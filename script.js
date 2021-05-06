const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);

function adicionaTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  lista.appendChild(novaTarefa);
  document.getElementById("form").reset();
}
