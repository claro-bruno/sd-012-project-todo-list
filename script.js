const button = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

function addTaskList() {
  button.addEventListener('click', () => {
    if (inputTask.value !== '') {
      const newItem = document.createElement('li');
      newItem.innerHTML = inputTask.value;
      listItems.appendChild(newItem);
      inputTask.value = '';
    }
  });
}
addTaskList();

ol.addEventListener('click', (event) => {
  // Capture o elemento que tenha a classe selected
  const itemSelected = document.querySelector('.selected');
  // se o elemento com a classe selected existir
  if (itemSelected !== null) {
    // remova a classe selected dele
    itemSelected.classList.remove('selected');
  }
  // Se o elemento com a classe selected não existir, adione a classe selected ao elemento clicado.
  event.target.classList.add('selected');
});

function paintTask() {
  ol.addEventListener('click', (event) => {
    console.log(event.target.className === 'selected');
    if (event.target.className === 'selected') {
      const clickedList = event.target;
      clickedList.style.backgroundColor = 'rgb(128,128,128)';
    }
  });
}
paintTask();

// devo pintar só quem tem a classe selected
