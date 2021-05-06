
// Adiciona tarefa digitada pelo usuário;
function addTask() {
  const task = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const addButton = document.getElementById('criar-tarefa');
  task.focus();
  addButton.addEventListener('click', function () {
    const item = document.createElement('li');
    item.innerHTML = task.value;
    list.appendChild(item);
    task.value = '';
  });
  

}

window.onload = function toDoList() {
  addTask();
}
