// ...
const pegaCriarTarefa = document.getElementById('criar-tarefa');
const pegaListaTarefas = document.getElementById('lista-tarefas');

function criandoLi() {

  pegaCriarTarefa.addEventListener('click', function(){
    let pegaTextoTarefa = document.querySelector('#texto-tarefa').value;
  

    let criaLi = document.createElement('li');
    pegaListaTarefas.appendChild(criaLi);

    criaLi.innerText = pegaTextoTarefa;
    
    pegaTextoTarefa = document.querySelector('#texto-tarefa').value = '';
    
  });
  
};
criandoLi();
