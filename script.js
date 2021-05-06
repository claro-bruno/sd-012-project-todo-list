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
