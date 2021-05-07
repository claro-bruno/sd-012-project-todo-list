let clickButton = document.querySelector('#criar-tarefa');
let inputTarefaText = document.querySelector('#texto-tarefa');
function createList() {
  let createList = document.createElement('li');
  let inputTarefa = document.querySelector('#lista-tarefas');
  let inputTex = inputTarefaText.value;

  createList.innerHTML = inputTex;
  inputTarefa.appendChild(createList);
  inputTarefaText.value = '';
}
clickButton.addEventListener('click', createList);
