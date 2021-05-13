
let createTask = document.querySelector('#texto-tarefa');
let listOl = document.querySelector('#lista-tarefas');
let buttonText = document.querySelector('#criar-tarefa');

//Adiciona tarefas na lista após digitar no campo de texto e clicar no botão.

function addItem (event) {
    
 
    // if (createTask.value != "") {
        let newLi = document.createElement('li');
        newLi.innerHTML = document.querySelector('#texto-tarefa').value;
        listOl.appendChild(newLi);
        // newLi.className = 'lista';

        createTask.value = "";
    }
        buttonText.addEventListener('click', addItem)
    
    
function changeColor (event){
 
    let newClass = document.getElementsByTagName('li');

    for(index = 0; index<newClass.length; index += 1){

        newClass[index].classList.remove('grey');

    }

    // let grey = document.querySelector('.grey');
        event.target.classList.add('grey');
     
        // grey.classList.remove('grey');
}
    listOl.addEventListener('click', changeColor)

  

    //Apaga campo de texto
  

//Tarefa 7

    let allList = document.querySelector('.lista');
    let greyColor = 'rgb(128, 128, 128)';
    // let resetColor = 'white'
    let grey = document.querySelector('.grey');

//Tarefa 09

//  function styleList (event) {

// let list = [];
// for (index = 0; index <list.length; index += 1){
//     let saveList = list [index] ;
//     let styleList = document.querySelector('#texto-tarefa')
//     event.target.classList.add ('completed') 
//     document.getElementsByClassName('completed').style.textDecoration = "line-through";
    
// }

//  }
//  allList.addEventListener('dblclick', styleList)

//Tarefa 10
    let deleteButton = document.querySelector('#apaga-tudo');

function deleteList () {

    listOl.innerHTML = "";

    }
    deleteButton.addEventListener('click', deleteList)