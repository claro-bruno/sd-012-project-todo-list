const input = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
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
    resetAll();
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
  for (let index = 0; index < itemList.length; index += 1) {
    let item = itemList[index];
    item.addEventListener('dblclick', () => {
      if (item.className === 'item-list') {
        item.className = 'item-list completed';
      } else {
        item.className = 'item-list';
      }
    });
  }
}
// Botao apaga tudo
function resetAll() {
  const taskList = document.querySelector('#lista-tarefas');
  const btnX = document.getElementById('apaga-tudo');
  const itemList = document.querySelectorAll('.item-list');
  btnX.addEventListener('click', () => {
    for (let index = (itemList.length - 1); index >= 0; index -= 1) {
      let item = itemList[index];
      taskList.removeChild(item);
    }
  });
}
