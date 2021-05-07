const form = document.getElementById('form');
const ol = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');
const botao1 = document.getElementById('apaga-tudo');
const botao2 = document.getElementById('remover-finalizados');

botao.addEventListener('click', (e) => {
  e.preventDefault();

  const input = document.getElementById('texto-tarefa');
  const listaOrganizada = document.createElement('li');
  listaOrganizada.innerHTML = input.value;
  ol.appendChild(listaOrganizada);

  input.value = "";

  listaOrganizada.addEventListener('click', () => {
    listaOrganizada.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  listaOrganizada.addEventListener('dblclick', () => {
    listaOrganizada.classList.toggle('completed');
  });
  ol.appendChild(listaOrganizada);
  input.value = "";
});

botao1.addEventListener('click', () => {
  const removerDaLista = document.querySelectorAll('li');
  ol.remove(removerDaLista);
});

botao2.addEventListener('click', (e) => {
  e.preventDefault()
  const removerFinalizado = document.getElementsByClassName('completed');
  console.log(removerFinalizado);
  ol.remove(removerFinalizado); 
});
