function clearTextInput() {
    document.querySelector('input').value = '';
}

let buttonAdd = document.querySelector('#criar-tarefa');
let listOfItems = document.querySelector('#lista-tarefas');
buttonAdd.addEventListener('click', () => {
    let valueInput = document.querySelector('input').value;
    let itemList = document.createElement('li');
    itemList.innerHTML = valueInput;
    itemList.className = 'task';
    listOfItems.appendChild(itemList);
    clearTextInput();
})

//Consegui com ajuda do Ronald no plantão, também era dúvida de outro colega
function selectTask(event) {
    let targetedEvent = event.target;
    if (targetedEvent.classList.contains('task')) {
      let currentTaskSelected = document.querySelector('.selected');
      if (currentTaskSelected !== null) {
        currentTaskSelected.classList.remove('selected');
      }
      targetedEvent.classList.add('selected');
    }
  }

//Consegui realizar com ajuda de um colega e do Ronald no plantão:
function completeTask(event) { 
  let targetedEvent = event.target;
  if (targetedEvent.classList.contains('task')) {
    if (targetedEvent.classList.contains('completed')) {
      targetedEvent.classList.remove('completed');
    } else {
      targetedEvent.className += ' completed';
    }
  }
}

//Consegui com ajuda do post no Slack do colega:
let eraseListButton = document.getElementById('apaga-tudo');
function listClear() {
  let taskList = document.getElementById('lista-tarefas');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
}



window.onload =  function() {
    document.addEventListener('click', selectTask);
    document.addEventListener('dblclick', completeTask);
    eraseListButton.addEventListener('click', listClear);
}
