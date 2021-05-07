function addTask() {
  const addButton = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');

  addButton.addEventListener('click', function () {
    const createLi = document.createElement('li');
    const input = document.getElementById('texto-tarefa');
    createLi.innerHTML = input.value;
    taskList.appendChild(createLi);
    input.value = '';
  })
}
addTask();

function changeItemBG() {
  const orderedList = document.getElementById('lista-tarefas');
  const listItems = orderedList.children;

  orderedList.addEventListener('click', function (event) {
    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].classList.remove('selected');
    };
    event.target.classList.add('selected');
  });

}
changeItemBG();

function taskCompleted() {
  const orderedList = document.getElementById('lista-tarefas');

  orderedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
taskCompleted();

function clearList() {
  const clearButton = document.getElementById('apaga-tudo');
  const orderedList = document.getElementById('lista-tarefas');

  clearButton.addEventListener('click', function () {
    orderedList.innerHTML = '';
    localStorage.savedTasks = '';
  })
}
clearList();

function removeCompleted() {
  const removeCompletedButton = document.getElementById('remover-finalizados');
  const completedItems = document.getElementsByClassName('completed');

  removeCompletedButton.addEventListener('click', function () {
    while (completedItems.length !== 0) {
      completedItems[0].remove();
    };
    // opcao de usar while lido no artigo: https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
  });
}
removeCompleted();

function removeSelected() {
  const removeSelectedButton = document.getElementById('remover-selecionado');
  const listItems = document.getElementById('lista-tarefas').children;

  removeSelectedButton.addEventListener('click', function () {
    for (let index = 0; index < listItems.length; index += 1) {
      if (listItems[index].classList.contains('selected')) {
        listItems[index].remove();
      }
    }
  });
}
removeSelected();

function storageTasks() {
  const taskList = document.getElementById('lista-tarefas');
  const saveItemsButton = document.getElementById('salvar-tarefas');

  if (localStorage.savedTasks == undefined) {
    taskList.innerHTML = '';
  } else {
    taskList.innerHTML = localStorage.savedTasks;
  }

  saveItemsButton.addEventListener('click', function () {
    localStorage.savedTasks = taskList.innerHTML;
  });
}
storageTasks();

function moveUp() {
  const upButton = document.getElementById('mover-cima');

  upButton.addEventListener('click', function () {
    const selectedItem = document.getElementsByClassName('selected')[0];
    sessionStorage.moveUpCacheInner = selectedItem.previousElementSibling.innerHTML;
    sessionStorage.moveUpCacheClass = selectedItem.previousElementSibling.className;

    selectedItem.previousElementSibling.innerHTML = selectedItem.innerHTML;
    selectedItem.previousElementSibling.className = selectedItem.className;

    selectedItem.innerHTML = sessionStorage.moveUpCacheInner;
    selectedItem.className = sessionStorage.moveUpCacheClass;

  });
}
moveUp();

function moveDown() {
  const downButton = document.getElementById('mover-baixo');

  downButton.addEventListener('click', function () {
    const selectedItem = document.getElementsByClassName('selected')[0];
    sessionStorage.moveDownCacheInner = selectedItem.nextElementSibling.innerHTML;
    sessionStorage.moveDownCacheClass = selectedItem.nextElementSibling.className;

    selectedItem.nextElementSibling.innerHTML = selectedItem.innerHTML;
    selectedItem.nextElementSibling.className = selectedItem.className;

    selectedItem.innerHTML = sessionStorage.moveDownCacheInner;
    selectedItem.className = sessionStorage.moveDownCacheClass;
  });
}
moveDown();
