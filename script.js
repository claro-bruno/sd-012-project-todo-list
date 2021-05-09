const btnCriaTarefa = document.getElementById('criar-tarefa');
btnCriaTarefa.innerHTML = 'Adiciona Tarefa';
const inputField = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');

btnCriaTarefa.addEventListener('click', () => {
  const lista = document.createElement('li');
  lista.innerHTML = inputField.value;
  ordList.appendChild(lista);
  inputField.value = '';
  // apagaTudo(); SÓ É USADO SE TIVER A FUNÇÃO DE BAIXO
});

// function apagaTudo() { // FORMA MAIS COMPLICADA DE APAGAR
//   const lista = document.querySelectorAll('li');
//   for (let index = 0; index <= lista.length; index += 1) {
//     const listaFilhos = ordList.childNodes[index];
//     btnApaga.addEventListener('click', () => {
//       listaFilhos.remove();
//     });
//   }
// }
function changeColor(event) {
  if (document.querySelector('.selected') === null) {
    event.target.classList.add('selected');
    document.querySelector('.selected').style.backgroundColor = 'rgb(128, 128, 128)';
  } else {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    document.querySelector('.selected').style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

ordList.addEventListener('click', changeColor);

function taskEnd(event) {
  if (event.target.classList.contains('completed') === false) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
ordList.addEventListener('dblclick', taskEnd);

const btnApaga = document.querySelector('#apaga-tudo');
btnApaga.innerHTML = 'Apagar todos';

function apagaTudo() {
  const lista = document.querySelectorAll('li');
  for (let index = 0; index < lista.length; index += 1) {
    ordList.removeChild(lista[index]);
  }
}
btnApaga.addEventListener('click', apagaTudo);

const btnApagaFinalizados = document.querySelector('#remover-finalizados');
btnApagaFinalizados.innerHTML = 'Apagar Selecionados';

function apagaFinalizados() { // FORMA MAIS SIMPLES DE APAGAR
  const marcadosCinza = document.querySelectorAll('.completed');
  for (let index = 0; index < marcadosCinza.length; index += 1) {
    ordList.removeChild(marcadosCinza[index]);
  }
}
btnApagaFinalizados.addEventListener('click', apagaFinalizados);

const btnSalvaTarefas = document.querySelector('#salvar-tarefas');
btnSalvaTarefas.innerHTML = 'salvar tarefas';

const btnMoveUp = document.querySelector('#mover-cima');
btnMoveUp.innerHTML = 'subir item';

const btnMoveDown = document.querySelector('#mover-baixo');
btnMoveDown.innerHTML = 'descer item';

function moveUp() {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null && itemSelected.previousElementSibling !== null) {
    const novoItem = document.createElement('li');
    novoItem.innerHTML = itemSelected.innerHTML;
    novoItem.className = itemSelected.className;
    novoItem.style.backgroundColor = itemSelected.style.backgroundColor;
    itemSelected.innerHTML = itemSelected.previousElementSibling.innerHTML;
    itemSelected.className = itemSelected.previousElementSibling.className;
    itemSelected.style.backgroundColor = itemSelected.previousElementSibling.style.backgroundColor;
    itemSelected.previousElementSibling.innerHTML = novoItem.innerHTML;
    itemSelected.previousElementSibling.className = novoItem.className;
    itemSelected.previousElementSibling.style.backgroundColor = novoItem.style.backgroundColor;
  }
}

btnMoveUp.addEventListener('click', moveUp);

function moveDown() {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null && itemSelected.nextElementSibling !== null) {
    const novoItem = document.createElement('li');
    novoItem.innerHTML = itemSelected.innerHTML;
    novoItem.className = itemSelected.className;
    novoItem.style.backgroundColor = itemSelected.style.backgroundColor;
    itemSelected.innerHTML = itemSelected.nextElementSibling.innerHTML;
    itemSelected.className = itemSelected.nextElementSibling.className;
    itemSelected.style.backgroundColor = itemSelected.nextElementSibling.style.backgroundColor;
    itemSelected.nextElementSibling.innerHTML = novoItem.innerHTML;
    itemSelected.nextElementSibling.className = novoItem.className;
    itemSelected.nextElementSibling.style.backgroundColor = novoItem.style.backgroundColor;
  }
}

btnMoveDown.addEventListener('click', moveDown);

const btnRemoverSelecionado = document.querySelector('#remover-selecionado');
btnRemoverSelecionado.innerHTML = 'Remover item';

function removerSelecionado() {
  const itemSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < itemSelected.length; index += 1) {
    ordList.removeChild(itemSelected[index]);
  }
}

btnRemoverSelecionado.addEventListener('click', removerSelecionado);

// function salvaTarefas() {
//   const tarefas = document.querySelectorAll('li');
//   localStorage.setItem('tarefas', tarefas);
//   localStorage.getItem('tarefas');
// }
// btnSalvaTarefas.addEventListener('click', salvaTarefas);

// window.onload() = function () {
//   salvaTarefas();
// }
