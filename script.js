function createOrderList(){
  let orderList = document.createElement('ol');
  orderList.id = 'lista-tarefas'
  document.body.appendChild(orderList);
}
createOrderList();