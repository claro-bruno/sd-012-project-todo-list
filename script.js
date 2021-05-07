const addToListButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const typedTextInput = document.getElementById('texto-tarefa');
const allItemList = document.getElementsByTagName('li');
const eraserButton = document.getElementById('apaga-tudo');

addToListButton.addEventListener('click', () => {
  const textAsListItem = document.createElement('li');
  textAsListItem.innerHTML = typedTextInput.value;
  taskList.appendChild(textAsListItem);
  textAsListItem.addEventListener('click', (event) => {
    for (let index = 0; index < allItemList.length; index += 1) {
      allItemList[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
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
