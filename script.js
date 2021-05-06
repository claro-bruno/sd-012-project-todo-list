const list = document.getElementById('lista-tarefas');
function createTask() {
  const input = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');

  button.addEventListener('click', () => {
    const createItem = document.createElement('li');
    createItem.className = 'list-item';
    createItem.innerHTML = input.value;
    list.appendChild(createItem);
    input.value = '';
  });
}

function selectedTask() {
  list.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected-item');

    if (selected != null) {
      selected.classList.remove('selected-item');
    }
    event.target.classList.add('selected-item');
  });
}

function completeTask() {
  list.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function removeTasks() {
  const removeBtn = document.getElementById('apaga-tudo');

  removeBtn.addEventListener('click', () => {
    list.remove('li');
  });
}

function removeFinalizedTasks() {
  const removeBtn = document.getElementById('remover-finalizados');

  removeBtn.addEventListener('click', () => {
    const finalizedTask = document.querySelectorAll('.completed');
    for (let index = 0; index < finalizedTask.length; index += 1) {
      finalizedTask[index].remove('completed');
    }
  });
}

window.onload = () => {
  createTask();
  selectedTask();
  completeTask();
  removeTasks();
  removeFinalizedTasks();
};
