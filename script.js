let buttonAdicionar = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let inputTarefas = document.getElementById('texto-tarefa');
let buttonApagar = document.getElementById('apaga-tudo');
let removeFinalizados = document.getElementById('remover-finalizados');
let elementosDaLista = listaTarefas.childNodes;
 
buttonAdicionar.addEventListener('click', () => {
  let criarLi = document.createElement('li');
  criarLi.innerHTML = inputTarefas.value;
  listaTarefas.appendChild(criarLi);
  inputTarefas.value = '';
})

listaTarefas.addEventListener('click', (event) => {
  let element = document.querySelector('.selected');
  if (element != null) {
    element.classList.remove('selected');
  }
  event.target.classList.add('selected');
})

listaTarefas.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
})

buttonApagar.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
})

removeFinalizados.addEventListener('click', () => {
  let completos = document.querySelectorAll('.completed');
  for (let n = 0; n < completos.length; n += 1) {
    if (completos[n].classList.contains('completed')){
      completos[n].remove();
    }
  }
})