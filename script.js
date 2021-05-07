let pegarLista;
let getSelected;
const getAllLi = '#lista-tarefas li';
function criarTarefa() {
  const pegarBotaoTarefa = document.getElementById('criar-tarefa');
  const pegarInput = document.getElementById('texto-tarefa');
  pegarBotaoTarefa.addEventListener('click', () => {
    if (pegarInput.value.length === 0) {
      window.alert('Digite algo no input!');
    } else {
      const li = document.createElement('li');
      li.innerHTML = pegarInput.value;
      pegarLista.appendChild(li);
      pegarInput.value = '';
    }
  });
}

function clicarItemLista() {
  pegarLista.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.removeAttribute('style');
    }
    event.target.classList.add('selected');
  });
}

function completarTarefa() {
  pegarLista.addEventListener('dblclick', (event) => {
    if (!event.target.className.includes('completed')) {
      event.target.classList.add('completed');
    } else {
      event.target.removeAttribute('class');
    }
  });
}

function apagarTudo() {
  const pegarBotaoApagarTudo = document.getElementById('apaga-tudo');
  pegarBotaoApagarTudo.addEventListener('click', () => {
    pegarLista.innerHTML = '';
  });
}

function apagarFinalizados() {
  const botaoRfinalizados = document.getElementById('remover-finalizados');
  botaoRfinalizados.addEventListener('click', () => {
    const removeTask = document.querySelectorAll(getAllLi);
    for (let i = 0; i < removeTask.length; i += 1) {
      if (removeTask[i].className.includes('completed')) {
        pegarLista.removeChild(removeTask[i]);
      }
    }
  });
}

function salvarLista() {
  const getButtonSaveTasks = document.getElementById('salvar-tarefas');
  getButtonSaveTasks.addEventListener('click', () => {
    const allTaskk = document.querySelectorAll(getAllLi);
    const array = [];
    for (let i = 0; i < allTaskk.length; i += 1) {
      array[i] = allTaskk[i].outerHTML;
    }

    localStorage.setItem('tarefas', JSON.stringify(array));
  });
}

function carregarTarefas() {
  const array = JSON.parse(localStorage.getItem('tarefas'));
  if (array !== null) {
    for (let i = 0; i < array.length; i += 1) {
      pegarLista.innerHTML += array[i];
    }
  }
}

function move(direction, indexAtual) {
  const atual = pegarLista.childNodes[indexAtual];
  if (getSelected.length) {
    if (direction === 1) {
      const previousClass = pegarLista.childNodes[indexAtual - 1].className;
      const previousValue = pegarLista.childNodes[indexAtual - 1].innerText;
      pegarLista.childNodes[indexAtual - 1].innerText = atual.innerText;
      pegarLista.childNodes[indexAtual - 1].className = atual.className;
      pegarLista.childNodes[indexAtual].className = previousClass;
      pegarLista.childNodes[indexAtual].innerText = previousValue;
    } else {
      const previousClass = pegarLista.childNodes[indexAtual + 1].className;
      const previousValue = pegarLista.childNodes[indexAtual + 1].innerText;
      pegarLista.childNodes[indexAtual + 1].innerText = atual.innerText;
      pegarLista.childNodes[indexAtual + 1].className = atual.className;
      pegarLista.childNodes[indexAtual].className = previousClass;
      pegarLista.childNodes[indexAtual].innerText = previousValue;
    }
  }
}

function moveUp() {
  const moverCima = document.getElementById('mover-cima');
  moverCima.addEventListener('click', () => {
    let indexAtual = 0;
    for (let i = 0; i < pegarLista.childNodes.length; i += 1) {
      if (pegarLista.childNodes[i].className.includes('selected')) {
        indexAtual = i;
      }
    }

    if (indexAtual > 0) {
      move(1, indexAtual);
    }
  });
}

function moveDown() {
  const moverCima = document.getElementById('mover-baixo');
  moverCima.addEventListener('click', () => {
    let indexAtual = 0;
    for (let i = 0; i < pegarLista.childNodes.length; i += 1) {
      if (pegarLista.childNodes[i].className.includes('selected')) {
        indexAtual = i;
      }
    }

    if (indexAtual < pegarLista.childNodes.length - 1) {
      move(0, indexAtual);
    }
  });
}

function removerSelecionados() {
  const botaoSelecionados = document.getElementById('remover-selecionado');
  botaoSelecionados.addEventListener('click', () => {
    const getAllSelecteds = document.querySelectorAll(getAllLi);
    for (let i = 0; i < getAllSelecteds.length; i += 1) {
      if (getAllSelecteds[i].className.includes('selected')) {
        pegarLista.removeChild(getAllSelecteds[i]);
      }
    }
  });
}

window.onload = function loader() {
  pegarLista = document.getElementById('lista-tarefas');
  getSelected = document.getElementsByClassName('selected');
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
};
