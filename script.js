function completedTask(event){
    if (event.target.className.includes('completed')){
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}

function modifyColor(event) {
  const getListGray = document.querySelector('.gray');
  if (getListGray !== null) {
    getListGray.classList.remove('gray');
  }
  event.target.classList.add('gray');
}

function addTask() {
    const newTask = document.createElement('li');
    newTask.innerHTML = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';
    newTask.addEventListener('click', changeColor);
    newTask.addEventListener('dblclick', completedTask);
    document.querySelector('#lista-tarefas').appendChild(newTask);
  }

const madeTask = document.querySelector('#criar-tarefa');
madeTask.addEventListener('click', addTask);

function cleanList() {
    let tasksList = document.querySelector('#lista-tarefas');
    while (tasksList.firstChild !== null) {
      tasksList.firstChild.remove();
    } 
  }

const cleanButton = document.querySelector('#apaga-tudo');
cleanButton.addEventListener('click', cleanList);

function cleanCompleted() {
  let finishedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < finishedTask.length; index += 1) {
    finishedTask[index].remove();
  }
}

const completedButton = document.querySelector('#remover-finalizados');
completedButton.addEventListener('click', cleanCompleted);