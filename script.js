const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');

const selectTask = (event) => {
  let selectedTask = document.querySelector('.selected');
  const task = event.target;
  if (task === selectedTask) {
    task.classList.remove('selected');
  } else {
    task.classList.add('selected');
    selectedTask.classList.remove('selected');
  }
  selectedTask = task;
};

const addTask = () => {
  const newTask = document.createElement('li');
  newTask.innerText = taskInput.value;
  newTask.classList.add('task');
  taskList.appendChild(newTask);
  taskInput.value = '';
  newTask.addEventListener('click', selectTask);
};

addTaskButton.addEventListener('click', addTask);
