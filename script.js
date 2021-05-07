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

function setNoBackgroundColor(orderList) {
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].classList.remove('selected');
  }
}

function setGreyItem() {
  const orderList = document.querySelectorAll('.task-list');
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].addEventListener('click', function () {
      setNoBackgroundColor(orderList);
      orderList[index].classList.add('selected');
    });
  }
}

function taskCompleted() {
  let orderList = document.querySelectorAll('.task-list');
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].addEventListener('dblclick', function() {
      if (orderList[index].classList.contains('completed')) {
        orderList[index].classList.remove('completed');
      } else {
        orderList[index].classList.add('completed');
      }
    })
  }
}

function clearTasks() {
  const tasks = document.querySelectorAll('.task-list');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].outerHTML = '';
  }
}

function clearTaskCompleted() {
  const tasks = document.querySelectorAll('.completed');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].outerHTML = '';
  }
}

function saveTasks() {

}

function moveUp() {
  
}

function moveDown() {
  
}

function clearTaskSelected() {
  const tasks = document.querySelectorAll('.selected');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].outerHTML = '';
  }
}
