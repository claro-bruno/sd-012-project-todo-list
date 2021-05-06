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
    const completed = document.querySelector('.completed');

    if (completed != null) {
      completed.classList.remove('completed');
    }
    event.target.classList.add('completed');
  });
}

window.onload = () => {
  createTask();
  selectedTask();
  completeTask();
};
