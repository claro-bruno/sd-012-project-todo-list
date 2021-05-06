const listaTarefas = document.querySelector('#lista-tarefas')
const inputTarefas = document.querySelector('#texto-tarefa')

function clicker(eventObject) {
  const targetElement = eventObject.target;
  if (targetElement.classList.contains('pixel')) {
    targetElement.style.backgroundColor = selected;
  } else if (targetElement.classList.contains('color')) {
    document.querySelector('.selected').className = ('color');
    targetElement.className = ('color selected');
    selected = window.getComputedStyle(targetElement).backgroundColor;
  }
}

document.addEventListener('click', clicker);

function criaTarefa (){
  const li = document.createElement('li');
  li.innerHTML = inputTarefas.value;
  li.className = ('tarefa');
  listaTarefas.appendChild(li);
}
function apagaTodas (){
  
}
function apagaFinalizadas (){
  
}
function apagaSelecionada (){
  
}