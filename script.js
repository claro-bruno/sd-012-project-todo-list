const btnTaskCreate = document.querySelector('#criar-tarefa');
const textInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function taskCreator() {
  const taskItem = document.createElement('li');
  taskItem.className = 'tarefa';
  taskItem.innerText = textInput.value;
  textInput.value = '';
  taskList.appendChild(taskItem);
}

function selectTask(event) {
  const targetedEvent = event.target;
  if (targetedEvent.classList.contains('tarefa')) {
    const currentTaskSelected = document.querySelector('.selected');
    if (currentTaskSelected !== null) {
      currentTaskSelected.classList.remove('selected');
    }
    targetedEvent.classList.add('selected');
  }
}

function completeTask(event) {
  const targetedEvent = event.target;
  if (targetedEvent.classList.contains('tarefa')) {
    console.log('Pra quem fica minha...');
    if (targetedEvent.classList.contains('completed')) {
      targetedEvent.classList.remove('completed');
    } else {
      targetedEvent.className += ' completed';
    }
  }
}

window.onload = function page() {
  btnTaskCreate.addEventListener('click', taskCreator);
  document.addEventListener('click', selectTask);
  document.addEventListener('dblclick', completeTask);
};
