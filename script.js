const getTasksList = document.getElementById('lista-tarefas');

function addTasks() {
  const getInputElement = document.getElementById('texto-tarefa');
  const getInputValue = getInputElement.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = getInputValue;
  newTask.className = 'task';
  getTasksList.appendChild(newTask);
  const clearInput = '';
  getInputElement.value = clearInput;
}

function selectTask(selectedTask) {
  const selectedTaskElement = document.querySelector('.selected');
  if (selectedTaskElement === null) {
    selectedTask.classList.add('selected');
  } else {
    selectedTaskElement.classList.remove('selected');
    selectedTask.classList.add('selected');
  }
}

function completeTask(completedTask) {
  const completedTaskElement = document.querySelector('.completed');
  if (completedTaskElement === null) {
    completedTask.classList.add('completed');
  } else if (completedTask.classList.contains('completed')) {
    completedTask.classList.remove('completed');
  } else {
    completedTask.classList.add('completed');
  }
}

function clearCompletedTasks(completedItems) {
  for (let index = 0; index < completedItems.length; index += 1) {
    completedItems[index].remove();
  }
}

/* Consultei o Pull Request do Luciano Almeida Andrade Pereira para resolver essa parte.
https://github.com/tryber/sd-012-project-todo-list/pull/71
*/
function saveToDoList() {
  localStorage.setItem('TaskList', getTasksList.innerHTML);
}

function recoverTasksValues() {
  const tasksSaved = localStorage.getItem('TaskList');
  if (tasksSaved !== null) {
    getTasksList.innerHTML = tasksSaved;
  }
}

/* Consultei o Stack Overflow para resolver essa parte.
https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
*/
function moveSelectedUp() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== getTasksList.firstElementChild) {
    selected.parentElement.insertBefore(selected, selected.previousElementSibling);
  }
}

function moveSelectedDown() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== getTasksList.lastElementChild) {
    selected.parentElement.insertBefore(selected.nextElementSibling, selected);
  }
}

function removeSelected() {
  const selectedTaskElement = document.querySelector('.selected');
  if (selectedTaskElement !== null) {
    selectedTaskElement.remove();
  }
}

recoverTasksValues();

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    addTasks();
  }
  if (event.target.classList.contains('task')) {
    const getEventElement = event.target;
    selectTask(getEventElement);
  }
  if (event.target.id === 'apaga-tudo') {
    getTasksList.innerHTML = '';
  }
  if (event.target.id === 'remover-finalizados') {
    const completedList = document.querySelectorAll('.completed');
    console.log('Verificando lista completa de completed:', completedList);
    clearCompletedTasks(completedList);
  }
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'salvar-tarefas') {
    saveToDoList();
  }
  if (event.target.id === 'mover-cima') {
    moveSelectedUp();
  }
  if (event.target.id === 'mover-baixo') {
    moveSelectedDown();
  }
  if (event.target.id === 'remover-selecionado') {
    removeSelected();
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task')) {
    const getEventElement = event.target;
    completeTask(getEventElement);
  }
});
