/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
const addTask = document.getElementById('criar-tarefa');
const inputContent = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const deleteAllTasks = document.getElementById('apaga-tudo');
const deleteAllCompletedTasks = document.getElementById('remover-finalizados');

function createNewListItem() {
  const listItem = document.createElement('li');
  // eslint-disable-next-line sonarjs/no-duplicate-string
  listItem.className = 'item-tarefa';
  listItem.innerHTML = inputContent.value;
  taskList.appendChild(listItem);
  inputContent.value = '';
}

addTask.addEventListener('click', createNewListItem);

function selectedItem(event) {
  if (event.target.className === 'item-tarefa') {
    const selected = document.getElementsByClassName('seleciona');
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].className = 'item-tarefa';
    }
    // eslint-disable-next-line no-param-reassign
    event.target.className = 'item-tarefa seleciona';
  }
}

taskList.addEventListener('click', selectedItem);

function completedItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', completedItem);

function deleteAll() {
  const deleteTaskList = document.getElementById('lista-tarefas');
  // const deleteListItem = document.getElementsByTagName('li');

  // for (let index = 0; index < deleteListItem.length; index += 1) {
  //   deleteTaskList.removeChild(deleteTaskList.lastChild);
  // }
  deleteTaskList.innerHTML = '';
}

deleteAllTasks.addEventListener('click', deleteAll);

function removeCompletedTasks(event) {
  if (event.target.classList.contains('completo')) {
    for (index = 0; index < taskList.length; index += 1) {
      taskList[index].removeChild('item-tarefa completo');
    }
  }
}
deleteAllCompletedTasks.addEventListener('click', removeCompletedTasks);
