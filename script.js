let input = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');
let createButton = document.getElementById('criar-tarefa');

function createTask() {
  let li = document.createElement('li');
  return li;
}

function clearInput() {
  input.value = '';
}

function newTask() {
  let newLi = createTask();
  newLi.className = 'task'
  newLi.innerText = input.value;
  list.appendChild(newLi);
  clearInput();
}

createButton.addEventListener('click', function() {
  newTask();
});

function selectTask(event) {
  const targetEvent = event.target;
  if (targetEvent.classList.contains('task')) {
    const currentTaskSelected = document.querySelector('.selected');
    if (currentTaskSelected !== null) {
      currentTaskSelected.classList.remove('selected');
    }
    targetEvent.classList.add('selected');
  };
};

document.addEventListener('click', selectTask);

function completedTask(event) {
  const targetedEvent = event.target;
  if (targetedEvent.classList.contains('task')) {
    if (targetedEvent.classList.contains('completed')) {
      targetedEvent.classList.remove('completed');
    } else {
      targetedEvent.classList.add('completed');
    }
  }
}

document.addEventListener('dblclick', completedTask);

function removeAllTasks() {
  const tasksList = list.children.length;
  for (let index = 0; index < tasksList; index += 1) {
    const task = document.querySelector('.task');
    list.removeChild(task);
  }
}

const removeButton = document.getElementById('apaga-tudo');
removeButton.addEventListener('click', removeAllTasks);

function removeCompletedTasks() {
  const allCompletedTasks = document.querySelectorAll('.completed')
  for (let index = 0; index < allCompletedTasks.length; index += 1) {
    const completedTask = document.querySelector('.completed');
      list.removeChild(completedTask);
    }
  }

const removeCompletedButton = document.getElementById('remover-finalizados');
removeCompletedButton.addEventListener('click', removeCompletedTasks);

const saveButton = document.getElementById('salvar-tarefas');
function saveTasks() {
  localStorage.setItem('tarefas-salvas', list.innerHTML);
  alert('A lista foi salva');
}
saveButton.addEventListener('click', saveTasks);

window.onload = () => {
  let savedTasks = localStorage.getItem('tarefas-salvas');
  list.innerHTML = savedTasks;
};

const moveUpButton = document.getElementById('mover-cima');
function moveTaskUp() {
  let li = document.getElementsByTagName('li');
  for (index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected') && li[index].previousSibling !== null) {
      li[index].parentNode.insertBefore(li[index], li[index].previousElementSibling);
    } else if (li[index].classList.contains('selected') && li[index].previousSibling === null) {
      alert('Essa tarefa já está no topo da lista')
    }
  }
}

moveUpButton.addEventListener('click', moveTaskUp);

const moveDownButton = document.getElementById('mover-baixo');
function moveTaskDown() {
  let parentElement = document.getElementsByTagName('ol');
  let selected = document.querySelector('.selected');
  if (selected && selected.nextSibling) {
    parentElement[0].insertBefore(selected, selected.nextSibling.nextSibling);
  } else if (selected.nextSibling === null) {
    alert('Essa tarefa já esta no final da lista')
  }
}
moveDownButton.addEventListener('click', moveTaskDown);
