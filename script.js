let textEntrance;

function createInput() {
  textEntrance = document.createElement('input');
  textEntrance.id = 'texto-tarefa';
  document.body.appendChild(textEntrance);
}

createInput();

let taskList;

function createOrdenedList() {
  taskList = document.createElement('ol');
  taskList.id = 'lista-tarefas';
  document.body.appendChild(taskList);
}

createOrdenedList();

let insertTask;

function createButton() {
  insertTask = document.createElement('button');
  insertTask.id = 'criar-tarefa';
  document.body.appendChild(insertTask);
  insertTask.innerHTML = 'Adicionar tarefa';
}

createButton();

insertTask.addEventListener('click', newTask);

let task;

function newTask() {
  task = document.createElement('li');
  if (textEntrance.value != '') {
    task.innerText = textEntrance.value;
    taskList.appendChild(task);
    textEntrance.value = '';
  }
}

function oldTask(event) {
  let tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].className = 'task';
  }
  if (event.target.classList.contains('task')) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

document.addEventListener('click', oldTask);