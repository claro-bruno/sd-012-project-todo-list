const createBtn = document.getElementById('criar-tarefa');
const InputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

createBtn.addEventListener('click', createTask);

function createTask() {
  let task = document.createElement("LI");
  task.innerText = InputTask.value;
  InputTask.value = '';
  taskList.appendChild(task);
}

taskList.addEventListener('click', selectTask);

function selectTask(event) {
  let tasks = document.getElementsByTagName('LI')
  for (index = 0; index < tasks.length; index +=1) {
    tasks[index].style.backgroundColor = 'rgb(255,255,255)';
    console.log(tasks[index].style);
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}