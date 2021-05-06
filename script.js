let list = document.getElementById('lista-tarefas');

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    const listItem = document.createElement('li');
    listItem.classList.add('item-list');
    const tarefa = document.getElementById('texto-tarefa');
    listItem.innerText = tarefa.value;
    list.appendChild(listItem);
    tarefa.value = '';
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item-list')) {
    const clicked = event.target;
    const selected = document.querySelector('.selected');
    if (document.querySelector('.selected') !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'rgb(175, 209, 142)';
    }
    clicked.classList.add('selected');
    clicked.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}, false);

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('item-list')) {
    const itemList = event.target;
    if (itemList.classList.contains('completed')) {
      itemList.classList.remove('completed');
    } else {
      itemList.classList.add('completed');
    }
  }
}, false);


document.addEventListener('click', (event) => {
  if (event.target.id === 'apaga-tudo') {
    lista.innerHTML = '';
  }
}, false);



