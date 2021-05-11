let input = document.querySelector('#texto-tarefa')
let button = document.querySelector('#criar-tarefa')
let ol = document.querySelector('#lista-tarefas')

function addTask() {
    const tarefa = document.createElement('li');
    tarefa.innerHTML = input.value;
    ol.appendChild(tarefa);
    input.value = '';
  }
  button.addEventListener('click', addTask);