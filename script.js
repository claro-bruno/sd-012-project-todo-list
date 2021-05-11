let Adicionar = document.getElementById('criar-tarefa');
let apagarGeralX = document.getElementById('apaga-tudo');
let aCima = document.getElementById('mover-cima');
let aBaixo = document.getElementById('mover-baixo');
let limpaComp = document.getElementById('remover-finalizados');
let salvaLis = document.getElementById('salvar-tarefas');
let removeSel = document.getElementById('remover-selecionado');
//ate aqui caapturei todos os elementos html dos botões <3
let caixaInput = document.getElementById('texto-tarefa');
let listarray = document.getElementById('lista-tarefas');
//aqu capturei os elementos html da caixa de input e do arrey que iremos criar com ela <3

function addlist() {
  let cria = document.createElement('li')
  cria.innerHTML = caixaInput.value;
  cria.className = 'cria'
  listarray.appendChild(cria) // elemento_pai.appendchild(elemento_filho)
  return cria
  //aqui criamos uma variavel 'cria' para criamos as tags <li> dentro das nossas ul
};

function limpacaixa() {
  caixaInput.value = '';
  return caixaInput
  //nessa função atribuimos o valor '' para limpar a caixa apor clicar em adicionar 
}
Adicionar.addEventListener('click', addlist, );
Adicionar.addEventListener('click', limpacaixa);
//ate aqui cimprimos do requisito 1 ao 6 com exito <3

function trocaofundico() {
  let listItem = document.querySelectorAll('li'); //------------------------------------// aqui criamos uma variavel e atribuimos a ela a tag li com o query selector
  for (let posicaoDoarray = 0; posicaoDoarray < listItem.length; posicaoDoarray += 1) {// enquanto o posição do array for menor que o tamanho  do meu arrey  index recebe o antigo valor dele +1
    listItem[posicaoDoarray].addEventListener('click', (clicaste) => { //-------------// aqui a variavel (lis[posição do array])  recebe um evento cujo um click seguido de um parametro 
      let xablau = (clicaste).target; //---------------------------------------------// aqui é onde nasce o xablau que entra como alvo do paramentro da nossa função
      xablau.                   //----------------------// adicionamos um backgroud diferenciado para xablau 
      xablau.style.borderradius = '10px' //----------------------------------------//aqui damos um trato na bordinha do xablau (viva ao xablau )
    });
  }
};
//----------------------------------------------------------------------------// oprigado por ler a fanfique do xablau ̣:roket:


/*function removecolor() {
  for (let index = 0; index < listItem.length; index++) {
    if (listItem[index] == style.css.backgroundColor('rgb(128,128,128)')) {
      listItem[index] = listItem.style.backgroundColor = 'white'
    } 
  }
}
listarray.addEventListener('click', trocaofundico, removecolor)*/
 
apagarGeralX.addEventListener('click',apagaTudo);{
  function apagaTudo(){
    while (listarray.firstChild) {
      listarray.removeChild(listarray.firstChild)
    }
  }
};
