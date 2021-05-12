const buttonAdd = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const buttonClear = document.querySelector('#apaga-tudo');

function addTaskList() {
  buttonAdd.addEventListener('click', () => {
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
    console.log(event.target);
  });
}
strikethroughItem();

// Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

// Criar um botão no html e atribuir o id "apaga-tudo" - ok
// Adicionar um evento de click ao botão
buttonClear.addEventListener('click', (event) => {
  // Capturar todos os filhos da lista ordenada através de um array
  const olChildrens = document.querySelector('#lista-tarefas');
  while (olChildrens.hasChildNodes()) {
    olChildrens.removeChild(olChildrens.firstChild);
  }
});

  // remover os filhos da lista ordenada usando um for
