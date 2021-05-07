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
    for (let index = 0; index < listaOrganizada.length; index += 1) {
      const select = document.querySelector('.selected');
      if (select != null) {
        listaOrganizada.classList.remove('selected');
      }
      listaOrganizada.classList.add('selected');
    }
  });

  listaOrganizada.addEventListener('dblclick', () => {
    listaOrganizada.classList.toggle('completed');
  });
  ol.appendChild(listaOrganizada);
  input.value = "";
});

botao1.addEventListener('click', (e) => {
  e.preventDefault();
  ol.innerHTML = '';
});

botao2.addEventListener("click", (e) => {
  e.preventDefault();
  const toRemove = document.getElementsByClassName('completed');
  for (let index = 0; index < toRemove.length; index += 1) {
    toRemove[index].parentNode.removeChild(toRemove[index])};
  });
