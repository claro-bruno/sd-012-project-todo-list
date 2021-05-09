const header = document.querySelector('#header');
const main = document.querySelector('#main');
const title = document.createElement('h1');
const funcionamentoP = document.createElement('p');
const inputTarefa = document.createElement('input');
const listaTarefas = document.createElement('ol');
const createButton = document.createElement('button');
const clearButton = document.createElement('button');
const clearCheckButton = document.createElement('button');

header.appendChild(title);
header.appendChild(funcionamentoP);
main.appendChild(inputTarefa);
main.appendChild(createButton);
main.appendChild(listaTarefas);
main.appendChild(clearCheckButton);
main.appendChild(clearButton);

title.innerHTML = 'Minha Lista de Tarefas';
funcionamentoP.id = 'funcionamento';
funcionamentoP.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
inputTarefa.id = 'texto-tarefa';
listaTarefas.id = 'lista-tarefas';
createButton.id = 'criar-tarefa';
createButton.innerHTML = 'Adicionar';
clearCheckButton.id = 'remover-finalizados';
clearCheckButton.innerHTML = 'Remover concluídas';
clearButton.id = 'apaga-tudo';
clearButton.innerHTML = 'Remover todas';

function adicionaTarefa() {
  createButton.addEventListener('click', () => {
    const inputTexto = document.createElement('li');
    inputTexto.classList.add('itemTarefa');
    inputTexto.innerText = inputTarefa.value;
    listaTarefas.appendChild(inputTexto);
    inputTarefa.value = '';
  });
}

function greyClassSelection() {
  document.addEventListener('click', (event) => {
    const itemListTarefa = document.querySelectorAll('.itemTarefa');
    for (let index = 0; index < itemListTarefa.length; index += 1) {
      if (itemListTarefa[index] === event.target) {
        itemListTarefa[index].classList.add('graySelection');
      } else {
        itemListTarefa[index].classList.remove('graySelection');
      }
    }
  });
}

function itemCompleted() {
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('itemTarefa')) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  });
}

function limpaTarefas() {
  clearButton.addEventListener('click', () => {
    const removeListItem = document.querySelectorAll('.itemTarefa');
    for (let index = 0; index < removeListItem.length; index += 1) {
      removeListItem[index].remove();
    }
  });
}

function limpaTarefasConcluidas() {
  clearCheckButton.addEventListener('click', () => {
    const removeListItem = document.querySelectorAll('.completed');
    for (let index = 0; index < removeListItem.length; index += 1) {
      removeListItem[index].remove();
    }
  });
}

adicionaTarefa();
greyClassSelection();
itemCompleted();
limpaTarefas();
limpaTarefasConcluidas();
