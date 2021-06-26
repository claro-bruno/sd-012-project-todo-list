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

ol.addEventListener('click', (event) => {
  const item = event.target;
  const tarefaSelecionada = document.querySelector('.tarefaSelecionada');
  item.classList.toggle('tarefaSelecionada');
  if (tarefaSelecionada !== null) {
    tarefaSelecionada.classList.remove('tarefaSelecionada');
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


//13
// Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
//  Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo - ok
// Capturar o ítem selecionado na lista (clase? event target?)
// Como mover um ítem de lugar em uma lista? (nextSibling? )
// Capturar botão de mover pra cima - ok
// Adicionar um escutador de eventos
const btMoveUp = document.querySelector('#mover-cima');
btMoveUp.addEventListener('click', (event) => {
  // se o elemento selecionado for igual ao firtChild da ol não ative o botão
  const itemSelected = document.querySelector('.tarefaSelecionada');
  if (itemSelected === null) {
    return alert('Não foi possível realizar esta ação. Por favor, selecione um item.');
  } else if (itemSelected !== ol.firstChild) {
    // Capturar o elemento selecionado -ok
    // Capturar o proximo irmão anterior
    const irmaoPrevious = document.querySelector('.tarefaSelecionada').previousSibling;
    // move para antes do irmão anterior
    irmaoPrevious.insertAdjacentElement('beforebegin', itemSelected);
  } else {
    alert(`${itemSelected.innerHTML} já está na primeira posição`);
  }
});
const btMoveDown = document.querySelector('#mover-baixo');
btMoveDown.addEventListener('click', (event) => {
  // Capturar o elemento selecionado -ok
  const itemSelected = document.querySelector('.tarefaSelecionada');
  if (itemSelected === null) {
    return alert('Não foi possível realizar esta ação. Por favor, selecione um item.');
  } else if (itemSelected !== ol.lastChild) {
    // Capturar o proximo irmão
    const irmaoSelect = document.querySelector('.tarefaSelecionada').nextSibling;
    // console.log(irmaoSelect);
    // move para o proximo
    irmaoSelect.insertAdjacentElement('afterend', itemSelected);
  } else {
    alert(`${itemSelected.innerHTML} já está na última posição`);
  }
});
