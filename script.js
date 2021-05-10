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
  const tarefasSalvas = localStorage.getItem('lista');
  if (localStorage.length > 0) {
    lista.innerHTML = tarefasSalvas;
  }
  for (let index = 0; index < lista.children.length; index += 1) {
    lista.children[index].addEventListener('click', select);
    lista.children[index].addEventListener('dblclick', complete);
  }
};

function moveCima() {
  const tarefa = document.querySelector('.selected');
  if (tarefa !== null && tarefa !== tarefa.parentElement.firstChild) {
    const tarefaAnterior = tarefa.previousElementSibling;
    lista.insertBefore(tarefa, tarefaAnterior);
  }
}

function moveBaixo() {
  const tarefa = document.querySelector('.selected');
  if (tarefa !== null && tarefa !== tarefa.parentElement.lastChild) {
    const proximaTarefa = tarefa.nextElementSibling;
    lista.insertBefore(tarefa, proximaTarefa.nextElementSibling);
  }
}

function apagaSelecionada() {
  const tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    tarefa.remove();
  }
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);
const buttonDel = document.getElementById('apaga-tudo');
buttonDel.addEventListener('click', apagaTarefas);
const buttonCompl = document.getElementById('remover-finalizados');
buttonCompl.addEventListener('click', apagaCompletas);
const buttonSave = document.getElementById('salvar-tarefas');
buttonSave.addEventListener('click', salvaTarefas);
const buttonMoveUp = document.getElementById('mover-cima');
buttonMoveUp.addEventListener('click', moveCima);
const buttonMoveDown = document.getElementById('mover-baixo');
buttonMoveDown.addEventListener('click', moveBaixo);
const buttonDelSelected = document.getElementById('remover-selecionado');
buttonDelSelected.addEventListener('click', apagaSelecionada);
