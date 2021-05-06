const content = document.getElementById('content');
const title = document.createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';

const header = document.createElement('header');

header.appendChild(title);
content.appendChild(header);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerHTML =
  'Clique duas vezes em um item para marcá-lo como completo';

header.appendChild(paragraph);

const insertTask = document.createElement('div');
insertTask.className = 'insert-task';

const taskText = document.createElement('input');
taskText.id = 'texto-tarefa';

insertTask.appendChild(taskText);
content.appendChild(insertTask);

const tasksListContainer = document.createElement('div');
tasksListContainer.className = 'tasks-list-container';

const tasksList = document.createElement('ol');
tasksList.id = 'lista-tarefas';

tasksListContainer.appendChild(tasksList);
content.appendChild(tasksListContainer);

const addTaskBtn = document.createElement('button');
addTaskBtn.id = 'criar-tarefa';
addTaskBtn.innerHTML = 'adiconar';

function liCreate(text) {
  const li = document.createElement('li');
  li.innerHTML = text;
  return li;
}

let color = '';

function switchColor(event) {
  const beforeSelected = document.querySelector('.selected');
  if (beforeSelected) {
    beforeSelected.style.backgroundColor = color;
    beforeSelected.classList.remove('selected');
  }
  color = event.target.style.backgroundColor;
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

function switchClass(event) {
  const arrayClass = [...event.target.classList];
  if (arrayClass.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addTask() {
  const task = taskText.value;
  const li = liCreate(task);
  li.className = 'task';
  li.style.backgroundColor = 'orange';
  li.addEventListener('click', switchColor);
  li.addEventListener('dblclick', switchClass);
  tasksList.appendChild(li);
  taskText.value = '';
}

addTaskBtn.addEventListener('click', addTask);
insertTask.appendChild(addTaskBtn);
