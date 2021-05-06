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
  document.querySelector('#texto-tarefa').value = '';
}

// function setGreyItem() {
//   let orderList = document.querySelectorAll('.task-list');
//     for (let index = 0; index < orderList.length; index += 1) {
//     orderList[index].addEventListener('click', function(){
//       orderList[index].id = ' selected';
//     //   orderList[index].classList.add('selected');
//     })
//   }
// }
// setGreyItem();

function setGreyItem(){
  let orderList = document.querySelectorAll('.task-list')
  for (let index = 0; index < orderList.length; index += 1){
    orderList[index].style.backgroundColor = 'rgb(128, 128, 128)';
  }
}
setGreyItem();