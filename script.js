const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const addTask = document.getElementById('cria-tarefa');
const listItemClass = document.getElementsByClassName('list-item');
addTask.addEventListener('click', addListItem);

function giveListener(){
   listItemClass.addEventListener('click', changeBgCOlor());
}

function addListItem(){
let listItem = document.createElement('li');
listItem.innerHTML = input.value;
listItem.className ='list-item';
list.appendChild(listItem);
giveListener();
}




function changeBgCOlor (){
    listItemClass
}