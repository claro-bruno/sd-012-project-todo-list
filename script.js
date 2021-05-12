const button = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

function addTaskList() {
  button.addEventListener('click', () => {
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

//  Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

// Escutador de eventos com dois cliques na lista ordenada (ol)
ol.addEventListener('dblclick', (event) => {
  // Capturar o target do click e adicionar a classe 'completed' ao nosso target
  event.target.classList.toggle('completed');
  // usar o classList.toggle para exibir/ocultar a classe completed
  console.log(event.target);
});
