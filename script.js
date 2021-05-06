document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    addTasks();
  };


});

function addTasks() {
  const getTasksList = document.getElementById('lista-tarefas');
  const getInputElement = document.getElementById('texto-tarefa');
  const getInputValue = getInputElement.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = getInputValue;
  getTasksList.appendChild(newTask);
  const clearInput = '';
  getInputElement.value = clearInput;
}