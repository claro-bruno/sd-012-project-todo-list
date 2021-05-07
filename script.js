const optionContent = document.querySelector('#option-content');
const headerContent = document.querySelector('#header-content');
const taskListId = '#lista-tarefas';
const stateNormal = 'task';
const stateSelected = 'task selected';
const stateCompleted = 'task completed';
const stateSelectedCompleted = 'task selected completed';
const color = 'gray';
const defaultColor = 'transparent';
const decoration = 'line-through solid black';
const defaultDecoratin = 'none currentcolor solid';

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

function createSelectedTaskButton() {
  const removeSelectedTaskButton = document.createElement('button');
  removeSelectedTaskButton.id = 'remover-selecionado';
  removeSelectedTaskButton.innerText = 'Remover a Tarefa Selecionada';
  optionContent.appendChild(removeSelectedTaskButton);
}

function createClearSelectionButton() {
  const clearSelectionButton = document.createElement('button');
  clearSelectionButton.id = 'limpar-selecao';
  clearSelectionButton.innerText = 'Limpar Seleção';
  optionContent.appendChild(clearSelectionButton);
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
  createSelectedTaskButton();
  createClearSelectionButton();
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
      tasks[index].style.backgroundColor = defaultColor;
      break;
    }
    if (tasks[index].className === stateSelectedCompleted) {
      tasks[index].className = stateCompleted;
      tasks[index].style.backgroundColor = defaultColor;
      break;
    }
  }
}

function selectTask(event) {
  const selectedTask = event.target;
  if (selectedTask.className === stateNormal) {
    clearPreviousSelected();
    selectedTask.className = stateSelected;
    selectedTask.style.backgroundColor = color;
    return;
  }
  if (selectedTask.className === stateCompleted) {
    clearPreviousSelected();
    selectedTask.className = stateSelectedCompleted;
    selectedTask.style.backgroundColor = color;
  }
}

function finishTask(event) {
  const finishedTask = event.target;
  if (finishedTask.className === stateSelected) {
    finishedTask.className = stateSelectedCompleted;
    finishedTask.style.textDecoration = decoration;
  } else if (finishedTask.className === stateSelectedCompleted) {
    finishedTask.className = stateSelected;
    finishedTask.style.textDecoration = defaultDecoratin;
  }
}

const removeAllTasksButtonElement = document.querySelector('#apaga-tudo');

function removeAllTasks() {
  taskList = document.querySelector(taskListId);
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
removeAllTasksButtonElement.addEventListener('click', removeAllTasks);

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

function copySelected(selected) {
  const copySelectedElement = document.createElement('li');
  copySelectedElement.id = selected.id;
  copySelectedElement.className = selected.className;
  copySelectedElement.innerText = selected.innerText;
  return copySelectedElement;
}

const moveUpButton = document.querySelector('#mover-cima');

function moveUp() {
  taskList = document.querySelector(taskListId);
  const selectedUpTask = document.querySelector('.selected');
  if (selectedUpTask !== null) {
    const swapTaskUp = document.querySelector('.selected').previousElementSibling;
    if (swapTaskUp !== null) {
      const copyOfSelected = copySelected(selectedUpTask);
      taskList.removeChild(selectedUpTask);
      taskList.insertBefore(copyOfSelected, swapTaskUp);
      updateIdsOfTasks();
      updateTasks();
    }
  }
}
moveUpButton.addEventListener('click', moveUp);

const moveDownButton = document.querySelector('#mover-baixo');

function moveDown() {
  taskList = document.querySelector(taskListId);
  const selectedDownTask = document.querySelector('.selected');
  if (selectedDownTask !== null) {
    const swapTaskDown = document.querySelector('.selected').nextElementSibling;
    if (swapTaskDown !== null) {
      const copyOfSelected = copySelected(selectedDownTask);
      taskList.removeChild(selectedDownTask);
      taskList.insertBefore(copyOfSelected, swapTaskDown.nextElementSibling);
      updateIdsOfTasks();
      updateTasks();
    }
  }
}
moveDownButton.addEventListener('click', moveDown);

const addTaskButtonElement = document.querySelector('#criar-tarefa');

function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  createTask(taskInput.value);
  updateTasks();
  taskInput.value = '';
}
addTaskButtonElement.addEventListener('click', addTask);

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

const removeSelectedTaskButtonsElement = document.querySelector('#remover-selecionado');

function removeSelectedTask() {
  taskList = document.querySelector(taskListId);
  const selectedElement = document.querySelector('.selected');
  taskList.removeChild(selectedElement);
  updateIdsOfTasks();
}
removeSelectedTaskButtonsElement.addEventListener('click', removeSelectedTask);

const clearSelectionButton = document.querySelector('#limpar-selecao');

function clearSelection() {
  clearPreviousSelected();
}
clearSelectionButton.addEventListener('click', clearSelection);

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
  if (taskClass === stateSelected) {
    loadTask.style.backgroundColor = color;
  }
  if (taskClass === stateCompleted) {
    loadTask.style.textDecoration = decoration;
  }
  if (taskClass === stateSelectedCompleted) {
    loadTask.style.backgroundColor = color;
    loadTask.style.textDecoration = decoration;
  }
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
