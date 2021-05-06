const content = document.getElementById('content');
const title = document.createElement('h1');
const header = document.createElement('header');
title.innerHTML = 'Minha Lista de Tarefas';
header.appendChild(title);
content.appendChild(header);
