const input = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const btnX = document.getElementById('apaga-tudo');
const btnXX = document.getElementById('remover-finalizados');
const itemList = document.querySelectorAll('.item-list');
// Captura o texto do input e adiciona à lista
function catchInput() {
  btnAdd.addEventListener('click', () => {
    const taskList = document.getElementById('lista-tarefas');
    const createLi = document.createElement('li');
    createLi.className = 'item-list';
    createLi.innerHTML = input.value;
    taskList.appendChild(createLi);
    input.value = '';
    selectItem();
    markAsCompleted();

  });
}
catchInput();
// Altera a cor de fundo do item selecinado
function selectItem() {
  const itemList = document.querySelectorAll('.item-list');
  for (const item of itemList) {
    item.addEventListener('click', () => {
      for (const item2 of itemList) {
        item2.style.backgroundColor = null;
      }
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
// Marca item como completed

function markAsCompleted() {
  const itemList = document.querySelectorAll('.item-list');
  for (const item of itemList) {
    item.addEventListener('dblclick', event => {
      if (event.target.className === 'item-list completed') {
        event.target.className = 'item-list';
      } else {
        event.target.className = 'item-list completed';
      }
    });
  }
}

// Botao apaga tudo
btnX.addEventListener('click', removeAll);
function removeAll() {
  const taskList = document.querySelector('#lista-tarefas');
  const itemList = document.querySelectorAll('.item-list');
    for (const item of itemList) {
      taskList.removeChild(item);
    }
}
// Botao para remover finalizados
btnXX.addEventListener('click', removeCompleted);
function removeCompleted () {
  const taskList = document.querySelector('#lista-tarefas');
  const completed = document.querySelectorAll('.completed');
  for (const item of completed) {
    taskList.removeChild(item);
  }
 }