
// BUSCA LISTA SALVA E RENDERIZA NO DOM
let temp =  JSON.parse(localStorage.getItem('saved list'));
if (temp != null){
  document.getElementById('lista-tarefas').outerHTML = temp;
  removeClass();
}

// INICIO
let btnAdicionar     = document.getElementById('criar-tarefa');
let input            = document.getElementById('texto-tarefa');
let list             = document.getElementById('lista-tarefas');
let btnDelete        = document.getElementById('remover-selecionado');
let btnUp            = document.getElementById('mover-cima');
let btnDown          = document.getElementById('mover-baixo');
let btnClearComplete = document.getElementById('remover-finalizados');
let btnClearAll      = document.getElementById('apaga-tudo');
let btnSaveList      = document.getElementById('salvar-tarefas');

// EVENT LISTENERS
btnAdicionar.    addEventListener('click', addTask);
btnDelete.       addEventListener('click', deleteTask);
btnUp.           addEventListener('click', upTask);
btnDown.         addEventListener('click', downTask);
btnClearComplete.addEventListener('click', clearCompleteTasks);
btnClearAll.     addEventListener('click', clearAllTasks);
btnSaveList.     addEventListener('click', saveList);
for (let i = 0; i < list.children.length; i++){
  list.children[i].addEventListener('click', selectTask);
  list.children[i].addEventListener('dblclick', markTaskAsDone);
}

// FUNCAO QUE ADICIONA TASK
function addTask(){
  let task = document.createElement('li');
  task.innerText = input.value;
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', markTaskAsDone);
  input.value = '';
  list.appendChild(task);
}

// FUNCAO QUE SELECIONA COM FUNDO CINZA
function selectTask(event){
  removeClass();
  event.target.classList.add('selected');
}

// FUNCAO AUXILIAR QUE REMOVE A CLASSE .selected
function removeClass(){
  for (let i = 0; i < document.querySelectorAll('.selected').length; i++){
    document.querySelectorAll('.selected')[i].classList.remove('selected');
  }
}
  
// FUNCAO QUE MARCA A TAREFA COMO CONCLUIDA
function markTaskAsDone(event){
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  }else{
    event.target.classList.add('completed');
  }
}

// FUNCAO QUE DELETA A TAREFA SELECIONADA
function deleteTask(){
  if (document.getElementsByClassName('selected').length > 0){
    document.getElementsByClassName('selected')[0].remove();
  }
}

// FUNCAO QUE DELETA AS TAREFAS COMPLETAS
function clearCompleteTasks(){
  let list = document.getElementsByClassName('completed');
  let len  = list.length;
  for (let i = len-1; i >=0; i--){
    list[i].remove();
  }
}

// FUNCAO QUE DELETA TODAS AS TAREFAS
function clearAllTasks(){
  list.innerHTML = '';
}

// FUNCAO QUE MOVE A TAREFA SELECIONADA PARA BAIXO
function downTask(){
  try{
    let task = document.getElementsByClassName('selected')[0];
    let nextTask = task.nextElementSibling;
    let temp = nextTask.innerHTML;
    nextTask.innerHTML = task.innerHTML;
    task.innerHTML = temp;
    temp = nextTask.className;
    nextTask.className = task.className;
    task.className = temp;
  }catch(e){}
}

// FUNCAO QUE MOVE A TAREFA SELECIONADA PARA CIMA
function upTask(){
  try{
    let task = document.getElementsByClassName('selected')[0];
    let previousTask = task.previousElementSibling;
    let temp = previousTask.innerHTML;
    previousTask.innerHTML = task.innerHTML;
    task.innerHTML = temp;
    temp = previousTask.className;
    previousTask.className = task.className;
    task.className = temp;
  }catch(e){}
}

// FUNCAO QUE SALVA O ESTADO ATUAL DA LISTA
function saveList(){
  let temp = JSON.stringify(list.outerHTML);
  localStorage.setItem('saved list', temp);
}