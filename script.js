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