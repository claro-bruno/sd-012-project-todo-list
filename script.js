let input = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');
let createButton = document.getElementById('criar-tarefa');

function createTask() {
  let li = document.createElement('li');
  return li;
}

function clearInput() {
  input.value = '';
}

function newTask() {
  let newLi = createTask();
  newLi.className = 'task'
  newLi.innerText = input.value;
  list.appendChild(newLi);
  clearInput();
}

createButton.addEventListener('click', function() {
  newTask();
});

function selectTask(event) {
  const targetEvent = event.target;
  if (targetEvent.classList.contains('task')) {
    const currentTaskSelected = document.querySelector('.selected');
    if (currentTaskSelected !== null) {
      currentTaskSelected.classList.remove('selected');
    }
    targetEvent.classList.add('selected');
  };
};

document.addEventListener('click', selectTask);

function completedTask(event) {
  const targetedEvent = event.target;
  if (targetedEvent.classList.contains('task')) {
    if (targetedEvent.classList.contains('completed')) {
      targetedEvent.classList.remove('completed');
    } else {
      targetedEvent.classList.add('completed');
    }
  }
}

document.addEventListener('dblclick', completedTask);
