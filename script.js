const input = document.getElementById('texto-tarefa');
const createButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const saveButton = document.getElementById('salvar-tarefas');
const eraseButton = document.getElementById('apaga-tudo');
const rmCompletedsButton = document.getElementById('remover-finalizados');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const rmSelected = document.getElementById('remover-selecionado');
// faz o botao criar uma tarefa
function criarTarefa(texto) {
  if (texto.value !== '') {
    let listItem = document.createElement('li');
    listItem.innerHTML = texto.value;
    orderedList.appendChild(listItem);
    texto.value = '';
  } else { alert('Nenhuma tarefa adicionada!') }
}

createButton.addEventListener('click', () => criarTarefa(input));

// pinta só um de cinza
function clicar128(event) {
  let previous = document.querySelector('.selected');
  if (!previous) { 
    event.target.classList.add('selected') 
  } else if (event.target.classList.contains('selected')){ 
    event.target.classList.remove('selected');
  } else {
    previous.classList.remove('selected');
    event.target.classList.add('selected');
  }
}
orderedList.addEventListener('click', clicar128);

// double click para riscar
function clicarRiscar(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
orderedList.addEventListener('dblclick', clicarRiscar);

// faz botão apagar tudo
function apagaTudo() {
    orderedList.innerHTML = '';
    localStorage.clear();
}
eraseButton.addEventListener('click', apagaTudo);

// apaga tarefas completadas
function removeCompleted() {
    let completed = document.querySelectorAll('.completed');
      for (let i = 0; i < completed.length; i++) {
        completed[i].remove();
      }
    localStorage.clear()
    saveStorage();
}
rmCompletedsButton.addEventListener('click', removeCompleted);

// salva o html da orderedList
function saveStorage() {
    localStorage.setItem('ol', orderedList.innerHTML)
  console.log(localStorage);
}
saveButton.addEventListener('click', saveStorage);

// carrega o html da orderedList salvo na página
window.onload = () => {
  let storage = localStorage.getItem('ol');
  orderedList.innerHTML = storage;
}

function moverCima() {
  let selected = document.querySelector('.selected');
  if (selected) {
    let upElement = selected.previousSibling;
    if (upElement) {
      let copy = document.createElement('li');
      copy.innerHTML = selected.innerHTML;
      copy.classList = selected.classList;
      orderedList.insertBefore(copy, upElement);
      selected.remove();
    }
  }
}
upButton.addEventListener('click', moverCima);

function moverBaixo() {
  let selected = document.querySelector('.selected');
  if (selected) {
    let downElement = selected.nextSibling;
    if (downElement) {
      let copy = document.createElement('li');
      copy.innerHTML = selected.innerHTML;
      copy.classList = selected.classList;
      orderedList.insertBefore(copy, downElement.nextSibling);
      selected.remove();
    }
  }
}
downButton.addEventListener('click', moverBaixo);

function removeSelecionado() {
  let selected = document.querySelector('.selected');
  selected.remove();
}
rmSelected.addEventListener('click', removeSelecionado);