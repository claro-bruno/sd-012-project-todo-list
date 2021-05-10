let clickButton = document.querySelector('#criar-tarefa');
let inputTarefaText = document.querySelector('#texto-tarefa');

function createList() {
  let createList = document.createElement('li');
  let inputTarefa = document.querySelector('#lista-tarefas');
  let inputTex = inputTarefaText.value;

  createList.innerHTML = inputTex;
  createList.className = 'itemlist';
  inputTarefa.appendChild(createList);
  inputTarefaText.value = '';
  createList.addEventListener('dblclick', inputLineThrough);
}
clickButton.addEventListener('click', createList);

let getLi = document.querySelector('li');

function selectedList(event) {
  let selectedTaskElement = document.querySelector('.selected');
  if (event.target.className === 'itemlist') {
    if (selectedTaskElement !== null) {
      selectedTaskElement.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

document.addEventListener('click', selectedList);

function inputLineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// function apagaTudo(event){
// if (event.target.classList.)
// }
// addEventListener('click', apagaTudo)
