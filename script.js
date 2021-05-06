const createBtn = document.getElementById('criar-tarefa');
const InputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearCompleted = document.getElementById('remover-finalizados');
const clearAlltasks = document.getElementById('apaga-tudo');

createBtn.addEventListener('click', createTask);

function createTask() {
  let task = document.createElement("LI");
  task.innerText = InputTask.value;
  InputTask.value = '';
  taskList.appendChild(task);
}

taskList.addEventListener('click', selectTask);

function selectTask(event) {
  let tasks = document.getElementsByTagName('li');
  for (let index = 0; index < tasks.length; index +=1) {
    tasks[index].style.backgroundColor = 'rgb(255,255,255)';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

taskList.addEventListener('dblclick', taskCompleted);

function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {event.target.classList.add('completed');}
}

clearCompleted.addEventListener('click', clearDone);

function clearDone() {
  let done = document.getElementsByTagName('li');
  for (let index = 0; index < done.length; index +=1) {
    if (done[index].classList.contains('completed')) {
      done[index].remove();
      index -= 1;
    }
  }
}

clearAlltasks.addEventListener('click', clearTasks);

function clearTasks() {
  let done = document.getElementsByTagName('li');
  for (let index = (done.length - 1); index == 0; index -=1) {
      done[index].remove();
  }
}