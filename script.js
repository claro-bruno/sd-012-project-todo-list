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
function addlist(){
 let cria = document.createElement('li')
 cria.innerHTML = caixaInput.value;
    listarray.appendChild(cria) // elemento_pai.appendchild(elemento_filho)
    return cria
//aqui criamos uma variavel 'cria' para criamos as tags <li> dentro das nossas ul
};
function limpacaixa(){
    caixaInput.value= '';
    return caixaInput
    //nessa função atribuimos o valor '' para limpar a caixa apor clicar em adicionar 
}
Adicionar.addEventListener('click',addlist,);
Adicionar.addEventListener('click', limpacaixa);
//ate aqui cimprimos do requisito 1 ao 6 com exito <3
