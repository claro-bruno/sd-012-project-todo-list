const inputTarefas = document.querySelector('#texto-tarefa');
const buttonNovaTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function criandoNovaTarefa() {
  buttonNovaTarefa.addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item-lista');
    novoItem.innerText = inputTarefas.value;
    listaTarefas.appendChild(novoItem);
    inputTarefas.value = '';
  });
}

criandoNovaTarefa();

function gerandoListadeItens() {
  buttonNovaTarefa.addEventListener('click', () => {
    const itensDaLista = document.querySelectorAll('.item-lista');
    console.log(itensDaLista);
    mudaCorDeFundo(itensDaLista);
    riscaItemDaLista(itensDaLista);
  });
}

gerandoListadeItens();

function mudaCorDeFundo(elements) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].addEventListener('click', (event) => { 
      console.log(event.target);
      for (let itemKey = 0; itemKey < elements.length; itemKey += 1) {
        elements[itemKey].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}

function riscaItemDaLista(elements) {
  elements.forEach(element => {
    element.addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    })
  });
}


