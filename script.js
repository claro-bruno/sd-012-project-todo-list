//*
function checarBotao() {
  const botaoClicado = document.getElementById('criar-tarefa');
  botaoClicado.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');
    /* event.preventDefault(); */
    novaTarefa.className='tarefas'
    document.querySelector('#lista-tarefas').appendChild(novaTarefa);
    let conteudoInput = document.getElementById('texto-tarefa');
    novaTarefa.innerHTML = conteudoInput.value;
    conteudoInput.value = '';
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
 
function limparTarefas() {
  let apagaTarefas = document.getElementById('apaga-tudo');
  apagaTarefas.addEventListener('click', function (event) {
    let tarefas = document.querySelector('#lista-tarefas');
    let todasTarefas = document.querySelectorAll('.tarefas');
      for (let indice = 0; indice < todasTarefas.length; indice += 1) {
      tarefas.removeChild(todasTarefas[indice]);
    }
  }) 
}

/* window.onload = function () { */
  checarBotao();
  marcarTarefaCumprida(); 
  let novobotao =  document.createElement('button');
  document.body.appendChild(novobotao);
  novobotao.id='apaga-tudo';
  novobotao.innerHTML="Limpar tarefas";
  limparTarefas();