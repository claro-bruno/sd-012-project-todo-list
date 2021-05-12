const button = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

function addTaskList() {
  button.addEventListener('click', () => {
    if (inputTask.value !== '') {
      const newItem = document.createElement('li');
      newItem.innerHTML = inputTask.value;
      newItem.classList.add('tasks');
      listItems.appendChild(newItem);
      inputTask.value = '';
    }
  });
}
addTaskList();

function paintTask() {
  // capture todos os elementos da lista em forma de array
  const itemSelected = document.querySelectorAll('.tasks');

  for (let index = 0; index < itemSelected.length; index += 1) {
    // se o elemento tiver a classe selected pinte de vermelho
    if (itemSelected[index].classList.contains('selected')) {
      itemSelected[index].style.backgroundColor = 'rgb(128, 128, 128)';
      // se não tiver a classe selected pint de azul
    } else {
      itemSelected[index].style.backgroundColor = 'white';
    }
  }
}

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
  paintTask();
});
