
// Adiciona tarefa digitada pelo usuário;
function addTask() {
  const task = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const addButton = document.getElementById('criar-tarefa');
  task.focus();
  addButton.addEventListener('click', function () {
    const item = document.createElement('li');
    item.addEventListener('click', changeBgTaskClick);
    item.innerHTML = task.value;
    item.className = 'item';
    list.appendChild(item);
    task.value = '';
  });
}

function changeBgTaskClick(element) {
  element.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

window.onload = function toDoList() {
  addTask();
}
