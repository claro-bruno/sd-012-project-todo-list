
// onclick, add class selected
// INICIO
let btnAdicionar     = document.getElementById('criar-tarefa');
let input            = document.getElementById('texto-tarefa');
let list             = document.getElementById('lista-tarefas');
let btnDelete        = document.getElementById('btn-delete');
let btnUp            = document.getElementById('btn-up');
let btnDown          = document.getElementById('btn-down');
let btnClearComplete = document.getElementById('btn-clear-complete');
let btnClearAll      = document.getElementById('btn-clear-all');
let btnSaveList      = document.getElementById('btn-save-list');

// EVENT LISTENERS
btnAdicionar.    addEventListener('click', addTask);
// btnDelete.       addEventListener('click', deleteTask);
// btnUp.           addEventListener('click', upTask);
// btnDown.         addEventListener('click', downTask);
// btnClearComplete.addEventListener('click', clearCompleteTasks);
// btnClearAll.     addEventListener('click', clearAllTasks);
// btnSaveList.     addEventListener('click', saveList);



function addTask(){
  let task = document.createElement('li');
  task.innerText = input.value;
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', markTaskAsDone);
  input.value = '';
  list.appendChild(task);
}

function selectTask(event){
  for (let i = 0; i < list.children.length; i++){
    list.children[0].style.backgroundColor = '';
    console.log(i);
  }
  let caller = event.target;
  console.log(caller);
}

function markTaskAsDone(){
  console.log('masAsDone');
}






