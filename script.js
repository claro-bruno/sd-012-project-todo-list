const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const removeAllButton = document.getElementById('apaga-tudo');
const removeCompletedButton = document.getElementById('remover-finalizados');

// Solução encontrada no respositório de Anajulia
// Source: https://github.com/tryber/sd-011-project-todo-list/blob/anajulia-bs-todo-list-project/script.js

const removeSelected = (evt) => evt.classList.remove('selected');
const selectTask = () => {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    task.addEventListener('click', () => {
      tasks.forEach(removeSelected);
      task.classList.add('selected');
    });
  });
};

const toggleCompleted = (evt) => {
  const completed = evt.target;
  completed.classList.toggle('completed');
};

const addTask = () => {
  const newTask = document.createElement('li');
  newTask.innerText = taskInput.value;
  newTask.classList.add('task');
  taskList.appendChild(newTask);
  taskInput.value = '';
  newTask.addEventListener('dblclick', toggleCompleted);
  selectTask();
};

const removeAll = () => {
  taskList.innerHTML = '';
};

const removeCompleted = () => {
  const completed = document.getElementsByClassName('completed');
  while (completed.length > 0) {
    completed[0].remove();
  }
};

removeCompletedButton.addEventListener('click', removeCompleted);
removeAllButton.addEventListener('click', removeAll);
addTaskButton.addEventListener('click', addTask);
