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
