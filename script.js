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
      listItems[index].style.backgroundColor = '';
    };
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });

}
changeItemBG();

function taskCompleted() {
  const orderedList = document.getElementById('lista-tarefas');

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
      if (listItems[index].style.backgroundColor === 'rgb(128, 128, 128)') {
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
