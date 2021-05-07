let Adicionar = document.getElementById('criar-tarefa');
let apagarGeralX = document.getElementById('apaga-tudo');
let aCima = document.getElementById('mover-cima');
let aBaixo = document.getElementById('mover-baixo');
let limpaComp = document.getElementById('remover-finalizados');
let salvaLis = document.getElementById('salvar-tarefas');
let removeSel = document.getElementById('remover-selecionado');

let caixaInput = document.getElementById('texto-tarefa');
let listarray = document.getElementById('lista-tarefas');

function addlist(){
 let cria = document.createElement('li')
 cria.innerHTML = caixaInput.value;
    listarray.appendChild(cria)
    return cria

};
function limpacaixa(){
    caixaInput.value= '';
    return caixaInput
}
Adicionar.addEventListener('click',addlist,);
Adicionar.addEventListener('click', limpacaixa);
//ate aqui cimprimos do requisito 1 ao 6 com exito <3
