let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let getOl = document.querySelector('#lista-tarefas');
let list = document.querySelectorAll('li');


button.innerHTML = 'Adicionar';


button.addEventListener('click', () => {
    let createList = document.createElement('li');
    getOl.appendChild(createList);
    createList.innerText = input.value
    
    let list = document.querySelectorAll('li');

        if (input.value != '') {
            input.value = '';
        };
        createList.addEventListener('click', changeBColor)
});

function changeBColor(event) {
    let target = event.target;
    target.style.backgroundColor = 'rgb(128,128,128)';
    
};



