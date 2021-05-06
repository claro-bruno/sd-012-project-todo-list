const inputTarefas = document.querySelector('#texto-tarefa');
const buttonNovaTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function criandoNovaTarefa() {
  buttonNovaTarefa.addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item-lista');
    novoItem.innerText = inputTarefas.value;
    mudaCorDeFundo(novoItem);
    riscaItemDaLista(novoItem);
    apagaItensDaLista(novoItem);
    listaTarefas.appendChild(novoItem);
    inputTarefas.value = '';
  });
}

criandoNovaTarefa();

function mudaCorDeFundo(elemento) {
  elemento.addEventListener('click', (event) => { 
    const itensDalista = document.querySelectorAll('.item-lista');
    for (let index = 0; index < itensDalista.length; index += 1) {
      if(event.target !== itensDalista[index]) itensDalista[index].classList.remove('selected');  
    }
    event.target.classList.toggle('selected');
  });
}

function riscaItemDaLista(element) {
  element.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

const buttonApagaLista= document.querySelector('#apaga-tudo');

function apagaItensDaLista(element) {
  buttonApagaLista.addEventListener('click', () => {
      listaTarefas.removeChild(element);
    });
}


