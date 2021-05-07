const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const removeAllButton = document.getElementById('apaga-tudo');
const removeCompletedButton = document.getElementById('remover-finalizados');
const removeSelectedButton = document.getElementById('remover-selecionado');
const saveButton = document.getElementById('salvar-tarefas');

// Ideia encontrada no respositório de Matheus "Set" Inacio
// Source: https://github.com/tryber/sd-011-project-todo-list/blob/heyset-todo-list-project/script.js

let selectedTask;

function selectTask(e) {
  const task = e.target;

  task.classList.add('selected');

  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  selectedTask = task;
}

const toggleCompleted = (evt) => {
  const completed = evt.target;
  completed.classList.toggle('completed');
};

const addTask = () => {
  const newTask = document.createElement('li');
  newTask.innerText = taskInput.value;
  if (newTask.innerText === '') {
    alert('adicione uma tarefa');
  } else {
    newTask.classList.add('task');
    taskList.appendChild(newTask);
    taskInput.value = '';
    newTask.addEventListener('dblclick', toggleCompleted);
    newTask.addEventListener('click', selectTask);
  }
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

const removeSelected = () => {
  const selected = document.querySelector('.selected');
  taskList.removeChild(selected);
};

saveButton.addEventListener('mouseover', () => {
  const child = saveButton.firstElementChild;
  child.style.color = 'rgb(0, 141, 179)';
  child.style.transition = '0.7s';
});

saveButton.addEventListener('mouseout', () => {
  const child = saveButton.firstElementChild;
  child.style.color = 'rgb(254, 238, 223)';
  child.style.transition = '0.7s';
});

removeSelectedButton.addEventListener('click', removeSelected);
removeCompletedButton.addEventListener('click', removeCompleted);
removeAllButton.addEventListener('click', removeAll);
addTaskButton.addEventListener('click', addTask);
