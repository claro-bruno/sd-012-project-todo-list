const ol = document.getElementById('lista-tarefas');
const div = document.querySelector('div');
window.onload = function () {
  const addTarefa = document.getElementById('criar-tarefa');
  addTarefa.addEventListener('click', (event) => {
    const input = document.getElementById('texto-tarefa');
    const li = document.createElement('li');
    // console.log(input.value);
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
function clearList() {
  const clearButton = document.querySelector('#apaga-tudo');
  clearButton.addEventListener('click', (event) => {
    while (ol.hasChildNodes()) {
      ol.removeChild(ol.firstChild);
    }
  });
}
clearList();

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
// Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista.
//1- capturar o botão;
const completedRemoveButton = document.querySelector('#remover-finalizados');
//2- capturar os elementos marcados (classe completed);

//3- criar um evento de click para o botão;
completedRemoveButton.addEventListener('click', (event) => {
  const completedElements = document.querySelectorAll('.completed');
  // console.log('Olá') - TESTADO -- O BOTÃO ESTÁ FUNCIONANDO!
  //4- remover os itens com classe completed.
  for (let index = 0; index < completedElements.length; index += 1) {
    ol.removeChild(completedElements[index]);
    }
  });
  