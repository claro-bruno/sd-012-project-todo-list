
//Requisito 05
let botao = document.getElementById('criar-tarefa');
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

// //Requisito 10
// let botaoApagar = getElementById('apaga-tudo');
// botãoApagar.addEventListener('click', apagaItem);
// function apagaItem(event){
//     if (target.classList.contains('selected')||target.classList.contains('completed')){
//        event.target.classList.remove.target; 

//     }
// }

 
    

