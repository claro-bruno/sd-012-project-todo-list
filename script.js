//requisito 5 e 6  O requisito 5 é parecido com exercicio bonus JavaScript - Eventos do site da trybe
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

//requisito 7 parecido com exercicio 10 JavaScript - Eventos do site da trybe
   
    document.addEventListener('click',(event) =>{
      if (event.target.className === 'item-list') {
        let selected = document.querySelector('.selected')
         if (selected !== null) {
          selected.classList.remove('selected');    
        selected.style.backgroundColor = 'white';
      }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    
      }
    });
  