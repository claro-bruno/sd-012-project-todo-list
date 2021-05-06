window.onload = function () {
  criarTarefa();

  clicarItemLista()
}

function criarTarefa() {
  const pegarBotaoTarefa = document.getElementById('criar-tarefa');
  const pegarInput = document.getElementById('texto-tarefa');
  const pegarLista = document.getElementById('lista-tarefas');
  pegarBotaoTarefa.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = pegarInput.value;
    pegarLista.appendChild(li);
    pegarInput.value = '';
  })
}

function resetarCorLista() {
  const getAllLi = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < getAllLi.length; i += 1) {
    getAllLi[i].style = '';
  }
}

function clicarItemLista() {
  const pegarLista = document.getElementById('lista-tarefas');
  pegarLista.addEventListener('click', function (event) {
    resetarCorLista();
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  })
}