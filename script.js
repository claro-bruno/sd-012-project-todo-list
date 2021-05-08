const textoTarefa = document.querySelector('#texto-tarefa');
let texto = '';
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function tarefas() {
  const itemLista = document.createElement('li');
  itemLista.classList.add('itemDaLista');
  texto = textoTarefa.value;
  itemLista.innerHTML = texto;
  if (texto !== '') {
    listaTarefa.appendChild(itemLista);
    textoTarefa.value = '';
  } else {
    alert('Insira uma tarefa');
  }
}
criarTarefa.addEventListener('click', tarefas);

document.addEventListener('click', (evento) => {
  const clica = evento.target;
  if (clica.className === 'itemDaLista') {
    const clicado = document.querySelector('.mudandoCor');
    if (clicado !== null) {
      clicado.classList.remove('mudandoCor');
    }
    clica.classList.add('mudandoCor');
  }
});

listaTarefa.addEventListener('dblclick', (evento2) => {
    const clicado = evento2.target;
    clicado.classList.add('riscado');
})
