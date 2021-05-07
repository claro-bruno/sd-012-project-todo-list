const optionContent = document.querySelector('#option-content');
const headerContent = document.querySelector('#header-content');
const taskListId = '#lista-tarefas';
const stateNormal = 'task';
const stateSelected = 'task selected';
const stateFinished = 'task completed';
const stateSelectedFinished = 'task selected completed';

let tasks = document.querySelector(taskListId).children;

function createHeaderContent() {
  headerContent.innerHTML = 'Minha Lista de Tarefas';
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  headerContent.appendChild(paragraph);
}
createHeaderContent();

function createAddTaskLabel() {
  const addTaskLabel = document.createElement('label');
  addTaskLabel.id = 'texto-tarefa-label';
  addTaskLabel.for = 'length';
  addTaskLabel.innerText = 'Tamanho do quadro:';
  optionContent.appendChild(addTaskLabel);
}

function createAddTaskInput() {
  const addTaskInput = document.createElement('input');
  addTaskInput.id = 'texto-tarefa';
  addTaskInput.name = 'newTask';
  addTaskInput.type = 'text';
  addTaskInput.placeholder = 'ex:  Ler o próximo capítulo do Livro "X".  (Máx. 150 caracteres)';
  addTaskInput.size = '150';
  addTaskInput.minLength = '1';
  addTaskInput.maxLength = '150';
  optionContent.appendChild(addTaskInput);
}

function createAddTaskButton() {
  const addTaskButton = document.createElement('button');
  addTaskButton.id = 'criar-tarefa';
  addTaskButton.innerText = 'Adicionar Tarefa';
  optionContent.appendChild(addTaskButton);
}

function createOptionsMenu() {
  createAddTaskLabel();
  createAddTaskInput();
  createAddTaskButton();
}
createOptionsMenu();

function createTask(taskInput) {
  const taskList = document.querySelector(taskListId);
  const newTask = document.createElement('li');
  newTask.id = `task-${(taskList.children.length + 1)}`;
  newTask.className = 'task';
  newTask.innerHTML = taskInput;
  taskList.appendChild(newTask);
}

function clearPreviousSelected() {
  tasks = document.querySelector(taskListId).children;
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].className === stateSelected) {
      tasks[index].className = stateNormal;
      tasks[index].style.backgroundColor = '';
    }
    if (tasks[index].className === stateSelectedFinished) {
      tasks[index].className = stateFinished;
      tasks[index].style.backgroundColor = '';
    }
  }
}

function selectTask(event) {
  const selectedTask = event.target;
  clearPreviousSelected();
  if (selectedTask.className === stateNormal) {
    selectedTask.className = stateSelected;
    selectedTask.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  if (selectedTask.className === stateFinished) {
    selectedTask.className = stateSelectedFinished;
    selectedTask.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function finishTask(event) {
  const finishedTask = event.target;
  if (finishedTask.className === stateSelected) {
    finishedTask.className = stateSelectedFinished;
    finishedTask.style.textDecoration = 'line-through solid black';
  } else if (finishedTask.className === stateSelectedFinished) {
    finishedTask.className = stateSelected;
    finishedTask.style.textDecoration = '';
  }
}

tasks = document.querySelector(taskListId).children;
function createEventsForTasks() {
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', selectTask);
    tasks[index].addEventListener('dblclick', finishTask);
  }
}
createEventsForTasks();

function updateTasks() {
  tasks = document.querySelector(taskListId).children;
  createEventsForTasks();
}

const addTaskButtonElement = document.querySelector('#criar-tarefa');
function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  createTask(taskInput.value);
  updateTasks();
  taskInput.value = '';
}
addTaskButtonElement.addEventListener('click', addTask);
