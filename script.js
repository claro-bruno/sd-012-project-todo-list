let input = document.querySelector('#texto-tarefa');
let getOl = document.querySelector('#lista-tarefas');
let list = document.querySelectorAll('li');
let btnEraseAll = document.querySelector('#apaga-tudo');
let btnAdc = document.querySelector('#criar-tarefa');
let btnEraseCompleted = document.querySelector('#remover-finalizados');

btnAdc.innerHTML = 'Adicionar';
btnEraseAll.innerHTML = 'Apagar';
btnEraseCompleted.innerHTML = 'Remover concluidos';

btnAdc.addEventListener('click', () => {
    let createList = document.createElement('li');
    getOl.appendChild(createList);
    createList.innerText = input.value
    
    let list = document.querySelectorAll('li');

        if (input.value != '') {
            input.value = '';
        };
        createList.addEventListener('click', changeBackColor);     
        
        createList.addEventListener('dblclick', itemComplete);

        btnEraseAll.addEventListener('click', eraseAll);

        btnEraseCompleted.addEventListener('click', eraseCompleted);
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


function eraseAll() {
    let olChildrens = document.querySelector('#lista-tarefas');
    while (olChildrens.firstChild) {
        olChildrens.removeChild(olChildrens.firstChild)
    };
};

function eraseCompleted() {
    let olChildrens = document.querySelector('#lista-tarefas');
    for(let index = 0; index < olChildrens.children.length; index += 1) {
        if(olChildrens.children[index].classList.contains('completed')) {
            olChildrens.removeChild(olChildrens.children[index])
            index -= 1;
        };
    };
};