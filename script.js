function openSavedTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let key in tasks) {
    const taskText = key;
    const isCompleted = tasks[key];
    createTask(taskText, isCompleted);
  };
}

function saveTasks() {
  const tasks = document.querySelectorAll('.tarefa');
  const tasksObj = {};
  for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
    const task = tasks[taskIndex];
    const taskValue = task.innerHTML;
    let isTaskCompleted = false;
    if(task.classList.contains('completed')){
      isTaskCompleted = true;
    };
    tasksObj[taskValue] = isTaskCompleted;
  };
  addToStorage(tasksObj);
}

function addToStorage(obj) {
  localStorage.setItem('tasks', JSON.stringify(obj));
}

function selectTask(e) {
  const selectedTask = document.querySelector('#selected');
  if (selectedTask !== null) {
    selectedTask.id = '';
  };
  e.target.id = 'selected';
}

function removeCompleted() {
  const tasks = document.querySelectorAll('.tarefa');
  for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
    const task = tasks[taskIndex];
    if (task.classList.contains('completed')) {
      task.remove();
    };
  }
}

function completeTask(e) {
  const task = e.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed')
  };
}


function deleteAllList() {
  const tasks = document.querySelectorAll('.tarefa');
  for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
    const task = tasks[taskIndex];
    task.remove();
  };
}

function createTask(taskText, isCompleted) {
  const task = document.createElement('li');
  task.innerHTML = taskText;
  task.classList.add('tarefa');
  if(isCompleted){
    task.classList.add('completed')
  };
  task.addEventListener('dblclick', completeTask);
  task.addEventListener('click', selectTask);
  const list = document.querySelector('#lista-tarefas');
  list.appendChild(task);
}

function moveUp() {
  const taskSelected = document.querySelector('#selected');
  if (taskSelected !== null && taskSelected !== taskSelected.parentNode.firstElementChild) {
    const previousTask = taskSelected.previousElementSibling;
    taskSelected.parentNode.insertBefore(previousTask, taskSelected.nextElementSibling);
  };
}

function moveDown() {
  let taskSelected = document.querySelector('#selected');
  if (taskSelected !== null && taskSelected !== taskSelected.parentNode.lastElementChild) {
    let nextTask = taskSelected.nextElementSibling;
    taskSelected.parentNode.insertBefore(nextTask, nextTask.previousElementSibling);
  };
}

function removeSelected() {
  const selected = document.querySelector('#selected');
  if (selected !== null) {
    selected.remove();
  };
}

window.onload = () => {
  openSavedTasks();
  document.querySelector('#salvar-tarefas').addEventListener('click', saveTasks);
  document.querySelector('#mover-cima').addEventListener('click', moveUp);
  document.querySelector('#mover-baixo').addEventListener('click', moveDown);
  document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);
  document.querySelector('#remover-finalizados').addEventListener('click', removeCompleted);
  document.querySelector('#apaga-tudo').addEventListener('click', deleteAllList);
  document.querySelector('#criar-tarefa').addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    input
    if(input.value)
    createTask(input.value);
    input.value = '';
  });
};
