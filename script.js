const btnTaskCreate = document.querySelector('#criar-tarefa');
const btnRemoveAllTasks = document.querySelector('#apaga-tudo');
const btnRemoveCompletedTasks = document.querySelector('#remover-finalizados');
const textInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function taskCreator() {
  const taskItem = document.createElement('li');
  taskItem.className = 'tarefa';
  taskItem.innerText = textInput.value;
  textInput.value = '';
  taskList.appendChild(taskItem);
}

function selectTask(event) {
  const targetedEvent = event.target;
  if (targetedEvent.classList.contains('tarefa')) {
    const currentTaskSelected = document.querySelector('.selected');
    if (currentTaskSelected !== null) {
      currentTaskSelected.classList.remove('selected');
    }
    targetedEvent.classList.add('selected');
  }
}

function completeTask(event) {
  const targetedEvent = event.target;
  if (targetedEvent.classList.contains('tarefa')) {
    if (targetedEvent.classList.contains('completed')) {
      targetedEvent.classList.remove('completed');
    } else {
      targetedEvent.className += ' completed';
    }
  }
}

function removeAllTasks() {
  const taskListLength = taskList.children.length;
  for (let index = 0; index < taskListLength; index += 1) {
    const task = document.querySelector('.tarefa');
    taskList.removeChild(task);
  }
}

function removeTasksComplete() {
  const completedTaskAmount = document.querySelectorAll('.completed').length;
  for (let index = 0; index < completedTaskAmount; index += 1) {
    const completedTask = document.querySelector('.completed');
    taskList.removeChild(completedTask);
  }
}

window.onload = function page() {
  btnTaskCreate.addEventListener('click', taskCreator);
  btnRemoveAllTasks.addEventListener('click', removeAllTasks);
  btnRemoveCompletedTasks.addEventListener('click', removeTasksComplete);
  document.addEventListener('click', selectTask);
  document.addEventListener('dblclick', completeTask);
};
