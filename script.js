let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let divList = document.querySelector('.listHolder');

button.addEventListener('click', () => {
    let ol = divList.querySelector('ol');
    let li = document.createElement('li');
    ol.appendChild(li);
});
    



