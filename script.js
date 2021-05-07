const criar = document.querySelector('#criar-tarefa');
const input = document.querySelector('input#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
let texto = [];

function adcLista() {
  texto = input.value;
  if (texto !== 0) {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = texto;
    lista.appendChild(li);
  }
  input.value = '';
  input.focus();
}

criar.addEventListener('click', adcLista);

document.addEventListener('click', (event) => {
  const alvo = event.target;
  if (alvo.className === 'item') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = '#212121';
    }
    alvo.classList.add('selected');
  }
});

function throughItem(finishItem) {
  const throughIteml = document.querySelector('.through');
  if (throughIteml === null) {
    finishItem.classList.add('through');
  } else if (finishItem.classList.contains('through')) {
    finishItem.classList.remove('through');
  } else {
    finishItem.classList.add('through');
  }
}

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('item')) {
    const getEventElement = event.target;
    throughItem(getEventElement);
  }
});
