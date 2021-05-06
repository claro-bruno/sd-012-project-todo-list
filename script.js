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
  if (targetElement.classList.contains('completed')) {
    targetElement.classList.remove('completed');
  } else if (targetElement.classList.contains('tarefa')){
    targetElement.classList.add('completed');
  }
}

function criaTarefa (){
  const li = document.createElement('li');
  li.innerHTML = inputTarefas.value;
  // inputTarefas.value = '';
  li.className = ('tarefa');
  listaTarefas.prepend(li);
}

function apagaTodas (){
  document.querySelectorAll('.tarefa').forEach(e => e.remove()); // Fonte: https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
}

function apagaFinalizadas (){
  document.querySelectorAll('.finalizada').forEach(e => e.remove()); // Fonte: https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
}

function apagaSelecionada (){
  document.querySelector('.selecionada').remove();
}

document.addEventListener('click', clicker);
document.addEventListener('dblclick', dblclicker);
