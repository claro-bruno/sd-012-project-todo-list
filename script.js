//requisito 5 é parecido com exercicio bonus JavaScript - Eventos do site da trybe
let addInputButton = document.querySelector('#criar-tarefa');
let orderList = document.querySelector('#lista-tarefas');

function addNewTask() {
    let getInputField = document.querySelector('#texto-tarefa');
    let list = document.createElement('li');
    list.className = 'item-list'
         if (getInputField.value.length > 0) {
        list.innerText = getInputField.value;
        orderList.appendChild(list);
        getInputField.value = '';
      } 
    };
    addInputButton.addEventListener('click', addNewTask);

let buttonClear = document.getElementById('apaga');
function clearAll() {
    orderList.innerHTML = '';
}
buttonClear.addEventListener('click', clearAll); 



 


