const criarButton = document.querySelector('#criar-tarefa');
const text = document.querySelector('#texto-tarefa');
const listMom = document.querySelector('#lista-tarefas');

function addElement() {
  criarButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = text.value;
    text.value = '';
    listMom.appendChild(listItem);
  });
}

addElement();
