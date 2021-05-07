window.onload = function () {

  carregarTarefas();

  criarTarefa();

  clicarItemLista();

  completarTarefa();

  apagarTudo();

  apagarFinalizados();

  salvarLista();

  moveUp();

  moveDown();

  removerSelecionados();
}

function criarTarefa() {
  const pegarBotaoTarefa = document.getElementById('criar-tarefa');
  const pegarInput = document.getElementById('texto-tarefa');
  const pegarLista = document.getElementById('lista-tarefas');
  pegarBotaoTarefa.addEventListener('click', function () {
    if (pegarInput.value.length === 0) {
      window.alert('Digite algo no input!');
    } else {
      let li = document.createElement('li');
      li.innerHTML = pegarInput.value;
      pegarLista.appendChild(li);
      pegarInput.value = '';
    }
  })
}

function clicarItemLista() {
  const pegarLista = document.getElementById('lista-tarefas');
  pegarLista.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white';
    }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  })
}

function completarTarefa() {
  const pegarLista = document.getElementById('lista-tarefas');
  pegarLista.addEventListener('dblclick', function (event) {
    if (!event.target.className.includes('completed')) {
      event.target.classList.add('completed');
    } else {
      event.target.removeAttribute('class');
    }
  })
}

function apagarTudo() {
  const pegarLista = document.getElementById('lista-tarefas');
  const pegarBotaoApagarTudo = document.getElementById('apaga-tudo');
  pegarBotaoApagarTudo.addEventListener('click', function () {
    pegarLista.innerHTML = '';
  })
}

function apagarFinalizados() {
  const botaoRfinalizados = document.getElementById('remover-finalizados');
  const pegarLista = document.getElementById('lista-tarefas');
  botaoRfinalizados.addEventListener('click', function () {
    const allTask = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTask.length; i += 1) {
      if (allTask[i].className.includes('completed')) {
        pegarLista.removeChild(allTask[i]);
      }
    }
  })
}

function salvarLista() {
  const getButtonSaveTasks = document.getElementById('salvar-tarefas');
  getButtonSaveTasks.addEventListener('click', function () {
    const allTask = document.querySelectorAll('#lista-tarefas li');
    let array = [];
    for (let i = 0; i < allTask.length; i += 1) {
      array[i] = allTask[i].outerHTML;
    }

    localStorage.setItem('tarefas', JSON.stringify(array));
  })
}

function carregarTarefas() {
  let array = JSON.parse(localStorage.getItem('tarefas'));
  if (array !== null) {
    const pegarLista = document.getElementById('lista-tarefas');
    for (let i = 0; i < array.length; i += 1) {
      pegarLista.innerHTML += array[i];
    }
  }
}

function moveUp() {
  const moverCima = document.getElementById('mover-cima');
  moverCima.addEventListener('click', function () {
    const pegarLista = document.getElementById('lista-tarefas');
    let indexAtual = 0;
    for (let i = 0; i < pegarLista.childNodes.length; i += 1) {
      if (pegarLista.childNodes[i].className.includes('selected')) {
        indexAtual = i;
      }
    }

    if (indexAtual > 0) {
      const atual = pegarLista.childNodes[indexAtual];
      const previousValue = pegarLista.childNodes[indexAtual - 1].innerText;

      pegarLista.childNodes[indexAtual-1].innerText = atual.innerText;
      pegarLista.childNodes[indexAtual-1].classList.add('selected');
      pegarLista.childNodes[indexAtual-1].style.backgroundColor = 'rgb(128, 128, 128)';

      pegarLista.childNodes[indexAtual].classList.remove('selected');
      pegarLista.childNodes[indexAtual].style.backgroundColor = 'white';
      pegarLista.childNodes[indexAtual].innerText = previousValue;
    }
  })
}

function moveDown() {
  const moverCima = document.getElementById('mover-baixo');
  moverCima.addEventListener('click', function () {
    const pegarLista = document.getElementById('lista-tarefas');
    let indexAtual = 0;
    for (let i = 0; i < pegarLista.childNodes.length; i += 1) {
      if (pegarLista.childNodes[i].className.includes('selected')) {
        indexAtual = i;
      }
    }

    if (indexAtual < pegarLista.childNodes.length - 1) {
      const atual = pegarLista.childNodes[indexAtual];
      const previousValue = pegarLista.childNodes[indexAtual + 1].innerText;

      pegarLista.childNodes[indexAtual+1].innerText = atual.innerText;
      pegarLista.childNodes[indexAtual+1].classList.add('selected');
      pegarLista.childNodes[indexAtual+1].style.backgroundColor = 'rgb(128, 128, 128)';

      pegarLista.childNodes[indexAtual].classList.remove('selected');
      pegarLista.childNodes[indexAtual].style.backgroundColor = 'white';
      pegarLista.childNodes[indexAtual].innerText = previousValue;
    }
  })
}

function removerSelecionados() {
  const botaoSelecionados = document.getElementById('remover-selecionado');
  const pegarLista = document.getElementById('lista-tarefas');
  botaoSelecionados.addEventListener('click', function () {
    const getAllSelecteds = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < getAllSelecteds.length; i += 1) {
      if (getAllSelecteds[i].className.includes('selected')) {
        pegarLista.removeChild(getAllSelecteds[i]);
      }
    }
  })
}
