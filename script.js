const input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
let selectedTask = '';
let previusTask = '';
let nextTask = '';

function gray(event) {
  const li = document.querySelectorAll('.tarefa');
  for (let i = 0; i < li.length; i += 1) {
    li[i].classList.remove('gray');
  }
  event.target.classList.add('gray');
}

function done(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function deleteAll() {
  const tarefas = document.getElementsByClassName('tarefa');
  while (tarefas.length > 0) tarefas[0].remove();
}

function deleteGray() {
  const selected = document.getElementsByClassName('gray');
  selected[0].remove();
}

function deleteDone() {
  const completed = document.getElementsByClassName('completed');
  while (completed.length > 0) completed[0].remove();
}

function moverCima() {
  const task = document.getElementsByClassName('tarefa');
  if (document.getElementsByClassName('gray').length < 1){
    alert('Nenhum elemento selecionado')
  }
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('gray')) {
      if (i !== 0) {
        listaTarefa.insertBefore(task[i], task[i].previousSibling )
      } else {
        alert('O elemento já está no topo da lista');
      }
    }
  }
}

function moverBaixo() {
  const task = document.getElementsByClassName('tarefa');

  if (document.getElementsByClassName('gray').length < 1){
    alert('Nenhum elemento selecionado')
  }
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('gray')) {
      if (i !== task.length - 1) {
        listaTarefa.insertBefore(task[i].nextSibling, task[i])
      } else {
        alert('O elemento já está no final da lista');
      }
    }
  }
}

function salvarLista() {
  localStorage.setItem('item', listaTarefa.innerHTML);
}

function createTask() {
  const tarefa = document.createElement('li');
  tarefa.classList.add('tarefa');
  tarefa.innerHTML = input.value;
  listaTarefa.appendChild(tarefa);
  input.value = '';
  tarefa.addEventListener('click', gray);
  tarefa.addEventListener('dblclick', done);
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
document.getElementById('apaga-tudo').addEventListener('click', deleteAll);
document.getElementById('remover-selecionado').addEventListener('click', deleteGray);
document.getElementById('remover-finalizados').addEventListener('click', deleteDone);
document.getElementById('mover-cima').addEventListener('click', moverCima);
document.getElementById('mover-baixo').addEventListener('click', moverBaixo);
document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);

window.onload = () => {
  const listaSalva = localStorage.getItem('item');
  listaTarefa.innerHTML = listaSalva;
};
