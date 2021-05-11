const containerTitle = document.querySelector('#title'); //Criando a partir do dom
const containerSubTitle = document.querySelector('#funcionamento'); //Criando a partir do dom
const listItem = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');
const inputList = document.querySelector('#texto-tarefa');


//Questao 1

getTitle = 'Minha Lista de Tarefasdo';
let addTitle = document.createElement('h1');
addTitle.innerHTML = getTitle;
containerTitle.appendChild(addTitle)

//questao 2

getSubTitle = 'Clique duas vezes em um item para marcá-lo como completo';
let addSubTitle = document.createElement('p');
addSubTitle.innerHTML = getSubTitle;
containerSubTitle.appendChild(addSubTitle)

//questao 5 && 6

button.addEventListener('click', addInput);

function addInput(){
    let listConteiner = document.createElement('li');
    listConteiner.innerText = inputList.value;
    listConteiner.addEventListener('click', addInput);
    inputList.value = '';
    listItem.appendChild(listConteiner);
  }
