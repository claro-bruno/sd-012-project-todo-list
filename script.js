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
    criaLi.addEventListener('dblclick', addCompleted);
    
    pegaTextoTarefa = document.querySelector('#texto-tarefa').value = '';
  });
};
criandoLi();

// Remove a classe » selected «
function removeSelected() {
  let pegaLi = document.querySelectorAll('li');
  for (let index = 0; index < pegaLi.length; index += 1) {
    pegaLi[index].classList.remove('selected');
  };
};

// Seleciona um ítem da lista
function selecionaLi(event) {
  removeSelected();
  event.target.className += ' selected';
};

// Remove classe Completed.
function removeCompleted() {
  pegaLi = document.querySelectorAll('li');
  for (let index = 0; index < pegaLi.length; index += 1) {
    pegaLi[index].addEventListener('dblclick', function(event) {
      event.target.classList.remove('completed');
    });
  };
};

// Adiciona classe Completed
function addCompleted(event) {
  removeCompleted();
  event.target.className += ' completed';
}
