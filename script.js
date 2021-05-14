let getItemList = document.getElementById('texto-tarefa');
let getList = document.getElementById('lista-tarefas');


function saveInput(){
    let createLi = document.createElement('li');
    createLi.innerText = getItemList.value; 
    createLi.className = 'list-item';
    getList.appendChild(createLi);
    getItemList.value = '';
    
    let getListItems = document.querySelectorAll('.list-item');
    for (let indexListItem = 0; indexListItem < getListItems.length; indexListItem += 1){
        getListItems[indexListItem].addEventListener('click', function(){
            getListItems[indexListItem].style.backgroundColor = 'rgb(128,128,128)';
        })
    }
}




