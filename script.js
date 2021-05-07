const buttonToDo = document.querySelector('#criar-tarefa');
const orderList = document.querySelector('#lista-tarefas');
const buttonClear = document.querySelector('#apaga-tudo');
const tarefas = document.getElementsByClassName('tarefa');

function dbClick(event) {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createList() {
  const inputToDo = document.getElementById('texto-tarefa');
  const newLi = document.createElement('li');
  newLi.classList.add('tarefa');
  newLi.classList.add('selected');
  orderList.appendChild(newLi);
  newLi.textContent = inputToDo.value;
  inputToDo.value = '';

  newLi.addEventListener('click', (event) => {
    const selected = document.querySelectorAll('.selected');
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected');
      event.target.classList.add('selected');
      if (selected[index].classList !== 'tarefa selected') {
        selected[index].style.backgroundColor = '';
      }
    }
  });

  // Parte 7 resolvida com auxílio do colega Rodrigo Facury:
  newLi.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  newLi.addEventListener('dblclick', dbClick);
}

buttonToDo.addEventListener('click', createList);

buttonClear.addEventListener('click', () => {
  for (let indexLi = tarefas.length -1; indexLi >= 0; indexLi -= 1) {
    tarefas[indexLi].remove();
  }
});