//*
function checarBotao() {
  const botaoClicado = document.getElementById('criar-tarefa');
  botaoClicado.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');
    /* event.preventDefault(); */
    novaTarefa.className='tarefas'
    document.querySelector('#lista-tarefas').appendChild(novaTarefa);
    let retornoLista = document.getElementById('texto-tarefa');
    novaTarefa.innerHTML = retornoLista.value;
    retornoLista.value = '';
    checarTarefaSelecionada();
  })
}

function checarTarefaSelecionada() {
  let listaClicada = document.getElementsByClassName("tarefas");
  for (let indice = 0; indice < listaClicada.length; indice += 1) {
    listaClicada[indice].addEventListener('click', function (event) {
      for (let indice2 = 0; indice2 < listaClicada.length; indice2 += 1) {
        listaClicada[indice2].style.background = "";
      }
      event.target.style.backgroundColor = "rgb(128, 128, 128)";
    });
  }
}

function marcarTarefaCumprida() { 
  let listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {                         
      event.target.classList.add('completed');
    }
  });
} 

function adicionaBotaoLimpar () {
  /* let pai = document.body.createElement('button');

  const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
    const filhoPrimeiroFilhoDoFilho = document.createElement('div');
    filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
    primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

 */
}
 
/* window.onload = function () { */
  adicionaBotaoLimpar();
  marcarTarefaCumprida(); 
  checarBotao();

