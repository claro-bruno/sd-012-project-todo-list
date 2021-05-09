
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
btnDelete.       addEventListener('click', deleteTask);
btnUp.           addEventListener('click', upTask);
btnDown.         addEventListener('click', downTask);
btnClearComplete.addEventListener('click', clearCompleteTasks);
btnClearAll.     addEventListener('click', clearAllTasks);
// btnSaveList.     addEventListener('click', saveList);
// document.body.   addEventListener('click', removeClass);



function addTask(){
  let task = document.createElement('li');
  task.innerText = input.value;
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', markTaskAsDone);
  input.value = '';
  list.appendChild(task);
}

function selectTask(event){
  // if (event.target.classList.contains('selected')){
  //   removeClass();
  // }else{
  // }
  removeClass();
  event.target.classList.add('selected');
}

function removeClass(){
  for (let i = 0; i < document.querySelectorAll('.selected').length; i++){
    document.querySelectorAll('.selected')[i].classList.remove('selected');
  }
}
  
function markTaskAsDone(event){
  if (event.target.classList.contains('done')){
    event.target.classList.remove('done');
  }else{
    event.target.classList.add('done');
  }
}

function deleteTask(){
  if (document.getElementsByClassName('selected').length > 0){
    document.getElementsByClassName('selected')[0].remove();
  }
}

function clearCompleteTasks(){
  let list = document.getElementsByClassName('done');
  let len  = list.length;
  for (let i = len-1; i >=0; i--){
    list[i].remove();
  }
}

function clearAllTasks(){
  list.innerHTML = '';
}

function downTask(){
  try{
    let task = document.getElementsByClassName('selected')[0];
    let nextTask = task.nextElementSibling;
    let temp = nextTask.innerHTML;
    nextTask.innerHTML = task.innerHTML;
    task.innerHTML = temp;
    removeClass();
    nextTask.classList.add('selected');
  }catch(e){}
}

function upTask(){
  try{
    let task = document.getElementsByClassName('selected')[0];
    let previousTask = task.previousElementSibling;
    let temp = previousTask.innerHTML;
    previousTask.innerHTML = task.innerHTML;
    task.innerHTML = temp;
    removeClass();
    previousTask.classList.add('selected');
  }catch(e){}
}



















// let y = document.getElementsByTagName('body')[0];
// y.addEventListener('click', clickk);

// function clickk(){

  
//   let x = document.body.style;
//   x = JSON.stringify(x);
  
//   localStorage.setItem('body', x);
// }

// let recover = localStorage.getItem('body');

// recover = JSON.parse(recover);
