
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
    console.log('oi');
   
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
