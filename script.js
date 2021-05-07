const tarefa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const listadeTarefa = document.getElementById('lista-tarefas');

function itemSelecionado(event) {
  const poeCor = document.querySelector('.mudaDeCor');
  if (poeCor !== null) {
    poeCor.classList.remove('mudaDeCor');
  }
  event.target.classList.add('mudaDeCor');
}

// cria a lista no hmtl
function criarTarefa() {
  if (tarefa.value !== '') {
    const criaLista = document.createElement('li');
    criaLista.innerText = tarefa.value;
    tarefa.value = '';
    listadeTarefa.appendChild(criaLista);
    criaLista.addEventListener('click', itemSelecionado); /* essa ação vai permitir que ao clicar em algum item da lista ele troque de cor, ativando a função ItemSelecionado */
  }
}
botao.addEventListener('click', criarTarefa);

// cria função para gerar risco na lista 
function riscaLista (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};
// referência do classList : https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList 
// https://www.w3schools.com/jsref/prop_element_classlist.asp