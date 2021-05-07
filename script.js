const criaTarefaButton = document.getElementById('criar-tarefa');
const oderList = document.getElementById('lista-tarefas');
const buttonApaga = document.getElementById('apaga-tudo');
const finishied = document.getElementById('remover-finalizados');
const listali = document.getElementsByClassName('item-list');

document.addEventListener('click', (event) => {
  const alvo = event.target;
  if (alvo.className === 'item-list') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white';
    }
    alvo.classList.add ('selected');
  }
});

function criaTarefa() {
  const inputText = document.getElementById('texto-tarefa');
  const lista = document.createElement('li');
  lista.className = 'item-list';
  lista.innerText = inputText.value;
  oderList.appendChild(lista);
  inputText.value = '';
}
criaTarefaButton.addEventListener('click', criaTarefa);

function eraseAll() {
  oderList.innerHTML = '';
}
buttonApaga.addEventListener('click', eraseAll);

function removeDone() {
  let selecionados = document.querySelectorAll('.completed') // descobrir por que que com o querySelectorAll funciona e com o getElementsbyClassName Não
  for (let index = 0; index < selecionados.length; index += 1) {
      selecionados[index].remove();
  }
}
finishied.addEventListener('click', removeDone)

function doneMarker(evento) {
  let alvo = evento.target
  if (alvo.classList.contains('completed')) {
    alvo.classList.remove('completed')
  } else {
    alvo.classList.add('completed');
  }
}
oderList.addEventListener('dblclick', doneMarker)
