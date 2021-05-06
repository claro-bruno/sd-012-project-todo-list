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
  if (event.target.className === 'item-list') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white'
    }
    event.target.classList.add ('selected');
  }
})

document.addEventListener('dblclick', (evento) => {
  let alvo = evento.target
  if (alvo.classList.contains('completed')) {
    alvo.classList.remove('completed')
  } else {
    alvo.classList.add('completed');
  }
})