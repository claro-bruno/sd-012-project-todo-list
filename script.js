let buttonAdicionar = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let inputTarefas = document.getElementById('texto-tarefa');

buttonAdicionar.addEventListener('click', () => {
  let criarLi = document.createElement('li');
  criarLi.innerHTML = inputTarefas.value;
  listaTarefas.appendChild(criarLi);
  //listaTarefas.insertBefore(criarLi, listaTarefas.childNodes[0]);
  inputTarefas.value = '';
})