function createTask() {
  const input = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    const createItem = document.createElement('li');
    createItem.innerHTML = input.value;
    list.appendChild(createItem);
    input.value = '';
  });
}

window.onload = () => {
  createTask();
};
