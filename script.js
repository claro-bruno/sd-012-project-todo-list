const btnTaskCreate = document.querySelector('#criar-tarefa');
const btnRemoveAllTasks = document.querySelector('#apaga-tudo');
const btnRemoveCompletedTasks = document.querySelector('#remover-finalizados');
const btnRemoveSelectedTask = document.querySelector('#remover-selecionado');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnMoveUpTask = document.querySelector('#mover-cima');
const btnMoveDownTask = document.querySelector('#mover-baixo');
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

function removeSelectedTask() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    taskList.removeChild(selectedTask);
  }
}

function saveTasks() {
  if (typeof (Storage) !== 'undefined') {
    const allTasks = document.getElementsByClassName('tarefa');
    for (let index = 0; index < allTasks.length; index += 1) {
      const taskText = allTasks[index].innerText;
      const taskIsCompleted = allTasks[index].classList.contains('completed');
      localStorage.setItem(`task${index}`, `${taskText},${taskIsCompleted}`);
    }
  } else {
    alert(`Não foi possível salvar.
Navegador sem suporte para Web Storage.`);
  }
}

function taskRecreator(text, isCompleted) {
  const taskItem = document.createElement('li');
  if (isCompleted === 'true') {
    taskItem.className = 'tarefa completed';
  } else {
    taskItem.className = 'tarefa';
  }
  taskItem.innerText = text;
  taskList.appendChild(taskItem);
}

function restoreSaveTasks() {
  for (let index = 0; index < (localStorage.length); index += 1) {
    const taskSaveValues = localStorage[`task${index}`].split(',');
    taskRecreator(taskSaveValues[0], taskSaveValues[1]);
  }
}

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  const previousTask = selectedTask.previousElementSibling;
  if (selectedTask !== null && previousTask !== null) {
    const previousTaskText = previousTask.innerText;
    const previousTaskClass = previousTask.className;
    previousTask.innerText = selectedTask.innerText;
    previousTask.className = selectedTask.className;
    selectedTask.innerText = previousTaskText;
    selectedTask.className = previousTaskClass;
  }
}

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  const nextTask = selectedTask.nextElementSibling;
  if (selectedTask !== null && nextTask !== null) {
    const nextTaskText = nextTask.innerText;
    const nextTaskClass = nextTask.className;
    nextTask.innerText = selectedTask.innerText;
    nextTask.className = selectedTask.className;
    selectedTask.innerText = nextTaskText;
    selectedTask.className = nextTaskClass;
  }
}

window.onload = function page() {
  btnTaskCreate.addEventListener('click', taskCreator);
  btnRemoveAllTasks.addEventListener('click', removeAllTasks);
  btnRemoveCompletedTasks.addEventListener('click', removeTasksComplete);
  btnRemoveSelectedTask.addEventListener('click', removeSelectedTask);
  btnSaveTasks.addEventListener('click', saveTasks);
  btnMoveUpTask.addEventListener('click', moveUp);
  btnMoveDownTask.addEventListener('click', moveDown);
  document.addEventListener('click', selectTask);
  document.addEventListener('dblclick', completeTask);
  restoreSaveTasks();
};
