
// Adiciona tarefa digitada pelo usuário;
function addTask() {
  const task = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const addButton = document.getElementById('criar-tarefa');
  task.focus();
  addButton.addEventListener('click', function () {
    const item = document.createElement('li');
    item.addEventListener('click', selectOnlyOne);
    item.innerHTML = task.value;
    item.className = 'unselected';
    task.value = '';
    list.appendChild(item);
    task.focus();
  });
}

function selectOnlyOne(elemento) {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected === null) {
    elemento.target.className = 'selected';
  } else {
    itemSelected.className = 'unselected';
    elemento.target.className = 'selected';
  }
}

window.onload = function toDoList() {
  addTask();
}
