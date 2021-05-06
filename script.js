// input id="texto-tarefa"
// ol id="lista-tarefas"
// button id="criar-tarefa"

const criaTarefaButton = document.getElementById('criar-tarefa');
const oderList = document.getElementById('lista-tarefas');

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    const inputText = document.getElementById('texto-tarefa')
    let lista = document.createElement('li');
    lista.className = 'item-list';
    lista.innerText = inputText.value
    oderList.appendChild(lista);
    inputText.value = ''
  }
})