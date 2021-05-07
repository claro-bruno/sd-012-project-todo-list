const criaTarefaButton = document.getElementById('criar-tarefa');
const oderList = document.getElementById('lista-tarefas');











document.addEventListener('click', (event) => {
  const alvo = event.target;
  if (alvo.id === 'criar-tarefa') {
    const inputText = document.getElementById('texto-tarefa')
    let lista = document.createElement('li');
    lista.className = 'item-list';
    lista.innerText = inputText.value
    oderList.appendChild(lista);
    inputText.value = '';
  }
  if (alvo.className === 'item-list') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white';
    }
    alvo.classList.add ('selected');
  }
  if (alvo.id === 'apaga-tudo') {
    oderList.innerHTML = '';
  }
  if (alvo.id === 'remover-finalizados') {
    let selecionados = document.querySelectorAll('.completed') // descobrir por que que com o querySelectorAll funciona e com o getElementsbyClassName Não
    for (let index = 0; index < selecionados.length; index += 1) {
        selecionados[index].remove()
    }
  }
})

oderList.addEventListener('dblclick', (evento) => {
  let alvo = evento.target
  if (alvo.classList.contains('completed')) {
    alvo.classList.remove('completed')
  } else {
    alvo.classList.add('completed');
  }
})