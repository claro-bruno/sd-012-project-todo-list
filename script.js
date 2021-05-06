const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');

let selectedTask;

const selectTask = (event) => {
  const task = event.target;
  task.classList.add('selected');
  if (selectedTask) {
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
