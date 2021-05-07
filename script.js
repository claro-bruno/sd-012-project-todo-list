const lista = document.getElementById('lista-tarefas');

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    const listItem = document.createElement('li');
    listItem.classList.add('item-list');
    const tarefa = document.getElementById('texto-tarefa');
    listItem.innerText = tarefa.value;
    lista.appendChild(listItem);
    tarefa.value = '';
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item-list')) {
    const clicked = event.target;
    const selected = document.querySelector('.selected');
    if (document.querySelector('.selected') !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white';
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
  if (event.target.id === 'remover-finalizados') {
    const completed = document.querySelectorAll('.completed');
    for (let i = 0; i < completed.length; i += 1) {
      completed[i].remove();
    }
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.id === 'apaga-tudo') {
    lista.innerHTML = '';
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.id === 'salvar-tarefas') {
    localStorage.setItem('lista', lista.innerHTML);
  }
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'mover-cima') {
    const targeto = document.querySelector('.selected');
    try {
      if (targeto.previousElementSibling.className === 'item-list') {
        lista.insertBefore(targeto, targeto.previousElementSibling);
      }
    } catch (exception) {
      console.log('final da lista');
    }
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.id === 'mover-baixo') {
    const targeto = document.querySelector('.selected');
    try {
      lista.insertBefore(targeto, targeto.nextElementSibling.nextElementSibling);
    } catch (error) {
      console.log('final da lista');
    }
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.id === 'remover-selecionado') {
    const selected = document.querySelectorAll('.selected');
    for (let i = 0; i < selected.length; i += 1) {
      selected[i].remove();
    }
  }
}, false);

function loadList() {
  lista.innerHTML = localStorage.getItem('lista');
}

loadList();
