const listaTarefas = document.getElementById('lista-tarefas');
const inputTexto = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
// const task = document.getElementsByTagName('li');
const botaoLimpar = document.getElementById('apaga-tudo');
const removerFinalizados = document.querySelector('#remover-finalizados');
const removerSelecionado = document.querySelector('#remover-selecionado');
const salvarTarefas = document.querySelector('#salvar-tarefas');
// const inputValue = document.getElementById('texto-tarefa');

function createLi() {
  criarTarefa.addEventListener('click', () => {
    const criarLista = document.createElement('li');
    criarLista.className = 'task';
    criarLista.innerHTML = inputTexto.value;
    listaTarefas.appendChild(criarLista);
    inputTexto.value = '';
  });
}
createLi();

function backgroundColor() {
  listaTarefas.addEventListener('click', (event) => {
    const classSelected = document.querySelector('.selected');
    if (classSelected) {
      classSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
backgroundColor();

function lineThrough() {
  listaTarefas.addEventListener('dblclick', (evt) => {
    evt.target.classList.toggle('completed');
  });
}
lineThrough();

function limparLista() {
  listaTarefas.innerHTML = '';
}
botaoLimpar.addEventListener('click', limparLista);

//  exercicio feito com ajuda do meu colega caio morato
function limparComplete() {
  removerFinalizados.addEventListener('click', () => {
    const finalizados = document.querySelectorAll('.completed');
    finalizados.forEach((evt) => {
      evt.remove();
    });
  });
}
limparComplete();

function limparSelected() {
  removerSelecionado.addEventListener('click', () => {
    const selecionado = document.querySelector('.selected');
    selecionado.remove(selecionado);
  });
}
limparSelected();

function salvarItem() {
  salvarTarefas.addEventListener = () => {
    localStorage.setItem('tarefas', listaTarefas.innerHTML);
  };
  const pegaSave = localStorage.getItem('tarefas');
  if (pegaSave) {
    listaTarefas.innerHTML = pegaSave;
  }
}
salvarItem();
