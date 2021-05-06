
// Adiciona tarefa digitada pelo usuário;
function addTask() {
  const task = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const addButton = document.getElementById('criar-tarefa');
  task.focus();
  addButton.addEventListener('click', function () {
    const item = document.createElement('li');
    item.innerHTML = task.value;
    item.className = 'unselected';
    task.value = '';
    item.addEventListener('click', selectOnlyOne);
    item.addEventListener('dblclick', riskItem);
    list.appendChild(item);
    task.focus();
  });
}

function selectOnlyOne(elemento) {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected === null) {
    elemento.target.classList.add('selected');
  } else {
    itemSelected.classList.remove('selected');
    itemSelected.classList.add('unselected');
    elemento.target.classList.add('selected');
  }
}

function riskItem(elemento) {
  const cards = document.querySelectorAll('.completed');
  if (cards.length === 0) {
    elemento.target.classList.toggle('completed');
  } else {
    elemento.target.classList.toggle('completed');
  }
}

window.onload = function toDoList() {
  addTask();
}
