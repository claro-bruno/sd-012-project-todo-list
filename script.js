const addTask = document.getElementById('criar-tarefa');
const inputContent = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createNewListItem() {
  const listItem = document.createElement('li');
  listItem.className = 'item-tarefa';
  listItem.innerHTML = inputContent.value;
  taskList.appendChild(listItem);
  inputContent.value = '';
}
addTask.addEventListener('click', createNewListItem);
