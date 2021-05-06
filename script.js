window.onload = function () {
  const getAddTaskButton = document.querySelector('#criar-tarefa');
  const getToDoList = document.querySelector('#lista-tarefas');
  const getTaskInput = document.querySelector('#texto-tarefa');

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
};
