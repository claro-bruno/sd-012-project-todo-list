let getItemList = document.getElementById('texto-tarefa');
let getList = document.getElementById('lista-tarefas');
let getButton = document.getElementById('criar-tarefa');

function saveInput(){
    let createLi = document.createElement('li');
    createLi.innerText = getItemList.value; 
    getList.appendChild(createLi);
    getItemList.value = "";
}    