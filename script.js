const buttonToDo = document.querySelector('#criar-tarefa');
const orderList = document.querySelector('#lista-tarefas');
const buttonClear = document.querySelector('#apaga-tudo');
const tarefas = document.getElementsByClassName('tarefa');
const buttonConcluded = document.querySelector('#remover-finalizados');
const buttonSave = document.querySelector('#salvar-tarefas');

function dbClick(event) {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function removeSelect(event) {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
    event.target.classList.add('selected');
    if (selected[index].classList !== 'tarefa selected') {
      selected[index].style.backgroundColor = '';
    }
  }
}

function changeBackgroud(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function createList() {
  const inputToDo = document.getElementById('texto-tarefa');
  const newLi = document.createElement('li');
  newLi.classList.add('tarefa');
  newLi.classList.add('selected');
  orderList.appendChild(newLi);
  newLi.textContent = inputToDo.value;
  inputToDo.value = '';

  newLi.addEventListener('click', removeSelect);
  // Parte 7 resolvida com auxílio do colega Rodrigo Facury:
  newLi.addEventListener('click', changeBackgroud);
  newLi.addEventListener('dblclick', dbClick);
}
buttonToDo.addEventListener('click', createList);

function clear() {
  for (let indexLi = tarefas.length - 1; indexLi >= 0; indexLi -= 1) {
    tarefas[indexLi].remove();
  }
}
buttonClear.addEventListener('click', clear);

function concluded() {
  for (let indexComp = tarefas.length - 1; indexComp >= 0; indexComp -= 1) {
    if (tarefas[indexComp].className.includes('completed')) {
      tarefas[indexComp].remove();
    }
  } 
}
buttonConcluded.addEventListener('click', concluded);
