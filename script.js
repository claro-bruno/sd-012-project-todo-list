window.onload = function () {
  const getAddTaskButton = document.querySelector('#criar-tarefa');
  const getToDoList = document.querySelector('#lista-tarefas');
  const getTaskInput = document.querySelector('#texto-tarefa');
  const getClearButton = document.querySelector('#apaga-tudo');
  const getClearComplectedTasksButton = document.querySelector(
    '#remover-finalizados'
  );
  const getRemoveSelectedButton = document.querySelector(
    '#remover-selecionado'
  );
  const getSaveTasksButton = document.querySelector('#salvar-tarefas');
  const getmoveUpButton = document.querySelector('#mover-cima');
  const getmoveDownButton = document.querySelector('#mover-baixo');

  function addSavedTasks() {
    for (let index = 0; index < localStorage.length / 2; index += 1) {
      let task = document.createElement('li');
      taskContent = 'Content' + index;
      taskClass = 'Class' + index;
      task.innerHTML = localStorage.getItem(taskContent);
      task.className = localStorage.getItem(taskClass);
      getToDoList.appendChild(task);
    }
  }
  addSavedTasks();

  function addTask() {
    const task = document.createElement('li');
    task.innerHTML = getTaskInput.value;
    getToDoList.appendChild(task);
    getTaskInput.value = '';
  }
  getAddTaskButton.addEventListener('click', addTask);

  function selectTask(event) {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected !== null) {
      taskSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
  getToDoList.addEventListener('click', selectTask);

  function completeTask(event) {
    const taskTarget = event.target;
    const taskClass = taskTarget.classList;
    let taskCompleted;
    for (let index = 0; index < taskClass.length; index += 1) {
      if (taskClass[index] === 'completed') {
        taskCompleted = true;
        break;
      } else {
        taskCompleted = false;
      }
    }
    if (taskCompleted) {
      taskTarget.classList.remove('completed');
    } else {
      taskTarget.classList.add('completed');
    }
  }
  getToDoList.addEventListener('dblclick', completeTask);

  function clearList() {
    const tasks = document.querySelectorAll('li');
    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].remove();
    }
  }
  getClearButton.addEventListener('click', clearList);

  function clearCompletedList() {
    const tasksCompletd = document.querySelectorAll('.completed');
    for (let index = 0; index < tasksCompletd.length; index += 1) {
      tasksCompletd[index].remove();
    }
  }
  getClearComplectedTasksButton.addEventListener('click', clearCompletedList);

  function removeSelectedTask() {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected !== null) {
      taskSelected.remove();
    }
  }
  getRemoveSelectedButton.addEventListener('click', removeSelectedTask);

  function saveTasks() {
    localStorage.clear();
    const tasks = document.querySelectorAll('li');
    tasks.parent;
    let taskContent;
    let taskClass;
    for (let index = 0; index < tasks.length; index += 1) {
      taskContent = 'Content' + index;
      taskClass = 'Class' + index;
      localStorage.setItem(taskContent, tasks[index].innerHTML);
      localStorage.setItem(taskClass, tasks[index].classList);
    }
  }
  getSaveTasksButton.addEventListener('click', saveTasks);

  function moveUp() {
    const taskSelected = document.querySelector('.selected');
    const tasks = document.querySelectorAll('li');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index] === taskSelected && index > 0) {
        getToDoList.insertBefore(tasks[index], tasks[index - 1]);
      }
    }
  }
  getmoveUpButton.addEventListener('click', moveUp);

  function moveDown() {
    const taskSelected = document.querySelector('.selected');
    const tasks = document.querySelectorAll('li');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index] === taskSelected && index < tasks.length - 1) {
        getToDoList.insertBefore(tasks[index + 1], tasks[index]);
      }
    }
  }
  getmoveDownButton.addEventListener('click', moveDown);
};
