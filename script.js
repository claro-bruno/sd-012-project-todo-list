window.onload = function page() {
  const btnTaskCreate = document.querySelector('#criar-tarefa');
  const textInput = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  function taskCreator() {
    const taskItem = document.createElement('li');
    taskItem.innerText = textInput.value;
    textInput.value = '';
    taskList.appendChild(taskItem);
  }

  btnTaskCreate.addEventListener('click', taskCreator);
};
