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
    const getToDoList = document.getElementById('lista-tarefas');
    getToDoList.innerHTML = '';
  }
  if (event.target.id === 'remover-finalizados') {
    const completedList = document.querySelectorAll('.completed');
    console.log('Verificando lista completa de completed:', completedList);
    clearCompletedTasks(completedList);
  }
  if (event.target.id === 'salvar-tarefas') {
    saveToDoList();
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task')) {
    const getEventElement = event.target;
    completeTask(getEventElement)
  }
});

function addTasks() {
  const getTasksList = document.getElementById('lista-tarefas');
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
  if (completedTask.classList.contains('completed')) {
    completedTask.classList.remove('completed');
  } else {
    if (completedTaskElement === null) {
      completedTask.classList.add('completed');
    } else {
      completedTask.classList.add('completed');
    }
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
  const getTasksList = document.getElementById('lista-tarefas');
  localStorage.setItem('TaskList', getTasksList.innerHTML);
}

function recoverTasksValues() {
  const getTasksList = document.getElementById('lista-tarefas');
  const tasksSaved = localStorage.getItem('TaskList');
  if (tasksSaved !== null) {
    getTasksList.innerHTML = tasksSaved;
  }
}
