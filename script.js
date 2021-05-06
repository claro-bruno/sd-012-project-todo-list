document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    addTasks();
  };
  if (event.target.classList.contains('task')) {
    const getEventElement = event.target;
    selectTask(getEventElement);
  };

});

function addTasks() {
  const getTasksList = document.getElementById('lista-tarefas');
  const getInputElement = document.getElementById('texto-tarefa');
  const getInputValue = getInputElement.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = getInputValue;
  newTask.className = 'task';
  getTasksList.appendChild(newTask);
  const clearInput = '';
  getInputElement.value = clearInput;
}

function selectTask(selectedTask) {
  const selectedTaskElement = document.querySelector('.selected');
  if (selectedTaskElement === null) {
    selectedTask.classList.add('selected');
  } else {
    selectedTaskElement.classList.remove('selected');
    selectedTask.classList.add('selected');
  };
}