const createBtn = document.getElementById('criar-tarefa');
const InputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearCompleted = document.getElementById('remover-finalizados');
const clearAlltasks = document.getElementById('apaga-tudo');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUpBtn = document.getElementById('mover-cima');
const moveDownBtn = document.getElementById('mover-baixo');
const removeBtn = document.getElementById('remover-selecionado');

createBtn.addEventListener('click', createTask);

function createTask() {
  let task = document.createElement("li");
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

//
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

//
clearAlltasks.addEventListener('click', clearTasks);

function clearTasks() {
  let done = document.getElementsByTagName('li');
  for (let index = 0; index < done.length; index +=1) {
      done[index].remove();
      index -= 1;
  }
}

//
saveTasks.addEventListener('click', storeData);

function storeData() {
  localStorage.clear();
  localStorage.setItem(`lista`,taskList.innerHTML);

}

//
window.onload = getStoredata;

function getStoredata() {
taskList.innerHTML = localStorage.getItem('lista');
}

//
moveUpBtn.addEventListener('click', moveTaskup);

function moveTaskup(event) {
  let tasks = document.getElementsByTagName('li');
  for (let index = 1; index < (tasks.length); index += 1) {
    if (tasks[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      let aux1 = tasks[index].cloneNode(true);
      let aux2 = tasks[index-1].cloneNode(true);
      tasks[index].replaceWith(aux2);
      tasks[index-1].replaceWith(aux1);
      index = tasks.length;
    }
  }
}

moveDownBtn.addEventListener('click', moveTaskdown);

function moveTaskdown(event) {
  let tasks = document.getElementsByTagName('li');
  for (let index = 0; index < (tasks.length-1); index += 1) {
    if (tasks[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      let aux1 = tasks[index].cloneNode(true);
      let aux2 = tasks[index+1].cloneNode(true);
      tasks[index].replaceWith(aux2);
      tasks[index+1].replaceWith(aux1);
      index = tasks.length;
    }
  }
}

//
removeBtn.addEventListener('click', removeTask);

function removeTask() {
  let tasks = document.getElementsByTagName('li');
  console.log('1');
  for (let index = 0; index < (tasks.length); index += 1) {
    if (tasks[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      tasks[index].remove();
    }
  }
}