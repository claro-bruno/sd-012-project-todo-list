let botao = document.querySelector('#criar-tarefa');
function adicionarTarefa() {
  let caixaTexto = document.querySelector('#texto-tarefa');
  let lista = document.getElementById('lista-tarefas');
  let criarLi = document.createElement('li');
  criarLi.textContent =  caixaTexto.value;
  lista.appendChild(criarLi);
  caixaTexto.value = '';
}

botao.addEventListener('click', adicionarTarefa);
