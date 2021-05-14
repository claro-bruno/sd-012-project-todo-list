// Algoritmo da colega Laura Ramos
const removeEnd = document.querySelector('#remover-finalizados');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const clearList = document.querySelector('#apagar-tudo');
const addOl = document.querySelector('#lista-tarefas');

selectButton.addEventListener('click', function () {
  if (selectInput.value != 0) {
    const createTask = document.createElement('li');
    createTask.innerText = selectInput.value;
    selectInput.value = '';
    addOl.appendChild(createTask);
  } else {
    alert('Não é possível criar uma tarefa vazia!');
  }
});

clearList.addEventListener('click', function () {
    let ol = document.getElementsByTagName('ol')[0];
    ol.innerText = "";
});

removeEnd.addEventListener('click', function () {
    let ol = document.getElementsByTagName('ol')[0];
    ol.innerText = "";
});
