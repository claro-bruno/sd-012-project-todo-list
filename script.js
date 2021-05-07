const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const addTask = document.getElementById('cria-tarefa');

addTask.addEventListener('click', addListItem);

function addListItem(){
let listItem = document.createElement('li');
listItem.innerHTML = input.value;
list.appendChild(listItem);
}
