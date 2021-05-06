const criarButton = document.querySelector('#criar-tarefa');
const text = document.querySelector('#texto-tarefa');
const listMom = document.querySelector('#lista-tarefas');

function checkIfSelected() {
  const alreadySelected = document.querySelector('.selected');
  if (alreadySelected !== null) {
    alreadySelected.classList.remove('selected');
  }
}

function SelectItem() {
  const allItems = document.querySelectorAll('li');
  for (let i = 0; i < allItems.length; i += 1) {
    allItems[i].addEventListener('click', () => {
      checkIfSelected();
      allItems[i].classList.add('selected');
    });
  }
}

function addElement() {
  criarButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = text.value;
    text.value = '';
    listMom.appendChild(listItem);
    SelectItem();
  });
}

addElement();
