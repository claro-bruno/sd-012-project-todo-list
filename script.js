function criarTarefa() {
  const text = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');

  listItem.innerText = text.value;
  listItem.addEventListener('click', () => {
    const listItemGroup = list.children;
    for (const item of listItemGroup) {
      if (item.classList.contains('selected')) {
        item.classList.remove('selected');
      }
    }
    listItem.classList.add('selected');
  });
  listItem.addEventListener('dblclick', () => {
    if (listItem.classList.contains('completed') === true) {
      console.log(listItem.classList.remove('completed'));
    } else {
      listItem.classList.add('completed');
    }
  });
  list.appendChild(listItem);
  text.value = '';
}

function apagaLista() {
  const list = document.querySelector('#lista-tarefas');
  const listItemGroup = list.children;

  for (let index = 0; index < listItemGroup.length; index += 1) {
    listItemGroup[index].remove();
  }
  if (list.children.length > 0) {
    apagaLista();
  }
}
