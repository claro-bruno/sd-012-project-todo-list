const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const listElement = document.getElementsByClassName('list-item');
const removeList = document.getElementById('apaga-tudo');
const removeCompleted = document.getElementById('remover-finalizados');

addTask.addEventListener('click', addListItem);

function addSelected(event) {
  const eventTarget = event.target;
  for (let index = 0; index < listElement.length; index += 1) {
    if (listElement[index].classList.contains('selected')) {
      listElement[index].classList.remove('selected');
    }
  }
  eventTarget.classList.add('selected')
}


function addListItem() {
  let listItem = document.createElement('li');
  listItem.innerHTML = input.value;
  listItem.classList.add('list-item');
  list.appendChild(listItem);
  input.value = '';
  listItem.addEventListener('click', addSelected);
  listItem.addEventListener('dblclick', addLineThrough);
}


function addLineThrough(event) {
  const eventTarget = event.target;
  if (eventTarget.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

removeList.addEventListener('click', eraseList);
function eraseList (){
    list.innerHTML = ''
}

function eraseCompleted() {
    const selectedItens = document.querySelectorAll('.completed');
    for (let index = 0; index < selectedItens.length; index += 1) {
      if (selectedItens[index].classList.contains('completed')) {
        list.removeChild(selectedItens[index]);
      }
    }
  }
 removeCompleted.addEventListener('click', eraseCompleted);