function insertTask(value) {
  const orderList = document.createElement('li');
  orderList.className = 'task-list';
  orderList.innerHTML = value;
  const taskList = document.querySelector('#lista-tarefas');
  
  taskList.appendChild(orderList);
}

 function receiveInput(){
    let contentInput = document.querySelector('#texto-tarefa').value;
    insertTask(contentInput);
    document.querySelector('#texto-tarefa').value = '';
}
