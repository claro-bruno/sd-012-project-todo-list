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