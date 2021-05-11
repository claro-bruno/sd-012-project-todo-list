function completedTask(event) {

  if (event.target.className.includes('completed')){
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function changeColor(event) {
  const getLiGray = document.querySelector('.gray');
  if (getLiGray !== null) {
    getLiGray.classList.remove('gray');
  }
  event.target.classList.add('gray');
}

function adicionaTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  novaTarefa.addEventListener('click', changeColor);
  novaTarefa.addEventListener('dblclick', completedTask);
  document.querySelector('#lista-tarefas').appendChild(novaTarefa);
}

const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', adicionaTarefa);


