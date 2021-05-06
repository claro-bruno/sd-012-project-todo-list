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

function selectTask(event) {
    const targetedEvent = event.target;
    if (targetedEvent.classList.contains('task')) {
      const currentTaskSelected = document.querySelector('.selected');
      if (currentTaskSelected !== null) {
        currentTaskSelected.classList.remove('selected');
      }
      targetedEvent.classList.add('selected');
    }
  }

window.onload =  function() {
    document.addEventListener('click', selectTask);
}
