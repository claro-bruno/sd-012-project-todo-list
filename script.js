// Getting all elements from HTML
const addToListButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const typedTextInput = document.getElementById('texto-tarefa');
const allItemList = document.getElementsByTagName('li');
const eraserButton = document.getElementById('apaga-tudo');
const removeDoneButton = document.getElementById('remover-finalizados');
const moveUpButton = document.getElementById('mover-cima');

// Recover the lista-tarefas when reload the page
window.onload = () => {
  taskList.innerHTML = localStorage.getItem('TList');
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
    localStorage.setItem('TList', taskList.innerHTML);
  });
}
completedTask();

eraserButton.addEventListener('click', () => {
  taskList.innerHTML = '';
  localStorage.removeItem('TList');
});

function removeAllDone() {
  removeDoneButton.addEventListener('click', () => {
    const allDone = document.querySelectorAll('.completed');
    // Genial use of the forEach idea by: https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
    allDone.forEach((a) => {
      a.remove();
    });
    localStorage.setItem('TList', taskList.innerHTML);
  });
}
removeAllDone();

function movingUp() {
  let allDone = document.getElementsByClassName('.completed');
  moveUpButton.addEventListener('click', () => {
    [taskList[allDone - 1], allDone] = [allDone, taskList[allDone - 1]];
  });
}
movingUp();
