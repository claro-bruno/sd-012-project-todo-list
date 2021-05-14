const containerTitle = document.querySelector('#title'); //Criando a partir do dom
const containerSubTitle = document.querySelector('#funcionamento'); //Criando a partir do dom
const listItem = document.querySelector('#lista-tarefas');
const clickButton = document.querySelector('#criar-tarefa');
const inputList = document.querySelector('#texto-tarefa');
const getColorCinza = 'rgb(128,128,128)';
const buttonApagar = document.getElementById('apaga-tudo');
const clear = document.querySelector('.selected'); //revisar
const task = document.getElementsByTagName('li');



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

//quest 6 e 7

function getSelect(event) {
  const clear = document.querySelector('.selected'); 
  if (clear !== null) { 
    clear.classList.remove('selected'); 
  }
  event.target.style.backgroundColor = getColorCinza ; 
}

// quest 9
function clickDoble(event) {
  if (event.target.classList.contains('completed')) { 
    event.target.classList.remove('completed'); 
  } else {
    event.target.classList.add('completed');
  }
}

function eventGetLi() {
  const ContainerLi = document.createElement('li');
  ContainerLi.innerText = inputList.value;
  ContainerLi.addEventListener('click', getSelect); 
  ContainerLi.addEventListener('dblclick', clickDoble); 
  listItem.appendChild(ContainerLi);
  inputList.value = '';
}

function inputNewTask() {
  clickButton.addEventListener('click', eventGetLi);
}
inputNewTask();

// quest 10
function apagar () {
  listItem.innerHTML = '';
  }
  buttonApagar.addEventListener('click', apagar);

// quest 11
function clearList() {
    const GetComplet= listItem.querySelectorAll('.completed');
  for (let index = 0; index < GetComplet.length; index += 1) {
    const element = GetComplet[index];
    listItem.removeChild(element);
  }
}

function buttonGetCompleted() {
  const clickEraseCompleted = document.getElementById('remover-finalizados');

  clickEraseCompleted.addEventListener('click', clearList);
}
buttonGetCompleted();









