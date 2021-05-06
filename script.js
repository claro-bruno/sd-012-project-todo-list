function createButton() {
  let createButtonSubmit = document.createElement('button');
  createButtonSubmit.id = 'criar-tarefa';
  createButtonSubmit.innerHTML = 'Criar Tarefa';
  document.querySelector('#container-submit').appendChild(createButtonSubmit);
}
createButton();

function createListItem() {
  let createItemList = document.createElement('li');
  let contentInput = document.querySelector('#texto-tarefa').value;
  createItemList.innerHTML = contentInput;
  document.querySelector('#lista-tarefas').appendChild(createItemList);
}

function clearInput() {
  let contentInput = document.querySelector('#texto-tarefa');
  contentInput.value = '';
}

function addBgcItemList(event) {
  let itemList = document.querySelectorAll('li');
  for (let items = 0; items <= itemList.length; items += 1) {
    if (event.target === itemList[items]) {
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
}

let buttonSubmit = document.querySelector('#criar-tarefa');
let ordenedList = document.querySelector('#lista-tarefas');
buttonSubmit.addEventListener('click', createListItem);
buttonSubmit.addEventListener('click', clearInput);
ordenedList.addEventListener('click', addBgcItemList);
