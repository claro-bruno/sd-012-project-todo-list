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
      console.log(true);
     console.log(listItem.classList.remove('completed'));
    }else {
      console.log(false);
      listItem.classList.add('completed');
    }
  });
  list.appendChild(listItem);
  text.value = '';
}
