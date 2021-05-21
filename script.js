let getItemList = document.getElementById('texto-tarefa');
let getList = document.getElementById('lista-tarefas');


function saveInput(){
    let createLi = document.createElement('li');
    createLi.innerText = getItemList.value; 
    createLi.className = 'list-item';
    getList.appendChild(createLi);
    getItemList.value = '';
    createLi.addEventListener('click', function(event){
        let pegaElemento = document.querySelector('.selected');
        
        if (pegaElemento === null) {
            event.target.classList.add('selected');
        } else {
            pegaElemento.classList.remove('selected');
            event.target.classList.add('selected');
        }
    })
    createLi.addEventListener('dblclick', function (event){
        
        if (event.target.classList.contains('completed') === false){
            event.target.classList.add('completed');
        } else {
            event.target.classList.remove('completed');
        }
    })

}

let botaoApagar = document.getElementById('apaga-tudo');

botaoApagar.addEventListener('click', function(){
    let pegaListItems = document.querySelectorAll('.list-item');
    
    for (let indexPegaList = 0; indexPegaList < pegaListItems.length; indexPegaList += 1) {
        pegaListItems[indexPegaList].remove();

    }

})

let botaoRemoverFinalizados = document.getElementById('remover-finalizados');

botaoRemoverFinalizados.addEventListener('click', function(){
    let pegaTodosLi = document.querySelectorAll('.list-item')
    
    for (let index = 0; index < pegaTodosLi.length; index += 1) {
        let pegaCadaLi = pegaTodosLi[index];
        
        if (pegaCadaLi.classList.contains('completed')) {
            pegaCadaLi.remove();
        }
    }
})

function saveTarefa() {
    let pegaTodosLi = document.getElementsByTagName('li');
    for (let index = 0; index < pegaTodosLi.length; index += 1) {
        localStorage.setItem("Tarefa " + index, pegaTodosLi[index].innerHTML);
        localStorage.setItem("Classes " + index, pegaTodosLi[index].className);
    }
    
    localStorage.setItem("Tarefas", pegaTodosLi.length)
}


window.onload = function () {
    let pegaTarefas = localStorage.getItem("Tarefas");
    for (let index = 0; index < pegaTarefas; index += 1) {
       let tarefa = localStorage.getItem("Tarefa " + index);
       let classes = localStorage.getItem("Classes " + index);
       let createList = document.createElement('li')
       createList.innerHTML = tarefa;
       createList.className = classes;
       getList.appendChild(createList);
       let getLiItems = document.getElementsByTagName('li')[index];
    }
}

