const inputTarefas = document.querySelector('#texto-tarefa');
const buttonNovaTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const buttonApagaLista = document.querySelector('#apaga-tudo');
const buttonApagaFinalizados = document.querySelector('#remover-finalizados');
const buttonSalvaLista = document.querySelector('#salvar-tarefas');

function riscaItemDaLista(element) {
  element.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function mudaCorDeFundo(elemento) {
  elemento.addEventListener('click', (event) => {
    const itensDalista = document.querySelectorAll('.item-lista');
    for (let index = 0; index < itensDalista.length; index += 1) {
      if (event.target !== itensDalista[index]) itensDalista[index].classList.remove('selected');
    }
    event.target.classList.toggle('selected');
  });
}

function criandoNovaTarefa() {
  buttonNovaTarefa.addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item-lista');
    novoItem.innerText = inputTarefas.value;
    mudaCorDeFundo(novoItem);
    riscaItemDaLista(novoItem);
    listaTarefas.appendChild(novoItem);
    inputTarefas.value = '';
  });
}

criandoNovaTarefa();

function apagaFinalizados() {
  buttonApagaFinalizados.addEventListener('click', () => {
    const tarefasFinalizadas = document.querySelectorAll('.completed');
    for (let index = 0; index < tarefasFinalizadas.length; index += 1) {
      listaTarefas.removeChild(tarefasFinalizadas[index]);
    }
  });
}

apagaFinalizados();

function apagaItensDaLista() {
  buttonApagaLista.addEventListener('click', () => {
    const itensDalista = document.querySelectorAll('ol li');
    for (let index = 0; index < itensDalista.length; index += 1) {
      listaTarefas.removeChild(itensDalista[index]);
    }
  });
}

apagaItensDaLista();

function salvarTarefas() {
  buttonSalvaLista.addEventListener('click', () => {
    localStorage.clear();
    sessionStorage.clear();
    const itensDalista = document.querySelectorAll('.item-lista');
    for (let index = 0; index < itensDalista.length; index += 1) {
      localStorage.setItem(`item${index}`, itensDalista[index].innerText);
      sessionStorage.setItem(`class${index}`,itensDalista[index].className);
    }
  });
}

salvarTarefas();

window.onload = () => {
  for (let index = 0; index < localStorage.length; index += 1) {
    const novoItem = document.createElement('li');
    novoItem.className = sessionStorage.getItem(`class${index}`);
    novoItem.innerText = localStorage.getItem(`item${index}`);
    listaTarefas.appendChild(novoItem);
    mudaCorDeFundo(novoItem);
    riscaItemDaLista(novoItem);
   }
};


