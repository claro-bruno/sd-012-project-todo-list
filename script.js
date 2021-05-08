// Getting all elements from HTML
const addToListButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const typedTextInput = document.getElementById('texto-tarefa');
const allItemList = document.getElementsByTagName('li');
const eraserButton = document.getElementById('apaga-tudo');
const removeDoneButton = document.getElementById('remover-finalizados');

// Event that gets what is typed on the input and puts on an ordered list.
addToListButton.addEventListener('click', () => {
  const textAsListItem = document.createElement('li');
  textAsListItem.innerHTML = typedTextInput.value;
  taskList.appendChild(textAsListItem);
  // Each 'li' that was created gets an event by the time of its creation that changes the bgColor.
  textAsListItem.addEventListener('click', (event) => {
    const evt = event.target;
    for (let index = 0; index < allItemList.length; index += 1) {
      allItemList[index].style.backgroundColor = '';
    }
    evt.style.backgroundColor = 'rgb(128, 128, 128)';
  });
});

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

eraserButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

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
