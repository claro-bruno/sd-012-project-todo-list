const lista = document.getElementById('lista-tarefas');

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
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  novaTarefa.addEventListener('click', select);
  novaTarefa.addEventListener('dblclick', complete);
  lista.appendChild(novaTarefa);
  document.getElementById('form').reset();
}

function apagaTarefas() {
  while (lista.firstChild) {
    lista.firstChild.remove();
  }
}

function apagaCompletas() {
  const tarefaCompleta = document.getElementsByClassName('completed');
  while (tarefaCompleta.length > 0) {
    tarefaCompleta[0].remove();
  }
}

function salvaTarefas() {
  const listaTarefas = lista.innerHTML;
  localStorage.setItem('lista', listaTarefas);
}

window.onload = function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('lista');
  if (localStorage.length > 0) {
    lista.innerHTML = tarefas;
  }
  for (let index = 0; index < lista.children.length; index += 1) {
    lista.children[index].addEventListener('click', select);
    lista.children[index].addEventListener('dblclick', complete);
  }
};

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);
const buttonDel = document.getElementById('apaga-tudo');
buttonDel.addEventListener('click', apagaTarefas);
const buttonCompl = document.getElementById('remover-finalizados');
buttonCompl.addEventListener('click', apagaCompletas);
const buttonSave = document.getElementById('salvar-tarefas');
buttonSave.addEventListener('click', salvaTarefas);
