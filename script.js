let inputTarefa = document.querySelector('#texto-tarefa');
let botaoTarefa = document.querySelector('#criar-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');

botaoTarefa.addEventListener('click', function () {
  let novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = inputTarefa.value;
  novaTarefa.className = 'tarefa';
  listaTarefas.appendChild(novaTarefa);
  inputTarefa.value = '';
  pintaTarefa();
  concluiTarefa();
});

function pintaTarefa() {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', function (event) {
      let tarefaSelecionada = document.querySelectorAll('.tarefa-selecionada');
      if (tarefaSelecionada.length > 0) {
        tarefaSelecionada[0].className = 'tarefa';
        event.target.className = 'tarefa-selecionada';
      } else {
        event.target.className = 'tarefa-selecionada';
      }
    });
  }
}

function concluiTarefa() {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('dblclick', function (event) {
      let tarefaConcluida = document.querySelectorAll('.tarefa-concluida');
      if (tarefaConcluida.length > 0) {
        tarefaConcluida[0].className = 'tarefa';
        event.target.className = 'tarefa-concluida';
      } else {
        event.target.className = 'tarefa-concluida';
      }
    });
  }
}
