const toDoList = [''];

const textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

buttonCreate.addEventListener('click',function () {
    let catOl = document.getElementById('lista-tarefa');
    let text = textInput.value;
    let createLi = document.createElement('li');
    createLi.className = 'empty';
    createLi.innerHTML = text;
    catOl.appendChild(createLi);
} );
