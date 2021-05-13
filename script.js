
//Requisito 05
const botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaLista);
//Criando a lista de tarefas

function criaLista(event){
    event.preventDefault();
    let item = document.createElement('li');
    item.className = 'lista';
    document.querySelector('#lista-tarefas').appendChild(item);
    let returnList = document.getElementById('texto-tarefa');
    item.innerHTML = returnList.value;
    returnList.value = '';

}

let listaTarefas = document.querySelector('#lista-tarefas');
listaTarefas.addEventListener('click', alteraCor);  //está aguardano o momento do click por isso fora da função

function alteraCor(event){
    let buscaColor = document.getElementsByClassName('lista');
    for(let index = 0; index < buscaColor.length; index += 1){
    buscaColor[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
}
//Requisito 09
function completedTask(event){

if(event.target.classList.contains('completed') === true){
    event.target.classList.remove('completed')
}else{
    event.target.classList.add('completed')
}
}
listaTarefas.addEventListener('dblclick', completedTask);

//Requisito 10 - Função apaga
const botaoApagar = document.getElementById('apaga-tudo');

function apagaItem(event) {
    event.preventDefault();
    listaTarefas.innerHTML = '';
    //localStorage.clear();
   // console.log('oi');
   
}
 botaoApagar.addEventListener('click', apagaItem);


//Requisito 11 - Função apaga finalizados
const botaoExcluiFinalizados = document.getElementById('remover-finalizados');
function removerFinalizados(event){
event.preventDefault();
let conteudoLista = document.querySelectorAll('.completed');
        for(let index = 0; index < conteudoLista.length; index += 1){
            if(conteudoLista[index].classList.contains('completed') === true){
                conteudoLista[index].remove()
            }
        
        
       
        }   
}
botaoExcluiFinalizados.addEventListener('click', removerFinalizados);


//Requisito 12 -Função salvar tarefa
//Requisito 
const botaoSalvar = document.getElementById('salvar-tarefas');
function salvarTarefa(event){
event.preventDefault();
localStorage.setItem('tarefas-salvas', listaTarefas.innerHTML);//local storage deve salvar um objeto
alert('A lista foi salva');    

}
botaoSalvar.addEventListener('click', salvarTarefa);
    
window.onload = () => {
    let tarefasSalvas = localStorage.getItem('tarefas-salvas');
    listaTarefas.innerHTML = tarefasSalvas;//o conteúdo interno da lista de tarefas será atualizado com o conteúdo de tarefas-salvas.
    
}

//Requisito 13
//Move para cima

const botaoAcima = document.getElementById('mover-cima');
function moverParaCima(){
    let li = document.getElementsByTagName('li');
        //verendo a lista de li's
    for(let index = 0; index < li.length; index +=1){
        //se a li for selecionada
        if (li[index].classList.contains('selected') && li[index].previousSibling !== null) {
            //tenha esse comportamento
            li[index].parentNode.insertBefore(li[index], li[index].previousElementSibling);
        
    }

}
}
botaoAcima.addEventListener('click', moverParaCima);

//const botaoAbaixo = document.getElementById('mover-cima');


//Move p/ cima02
// const botaoAcima = document.getElementById('mover-cima');
// function moverParaAcima(){
//     let paiElement = document.getElementsByTagName('ol');
//     let selAcima = document.querySelector('.selected');
//     paiElement[0].insertBefore(selAcima, selAcima.previousSibling); 
//     if(selAcima.lastIndexOf(searchElement)){
        
//     }
// }
// botaoAcima.addEventListener('click', moverParaAcima);

//Move p/ baixo
const botaoAbaixo = document.getElementById('mover-baixo');
function moverParaBaixo(){
    //atribui a variável li a tag li
    let paiElement = document.getElementsByTagName('ol');
    let selAbaixo = document.querySelector('.selected');
    if(selAbaixo && selAbaixo.nextSibling){
    paiElement[0].insertBefore(selAbaixo, selAbaixo.nextSibling.nextSibling);
}
}
botaoAbaixo.addEventListener('click', moverParaBaixo);

//Requisito 14 Remover selecionado

// const botaoApagarSelecionado = document.getElementsById('remover-selecionado');
// function deleteSelected(){
//     let itemSelecionado = document.querySelectorAll('.selected');
//     for(let index = 0; index < itemSelecionado.length; index += 1)
//         if(itemSelecionado[index].classList.contains('completed') === true){
//             itemSelecionado[index].remove();
//     }
   
// }
// botaoApagarSelecionado.addEventListener('click', deleteSelected);
