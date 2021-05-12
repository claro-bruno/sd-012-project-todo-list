
let createTask = document.querySelector('#texto-tarefa');
let listOl = document.querySelector('#lista-tarefas');
let buttonText = document.querySelector('#criar-tarefa');

//Adiciona tarefas na lista após digitar no campo de texto e clicar no botão.

function addItem (event) {
    
 
    if (createTask.value != "") {
        let newLi = document.createElement('li');
        newLi.innerHTML = document.querySelector('#texto-tarefa').value;
        listOl.appendChild(newLi);
        newLi.className = 'lista';
    
    
function changeColor (event){
 
    let grey = document.querySelector('.grey');
   
  
        event.target.classList.add('grey');
        // grey.classList.remove('grey');
}
    
    let allList = document.querySelector('.lista');

    allList.addEventListener('click', changeColor)

  
}
    //Apaga campo de texto
    createTask.value = "";
}
    buttonText.addEventListener('click', addItem)


//Tarefa 7

    let allList = document.querySelector('.lista');
    let greyColor = 'rgb(128, 128, 128)';
    let resetColor = 'white'
    let grey = document.querySelector('.grey');



//Tarefa 10
    let deleteButton = document.querySelector('#apaga-tudo');

function deleteList () {
    
    listOl.innerHTML = "";

    }
    deleteButton.addEventListener('click', deleteList)