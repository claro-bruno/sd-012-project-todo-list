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

function clearList() {
  let taskList = document.querySelector('#lista-tarefas');
  while (taskList.firstChild !== null) {
    taskList.firstChild.remove();
  } 
}

const clearButton = document.querySelector('#apaga-tudo');
clearButton.addEventListener('click', clearList);

function clearCompleted() {
  let completedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTask.length; index += 1) {
    completedTask[index].remove();
  }
}

const completedButton = document.querySelector('#remover-finalizados');
completedButton.addEventListener('click', clearCompleted);
