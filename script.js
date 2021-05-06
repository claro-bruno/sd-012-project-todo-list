const criar = document.querySelector('#criar-tarefa');
const input = document.querySelector('input#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
let texto = [];

function adcLista() {
  texto = input.value;
  if (texto !== 0) {
    const li = document.createElement('li');
    lista.appendChild(li);
    li.innerHTML = texto;
    lista.appendChild(li);
  }
  input.value = '';
  input.focus();
}

criar.addEventListener('click', adcLista);
