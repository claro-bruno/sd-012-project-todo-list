window.onload = function () {
  criarTarefa();
}

function criarTarefa() {
  const pegarBotaoTarefa = document.getElementById('criar-tarefa');
  const pegarInput = document.getElementById('texto-tarefa');
  const pegarLista = document.getElementById('lista-tarefas')
  pegarBotaoTarefa.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = pegarInput.value;
    pegarLista.appendChild(li);
    pegarInput.value = '';
  })
}