const input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

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
  let selectedTask = '';
  let previusTask = '';
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('gray')) {
      if (i !== 0) {
        selectedTask = task[i].innerHTML;
        previusTask = task[i - 1].innerHTML;
        task[i].innerHTML = previusTask;
        task[i - 1].innerHTML = selectedTask;
        task[i].classList.remove('gray');
        task[i - 1].classList.add('gray');
      } else {
        alert('O elemento já está no topo da lista');
      }
    }
  }
}

function moverBaixo() {
  const task = document.getElementsByClassName('tarefa');
  let selectedTask = '';
  let previusTask = '';
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('gray')) {
      if (i !== task.length - 1) {
        selectedTask = task[i].innerHTML;
        previusTask = task[i + 1].innerHTML;
        task[i].innerHTML = previusTask;
        task[i + 1].innerHTML = selectedTask;
        task[i].classList.remove('gray');
        task[i + 1].classList.add('gray');
      } else {
        alert('O elemento já está no fundo da lista');
      }
    }
  }
}

function salvrLista() {

}

function createTask() {
  const tarefa = document.createElement('li');
  tarefa.classList.add('tarefa');
  tarefa.innerHTML = input.value;
  listaTarefa.appendChild(tarefa);
  console.log(input.value);
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
console.log(document.getElementsByClassName('tarefa'));
