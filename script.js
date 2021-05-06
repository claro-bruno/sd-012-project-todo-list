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
  document.querySelector('#texto-tarefa').value = '';
}

//req7 - RESOLVE USANDO CLASS, MAS NÃO RESOLVE NO AVALIADOR
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

//req7 - RESOLVE NO AVALIADOR
// function setGreyItem(){
//   let orderList = document.querySelectorAll('.task-list')
//   for (let index = 0; index < orderList.length; index += 1){
//     orderList[index].style.backgroundColor = 'rgb(128, 128, 128)';
//   }
// }
// setGreyItem();

//req7 - ACHO QUE ESTA CERTO, MAS NÃO RESOLVE NO AVALIADOR
function setGreyItem() {
  let orderList = document.querySelectorAll('.task-list');
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].addEventListener('click', function () {
      setNoBackgroundColor(orderList);
      // orderList[index].style.backgroundColor = 'rgb(128, 128, 128)';
      orderList[index].classList.add('selected');
    })
  }
}

function setNoBackgroundColor(orderList) {
  for (let index = 0; index < orderList.length; index += 1) {
    orderList[index].classList.remove('selected');
  }
}

