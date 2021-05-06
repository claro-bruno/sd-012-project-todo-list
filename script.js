let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let getOl = document.querySelector('#lista-tarefas');

button.innerHTML = 'Submit';


button.addEventListener('click', function (event) {
    let createList = document.createElement('li');
    getOl.appendChild(createList);
  
    createList.innerText = input.value

    if (input.value != '') {
        input.value = '';
    }
})
