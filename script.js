const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const removeAllButton = document.getElementById('apaga-tudo');
const removeCompletedButton = document.getElementById('remover-finalizados');
const removeSelectedButton = document.getElementById('remover-selecionado');
const saveButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const errorMessage = document.getElementById('error');
const moveDownButton = document.getElementById('mover-baixo');

// Algumas ideias encontradas no respositório de Matheus "Set" Inacio
// Source: https://github.com/tryber/sd-011-project-todo-list/blob/heyset-todo-list-project/script.js
// selectTask() requer melhorias de dinamismo

const selectTask = (e) => {
  const selectedTask = document.querySelector('.selected');
  const task = e.target;
  task.classList.toggle('selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
};

const toggleCompleted = (evt) => {
  const completed = evt.target;
  completed.classList.toggle('completed');
};

const addTask = (input) => {
  const newTask = document.createElement('li');
  newTask.innerText = input;
  if (newTask.innerText === '') {
    errorMessage.innerText = 'Digite uma tarefa para adicionar!';
  } else {
    newTask.classList.add('task');
    taskList.appendChild(newTask);
    taskInput.value = '';
    newTask.addEventListener('dblclick', toggleCompleted);
    newTask.addEventListener('click', selectTask);
    errorMessage.innerText = '';
  }
  return newTask;
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
  if (selected) {
    taskList.removeChild(selected);
    errorMessage.innerText = '';
  } else {
    errorMessage.innerText = 'Nenhuma tarefa selecionada!';
  }
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

const moveUp = () => {
  const selectedTask = document.querySelector('.selected');

  if (!selectedTask) {
    errorMessage.innerText = 'Adicione e/ou Selecione uma tarefa!';
  } else {
    errorMessage.innerText = '';
    const taskAbove = selectedTask.previousSibling;
    if (!taskAbove) {
      return;
    }
    const swap = taskAbove.cloneNode(true);
    taskAbove.remove();
    const insertedTask = selectedTask.insertAdjacentElement('afterend', swap);
    selectedTask.classList.toggle('selected');
    insertedTask.addEventListener('click', selectTask);
    insertedTask.addEventListener('dblclick', toggleCompleted);
  }
};

const moveDown = () => {
  const selectedTask = document.querySelector('.selected');

  if (!selectedTask) {
    errorMessage.innerText = 'Adicione e/ou Selecione uma tarefa!';
  } else {
    errorMessage.innerText = '';
    const taskBellow = selectedTask.nextSibling;
    if (!taskBellow) {
      return;
    }
    const swap = taskBellow.cloneNode(true);
    taskBellow.remove();
    const insertedTask = selectedTask.insertAdjacentElement('beforebegin', swap);
    selectedTask.classList.toggle('selected');
    insertedTask.addEventListener('click', selectTask);
    insertedTask.addEventListener('dblclick', toggleCompleted);
  }
};

const saveTasks = () => {
  if (!Storage) {
    return;
  }
  const rawList = [];
  const allTasks = taskList.getElementsByClassName('task');
  if (!allTasks.length) {
    localStorage.removeItem('taskList');
    return;
  }
  for (let i = 0; i < allTasks.length; i += 1) {
    rawList.push({
      text: allTasks[i].innerText,
      completed: allTasks[i].classList.contains('completed'),
    });
  }
  const listJson = JSON.stringify(rawList);
  localStorage.setItem('taskList', listJson);
};

const loadTasks = () => {
  if (!Storage || !localStorage.taskList) {
    return;
  }
  const loadedTaskList = JSON.parse(localStorage.taskList);
  for (let i = 0; i < loadedTaskList.length; i += 1) {
    const newTask = addTask(loadedTaskList[i].text);
    if (loadedTaskList[i].completed) {
      newTask.classList.add('completed');
    }
  }
};

window.onload = () => {
  loadTasks();
  removeSelectedButton.addEventListener('click', removeSelected);
  saveButton.addEventListener('click', saveTasks);
  moveUpButton.addEventListener('click', moveUp);
  moveDownButton.addEventListener('click', moveDown);
  removeCompletedButton.addEventListener('click', removeCompleted);
  removeAllButton.addEventListener('click', removeAll);
  addTaskButton.addEventListener('click', () => {
    addTask(taskInput.value);
  });
};
