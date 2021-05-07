const optionContent = document.querySelector('#option-content');
const headerContent = document.querySelector('#header-content');
const taskListId = '#lista-tarefas';

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

const addTaskButtonElement = document.querySelector('#criar-tarefa');
function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  createTask(taskInput.value);
  taskInput.value = '';
}
addTaskButtonElement.addEventListener('click', addTask);
