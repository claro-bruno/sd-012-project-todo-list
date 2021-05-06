const addButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
const removeAllTasks = document.getElementById('apaga-tudo');

addButton.addEventListener('click', () => {
  const createList = document.createElement('li');
  createList.classList.add('create-list');
  createList.innerText = inputText.value;
  inputText.value = '';
  taskList.appendChild(createList);

  createList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
});

function backgroundGreyItem() {
  taskList.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('.grey');
    if (selectedItem != undefined) {
      selectedItem.classList.remove('grey');
    }
    event.target.classList.add('grey');
  });
}
backgroundGreyItem();

function removeTasks() {
  removeAllTasks.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}
removeTasks();
