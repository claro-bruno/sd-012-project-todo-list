const textoTarefa = document.querySelector('#texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
let texto = '';

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

  listaTarefa.addEventListener('click', (evento) => {
    const clica = evento.target;
    if (clica.className === 'itemDaLista') {
      const clicado = document.querySelector('.mudandoCor');
      if (clicado !== null) {
        clicado.classList.remove('mudandoCor');
      }
      clica.classList.add('mudandoCor');
    }
  });
}
criarTarefa.addEventListener('click', tarefas);

//item resolvido após pesquisa no repositorio do Kevin Oliveira Turma-12, consegui entender a lógica da inserção das classes nesse item
document.body.addEventListener('dblclick', function (event) {
  if (event.target.className === 'completed') {
    event.target.className = 'itemDaLista';
  } else {
    event.target.className = 'completed';
  }
});
