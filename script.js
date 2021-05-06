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

function addTask() {
  const task = taskText.value;
  const li = liCreate(task);
  tasksList.appendChild(li);
  taskText.value = '';
}

addTaskBtn.addEventListener('click', addTask);

insertTask.appendChild(addTaskBtn);
