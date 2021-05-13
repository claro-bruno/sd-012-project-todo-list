//*
function checarBotao() {
  const botaoClicado = document.getElementById('criar-tarefa');
  botaoClicado.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');
    /* event.preventDefault(); */
    novaTarefa.className='tarefas';
    document.querySelector('#lista-tarefas').appendChild(novaTarefa);
    let retornoLista = document.getElementById('texto-tarefa');
    novaTarefa.innerHTML = retornoLista.value;
    retornoLista.value = '';
    checarTarefaSelecionada();
    marcarTarefaCumprida();
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
  console.log("comeco da rotina");
  let listaTarefas = document.getElementsByClassName("tarefas");
  for (let indice = 0; indice < listaTarefas.length; indice += 1) {
    listaTarefas[indice].addEventListener('dblclick', function (event) {
      if (event.target.className === 'tarefas completed') {
        console.log("ja esta marcada");
        event.target.classList.remove('completed');
      } else {
        console.log("vou remover");
        event.target.classList.add('completed');
      }
    });
  }
}
/* window.onload = function () { */
checarBotao();

