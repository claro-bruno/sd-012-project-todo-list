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

function cleanTheImput() {
  addToListButton.addEventListener('click', () => {
    typedTextInput.value = '';
  });
}
cleanTheImput();

function saveList() {
  saveListButton.addEventListener('click', () => {
    localStorage.setItem('tarefas-salvas', taskList.innerHTML);
  });
}
saveList();

function removeAllDone() {
  removeDoneButton.addEventListener('click', () => {
    const allDone = document.querySelectorAll('.completed');
    allDone.forEach((a) => {
      a.remove();
    });
  });
}
removeAllDone();

function movingUp() {
  moveUpButton.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected')[0];
    if (selected) {
      if (selected !== taskList.firstElementChild) {
        const previous = selected.previousElementSibling;
        const x = previous.innerHTML;
        previous.innerHTML = selected.innerHTML;
        selected.innerHTML = x;
        selected.classList.remove('selected');
        previous.classList.add('selected');
      } else {
        window.alert('Este elemento ja é o primeiro');
      }
    }
  });
}
movingUp();

function movingDown() {
  moveDownButton.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected')[0];
    if (selected) {
      if (selected !== taskList.lastElementChild) {
        const next = selected.nextElementSibling;
        const x = next.innerHTML;
        next.innerHTML = selected.innerHTML;
        selected.innerHTML = x;
        selected.classList.remove('selected');
        next.classList.add('selected');
      } else {
        window.alert('Este elemento é último');
      }
    }
  });
}
movingDown();

function clearStoredList() {
  clearStoredListButton.addEventListener('click', () => {
    localStorage.removeItem('tarefas-salvas');
  });
}
clearStoredList();

function removeSelected() {
  removeSelectedButton.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected')[0];
    selected.remove();
  });
}
removeSelected();
