let buttonAdicionar = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let inputTarefas = document.getElementById('texto-tarefa');
let elementosDaLista = listaTarefas.childNodes;

buttonAdicionar.addEventListener('click', () => {
  let criarLi = document.createElement('li');
  criarLi.innerHTML = inputTarefas.value;
  listaTarefas.appendChild(criarLi);
  //listaTarefas.insertBefore(criarLi, listaTarefas.childNodes[0]);
  inputTarefas.value = '';
  marcarTarefa();
  tarefaCompleta()
})

function marcarTarefa() {
  for (let n = 0; n < elementosDaLista.length; n += 1) {
    elementosDaLista[n].addEventListener('click', (event) => {
      let element = document.querySelector('.selected');
      if (element != null) {
        element.classList.remove('selected');
      }
      event.target.classList.add('selected');
    })
  }
}

function tarefaCompleta() {
  for (let n = 0; n < elementosDaLista.length; n += 1) {
    elementosDaLista[n].addEventListener('dblclick', (event) => {
      if (elementosDaLista[n].classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    })
  }
}