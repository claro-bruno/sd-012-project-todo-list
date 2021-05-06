const criarButton = document.querySelector('#criar-tarefa');
const text = document.querySelector('#texto-tarefa');
const listMom = document.querySelector('#lista-tarefas');

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
