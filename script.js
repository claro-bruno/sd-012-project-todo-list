const input = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const btnX = document.getElementById('apaga-tudo');
const btnXX = document.getElementById('remover-finalizados');
const itemList = document.querySelectorAll('.item-list');
const taskList = document.getElementById('lista-tarefas');
const btnSave = document.getElementById('salvar-tarefas');
const btnUP = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');
const btnRemoveSelected = document.getElementById('remover-selecionado')
// Captura o texto do input e adiciona à lista
function catchInput() {
  btnAdd.addEventListener('click', () => {
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
  for (const item of itemList) {
    item.addEventListener('click', () => {
      for (const item2 of itemList) {
        item2.style.backgroundColor = null;
        item2.style.fontSize = '16px';
      }
      item.style.backgroundColor = 'rgb(128, 128, 128)';
      item.style.fontSize = '20px';
    });
  }
}
// Marca item como completed
function markAsCompleted(event) {
  if (event.target.classList.contains('completed') !== true) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
taskList.addEventListener('dblclick', markAsCompleted);
// Botao apaga tudo
btnX.addEventListener('click', removeAll);
function removeAll() {
  const itemList = document.querySelectorAll('.item-list');
    for (const item of itemList) {
      taskList.removeChild(item);
    }
}
// Botao para remover finalizados
btnXX.addEventListener('click', removeCompleted);
function removeCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (const item of completed) {
    taskList.removeChild(item);
  }
 }
// Salvas a lista
function saveTasks() {
  localStorage.setItem('task', taskList.innerHTML);
}
btnSave.addEventListener('click', saveTasks);
window.onload = function () {
  taskList.innerHTML = localStorage.getItem('task');
}
// Move tarefas para cima
function moveUp() {
  const ol = document.querySelector('#lista-tarefas');
  console.log(ol);
  for (let index = 0; index < itemList.length; index += 1) {
    let item = itemList[index];

    // if(item.style.backgroundColor === 'rgb(128, 128, 128)' && item === itemList[0]) {
    //   break;
    // }
    if (item.style.backgroundColor === 'rgb(128, 128, 128)') {
      let temp;
      temp = itemList[index]
      itemList[index - 1] = itemList[index];
      // itemList[index -1] = temp;
      break;
      // item.style.backgroundColor = null
      // item.style.fontSize = '16px';
      // item.previousElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      // item.previousElementSibling.style.fontSize = '20px';
    }
  }
}
btnUP.addEventListener('click', moveUp);
// Move tarefas para baixo
function moveDown() {
  const itemList = document.querySelectorAll('.item-list');
  for (let index = 0; index < itemList.length; index += 1) {
    let item = itemList[index];
    if(item.style.backgroundColor === 'rgb(128, 128, 128)' && item === itemList[itemList.length -1]) {
      break;
    }
    if (item.style.backgroundColor === 'rgb(128, 128, 128)') {
      item.nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      item.nextElementSibling.style.fontSize = '20px';
      item.style.backgroundColor = null
      item.style.fontSize = '16px';
      break;
    }
  }
}
btnDown.addEventListener('click', moveDown);
//Remove selecionados
function removeSelected() {
  const itemList = document.querySelectorAll('.item-list');
  for (let index = 0; index < itemList.length; index += 1) {
    let item = itemList[index];
    if (item.style.backgroundColor === 'rgb(128, 128, 128)') {
      taskList.removeChild(item);
    }
  }
}
btnRemoveSelected.addEventListener('click', removeSelected);
