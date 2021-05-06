const buttonToDo = document.querySelector('#criar-tarefa');
const orderList = document.querySelector('#lista-tarefas');

function createList() {
  const inputToDo = document.getElementById('texto-tarefa');
  const newLi = document.createElement('li');
  newLi.classList.add('tarefa');
  orderList.appendChild(newLi);
  newLi.textContent = inputToDo.value;
  inputToDo.value = '';

  newLi.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })

  newLi.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
  })
}

buttonToDo.addEventListener('click', createList);
