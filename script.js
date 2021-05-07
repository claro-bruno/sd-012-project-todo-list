const toDoList = [''];

const textInput = document.querySelector('#texto-tarefa');

textInput.addEventListener('input', function () {
    
})

const buttonCreate = document.querySelector('.submit');

buttonCreate.addEventListener('click',function () {
    let catOl = document.getElementById('lista de tarefa');
    let createLi = document.createElement('li');
    createLi.className = 'empty';
    catOl.appendChild(createLi);
} );


