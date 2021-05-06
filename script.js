const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

newTaskButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(li);
});
