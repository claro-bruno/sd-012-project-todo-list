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
        createList.addEventListener('click', changeBackColor)       
        
        createList.addEventListener('dblclick', itemComplete)
});

function changeBackColor(event) {
    let target = event.target;

        for (let item of target.parentNode.children) {
            item.style.backgroundColor = 'rgb(255,255,255)';
        }        
        target.style.backgroundColor = 'rgb(128,128,128)';       
};

function itemComplete(event) {
    let target = event.target;
    
    target.classList.toggle ('completed')
};



