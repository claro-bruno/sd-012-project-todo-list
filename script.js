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
    // limpaLista();
    // limpaConcluidos();
  });

  function pintaTarefa(event) {
    let tarefaSelecionada = document.querySelectorAll('.tarefa-selecionada');
    if (tarefaSelecionada.length > 0) {
      tarefaSelecionada[0].className = 'tarefa';
      event.target.className = 'tarefa-selecionada';
    } else {
      event.target.className = 'tarefa-selecionada';
    }
  }

  listaTarefas.addEventListener('dblclick', function (event) {
    concluiTarefa(event);
  });

  listaTarefas.addEventListener('click', function (event) {
    pintaTarefa(event);
  });

  function concluiTarefa(event) {
    if (event.target.className === 'tarefa-concluida') {
      event.target.className = 'tarefa';
    } else {
      event.target.className = 'tarefa-concluida';
    }
  }

  function limpaLista() {
    let listaTarefas = document.querySelector('#lista-tarefas');
    botaoLimpaLista.addEventListener('click', function () {
      listaTarefas.removeChild(listaTarefas.lastElementChild);
    });
  }

  function limpaConcluidos() {
    let listaTarefas = document.querySelectorAll('.tarefa-concluida');
    botaoLimpaConcluidos.addEventListener('click', function () {
      for (let index = 0; index < listaTarefas.length; index += 1) {
        if (listaTarefas[index].className === 'tarefa-concluida') {
          console.log(listaTarefas[index]);
        }
      }
    });
  }
};
