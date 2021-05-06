const listaTarefas = document.querySelector('#lista-tarefas');
const inputTarefas = document.querySelector('#texto-tarefa');

function clicker(eventObject) {
  const targetElement = eventObject.target;
  if (targetElement.classList.contains('tarefa')) {
    let selecionada = document.querySelector('.selecionada');
    if (selecionada){ // Fonte: https://gomakethings.com/avoiding-errors-when-using-queryselector-in-vanilla-js/
      selecionada.classList.remove('selecionada');
    }
    targetElement.classList.add('selecionada');
  }
}

function dblclicker(eventObject) {
  const targetElement = eventObject.target;
  if (targetElement.classList.contains('tarefa')) {
    targetElement.classList.add("finalizada");
  }
}


function criaTarefa (){
  const li = document.createElement('li');
  li.innerHTML = inputTarefas.value;
  // inputTarefas.value = '';
  li.className = ('tarefa');
  listaTarefas.appendChild(li);
  const tarefas = document.getElementsByClassName('tarefa');
  const finalizadas = document.getElementsByClassName('finalizada');
  const numTarefas = tarefas.length;
  const numFinalizadas = finalizadas.length;
}
function apagaTodas (){
  for (let deletada of tarefas){
    deletada.remove();
  }
}
function apagaFinalizadas (){
  for (let index = 0; index < numFinalizadas; index += 1){
    let deletada = finalizadas[index];
    deletada.remove();
  }
}
function apagaSelecionada (){
  let deletada = listaTarefas.querySelector('.selecionada');
  deletada.remove();
}




document.addEventListener('click', clicker);
document.addEventListener('dblclick', dblclicker);
