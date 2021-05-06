function createTask() {
  const input = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    const createItem = document.createElement('li');
    createItem.className = 'list-item';
    createItem.innerHTML = input.value;
    list.appendChild(createItem);
    input.value = '';
  });
}

function selectedItem() {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected-item');

    if (selected != null) {
      selected.classList.remove('selected-item');
    }
    event.target.classList.add('selected-item');
  });
}

window.onload = () => {
  createTask();
  selectedItem();
};
