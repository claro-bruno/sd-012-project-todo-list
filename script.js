// Adiciona funcionalidade ao botão para criar tarefas
const pegaCriarTarefa = document.getElementById('criar-tarefa');
const pegaListaTarefas = document.getElementById('lista-tarefas');
pegaCriarTarefa.style.cursor = 'pointer';

function criandoLi() {
  pegaCriarTarefa.addEventListener('click', function(){
    let pegaTextoTarefa = document.querySelector('#texto-tarefa').value;

    let criaLi = document.createElement('li');
    pegaListaTarefas.appendChild(criaLi);

    criaLi.innerText = pegaTextoTarefa;
    criaLi.style.cursor = 'pointer';
    criaLi.addEventListener('click', selecionaLi);
    
    pegaTextoTarefa = document.querySelector('#texto-tarefa').value = '';
  });
};
criandoLi();

// Seleciona um ítem da lista
function selecionaLi(event) {
  event.target.className = 'selected';
}