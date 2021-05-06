function createInput() {
  let textEntrance = document.createElement('input');
  textEntrance.id = 'texto-tarefa';
  document.body.appendChild(textEntrance);
}

createInput();

function createOrdenedList() {
  let taskList = document.createElement('ol');
  taskList.id = 'lista-tarefas';
  document.body.appendChild(taskList);
}

createOrdenedList();