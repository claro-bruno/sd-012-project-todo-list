const toDoList = [''];

let textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

buttonCreate.addEventListener('click',function () {
    const catOl = document.getElementById('lista-tarefas');
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'unselected';
    createLi.innerHTML = text;
    catOl.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
});
