const ol = document.getElementById('lista-tarefas');
const div = document.querySelector('div');

window.onload = function () {
  const addTarefa = document.getElementById('criar-tarefa');
  addTarefa.addEventListener('click', (event) => {
    const input = document.getElementById('texto-tarefa');
    // console.log(input.value);
    const li = document.createElement('li');
    li.classList.add('itemList');
    li.className = 'tarefa';
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
  });
};

document.addEventListener('click', (event) => {
  const item = event.target;
  const tarefaSelecionada = document.querySelector('.tarefaSelecionada');
  if (item.className === 'tarefa') {
    if (tarefaSelecionada !== null) {
      tarefaSelecionada.classList.remove('tarefaSelecionada');
      tarefaSelecionada.style.backgroundColor = '#245,245,211';
    }
    item.classList.add('tarefaSelecionada');
  }
});

function riskList() {
  ol.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
riskList();

//10
// Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

// Capturar o botão;
const clearButton = document.querySelector('#apaga-tudo');

//Criar um escutador de eventos para o botão;
clearButton.addEventListener('click', (event) => {

  //Quando clicado, remover elementos filhos da ol;
  //Capturar os elementos filhos da ol;
  const olChildrens = document.querySelector('#lista-tarefas');
  while (olChildrens.hasChildNodes()) {
    olChildrens.removeChild(olChildrens.firstChild);
  }
});
