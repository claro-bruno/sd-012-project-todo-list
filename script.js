//CRIA TAREFA
const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', addTarefa);
function addTarefa(){
  const textoTarefa = document.querySelector('#texto-tarefa').value;
  if (textoTarefa !== '') {
    const addLi = document.createElement('li');
    addLi.innerHTML = textoTarefa;
    addLi.classList.add('listIten');
    addLi.addEventListener('click', selected);
    addLi.addEventListener('dblclick', concluded);
    document.querySelector('#lista-tarefas').appendChild(addLi);
    document.querySelector('#texto-tarefa').value = '';
  } else {
    alert('Adicione uma tarefa')
  };
};

//SELECIONA ITEM DA LISTA
function selected(event) {
  const selectedChange = document.querySelector('.selected');
  if (selectedChange){
    selectedChange.classList.remove('selected');
  };
  event.target.classList.add('selected');    
};

//ITEM 9 RISCAR TAREFA COM DOUBLE CLICK
function concluded (event){
  if(event.target.classList !== '.completed'){
    event.target.classList.toggle('completed')
  };
    
};

//APAGA TUDO
const deleteAll = document.querySelector('#apaga-tudo');
deleteAll.addEventListener('click', limpaTarefa);
function limpaTarefa (){
  const itensList = document.querySelector('#lista-tarefas');
  itensList.innerText = '';
};
//ITEM 11 REMOVE TAREFA CONCLUÍDA
const removeFinalizados = document.querySelector('#remover-finalizados');
removeFinalizados.addEventListener('click', removeConcluded);
function removeConcluded(event){
  if(event.target.classList){
    const taskConcluded = document.querySelectorAll('.completed');
    for(let cont = 0; cont < taskConcluded.length; cont += 1){
      taskConcluded[cont].remove();
    };
  };
};
//ITEM 12 SALVA TAREFAS - INCOMPLETO
const salvaTarefas = document.querySelector('#salvar-tarefas');
salvaTarefas.addEventListener('click', saveTask);
function saveTask(){
console.log('ok');
};
// ITEM 13 MOVER ITEM - INCOMPLETO
const moverCima = document.querySelector('#mover-cima');
moverCima.addEventListener('click', moveTask);
const moverBaixo = document.querySelector('#mover-baixo');
moverBaixo.addEventListener('click', moveTask);
function moveTask(){
console.log('ok');
};       
//REMOVE ITEM SELECIONADO
const removeSelecionado = document.querySelector('#remover-selecionado');
removeSelecionado.addEventListener('click', removeTarefa);
function removeTarefa() {
  const tarefa = document.querySelector('.selected');
  tarefa.remove()
};
