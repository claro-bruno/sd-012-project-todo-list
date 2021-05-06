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
  });
}
catchInput();
// Altera a cor de fundo do item selecinado
function selectItem() {
  const itemList = document.querySelectorAll('.item-list');
  for (let item of itemList) {
    item.addEventListener('click', () => {
      for (let item2 of itemList) {
        item2.style.backgroundColor = null;
      }
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    })
  }
}
