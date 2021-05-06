function openSavedTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let key in tasks) {
    let taskText = key;
    let isCompleted = tasks[key];
    let task = document.createElement('li');
    if (isCompleted) {
      task.className = 'tarefa completed';
    } else {
      task.className = 'tarefa';
    }
    task.innerHTML = taskText;
    let list = document.querySelector('#lista-tarefas');
    list.appendChild(task);
    deleteAllList();
  }
}

function saveTasks() {
  let tasks = document.querySelectorAll('.tarefa');
  console.log(tasks)
  let tasksObj = {};
  for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
    let task = tasks[taskIndex];
    let taskValue = task.innerHTML;
    console.log(task.classList)
    let isTaskCompleted = false;
    for (let classIndex = 0; classIndex < task.classList.length; classIndex += 1) {
      if (task.classList[classIndex] === 'completed') {
        isTaskCompleted = true;
      };
    };
    tasksObj[taskValue] = isTaskCompleted;
  };
  addToStorage(tasksObj);
}

function addToStorage(obj) {
  localStorage.setItem('tasks', JSON.stringify(obj));
}

function unmarkTask() {
  let selectedTask = document.querySelector('#selected');
  selectedTask.id = '';
}

function changeTaskColor() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', (e) => {
    if (e.target.className === 'tarefa' || e.target.className === 'tarefa completed') {
      if (document.querySelector('#selected') !== null) {
        unmarkTask();
      }
      e.target.id = 'selected';
    };
  });
}

function deleteCompletedTasks() {
  const btn = document.querySelector('#remover-finalizados');
  btn.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.tarefa.completed');
    console.log(completedTasks)
    for (let taskIndex = 0; taskIndex < completedTasks.length; taskIndex += 1) {
      completedTasks[taskIndex].remove();
    };
  });
}

function completeTask() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('dblclick', (e) => {
    if (e.target.className === 'tarefa') {
      e.target.className += ' completed';
    } else if (e.target.className === 'tarefa completed') {
      e.target.className = 'tarefa';
    };
    deleteCompletedTasks();
  });
}

function deleteAllList() {
  const btn = document.querySelector('#apaga-tudo');
  btn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.tarefa');
    for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
      tasks[taskIndex].remove();
    };
  });
}

function createTask() {
  let btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', () => {
    let input = document.querySelector('#texto-tarefa');
    let task = document.createElement('li');
    task.className = 'tarefa';
    task.innerHTML = input.value;
    input.value = '';
    let list = document.querySelector('#lista-tarefas');
    list.appendChild(task);
    deleteAllList();
  });
}

function moveUp() {
  let taskSelected = document.querySelector('#selected');
  let previousTask = taskSelected.previousElementSibling;
  taskSelected.parentNode.insertBefore(previousTask, taskSelected.nextElementSibling);
}

function moveDown() {
  let taskSelected = document.querySelector('#selected');
  let nextTask = taskSelected.nextElementSibling;
  taskSelected.parentNode.insertBefore(nextTask, nextTask.previousElementSibling);
}

function removeSelected() {
    const selected = document.querySelector('#selected');
    selected.remove();
}

window.onload = () => {
  openSavedTasks();
  createTask();
  changeTaskColor();
  completeTask();

  const btnSaveTasks = document.querySelector('#salvar-tarefas');
  btnSaveTasks.addEventListener('click', saveTasks);
  document.querySelector('#mover-cima').addEventListener('click', moveUp);
  document.querySelector('#mover-baixo').addEventListener('click', moveDown);
  document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);
};
