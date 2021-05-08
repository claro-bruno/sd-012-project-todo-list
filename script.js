//requisito 5 , muito parecido com exercicio bonus JavaScript - Eventos do site da trybe
function addNewTask() {
    let getInputField = document.querySelector('#texto-tarefa');
    let addInputButton = document.querySelector('#criar-tarefa');
    let orderList = document.querySelector('#lista-tarefas');
    
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        lista.className = 'item-list';
        newLi.innerText = getInputField.value;
        orderList.appendChild(newLi);
        getInputField.value = '';
      } 
    })
}; addNewTask();



