// Requisitos 5 e 6
const getTaskListLo = document.getElementById('lista-tarefas');
const getTextInput = document.getElementById('texto-tarefa');
const clickButton = document.getElementById('criar-tarefa');

// Requisito 7 e 8 - Clicar em um item da lista deve alterar
// a cor de fundo do item para cinza rgb(128,128,128)
// Requisitos 7 e 8: necessário para o Requisito 5, logo deve estar antes dele.
function clickNoLi(event) {
  const removerSelecao = document.querySelector('.selected'); // acesse o PRIMEIRO objeto/elemento que contenha a classe 'selected'... (obs.: lembrando que essa classe existe, mas não foi adicionada a nenhum item da lista (li)).
  if (removerSelecao !== null) { // se algum resultado for encontrado (!== null) dentro de cada item da lista, ou seja,se for encontrado algum objeto/elemento que contenha a classe 'selected'... (obs.: lembrando que a gente sabe que não será encontrado nenhum elemento com essa classe, mas se for, siga...)
    removerSelecao.classList.remove('selected'); // acesse todos os itens da lista e toda e remova a classe 'selected' de todos e...
  }
  event.target.classList.add('selected'); // adicione a classe 'selected' apenas no item da lista que for clicado.
}

// Requisito 9: necessário para o Requisito 5, logo deve estar antes dele.
function clickdoble(event) {
  if (event.target.classList.contains('completed')) { // se esta classe específica (.completed) existir no item/evento que for clicado...
    event.target.classList.remove('completed'); // remova esta classe específica (.completed)...
  } else {
    event.target.classList.add('completed'); // se não houver a classe específica (.completed), adicione esta classe específica.
  }
}

function inputNewTask() {
  clickButton.addEventListener('click', function eventosParaLi() {
    const newLi = document.createElement('li');
    newLi.innerText = getTextInput.value;
    newLi.addEventListener('click', clickNoLi); // evento de clique no li //
    newLi.addEventListener('dblclick', clickdoble); // Requisito 8
    newLi.classList.add('li-estilo');
    getTaskListLo.appendChild(newLi);
    getTextInput.value = '';
  });
}
inputNewTask();

// Requisito 10: botão que apaga tudo
function eventEraseButton() {
  const clickButtonErase = document.getElementById('apaga-tudo'); // requisito 10

  clickButtonErase.addEventListener('click', function eraseButton() { // requisito 10
    const listItems = document.querySelectorAll('.li-estilo');
    for (let index = 0; index < listItems.length; index += 1) {
      const element = listItems[index];
      getTaskListLo.removeChild(element);
    }
  });
}
eventEraseButton();

// Requisito 11: apagar somente os elementos marcados
// como completos.
// EraseCompletedTask
function EraseCompletedTask() {
  const accessFather = document.getElementById('lista-tarefas');
  const accessChild = accessFather.document.querySelectorAll('.completed');
  for (let index = 0; index < accessChild.length; index += 1) {
    const element = accessChild[index];
    getTaskListLo.removeChild(element);
  }
}

function buttonEraseCompleted() {
  const clickEraseCompleted = document.getElementById('remover-finalizados');

  clickEraseCompleted.addEventListener('click', EraseCompletedTask);
}
buttonEraseCompleted();
