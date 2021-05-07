const optionContent = document.querySelector('#option-content');
const headerContent = document.querySelector('#header-content');
const taskListId = '#lista-tarefas';
const stateNormal = 'task';
const stateSelected = 'task selected';
const stateCompleted = 'task completed';
const stateSelectedCompleted = 'task selected completed';

let tasks = document.querySelector(taskListId).children;
let taskList = document.querySelector(taskListId);

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

function createRemoveAllTasksButton() {
  const removeAllTasksButton = document.createElement('button');
  removeAllTasksButton.id = 'apaga-tudo';
  removeAllTasksButton.innerText = 'Remover Todas as Tarefas';
  optionContent.appendChild(removeAllTasksButton);
}

function createRemoveCompletedTasksButton() {
  const removeCompletedTasksButton = document.createElement('button');
  removeCompletedTasksButton.id = 'remover-finalizados';
  removeCompletedTasksButton.innerText = 'Remover as Tarefas Completas';
  optionContent.appendChild(removeCompletedTasksButton);
}

function createSaveTasksButton() {
  const saveTasksButton = document.createElement('button');
  saveTasksButton.id = 'salvar-tarefas';
  saveTasksButton.innerText = 'Salvar Tarefas';
  optionContent.appendChild(saveTasksButton);
}

function createMoveUpButton() {
  const moveUpButton = document.createElement('button');
  moveUpButton.id = 'mover-cima';
  moveUpButton.innerText = 'Mover para Cima';
  optionContent.appendChild(moveUpButton);
}

function createMoveDownButton() {
  const moveDownButton = document.createElement('button');
  moveDownButton.id = 'mover-baixo';
  moveDownButton.innerText = 'Mover para Baixo';
  optionContent.appendChild(moveDownButton);
}

function createOptionsMenu() {
  createAddTaskLabel();
  createAddTaskInput();
  createAddTaskButton();
  createRemoveAllTasksButton();
  createRemoveCompletedTasksButton();
  createSaveTasksButton();
  createMoveUpButton();
  createMoveDownButton();
}
createOptionsMenu();

function createTask(taskInput) {
  taskList = document.querySelector(taskListId);
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
    if (tasks[index].className === stateSelectedCompleted) {
      tasks[index].className = stateCompleted;
      tasks[index].style.backgroundColor = '';
    }
  }
}

function selectTask(event) {
  const selectedTask = event.target;
  clearPreviousSelected();
  if (selectedTask.className === stateNormal) {
    selectedTask.className = stateSelected;
    selectedTask.style.backgroundColor = 'gray';
  }
  if (selectedTask.className === stateCompleted) {
    selectedTask.className = stateSelectedCompleted;
    selectedTask.style.backgroundColor = 'gray';
  }
}

function finishTask(event) {
  const finishedTask = event.target;
  if (finishedTask.className === stateSelected) {
    finishedTask.className = stateSelectedCompleted;
    finishedTask.style.textDecoration = 'line-through solid black';
  } else if (finishedTask.className === stateSelectedCompleted) {
    finishedTask.className = stateSelected;
    finishedTask.style.textDecoration = '';
  }
}

const moveUpButton = document.querySelector('#mover-cima');
function moveUp() {
  const selectetUpTask = document.querySelector('.selected').previousElementSibling;
  if (selectetUpTask !== null) {
    clearPreviousSelected();
    if (selectetUpTask.className === stateNormal) {
      selectetUpTask.className = stateSelected;
      selectetUpTask.style.backgroundColor = 'gray';
    }
    if (selectetUpTask.className === stateCompleted) {
      selectetUpTask.className = stateSelectedCompleted;
      selectetUpTask.style.backgroundColor = 'gray';
    }
  }
}
moveUpButton.addEventListener('click', moveUp);

const moveDownButton = document.querySelector('#mover-baixo');
function moveDown() {
  const selectetDownTask = document.querySelector('.selected').nextElementSibling;
  if (selectetDownTask !== null) {
    clearPreviousSelected();
    if (selectetDownTask.className === stateNormal) {
      selectetDownTask.className = stateSelected;
      selectetDownTask.style.backgroundColor = 'gray';
    }
    if (selectetDownTask.className === stateCompleted) {
      selectetDownTask.className = stateSelectedCompleted;
      selectetDownTask.style.backgroundColor = 'gray';
    }
  }
}
moveDownButton.addEventListener('click', moveDown);

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

function updateIdsOfTasks() {
  tasks = document.querySelector(taskListId).children;
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].id = `task-${index + 1}`;
  }
}

const addTaskButtonElement = document.querySelector('#criar-tarefa');
function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  createTask(taskInput.value);
  updateTasks();
  taskInput.value = '';
}
addTaskButtonElement.addEventListener('click', addTask);

const removeAllTasksButtonElement = document.querySelector('#apaga-tudo');
function removeAllTasks() {
  taskList = document.querySelector(taskListId);
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
removeAllTasksButtonElement.addEventListener('click', removeAllTasks);

const removeCompletedTasksButtonElement = document.querySelector('#remover-finalizados');
function removeCompletedTasks() {
  taskList = document.querySelector(taskListId);
  const completedElements = document.querySelectorAll('.completed');
  for (let index = 0; index < completedElements.length; index += 1) {
    taskList.removeChild(completedElements[index]);
  }
  updateIdsOfTasks();
}
removeCompletedTasksButtonElement.addEventListener('click', removeCompletedTasks);

const saveTasksButtonElement = document.querySelector('#salvar-tarefas');
function saveTasks() {
  taskList = document.querySelector(taskListId);
  const taskListItens = taskList.children;
  console.log(taskListItens);
  localStorage.clear();
  for (let index = 0; index < taskListItens.length; index += 1) {
    localStorage.setItem(taskListItens[index].id, taskListItens[index].innerText);
    localStorage.setItem(`class-${index + 1}`, taskListItens[index].className);
    console.log(`${localStorage.getItem(taskListItens[index].id)} -> Salvo com Sucesso!`);
  }
}
saveTasksButtonElement.addEventListener('click', saveTasks);

function loadTasks(task, taskClass, index) {
  taskList = document.querySelector(taskListId);
  const loadTask = document.createElement('li');
  loadTask.id = `task-${(index)}`;
  loadTask.className = taskClass;
  loadTask.innerHTML = task;
  taskList.appendChild(loadTask);
}

function verifyStorage() {
  if (localStorage.length !== 0) {
    for (let index = 1; index <= (localStorage.length) / 2; index += 1) {
      const taskKey = `task-${index}`;
      const classKey = `class-${index}`;
      loadTasks(localStorage.getItem(taskKey), localStorage.getItem(classKey), index);
    }
    updateTasks();
  }
}
verifyStorage();
