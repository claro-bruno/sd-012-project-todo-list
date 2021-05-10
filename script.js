
//armazenando elementos uteis em variaveis//
let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let botaoApagarTudo = document.getElementById('apaga-tudo');
let botaoApagarFin = document.getElementById('remover-finalizados');
let botaoRemoverSel = document.getElementById('remover-selecionado');
let botaoSalvar = document.getElementById('salvar-tarefas');
let botaoMoverCima = document.getElementById('mover-cima');
let botaoMoverBaixo = document.getElementById('mover-baixo');
let elementoInput = document.getElementById('texto-tarefa');
let listaLis = document.getElementsByClassName('item-lista');

//criando uma div para guardar texto do botao mover cima//
let divBotaoMoverCima = document.createElement('div');
botaoMoverCima.appendChild(divBotaoMoverCima);
divBotaoMoverCima.id = 'texto-mover-cima';
divBotaoMoverCima.innerHTML = 'Subir tarefa';

//criando uma div para guardar texto do botao mover cima//
let divBotaoMoverBaixo = document.createElement('div');
botaoMoverBaixo.appendChild(divBotaoMoverBaixo);
divBotaoMoverBaixo.id = 'texto-mover-baixo';
divBotaoMoverBaixo.innerHTML = 'Descer tarefa';

//criando uma div para guardar texto do botao adicionar//
let divBotao = document.createElement('div');
botaoCriarTarefa.appendChild(divBotao);
divBotao.id = 'texto-botao';
divBotao.innerHTML = 'Adicionar';

//criando uma div para guardar texto do botao apagar tudo//
let divBotaoApagar = document.createElement('div');
botaoApagarTudo.appendChild(divBotaoApagar);
divBotaoApagar.id = 'texto-botao-apagar';
divBotaoApagar.innerHTML = 'Apagar tudo';

//criando uma div para guardar texto do botao apagar finalizados//
let divBotaoApagarFin = document.createElement('div');
botaoApagarFin.appendChild(divBotaoApagarFin);
divBotaoApagarFin.id = 'texto-botao-apagar-finalizados';
divBotaoApagarFin.innerHTML = 'Apagar finalizados';

//criando uma div para guardar texto do botao salvar//
let divBotaoSalvar = document.createElement('div');
botaoSalvar.appendChild(divBotaoSalvar);
divBotaoSalvar.id = 'texto-botao-salvar';
divBotaoSalvar.innerHTML = 'Salvar tarefas';

//criando uma div para guardar texto do botao remover selecionado//
let divBotaoRemoverSel = document.createElement('div');
botaoRemoverSel.appendChild(divBotaoRemoverSel);
divBotaoRemoverSel.id = 'texto-botao-remover-sel';
divBotaoRemoverSel.innerHTML = 'Remover selecionado';

//REQUISITO 5 e 6//
//função que cria event listener no botao, adiciona value na lista e limpa input//

function criaEventoBotao() {
  botaoCriarTarefa.addEventListener('click', function() {
    let novoLi = document.createElement('li');
    listaTarefas.appendChild(novoLi);
    novoLi.className = 'item-lista';
    novoLi.innerHTML = elementoInput.value;
    elementoInput.value = '';
  });
};

criaEventoBotao();

//REQUISITO 7 e 8//

function mudaCorItem() {
  let listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.addEventListener('click', function(event) {
    for (index = 0; index < listaLis.length; index += 1){
      listaLis[index].style.backgroundColor = '';
    }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
};

mudaCorItem();

//REQUISITO 9//

//função para riscar elemento com double-click e des-riscar com double-click//

function riscaItem() {
  let listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.addEventListener('dblclick', function(event) {
    if (event.target.className === 'item-lista completed'){
      event.target.className = 'item-lista';
    }else{
      event.target.className = 'item-lista completed'
    };
  });
};

riscaItem();

//REQUISITO 10//
//função do botão que ao ser clicado limpa a lista//

function apagaTudo() {
  let botaoApagador = document.getElementById('apaga-tudo');
    botaoApagador.addEventListener('click', function() {
      while (listaTarefas.firstChild) {
        listaTarefas.removeChild(listaTarefas.firstChild);
      };
    });
};

apagaTudo();

//REQUISITO 11//
//função do botão que remove itens finalizados da lista//

function removeFinalizados() {
  let botaoApagaFin = document.getElementById('remover-finalizados');
  botaoApagaFin.addEventListener('click', function() {
    let filhosListaTarefas = listaTarefas.children;
    for (index3 = 0; index3 < filhosListaTarefas.length; index3 += 1){
      if (filhosListaTarefas[index3].className === 'item-lista completed'){
        filhosListaTarefas[index3].remove();
        index3 -= 1;
      }
    };
  });
};
                     
removeFinalizados();

//REQUISITO 12//

//1-transformar a listaTarefas que é um objeto em uma string e armazenar no local storage//

function salvarLista() {
  localStorage.setItem('listaDeTarefas', listaTarefas.innerHTML);
};

function adicionaEventoSalvar() {
  botaoSalvar.addEventListener('click', salvarLista);
};

adicionaEventoSalvar();

window.onload = function () {
  let storageListaString = localStorage.getItem('listaDeTarefas'); //recupera lista como string//
  listaTarefas.innerHTML = storageListaString;
};

//REQUISITO 13 - adicionar event listeners aos botoes de mover e fazer funções especificas para cada um deles//

function adicionaEventoMoverCima () {
  botaoMoverCima.addEventListener('click', moverCima);
};

adicionaEventoMoverCima();


function moverCima() {
  const listaEstLis = document.querySelectorAll('.item-lista');
  for (index4 = 1; index4 < listaEstLis.length; index4 += 1){
    if (listaEstLis[index4].style.backgroundColor === 'rgb(128, 128, 128)') {
      listaTarefas.insertBefore(listaEstLis[index4], listaEstLis[index4].previousSibling);
    };
  };
};

function adicionaEventoMoverBaixo () {
  botaoMoverBaixo.addEventListener('click', moverBaixo);
};

adicionaEventoMoverBaixo();

function moverBaixo() {
  const listaEstLis = document.querySelectorAll('.item-lista');
  for (index5 = 0; index5 < listaEstLis.length - 1; index5 += 1){
    if (listaEstLis[index5].style.backgroundColor === 'rgb(128, 128, 128)') {
      listaTarefas.insertBefore(listaEstLis[index5], listaEstLis[index5].nextSibling.nextSibling);
    };
  };
};

//REQUISITO 14

function adicionaEventoRemoverSel () {
  botaoRemoverSel.addEventListener('click', function () {
    for (index6 = 0; index6 < listaLis.length; index6 += 1){
      if (listaLis[index6].style.backgroundColor === 'rgb(128, 128, 128)'){
        listaLis[index6].remove();
      };
    };
  });
};

adicionaEventoRemoverSel();
