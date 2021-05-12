let createTask = document.querySelector('#texto-tarefa');
let listOl = document.querySelector('#lista-tarefas');
let buttonText = document.querySelector('#criar-tarefa');

//Adiciona tarefas na lista após digitar no campo de texto e clicar no botão.

function addItem (event) {
    
    if (createTask.value != "") {
        let newLi = document.createElement('li');
        newLi.innerHTML = document.querySelector('#texto-tarefa').value;
        listOl.appendChild(newLi);
    }
    //Apaga campo de texto
createTask.value = "";
}
buttonText.addEventListener('click', addItem)

