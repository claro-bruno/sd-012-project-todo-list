window.onload = function () {
  let inputTarefa = document.querySelector('#texto-tarefa');
  let botaoTarefa = document.querySelector('#criar-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');
  let botaoLimpaLista = document.querySelector('#apaga-tudo');
  let botaoLimpaConcluidos = document.querySelector('#remover-finalizados');
  let botaoSalvarLista = document.querySelector('#salvar-tarefas');
  let botaoMoveCima = document.querySelector('#mover-cima');
  let botaoMoveBaixo = document.querySelector('#mover-baixo');
  getTarefas();

  botaoTarefa.addEventListener('click', function (event) {
    novaTarefa(event);
  });

  listaTarefas.addEventListener('dblclick', function (event) {
    concluiTarefa(event);
  });

  listaTarefas.addEventListener('click', function (event) {
    pintaTarefa(event);
  });

  botaoLimpaLista.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefas.length; index += 1) {
      listaTarefas.removeChild(tarefas[index]);
    }
    arrayTarefas = [];
  });

  botaoLimpaConcluidos.addEventListener('click', function () {
    let tarefasConcluidas = document.querySelectorAll('.completed');
    for (let index = 0; index < tarefasConcluidas.length; index += 1) {
      listaTarefas.removeChild(tarefasConcluidas[index]);
    }
  });

  botaoSalvarLista.addEventListener('click', function () {

    let arrayTarefas = [];
    let tarefas = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefas.length; index += 1) {
      arrayTarefas.push(tarefas[index].innerHTML);
    }
    localStorage.setItem('Lista', arrayTarefas);
  });

  botaoMoveCima.addEventListener('click', function () {});

  function getTarefas() {
    if (typeof localStorage.getItem('Lista') === 'object') {
      localStorage.setItem('Lista', []);
    }
    let arrayTarefas = localStorage.getItem('Lista');
    let arraySplit = arrayTarefas.split(',');
    let arrayFilter = arraySplit.filter(Boolean);
    for (let index = 0; index < arrayFilter.length; index += 1) {
      let novaTarefa = document.createElement('li');
      novaTarefa.innerHTML = arrayFilter[index];
      novaTarefa.className = 'tarefa';
      listaTarefas.appendChild(novaTarefa);
    }
  }

  function novaTarefa() {
    let novaTarefa = document.createElement('li');
    if (inputTarefa.value === '') {
      alert('Valor de entrada não pode ser vazio.');
    } else {
        novaTarefa.innerHTML = inputTarefa.value;
        novaTarefa.className = 'tarefa';
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = '';
    }
  }

  function pintaTarefa(event) {
    let tarefaSelecionada = document.querySelectorAll('.selecionada');
    if (tarefaSelecionada.length > 0) {
      tarefaSelecionada[0].className = 'tarefa';
      event.target.className = 'tarefa selecionada';
    } else if (event.target.className === 'tarefa completed') {
      event.target.className = 'tarefa completed';
    } else {
      event.target.className = 'tarefa selecionada';
    }
  }

  function concluiTarefa(event) {
    if (event.target.className === 'tarefa completed') {
      event.target.className = 'tarefa';
    } else {
      event.target.className = 'tarefa completed';
    }
  }
};
