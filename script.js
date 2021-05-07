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
Adicionar.addEventListener('click',addlist)
 
function limpalista(){
    let criado = document.querySelectorAll('li');
    criado = criado 
    -=1
    listarray.innerHTML = criado
    
    return licoroio
}
apagarGeralX.addEventListener('click', limpalista);
/*Adicionar.addEventListener('click',function(){
    listarray.push(caixaInput)
    return listarray
})
 
Adicionar.addEventListener('click',() => {
    listarray.push(caixaInput)
    return listarray
}*/