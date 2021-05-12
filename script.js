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
    checarTarefaSelecionada();
  })
}

function checarTarefaSelecionada() {
  let listaClicada = document.getElementsByClassName("tarefas");
  for (let indice = 0; indice < listaClicada.length; indice += 1) {
    listaClicada[indice].addEventListener('click', function (event) {
      event.target.style.background = "rgb(128, 128, 128)";
    });
  }
}

/* window.onload = function () { */
checarBotao();

