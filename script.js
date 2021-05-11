const button = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
// capturar a lista ordenada
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

function paintTask() {
  ol.addEventListener('click', (event) => {
    const clickedList = event.target.style;
    clickedList.backgroundColor = 'rgb(128,128,128)';
  });
}
paintTask();
