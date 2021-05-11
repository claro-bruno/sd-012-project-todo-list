const addToListButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const typedTextInput = document.getElementById('texto-tarefa');
const allItemList = document.getElementsByTagName('li');
const eraserButton = document.getElementById('apaga-tudo');

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