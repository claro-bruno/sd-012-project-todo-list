//Será criado uma lista após o usuário preencher o campo e clicar no botão 
const createTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');

function list () {
    createTask.addEventListener('click', function(){
        let textTask = document.querySelector('#texto-tarefa').value;
        let listItem = document.createElement('li');
        listItem.innerHTML = textTask;
        listTask.appendChild(listItem);
        textTask = document.querySelector('#texto-tarefa').value = '';

    })
}
list ();