
//Requisito 05
let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaLista);
//Criando a lista de tarefas
function criaLista(event){
    event.preventDefault();
    let item = document.createElement('li');
    item.className = 'lista';
    document.querySelector('#lista-tarefas').appendChild(item);
    let returnList = document.getElementById('texto-tarefa').value;
    item.innerHTML = returnList;
    document.getElementById('texto-tarefa').value = '';

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

//}   
    

