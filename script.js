function addTask() {
  let addButton = document.getElementById('criar-tarefa');
  let taskList = document.getElementById('lista-tarefas');

  addButton.addEventListener('click', function () {
    let createLi = document.createElement('li');
    let input = document.getElementById('texto-tarefa');
    createLi.innerHTML = input.value;
    taskList.appendChild(createLi);
    input.value = '';
  })
}
addTask();

function changeItemBG() {
  let orderedList = document.getElementById('lista-tarefas');
  let listItems = orderedList.children;

  orderedList.addEventListener('click', function (event) {
    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].style.backgroundColor = '';
    };
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });

}
changeItemBG();

function taskCompleted() {
  let orderedList = document.getElementById('lista-tarefas');

  orderedList.addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.className = 'completed';
    }
  });
}
taskCompleted();

function clearList() {
  let clearButton = document.getElementById('apaga-tudo');
  let orderedList = document.getElementById('lista-tarefas');

  clearButton.addEventListener('click', function () {
    orderedList.innerHTML = '';
  })
}
clearList();

function removeCompleted() {
  let removeCompletedButton = document.getElementById('remover-finalizados');
  let completedItems = document.getElementsByClassName('completed');
  let numberOfElements = completedItems.length;

  removeCompletedButton.addEventListener('click', function () {
    while (completedItems.length !== 0){
      completedItems[0].remove();
    };
    // opcao de usar while lido no artigo: https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
  });
}
removeCompleted();