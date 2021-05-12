const btAdd = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const btClear = document.querySelector('#apaga-tudo');
const btClearDone = document.querySelector('#remover-finalizados');

function addTaskList() {
  btAdd.addEventListener('click', () => {
    if (inputTask.value !== '') {
      const newItem = document.createElement('li');
      newItem.innerHTML = inputTask.value;
      newItem.classList.add('tasks');
      listItems.appendChild(newItem);
      inputTask.value = '';
    }
  });
}
addTaskList();

function paintTask() {
  const itemSelected = document.querySelectorAll('.tasks');
  for (let index = 0; index < itemSelected.length; index += 1) {
    if (itemSelected[index].classList.contains('selected')) {
      itemSelected[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      itemSelected[index].style.backgroundColor = 'white';
    }
  }
}

function selectItem() {
  ol.addEventListener('click', (event) => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected !== null) {
      itemSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
    paintTask();
  });
}
selectItem();

function strikethroughItem() {
  ol.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
strikethroughItem();

function clearTaskList() {
  btClear.addEventListener('click', () => {
    const olChildrens = document.querySelector('#lista-tarefas');
    while (olChildrens.hasChildNodes()) {
      olChildrens.removeChild(olChildrens.firstChild);
    }
  });
}
clearTaskList();

// Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
btClearDone.addEventListener('click', () => {
  const completedList = document.querySelectorAll('.completed');

  for (let index = 0; index < completedList.length; index += 1) {
    completedList[index].parentNode.removeChild(completedList[index]);
    console.log('olá');
  }
})
