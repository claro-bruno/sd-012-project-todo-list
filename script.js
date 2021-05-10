// Getting all elements from HTML
const addToListButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const typedTextInput = document.getElementById('texto-tarefa');
const eraserButton = document.getElementById('apaga-tudo');
const removeDoneButton = document.getElementById('remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
const clearStoredListButton = document.getElementById('limpar-lista');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');

// Recover the lista-tarefas when reload the page
window.onload = () => {
  taskList.innerHTML = localStorage.getItem('tarefas-salvas');
};

function listItemCreation() {
  addToListButton.addEventListener('click', () => {
    const textAsListItem = document.createElement('li');
    textAsListItem.innerText = typedTextInput.value;
    taskList.appendChild(textAsListItem);
  });
}
listItemCreation();

function selectedItem() {
  const eachListItem = document.getElementsByTagName('li');
  taskList.addEventListener('click', (event) => {
    for (let index = 0; index < eachListItem.length; index += 1) {
      eachListItem[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
selectedItem();

function cleanTheImput() {
  addToListButton.addEventListener('click', () => {
    typedTextInput.value = '';
  });
}
cleanTheImput();

function completedTask() {
  taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
completedTask();

function clearList() {
  eraserButton.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}
clearList();

function saveList() {
  saveListButton.addEventListener('click', () => {
    localStorage.setItem('tarefas-salvas', taskList.innerHTML);
  });
}
saveList();

function clearStoredList() {
  clearStoredListButton.addEventListener('click', () => {
    localStorage.removeItem('tarefas-salvas');
  });
}
clearStoredList();

function removeAllDone() {
  removeDoneButton.addEventListener('click', () => {
    const allDone = document.querySelectorAll('.completed');
    // Genial use of the forEach idea by: https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
    allDone.forEach((a) => {
      a.remove();
    });
  });
}
removeAllDone();

function movingUp() {
  moveUpButton.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected')[0];
    if (selected !== taskList.firstElementChild) {
      const previous = selected.previousElementSibling;
      const x = previous.innerHTML;
      previous.innerHTML = selected.innerHTML;
      selected.innerHTML = x;
      selected.classList.remove('selected');
      previous.classList.add('selected');
    } else {
      const previous = taskList.lastElementChild;
      const x = previous.innerHTML;
      previous.innerHTML = selected.innerHTML;
      selected.innerHTML = x;
      selected.classList.remove('selected');
      previous.classList.add('selected');
    }
  });
}
movingUp();

function moveDown() {
  moveDownButton.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected')[0];
    if (selected !== taskList.lastElementChild) {
      const next = selected.nextElementSibling;
      const x = next.innerHTML;
      next.innerHTML = selected.innerHTML;
      selected.innerHTML = x;
      selected.classList.remove('selected');
      next.classList.add('selected');
    } else {
      const next = taskList.firstElementChild;
      const x = next.innerHTML;
      next.innerHTML = selected.innerHTML;
      selected.innerHTML = x;
      selected.classList.remove('selected');
      next.classList.add('selected');
    }
  });
}
moveDown();

function removeSelected() {
  removeSelectedButton.addEventListener('click', () => {
    let selected = document.getElementsByClassName('selected')[0];
    selected.remove();
  });
}
removeSelected();
