window.onload = function () {
  let inputTarefa = document.querySelector('#texto-tarefa');
  let botaoTarefa = document.querySelector('#criar-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');
  let botaoLimpaLista = document.querySelector('#apaga-tudo');
  let botaoLimpaConcluidos = document.querySelector('#remover-finalizados');

  botaoTarefa.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = inputTarefa.value;
    novaTarefa.className = 'tarefa';
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = '';
  });

  listaTarefas.addEventListener('dblclick', function (event) {
    concluiTarefa(event);
  });

  listaTarefas.addEventListener('click', function (event) {
    pintaTarefa(event);
  });

  botaoLimpaLista.addEventListener('click', function() {
    let tarefas = document.querySelectorAll('.tarefa');
      for (let index = 0; index < tarefas.length; index += 1) {
          listaTarefas.removeChild(tarefas[index]);
      }
  })

  botaoLimpaConcluidos.addEventListener('click', function() {
      let tarefasConcluidas = document.querySelectorAll('.completed');
      for (let index = 0; index < tarefasConcluidas.length; index += 1) {
          listaTarefas.removeChild(tarefasConcluidas[index]);
      }
  })

  function pintaTarefa(event) {
    let tarefaSelecionada = document.querySelectorAll('.tarefa-selecionada');
    if (tarefaSelecionada.length > 0) {
      tarefaSelecionada[0].className = 'tarefa';
      event.target.className = 'tarefa-selecionada';
    } else if (event.target.className === 'completed') {
      event.target.className = 'completed';
    } else {
      event.target.className = 'tarefa-selecionada';
    }
  }

  function concluiTarefa(event) {
    if (event.target.className === 'completed') {
      event.target.className = 'tarefa';
    } else {
      event.target.className = 'completed';
    }
  }
};
