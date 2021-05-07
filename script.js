const createBtn = document.getElementById('criar-tarefa');
const InputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearCompleted = document.getElementById('remover-finalizados');
const clearAlltasks = document.getElementById('apaga-tudo');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUpBtn = document.getElementById('mover-cima');
const moveDownBtn = document.getElementById('mover-baixo');
const removeBtn = document.getElementById('remover-selecionado');
const selectedColor = 'rgb(128, 128, 128)';

// Acrescentar tarefa
function createTask() {
  const task = document.createElement('li');
  task.innerText = InputTask.value;
  InputTask.value = '';
  taskList.appendChild(task);
}

createBtn.addEventListener('click', createTask);

// Seleciona tarefa
function selectTask(event) {
  const tasks = document.getElementsByTagName('li');
  const selectedLi = event.target;
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].style.backgroundColor = 'rgb(255,255,255)';
  }
  selectedLi.style.backgroundColor = selectedColor;
}

taskList.addEventListener('click', selectTask);

// Marca tarega como completa
function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else { event.target.classList.add('completed'); }
}

taskList.addEventListener('dblclick', taskCompleted);

// Limpa tarefas selecionadas
function clearDone() {
  const done = document.getElementsByTagName('li');
  for (let index = 0; index < done.length; index += 1) {
    if (done[index].classList.contains('completed')) {
      done[index].remove();
      index -= 1;
    }
  }
}

clearCompleted.addEventListener('click', clearDone);

// Apaga todas as tarefas
function clearTasks() {
  const done = document.getElementsByTagName('li');
  for (let index = 0; index < done.length; index += 1) {
    done[index].remove();
    index -= 1;
  }
}

clearAlltasks.addEventListener('click', clearTasks);

// Armazena o HTML da lista
function storeData() {
  localStorage.clear();
  localStorage.setItem('lista', taskList.innerHTML);
}

saveTasks.addEventListener('click', storeData);

// Resgata o HTML do localStorage
function getStoredata() {
  taskList.innerHTML = localStorage.getItem('lista');
}

window.onload = getStoredata;

// Sobe a Task na lista
function moveTaskup() {
  const tasks = document.getElementsByTagName('li');
  for (let index = 1; index < (tasks.length); index += 1) {
    if (tasks[index].style.backgroundColor === selectedColor) {
      const aux1 = tasks[index].cloneNode(true);
      const aux2 = tasks[index - 1].cloneNode(true);
      tasks[index].replaceWith(aux2);
      tasks[index - 1].replaceWith(aux1);
      index = tasks.length;
    }
  }
}

moveUpBtn.addEventListener('click', moveTaskup);

// Desce a Task na lista
function moveTaskdown() {
  const tasks = document.getElementsByTagName('li');
  for (let index = 0; index < (tasks.length - 1); index += 1) {
    if (tasks[index].style.backgroundColor === selectedColor) {
      const aux1 = tasks[index].cloneNode(true);
      const aux2 = tasks[index + 1].cloneNode(true);
      tasks[index].replaceWith(aux2);
      tasks[index + 1].replaceWith(aux1);
      index = tasks.length;
    }
  }
}

moveDownBtn.addEventListener('click', moveTaskdown);

// Remove item selecionado
function removeTask() {
  const tasks = document.getElementsByTagName('li');
  for (let index = 0; index < (tasks.length); index += 1) {
    if (tasks[index].style.backgroundColor === selectedColor) {
      tasks[index].remove();
    }
  }
}

removeBtn.addEventListener('click', removeTask);
