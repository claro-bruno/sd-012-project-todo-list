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

    // Capturar elemento com  a classe selected
    // Check elemento existe (if)
    // remove classe selected do item selecionado
    // adiciona classe selected no item clicado 
    
    /*let getListItems = document.getElementsByClassName('list-item');
    for (let getIndexList = 0; getIndexList < getListItems.length; getIndexList += 1) {
        getListItems[getIndexList].addEventListener('click', function(){
            getListItems[getIndexList].classList.add('selected');
        })
    }*/



}
