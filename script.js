/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
const addTask = document.getElementById('criar-tarefa');
const inputContent = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const deleteAllTasks = document.getElementById('apaga-tudo');
const deleteAllCompletedTasks = document.getElementById('remover-finalizados');
const saveTasksList = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const removeSelectedTask = document.getElementById('remover-selecionado');

function createNewListItem() {
  const listItem = document.createElement('li');
  // eslint-disable-next-line sonarjs/no-duplicate-string
  listItem.className = 'item-tarefa';
  listItem.innerHTML = inputContent.value;
  taskList.appendChild(listItem);
  inputContent.value = '';
}

addTask.addEventListener('click', createNewListItem);

document.addEventListener('click', (event) => {
  const eventTarget = event.target;

  if (eventTarget.className === 'item-tarefa') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
    }
    eventTarget.classList.add('selected');
  }
});

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

function removeCompletedTasks() {
  const completedTask = document.querySelectorAll('.completed');

  for (index = 0; index < completedTask.length; index += 1) {
    completedTask[index].remove();
  }
}
deleteAllCompletedTasks.addEventListener('click', removeCompletedTasks);

document.addEventListener('click', (event) => {
  if (event.target.id === 'salvar-tarefas') {
    localStorage.setItem('key', taskList.innerHTML);
  }
});
window.onload = function initialID() {
  if (localStorage.getItem('key') !== null) {
    taskList.innerHTML += localStorage.getItem('key');
  }
};

// function nextSiblingItem() {
//   let siblings = [];
//   const currentItem = document.querySelector('.selected');
//   const nextSibling = currentItem.nextElementSibling;

//   while(nextSibling) {

//   }
// }

function nextSiblingItem() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== taskList.lastElementChild) {
    taskList.insertBefore(selected.nextElementSibling, selected);
  }
}

moveDown.addEventListener('click', nextSiblingItem);

function previousSiblingItem() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== taskList.firstElementChild) {
    taskList.insertBefore(selected, selected.previousSibling);
  }
}

moveUp.addEventListener('click', previousSiblingItem);

function removeSelected() {
  const selected = document.getElementsByClassName('selected');

  for (index = 0; index < selected.length;) {
    selected[index].remove();
  }
}

removeSelectedTask.addEventListener('click', removeSelected);
