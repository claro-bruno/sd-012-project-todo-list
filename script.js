window.onload = function page() {
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

  btnTaskCreate.addEventListener('click', taskCreator);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('tarefa')) {
      const currentTaskSelected = document.querySelector('.selected');
      console.log(currentTaskSelected);
      if (currentTaskSelected !== null) {
        currentTaskSelected.classList.remove('selected');
      }
      event.target.classList.add("selected")
    }
  })
};
