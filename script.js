const toDoList = [''];

let textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

buttonCreate.addEventListener('click',function () {
    let catOl = document.getElementById('lista-tarefas');
    let text = textInput.value;
    let createLi = document.createElement('li');
    createLi.className = 'unselected';
    createLi.innerHTML = text;
    catOl.appendChild(createLi);
    document.getElementById('texto-tarefa').value = '';
} );
