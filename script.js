// Requisito 7 e 8 - Clicar em um item da lista deve alterar
// a cor de fundo do item para cinza rgb(128,128,128)
// Requisitos 7 e 8: necessário para o Requisito 5, logo deve estar antes dele.
function clickNoLi(event) {
  const removerSelecao = document.querySelector('.selected');
  if (removerSelecao !== null) {
    removerSelecao.classList.remove('selected');
  }
  
  event.target.classList.add('selected');
}
// Requisito 9: necessário para o Requisito 5, logo deve estar antes dele.
function clickdoble(event) {
  const removeCliqueDuplo = document.querySelector('.completed'); // esta classe só está declarada no css.
  if (removeCliqueDuplo !== null) { // se houver esta classe específica (.completed)... 
    removeCliqueDuplo.classList.remove('completed'); // remova esta classe específica (.completed)...
  } else {
    event.target.classList.add('completed'); // se não houver a classe específica (.completed), adicione esta classe específica.
  } // somente o objeto clicado receberá a classe 'completed'.
}
// Requisitos 5 e 6
function inputNewTask() {
  const getTextInput = document.getElementById('texto-tarefa');
  const clickButton = document.getElementById('criar-tarefa');
  const getTaskListLo = document.getElementById('lista-tarefas');

  clickButton.addEventListener ('click', function () {
    const newLi = document.createElement('li');
    newLi.innerText = getTextInput.value;
    newLi.addEventListener('click', clickNoLi); // evento de clique no li
    newLi.addEventListener('dblclick', clickdoble); // Requisito 8
    newLi.classList.add('li-estilo');
    getTaskListLo.appendChild(newLi);
    getTextInput.value = '';
  });
}
inputNewTask();
// Requisito 7 e 8 - Clicar em um item da lista deve alterar
// a cor de fundo do item para cinza rgb(128,128,128)
// Requisitos 7 e 8: necessário para o Requisito 5, logo deve estar antes dele.
function clickNoLi(event) {
  const removerSelecao = document.querySelector('.selected');
  if (removerSelecao !== null) {
    removerSelecao.classList.remove('selected');
  }
  
  event.target.classList.add('selected');
}
// Requisito 9: necessário para o Requisito 5, logo deve estar antes dele.
function clickdoble(event) {
  const removeCliqueDuplo = document.querySelector('.completed'); // esta classe só está declarada no css.
  if (removeCliqueDuplo !== null) { // se houver esta classe específica (.completed)... 
    removeCliqueDuplo.classList.remove('completed'); // remova esta classe específica (.completed)...
  } else {
    event.target.classList.add('completed'); // se não houver a classe específica (.completed), adicione esta classe específica.
  } // somente o objeto clicado receberá a classe 'completed'.
}
// Requisito 10