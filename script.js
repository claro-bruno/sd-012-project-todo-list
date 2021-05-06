const criarButton = document.querySelector('#criar-tarefa');
const text = document.querySelector('#texto-tarefa');
const listMom = document.querySelector('#lista-tarefas');
const limpar = document.querySelector('#apaga-tudo');
const limparCompletos = document.querySelector('#remover-finalizados');

function completeItem(allItems) {
  const last = allItems.length - 1;
  allItems[last].addEventListener('dblclick', () => {
    if (allItems[last].classList.contains('completed')) {
      allItems[last].classList.remove('completed');
    } else {
      allItems[last].classList.add('completed');
    }
  });
}

function checkIfSelected() {
  const alreadySelected = document.querySelector('.selected');
  if (alreadySelected !== null) {
    alreadySelected.classList.remove('selected');
  }
}

function SelectItem(allItems) {
  const last = allItems.length - 1;
  allItems[last].addEventListener('click', () => {
    checkIfSelected();
    allItems[last].classList.add('selected');
  });
}

function addElement() {
  criarButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = text.value;
    text.value = '';
    listMom.appendChild(listItem);
    const allItems = document.querySelectorAll('li');
    SelectItem(allItems);
    completeItem(allItems);
  });
}

addElement();

function deleteList() {
  limpar.addEventListener('click', () => {
    const allItems = document.querySelectorAll('li');
    for (let i = 0; i < allItems.length; i += 1) {
      listMom.removeChild(allItems[i]);
    }
  });
}

deleteList();

function deleteCompleted() {
  limparCompletos.addEventListener('click', () => {
    const allCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < allCompleted.length; i += 1) {
      listMom.removeChild(allCompleted[i]);
    }
  });
}

deleteCompleted();
