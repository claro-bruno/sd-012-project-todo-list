
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
    
    

