const buttonToDo = document.querySelector('#criar-tarefa');
const orderList = document.querySelector('#lista-tarefas');

function createList() {
  const inputToDo = document.getElementById('texto-tarefa');
  const newLi = document.createElement('li');
  newLi.classList.add('tarefa');
  newLi.classList.add('selected');
  orderList.appendChild(newLi);
  newLi.textContent = inputToDo.value;
  inputToDo.value = '';

  // Parte 7 resolvida com auxílio do colega Rodrigo Facury:
  newLi.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  // 
    const selected = document.querySelectorAll('.selected');
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected');

      if (selected[index] !== 'selected') {
        selected[index].style.backgroundColor = 'white';
      }
    }
    event.target.classList.add('selected');
  });
}

buttonToDo.addEventListener('click', createList);
