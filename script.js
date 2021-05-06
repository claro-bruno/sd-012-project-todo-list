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
    tasks[index].classList.add('task');
  }
  if (event.target.classList.contains('task')) {
    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].style.backgroundColor = 'white';}
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

document.addEventListener('click', oldTask);

function completeTask(event) {
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

document.addEventListener('dblclick', completeTask);

let refresh;

function clearButton() {
  refresh = document.createElement('button');
  refresh.id = 'apaga-tudo';
  refresh.innerText = 'Apagar tudo';
  document.body.appendChild(refresh);
}

clearButton();

refresh.addEventListener('click', clearAll);

function clearAll() {
  document.location.reload(true);
}