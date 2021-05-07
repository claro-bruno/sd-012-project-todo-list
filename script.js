function insertTask(value) {
  const orderList = document.createElement('li');
  orderList.className = 'task-list';
  orderList.innerHTML = value;
  orderList.addEventListener('click', setGreyItem);
  const taskList = document.querySelector('#lista-tarefas');
  taskList.appendChild(orderList);
}

function receiveInput() {
  const contentInput = document.querySelector('#texto-tarefa').value;
  insertTask(contentInput);
  setGreyItem(); 
  taskCompleted();
  document.querySelector('#texto-tarefa').value = '';
}

function setGreyItem() {
  let orderList = document.querySelectorAll('.task-list');
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].addEventListener('click', function () {
      setNoBackgroundColor(orderList);
      orderList[index].classList.add('selected');
    })
  }
}

function setNoBackgroundColor(orderList) {
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].classList.remove('selected');
  }
}

function taskCompleted() {
  let orderList = document.querySelectorAll('.task-list'); 
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].addEventListener('dblclick', function () {
      if (orderList[index].className === 'task-list') {
        orderList[index].classList.add('completed');
      } else if (orderList[index].className === 'task-list selected') {
        orderList[index].classList.add('completed');
        orderList[index].classList.remove('selected');
      } else if (orderList[index].className === 'task-list completed' || orderList[index].className === 'task-list completed selected') {
        orderList[index].classList.remove('completed');
        orderList[index].classList.remove('selected');
      }
    })
  }
}

function clearInput() {
  let contentInput = document.querySelectorAll('.task-list');
  for (let index = 0; index < contentInput.length; index += 1) {
    contentInput[index].outerHTML = '';
  }
}
