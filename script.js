window.onload = function () {
  const getAddTaskButton = document.querySelector('#criar-tarefa');
  const getToDoList = document.querySelector('#lista-tarefas');
  const getTaskInput = document.querySelector('#texto-tarefa');

  function addTask() {
    let task = document.createElement('li');
    task.innerHTML = getTaskInput.value;
    getToDoList.appendChild(task);
    getTaskInput.value = '';
  }
  getAddTaskButton.addEventListener('click', addTask);
};
